/**
 * Flexon Sports Foundation - Private Operational Dashboard
 * Authority: Blueprint v2.0 Section 16
 * 
 * Features:
 * - View real-time enquiries, volunteer registrations, and collaboration briefs
 * - Filter by status (New, Assigned, In Progress, Resolved) and type
 * - View chat conversation transcripts linked to enquiries
 * - Update status, assignees, and add internal notes
 * - Audit log for user consent timestamps and notice versions
 */

import { FlexonDB } from "../server/db.js";

export function renderAdminDashboardPage() {
  const container = document.createElement("div");
  container.className = "page-admin-dashboard";

  let filterStatus = "all";
  let filterType = "all";

  function getEnquiries() {
    return FlexonDB.getAllEnquiries(filterStatus, filterType);
  }

  const allRecords = FlexonDB.getAllEnquiries("all", "all");
  const newCount = allRecords.filter(r => r.status === "New").length;
  const inProgressCount = allRecords.filter(r => r.status === "In Progress" || r.status === "Assigned").length;
  const resolvedCount = allRecords.filter(r => r.status === "Resolved").length;

  container.innerHTML = `
    <!-- Admin Hero -->
    <section class="page-hero bg-surface">
      <div class="container text-center max-w-reading">
        <div class="page-hero-pills">
          <span class="hero-live-pill"><span class="live-dot" style="background:#10b981;"></span> SECURE STAFF OPERATIONS</span>
          <span class="hero-sdg-tag">TRIAGE & LEDGER CONSOLE</span>
          <span class="hero-sdg-tag">AUDIT LOG READY</span>
        </div>
        <h1 class="page-title">Foundation Operational <span class="text-gradient-red">Ledger</span></h1>
        <p class="hero-lead">
          Internal triage console for tracking community enquiries, youth camp guardian contacts, volunteer registrations, and institutional collaboration briefs.
        </p>
      </div>
    </section>

    <!-- Page Metrics Ribbon -->
    <div class="page-metrics-ribbon">
      <div class="page-metric-item">
        <span class="metric-num" id="admin-total-metric">${allRecords.length}</span>
        <span class="metric-lbl">Total Ledger Records</span>
      </div>
      <div class="page-metric-item">
        <span class="metric-num" id="admin-new-metric" style="color: var(--color-primary, #dc2626);">${newCount}</span>
        <span class="metric-lbl">New Triage Inquiries</span>
      </div>
      <div class="page-metric-item">
        <span class="metric-num" id="admin-prog-metric" style="color: #f59e0b;">${inProgressCount}</span>
        <span class="metric-lbl">In Progress / Assigned</span>
      </div>
      <div class="page-metric-item">
        <span class="metric-num" id="admin-res-metric" style="color: #10b981;">${resolvedCount}</span>
        <span class="metric-lbl">Resolved Inquiries</span>
      </div>
    </div>

    <!-- Operational Controls & Table -->
    <section class="section section-admin-ledger py-5">
      <div class="container">
        <!-- Filter Controls -->
        <div class="card p-3 shadow-sm mb-4 bg-surface" style="border-top: 3px solid var(--color-primary, #dc2626);">
          <div class="d-flex flex-wrap gap-3 align-center justify-between">
            <div class="d-flex flex-wrap gap-3 align-center">
              <div>
                <label for="admin-filter-status" class="text-xs text-muted font-weight-bold d-block mb-1">Status Filter:</label>
                <select id="admin-filter-status" class="form-select-sm form-control" style="font-size: 0.875rem; padding: 0.4rem 0.75rem;">
                  <option value="all">All Statuses</option>
                  <option value="New">New</option>
                  <option value="Assigned">Assigned</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </div>

              <div>
                <label for="admin-filter-type" class="text-xs text-muted font-weight-bold d-block mb-1">Type Filter:</label>
                <select id="admin-filter-type" class="form-select-sm form-control" style="font-size: 0.875rem; padding: 0.4rem 0.75rem;">
                  <option value="all">All Channels</option>
                  <option value="football_camp">Football Camp (Guardian)</option>
                  <option value="collaboration">Partnership / Brief</option>
                  <option value="volunteering">Volunteer Registration</option>
                  <option value="donation">Donation Support</option>
                  <option value="kochi_interest">Kochi Pre-Registration</option>
                  <option value="general">General Contact</option>
                </select>
              </div>
            </div>

            <div class="ml-auto">
              <span class="badge badge-subtle font-mono" id="admin-count-display">Showing ${allRecords.length} records</span>
            </div>
          </div>
        </div>

        <!-- Enquiries Table -->
        <div class="card shadow-sm table-responsive">
          <table class="admin-table" id="admin-table">
            <thead>
              <tr>
                <th>Reference</th>
                <th>Source / Type</th>
                <th>Contact Name</th>
                <th>Email / Phone</th>
                <th>City</th>
                <th>Message Summary</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="admin-table-body">
              <!-- Dynamically populated -->
            </tbody>
          </table>
        </div>

        <!-- Detail Modal for Transcript / Notes (Hidden by default) -->
        <div class="admin-modal" id="admin-detail-modal" style="display: none;">
          <div class="admin-modal-backdrop"></div>
          <div class="admin-modal-card card p-4 shadow-lg" style="border-top: 4px solid var(--color-primary, #dc2626); max-width: 600px; width: 90%;">
            <div class="d-flex justify-between align-center mb-3">
              <h3 class="card-title mb-0" id="modal-ref-title">Enquiry Details</h3>
              <button class="btn btn-ghost btn-sm" id="close-admin-modal-btn" style="font-size: 1.25rem;">&times;</button>
            </div>
            
            <div id="modal-details-content">
              <!-- Populated when an enquiry row is selected -->
            </div>

            <div class="admin-modal-actions mt-4 pt-3 border-top d-flex flex-wrap gap-2">
              <button class="btn btn-primary btn-sm" id="modal-mark-resolved-btn">Mark as Resolved ✓</button>
              <button class="btn btn-outline btn-sm" id="modal-mark-inprogress-btn">Mark In Progress ⏳</button>
              <button class="btn btn-ghost btn-sm ml-auto" id="modal-close-action-btn">Close</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;

  // Render table rows
  function renderTableRows() {
    const tableBody = container.querySelector("#admin-table-body");
    const countDisplay = container.querySelector("#admin-count-display");
    const items = getEnquiries();

    countDisplay.textContent = `Showing ${items.length} records`;

    if (items.length === 0) {
      tableBody.innerHTML = `
        <tr>
          <td colspan="8" class="text-center text-muted py-4">
            No enquiry records match the selected filters.
          </td>
        </tr>
      `;
      return;
    }

    tableBody.innerHTML = items.map(item => `
      <tr class="admin-row">
        <td><strong class="font-mono text-primary">${item.reference}</strong></td>
        <td>
          <span class="badge badge-subtle">${item.source}</span>
          <span class="text-xs d-block text-muted">${item.type}</span>
        </td>
        <td><strong>${item.name}</strong></td>
        <td class="text-xs">
          ${item.email ? `<div>✉️ ${item.email}</div>` : ""}
          ${item.phone ? `<div>📞 ${item.phone}</div>` : ""}
        </td>
        <td>${item.city || "—"}</td>
        <td class="text-xs text-muted max-w-xs truncate">${item.message || "—"}</td>
        <td>
          <span class="badge badge-status-${item.status.toLowerCase().replace(/\s+/g, '-')}">${item.status}</span>
        </td>
        <td>
          <button class="btn btn-outline btn-xs view-detail-btn" data-ref="${item.reference}">View</button>
        </td>
      </tr>
    `).join("");

    // Wire up detail buttons
    tableBody.querySelectorAll(".view-detail-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const ref = btn.getAttribute("data-ref");
        openDetailModal(ref);
      });
    });
  }

  // Open Detail / Transcript Modal
  const modal = container.querySelector("#admin-detail-modal");
  const modalTitle = container.querySelector("#modal-ref-title");
  const modalContent = container.querySelector("#modal-details-content");
  const closeBtn = container.querySelector("#close-admin-modal-btn");
  const closeActionBtn = container.querySelector("#modal-close-action-btn");
  const resolvedBtn = container.querySelector("#modal-mark-resolved-btn");
  const inProgressBtn = container.querySelector("#modal-mark-inprogress-btn");

  let activeRef = null;

  function openDetailModal(ref) {
    activeRef = ref;
    const items = FlexonDB.getAllEnquiries();
    const item = items.find(i => i.reference === ref);
    if (!item) return;

    modalTitle.textContent = `Enquiry Record: ${item.reference}`;

    let transcriptHtml = "";
    if (item.conversationId) {
      const convData = FlexonDB.getConversationDetails(item.conversationId);
      if (convData && convData.messages.length > 0) {
        transcriptHtml = `
          <div class="mt-3 p-3 bg-surface border rounded">
            <h4 class="text-xs font-weight-bold text-primary mb-2">Saved Chat Transcript (Notice v${convData.consent?.noticeVersion || '2.0'}):</h4>
            <div class="transcript-scroll" style="max-height: 180px; overflow-y: auto; font-size: 13px;">
              ${convData.messages.map(m => `
                <div class="mb-1">
                  <strong>${m.role === 'user' ? 'Visitor' : 'Assistant'}:</strong> ${m.text}
                </div>
              `).join("")}
            </div>
          </div>
        `;
      }
    }

    modalContent.innerHTML = `
      <div class="admin-detail-summary">
        <p class="mb-1"><strong>Name:</strong> ${item.name} ${item.organization ? `(${item.organization})` : ""}</p>
        <p class="mb-1"><strong>Contact:</strong> ${item.email || "No email"} • ${item.phone || "No phone"}</p>
        <p class="mb-1"><strong>Location:</strong> ${item.city || "Not provided"}</p>
        <p class="mb-1"><strong>Submitted:</strong> ${new Date(item.createdAt).toLocaleString()}</p>
        <p class="mb-2"><strong>Current Status:</strong> <span class="badge badge-subtle">${item.status}</span></p>
        
        <div class="mt-3 p-3 bg-surface rounded" style="border-left: 3px solid var(--color-primary, #dc2626);">
          <strong>Enquiry Note / Message:</strong>
          <p class="text-sm mt-1 mb-0">${item.message}</p>
        </div>

        ${transcriptHtml}
      </div>
    `;

    modal.style.display = "flex";
  }

  function closeModal() {
    modal.style.display = "none";
    activeRef = null;
  }

  closeBtn.addEventListener("click", closeModal);
  closeActionBtn.addEventListener("click", closeModal);
  modal.querySelector(".admin-modal-backdrop").addEventListener("click", closeModal);

  resolvedBtn.addEventListener("click", () => {
    if (activeRef) {
      FlexonDB.updateEnquiryStatus(activeRef, "Resolved", "Resolved by staff via operational dashboard.");
      renderTableRows();
      closeModal();
    }
  });

  inProgressBtn.addEventListener("click", () => {
    if (activeRef) {
      FlexonDB.updateEnquiryStatus(activeRef, "In Progress", "Status set to In Progress for follow-up.");
      renderTableRows();
      closeModal();
    }
  });

  // Wire up filter selects
  container.querySelector("#admin-filter-status").addEventListener("change", (e) => {
    filterStatus = e.target.value;
    renderTableRows();
  });

  container.querySelector("#admin-filter-type").addEventListener("change", (e) => {
    filterType = e.target.value;
    renderTableRows();
  });

  renderTableRows();
  return container;
}
