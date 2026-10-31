/**
 * Flexon Sports Foundation - Volunteer Interest Registration Page
 * Authority: Blueprint v2.0 Section 12
 */

import { FlexonDB } from "../server/db.js";

export function renderVolunteerPage() {
  const container = document.createElement("div");
  container.className = "page-volunteer";

  container.innerHTML = `
    <!-- Hero -->
    <section class="page-hero bg-surface" id="vol-hero">
      <div class="container text-center">
        <div class="page-hero-pills">
          <span class="hero-live-pill">
            <span class="live-dot" aria-hidden="true"></span>
            COMMUNITY VOLUNTEERING
          </span>
          <span class="hero-sdg-tag">🎽 EVENT CREW & MENTORS</span>
          <span class="hero-sdg-tag">SAFEGUARDED WORKFLOWS</span>
        </div>

        <h1 class="page-title">
          GIVE YOUR TIME.<br />
          <span class="text-gradient-red">CHAMPION GRASSROOTS SPORTS</span>
        </h1>

        <p class="hero-lead">
          Join our dedicated race crew and grassroots sports mentors. Register your interest, location, and availability to receive event briefing calls and volunteer assignments.
        </p>

        <div class="page-hero-actions">
          <a href="#volunteer-form-section" class="btn btn-primary btn-lg">
            <span>Register as a Volunteer</span>
            <span class="btn-arrow" aria-hidden="true">↓</span>
          </a>
          <a href="#volunteer-roles" class="btn btn-outline btn-lg">
            <span>Explore Volunteer Roles</span>
          </a>
        </div>

        <!-- Metric Ribbon -->
        <div class="page-metrics-ribbon">
          <div class="page-metric-item">
            <span class="page-metric-val">Event Crew</span>
            <span class="page-metric-label">Race Day Marshals</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Support</span>
            <span class="page-metric-label">Hydration & Medical</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Coaching</span>
            <span class="page-metric-label">Youth Camp Assistants</span>
          </div>
          <div class="page-metric-item">
            <span class="page-metric-val">Certificates</span>
            <span class="page-metric-label">Volunteer Recognition</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Roles & Responsibilities -->
    <section class="section section-vol-roles" id="volunteer-roles">
      <div class="container">
        <div class="section-header text-center max-w-reading mx-auto mb-4">
          <span class="section-eyebrow">VOLUNTEER ROLES</span>
          <h2 class="section-title">Where You Can Make a Difference</h2>
          <p class="section-body">Roles depend on programme needs, event locations, and applicable safeguarding briefings.</p>
        </div>

        <div class="initiatives-bar-grid mt-4">
          <div class="card p-4 shadow-sm" style="border-top: 4px solid var(--color-red);">
            <div class="path-icon mb-2" style="font-size: 2.2rem;">🎽</div>
            <h3 class="card-title font-weight-bold" style="font-size: 1.3rem;">Race Day Marshals</h3>
            <p class="text-sm text-muted mt-2" style="line-height: 1.6;">
              Route stewarding, runner navigation, start/finish line coordination, and crowd guidance at FLEXATHON city editions.
            </p>
          </div>

          <div class="card p-4 shadow-sm" style="border-top: 4px solid #16A34A;">
            <div class="path-icon mb-2" style="font-size: 2.2rem;">💧</div>
            <h3 class="card-title font-weight-bold" style="font-size: 1.3rem;">Hydration & Support</h3>
            <p class="text-sm text-muted mt-2" style="line-height: 1.6;">
              Managing water stations, energy drink points, medical response handoffs, and eco-friendly clean-up operations on the course.
            </p>
          </div>

          <div class="card p-4 shadow-sm" style="border-top: 4px solid #2563EB;">
            <div class="path-icon mb-2" style="font-size: 2.2rem;">⚽</div>
            <h3 class="card-title font-weight-bold" style="font-size: 1.3rem;">Community Sports Support</h3>
            <p class="text-sm text-muted mt-2" style="line-height: 1.6;">
              Assisting certified coaches at youth football camps, scorekeeping at cricket matches, and organizing sports gear.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Volunteer Registration Form -->
    <section class="section section-vol-form bg-surface" id="volunteer-form-section">
      <div class="container max-w-reading">
        <div class="card p-4 shadow-lg border" style="border-top: 4px solid var(--color-red);">
          <div class="text-center mb-4">
            <span class="section-eyebrow">REGISTRATION FORM</span>
            <h2 class="card-title" style="font-size: 1.75rem;">Join as a Volunteer</h2>
            <p class="text-sm text-muted mt-1">
              Volunteers must be aged 18 or above (or accompanied by guardian consent). Submit your availability below.
            </p>
          </div>

          <form id="volunteer-reg-form" class="enquiry-form">
            <div class="form-group">
              <label for="vol-name" class="form-label">Full Name *</label>
              <input type="text" id="vol-name" class="form-control" placeholder="Your full legal name" required />
            </div>

            <div class="form-row">
              <div class="form-group col-half">
                <label for="vol-email" class="form-label">Email Address *</label>
                <input type="email" id="vol-email" class="form-control" placeholder="name@example.com" required />
              </div>
              <div class="form-group col-half">
                <label for="vol-phone" class="form-label">Phone Number *</label>
                <input type="tel" id="vol-phone" class="form-control" placeholder="+91 98765 43210" required />
              </div>
            </div>

            <div class="form-row">
              <div class="form-group col-half">
                <label for="vol-city" class="form-label">City / Home Town *</label>
                <input type="text" id="vol-city" class="form-control" placeholder="e.g. Kochi, Hyderabad, Thrissur" required />
              </div>
              <div class="form-group col-half">
                <label for="vol-availability" class="form-label">Availability *</label>
                <select id="vol-availability" class="form-control" required>
                  <option value="Weekends Only">Weekends Only</option>
                  <option value="Event Days Only">Event Days Only</option>
                  <option value="Flexible Weekdays & Weekends">Flexible Weekdays & Weekends</option>
                </select>
              </div>
            </div>

            <div class="form-group">
              <label for="vol-skills" class="form-label">Relevant Skills or Background</label>
              <input type="text" id="vol-skills" class="form-control" placeholder="e.g. First Aid, Event Management, Photography, Sports Coaching" />
            </div>

            <div class="form-group">
              <label for="vol-interest" class="form-label">Primary Interest Area *</label>
              <select id="vol-interest" class="form-control" required>
                <option value="FLEXATHON Race Day Operations">FLEXATHON Race Day Operations</option>
                <option value="Youth Football Camp Support">Youth Football Camp Support</option>
                <option value="Cricket Tournament Support">Cricket Tournament Support</option>
                <option value="Media, Photography & Social Documentation">Media, Photography & Documentation</option>
                <option value="General Community Sports Days">General Community Sports Days</option>
              </select>
            </div>

            <div class="form-checkbox-group mb-3">
              <label class="checkbox-label">
                <input type="checkbox" id="vol-policy-consent" required />
                <span>I confirm I am an adult volunteer and agree to follow foundation safeguarding guidelines.</span>
              </label>
            </div>

            <button type="submit" class="btn btn-primary btn-block btn-lg" id="submit-vol-btn">
              Register as Volunteer
            </button>
          </form>

          <!-- Success Alert -->
          <div id="vol-success-box" class="alert alert-success mt-4" style="display: none;">
            <h4 class="alert-heading">Registration Recorded</h4>
            <p class="alert-body">
              Thank you for volunteering! Your details have been saved in our volunteer ledger under reference: <strong id="vol-ref-display"></strong>. Our team will reach out with event briefings.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;

  const form = container.querySelector("#volunteer-reg-form");
  const successBox = container.querySelector("#vol-success-box");
  const refDisplay = container.querySelector("#vol-ref-display");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = container.querySelector("#vol-name").value.trim();
    const email = container.querySelector("#vol-email").value.trim();
    const phone = container.querySelector("#vol-phone").value.trim();
    const city = container.querySelector("#vol-city").value.trim();
    const availability = container.querySelector("#vol-availability").value;
    const skills = container.querySelector("#vol-skills").value.trim();
    const areasOfInterest = container.querySelector("#vol-interest").value;

    const res = FlexonDB.registerVolunteer({
      name,
      email,
      phone,
      city,
      availability,
      skills,
      areasOfInterest
    });

    if (res.success) {
      refDisplay.textContent = res.reference;
      form.style.display = "none";
      successBox.style.display = "block";
    }
  });

  return container;
}
