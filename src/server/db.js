/**
 * Flexon Sports Foundation - Server Persistence & Mock Backend Engine
 * Authority: Blueprint v2.0 Sections 14, 15, 16
 * 
 * Provides robust simulation of:
 * - Session handling and notice/consent management
 * - Immutable message logs and conversation state
 * - Enquiry processing with unpredictable references (FLX-2026-XXXXX)
 * - Collaboration briefs, volunteer registrations, and donation enquiries
 * - Operational dashboard data queries and status updates
 */

const STORAGE_KEYS = {
  SESSIONS: "flexon_sessions",
  CONVERSATIONS: "flexon_conversations",
  MESSAGES: "flexon_messages",
  ENQUIRIES: "flexon_enquiries",
  CONSENT_LOG: "flexon_consent_log",
  COLLABORATIONS: "flexon_collaborations",
  VOLUNTEERS: "flexon_volunteers",
  DONATION_ENQUIRIES: "flexon_donation_enquiries"
};

/**
 * Safe local storage reader
 */
function readStorage(key, fallback = []) {
  try {
    if (typeof window === "undefined" || typeof localStorage === "undefined") return fallback;
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (err) {
    console.warn(`[FlexonDB] Storage read error on ${key}:`, err);
    return fallback;
  }
}

/**
 * Safe local storage writer
 */
function writeStorage(key, data) {
  try {
    if (typeof window === "undefined" || typeof localStorage === "undefined") return;
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.error(`[FlexonDB] Storage write error on ${key}:`, err);
  }
}

/**
 * Generate unpredictable public reference: FLX-2026-XXXXX
 */
export function generateReference(prefix = "FLX-2026") {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let randomPart = "";
  for (let i = 0; i < 5; i++) {
    randomPart += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `${prefix}-${randomPart}`;
}

export const FlexonDB = {
  /**
   * Start a chat session after explicit user consent
   * POST /api/chat/sessions
   */
  startChatSession(noticeVersion = "2.0", consentGiven = true) {
    const sessionId = "sess_" + Math.random().toString(36).substring(2, 12);
    const conversationId = "conv_" + Math.random().toString(36).substring(2, 12);
    const timestamp = new Date().toISOString();

    // 1. Record Consent Event
    const consents = readStorage(STORAGE_KEYS.CONSENT_LOG);
    consents.push({
      id: "cst_" + Math.random().toString(36).substring(2, 9),
      sessionId,
      conversationId,
      purpose: "chat_conversation_recording",
      noticeVersion,
      action: consentGiven ? "accepted" : "declined",
      timestamp,
      source: "ask_flexon_widget"
    });
    writeStorage(STORAGE_KEYS.CONSENT_LOG, consents);

    // 2. Record Conversation Record
    const conversations = readStorage(STORAGE_KEYS.CONVERSATIONS);
    const newConv = {
      id: conversationId,
      sessionId,
      created: timestamp,
      lastActive: timestamp,
      intent: "general_inquiry",
      serviceNeed: null,
      initiative: null,
      city: null,
      contactRequested: false,
      status: "active",
      noticeVersion
    };
    conversations.push(newConv);
    writeStorage(STORAGE_KEYS.CONVERSATIONS, conversations);

    return {
      sessionId,
      conversationId,
      status: "ready",
      noticeVersion
    };
  },

  /**
   * Append a message to a conversation
   * POST /api/chat/messages
   */
  saveMessage(conversationId, role, text, clientMsgId = null) {
    const messages = readStorage(STORAGE_KEYS.MESSAGES);
    const timestamp = new Date().toISOString();

    const msg = {
      id: "msg_" + Math.random().toString(36).substring(2, 10),
      clientMsgId: clientMsgId || "c_" + Date.now(),
      conversationId,
      role, // 'user' | 'assistant' | 'system'
      text,
      created: timestamp
    };

    messages.push(msg);
    writeStorage(STORAGE_KEYS.MESSAGES, messages);

    // Update conversation lastActive
    const conversations = readStorage(STORAGE_KEYS.CONVERSATIONS);
    const conv = conversations.find(c => c.id === conversationId);
    if (conv) {
      conv.lastActive = timestamp;
      writeStorage(STORAGE_KEYS.CONVERSATIONS, conversations);
    }

    return msg;
  },

  /**
   * Get all messages for an authorized conversation
   * GET /api/chat/session
   */
  getConversationMessages(conversationId) {
    const messages = readStorage(STORAGE_KEYS.MESSAGES);
    return messages.filter(m => m.conversationId === conversationId);
  },

  /**
   * Submit an Enquiry (from Chat or Forms)
   * POST /api/enquiries or POST /api/chat/enquiry
   */
  createEnquiry({
    source = "web_form", // 'chat' | 'contact_form' | 'collaboration' | 'volunteer' | 'camp'
    type = "general",
    initiative = null,
    name,
    email = null,
    phone = null,
    organization = null,
    city = null,
    ageBand = null,
    message = "",
    conversationId = null
  }) {
    const enquiries = readStorage(STORAGE_KEYS.ENQUIRIES);
    const reference = generateReference();
    const timestamp = new Date().toISOString();

    const record = {
      id: "enq_" + Math.random().toString(36).substring(2, 11),
      reference,
      source,
      type,
      initiative,
      name: name?.trim() || "Visitor",
      email: email?.trim() || null,
      phone: phone?.trim() || null,
      organization: organization?.trim() || null,
      city: city?.trim() || null,
      ageBand: ageBand || null,
      message: message?.trim() || "",
      conversationId,
      status: "New", // 'New' | 'Assigned' | 'In Progress' | 'Resolved'
      assignee: "Unassigned",
      internalNotes: [],
      createdAt: timestamp,
      updatedAt: timestamp
    };

    enquiries.unshift(record);
    writeStorage(STORAGE_KEYS.ENQUIRIES, enquiries);

    return {
      success: true,
      reference,
      status: "New",
      message: "Enquiry successfully recorded in the foundation ledger."
    };
  },

  /**
   * Submit a Volunteer Registration
   */
  registerVolunteer({ name, email, phone, city, availability, skills, areasOfInterest }) {
    const volunteers = readStorage(STORAGE_KEYS.VOLUNTEERS);
    const reference = generateReference("FLX-VOL");
    const timestamp = new Date().toISOString();

    const entry = {
      id: "vol_" + Math.random().toString(36).substring(2, 11),
      reference,
      name,
      email,
      phone,
      city,
      availability,
      skills,
      areasOfInterest,
      status: "New",
      createdAt: timestamp
    };

    volunteers.unshift(entry);
    writeStorage(STORAGE_KEYS.VOLUNTEERS, volunteers);

    // Also mirror to enquiries ledger for staff triage
    this.createEnquiry({
      source: "volunteer_form",
      type: "volunteering",
      name,
      email,
      phone,
      city,
      message: `Volunteer registration. Availability: ${availability}. Skills: ${skills}. Focus: ${areasOfInterest}`
    });

    return { success: true, reference };
  },

  /**
   * Submit a Collaboration / Partnership Brief
   */
  submitCollaborationBrief({
    name,
    organization,
    workEmail,
    phone,
    city,
    collaborationType,
    programmeInterest,
    groupSize,
    desiredPeriod,
    summary
  }) {
    const collabs = readStorage(STORAGE_KEYS.COLLABORATIONS);
    const reference = generateReference("FLX-PRT");
    const timestamp = new Date().toISOString();

    const entry = {
      id: "collab_" + Math.random().toString(36).substring(2, 11),
      reference,
      name,
      organization,
      workEmail,
      phone,
      city,
      collaborationType,
      programmeInterest,
      groupSize,
      desiredPeriod,
      summary,
      status: "New",
      createdAt: timestamp
    };

    collabs.unshift(entry);
    writeStorage(STORAGE_KEYS.COLLABORATIONS, collabs);

    // Mirror to enquiries
    this.createEnquiry({
      source: "partnership_form",
      type: "collaboration",
      initiative: programmeInterest,
      name,
      organization,
      email: workEmail,
      phone,
      city,
      message: `Collaboration Type: ${collaborationType}. Approximate Size: ${groupSize || "N/A"}. Period: ${desiredPeriod || "N/A"}. Summary: ${summary}`
    });

    return { success: true, reference };
  },

  /**
   * Record a Donation Enquiry (Mode A)
   */
  recordDonationEnquiry({ name, email, phone, city, proposedSupport, message }) {
    const donations = readStorage(STORAGE_KEYS.DONATION_ENQUIRIES);
    const reference = generateReference("FLX-DON");
    const timestamp = new Date().toISOString();

    const entry = {
      id: "don_" + Math.random().toString(36).substring(2, 11),
      reference,
      name,
      email,
      phone,
      city,
      proposedSupport,
      message,
      status: "Enquiry Received",
      createdAt: timestamp
    };

    donations.unshift(entry);
    writeStorage(STORAGE_KEYS.DONATION_ENQUIRIES, donations);

    this.createEnquiry({
      source: "donation_form",
      type: "donation",
      name,
      email,
      phone,
      city,
      message: `Donation support enquiry: ${proposedSupport}. Details: ${message}`
    });

    return { success: true, reference };
  },

  /**
   * Admin operations: Read all enquiries with optional filters
   */
  getAllEnquiries(filterStatus = null, filterType = null) {
    let enquiries = readStorage(STORAGE_KEYS.ENQUIRIES);
    if (filterStatus && filterStatus !== "all") {
      enquiries = enquiries.filter(e => e.status.toLowerCase() === filterStatus.toLowerCase());
    }
    if (filterType && filterType !== "all") {
      enquiries = enquiries.filter(e => e.type.toLowerCase() === filterType.toLowerCase());
    }
    return enquiries;
  },

  /**
   * Admin operations: Update status and add internal note
   */
  updateEnquiryStatus(reference, newStatus, internalNote = null, assignee = null) {
    const enquiries = readStorage(STORAGE_KEYS.ENQUIRIES);
    const item = enquiries.find(e => e.reference === reference);
    if (!item) return false;

    item.status = newStatus;
    item.updatedAt = new Date().toISOString();
    if (assignee) item.assignee = assignee;
    if (internalNote) {
      item.internalNotes.push({
        text: internalNote,
        timestamp: new Date().toISOString()
      });
    }

    writeStorage(STORAGE_KEYS.ENQUIRIES, enquiries);
    return true;
  },

  /**
   * Admin operations: Get conversation transcript and consent
   */
  getConversationDetails(conversationId) {
    const conversations = readStorage(STORAGE_KEYS.CONVERSATIONS);
    const messages = readStorage(STORAGE_KEYS.MESSAGES);
    const consents = readStorage(STORAGE_KEYS.CONSENT_LOG);

    const conv = conversations.find(c => c.id === conversationId);
    const msgs = messages.filter(m => m.conversationId === conversationId);
    const consent = consents.find(c => c.conversationId === conversationId);

    return {
      conversation: conv,
      messages: msgs,
      consent
    };
  },

  /**
   * Seed Initial Operational Enquiries if empty (to showcase dashboard functionality)
   */
  seedInitialDataIfEmpty() {
    const existing = readStorage(STORAGE_KEYS.ENQUIRIES);
    if (existing.length === 0) {
      this.createEnquiry({
        source: "web_form",
        type: "school_meet",
        initiative: "School & College Sports Meets",
        name: "Principal Rajesh Kumar",
        organization: "Kendriya Vidyalaya Kochi",
        email: "kvkochi.sports@example.org",
        phone: "+91 94471 23456",
        city: "Kochi",
        message: "Inquiring about institutional partnership for an inter-school 5K youth athletic meet in January 2027."
      });

      this.createEnquiry({
        source: "camp_form",
        type: "football_camp",
        initiative: "Empower Youth Football Camp",
        name: "Anil Varghese",
        email: "anil.varghese@example.com",
        phone: "+91 98460 88214",
        city: "Perumbavoor",
        ageBand: "10-12",
        message: "Parent enquiry regarding weekend batch availability for my 11-year-old son in the Empower Youth football coaching camp."
      });

      this.createEnquiry({
        source: "chat",
        type: "running",
        initiative: "FLEXATHON",
        name: "Sunitha Rao",
        email: "sunitha.rao@example.com",
        phone: "+91 97011 55667",
        city: "Hyderabad",
        message: "Attended Hyderabad 2026 5K run. Requesting information on high-resolution event photographs for our running group."
      });
    }
  }
};

// Seed sample data on initialization
if (typeof window !== "undefined") FlexonDB.seedInitialDataIfEmpty();
