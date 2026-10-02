import React, { useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";

import siteConfig from "../data/siteConfig";
import snaLogo from "../assets/sna-logo-dark.webp";

function HealthcareSolutions() {
  useEffect(() => {
    const setMeta = (attribute, key, content) => {
      let element = document.head.querySelector(
        `meta[${attribute}="${key}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", key);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    const title = "Healthcare Software Solutions | SNA Technologies";

    const description =
      "SNA Technologies builds healthcare software solutions including business platforms, workflow automation, portals, API integrations, data workflows and quality engineering for healthcare organizations.";

    const canonical =
      "https://sna-technologies.com/industries/healthcare/";

    document.title = title;

    setMeta("name", "description", description);

    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:site_name", siteConfig.company.name);

    setMeta("name", "twitter:card", "summary");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    let canonicalElement = document.head.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonicalElement) {
      canonicalElement = document.createElement("link");
      canonicalElement.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalElement);
    }

    canonicalElement.setAttribute("href", canonical);

    const existingSchema = document.getElementById(
      "healthcare-service-schema"
    );

    if (existingSchema) {
      existingSchema.remove();
    }

    const schema = document.createElement("script");

    schema.id = "healthcare-service-schema";
    schema.type = "application/ld+json";

    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Healthcare Software Solutions",
      serviceType: "Healthcare Software Development",
      description,
      provider: {
        "@type": "Organization",
        name: siteConfig.company.name,
        url: "https://sna-technologies.com/",
      },
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
      url: canonical,
    });

    document.head.appendChild(schema);

    return () => {
      const schemaElement = document.getElementById(
        "healthcare-service-schema"
      );

      if (schemaElement) {
        schemaElement.remove();
      }
    };
  }, []);

  return (
    <main className="service-page">
      <header className="service-page-header">
        <nav className="service-page-nav">
          <a href="/" className="logo" aria-label="SNA Technologies home">
            <img
              src={snaLogo}
              alt="SNA Technologies"
              width="155"
              height="57"
            />
          </a>

          <div className="service-page-links">
            <a href="/">Home</a>
            <a href="/#about">About</a>
            <a href="/#services">Services</a>
            <a href="/#work">Work</a>
            <a href="/contact/">Contact</a>
          </div>

          <a href="/contact/" className="service-page-nav-cta">
            Start a Project
            <ArrowRight size={16} strokeWidth={1.7} />
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="service-hero">
        <div className="service-hero-grid" />

        <div className="service-hero-orb service-hero-orb-one" />
        <div className="service-hero-orb service-hero-orb-two" />

        <div className="container service-hero-content">
          <span className="eyebrow">HEALTHCARE TECHNOLOGY</span>

          <h1>
            Technology Solutions for Modern Healthcare Businesses
          </h1>

          <p className="service-hero-description">
            Build connected digital workflows that help healthcare
            organizations operate more efficiently.
          </p>

          <p className="service-hero-copy">
            SNA Technologies builds software and automation solutions
            for healthcare organizations that need reliable digital
            platforms, operational workflows, portals and connected
            systems.
          </p>

          <div className="button-row">
            <a href="/contact/" className="button button-solid">
              Discuss Your Healthcare Solution
              <ArrowRight size={16} />
            </a>

            <a href="#capabilities" className="button button-outline">
              Explore Capabilities
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="service-section service-section-light">
        <div className="container service-two-column">
          <div className="section-heading">
            <span className="eyebrow">HEALTHCARE SOFTWARE</span>

            <h2>
              Healthcare operations depend on connected digital
              workflows.
            </h2>
          </div>

          <div className="service-copy">
            <p>
              Healthcare organizations coordinate information across
              teams, departments, patients, appointments, operational
              processes and internal systems.
            </p>

            <p>
              Purpose-built software can bring these workflows
              together, reduce repetitive administrative work and
              provide users with more consistent access to relevant
              information.
            </p>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section
        id="capabilities"
        className="service-section service-section-dark"
      >
        <div className="container">
          <div className="section-heading light">
            <span className="eyebrow">CAPABILITIES</span>

            <h2>
              Digital solutions for the operational workflows behind
              healthcare organizations.
            </h2>
          </div>

          <div className="service-capability-grid">
            <article className="service-capability-card">
              <span>01</span>

              <h3>Healthcare Business Platforms</h3>

              <p>
                Build centralized applications for managing
                operational workflows, users, records and business
                processes.
              </p>
            </article>

            <article className="service-capability-card">
              <span>02</span>

              <h3>Patient & Customer Portals</h3>

              <p>
                Create digital portals that provide appropriate access
                to information, requests, services and communication
                workflows.
              </p>
            </article>

            <article className="service-capability-card">
              <span>03</span>

              <h3>Appointment Workflows</h3>

              <p>
                Develop digital workflows for appointment management,
                scheduling, requests and related operational processes.
              </p>
            </article>

            <article className="service-capability-card">
              <span>04</span>

              <h3>Workflow Automation</h3>

              <p>
                Automate suitable administrative workflows,
                notifications, approvals and repetitive operational
                activities.
              </p>
            </article>

            <article className="service-capability-card">
              <span>05</span>

              <h3>API Integrations</h3>

              <p>
                Connect applications and services through APIs and
                structured integration workflows where appropriate.
              </p>
            </article>

            <article className="service-capability-card">
              <span>06</span>

              <h3>Quality Engineering</h3>

              <p>
                Apply automated testing and quality engineering
                practices to validate healthcare applications and
                important workflows.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Business Workflows */}
      <section className="service-section service-section-light">
        <div className="container service-two-column">
          <div className="section-heading">
            <span className="eyebrow">BUSINESS WORKFLOWS</span>

            <h2>
              Connect teams, information and processes across the
              healthcare operation.
            </h2>
          </div>

          <div className="service-copy">
            <p>
              Healthcare operations can involve multiple departments
              and users working with interconnected processes.
              Disconnected systems can make everyday coordination more
              difficult.
            </p>

            <p>
              Custom software can bring relevant processes together
              while providing users with functionality appropriate to
              their roles and responsibilities.
            </p>

            <div className="service-benefits">
              <article>
                <Check size={20} />

                <div>
                  <h3>Patient Workflows</h3>

                  <p>
                    Structure appropriate digital workflows around
                    patient-facing services and administrative
                    processes.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Appointment Management</h3>

                  <p>
                    Support scheduling, appointment requests and
                    related operational workflows through digital
                    applications.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Staff Workflows</h3>

                  <p>
                    Build internal workflows that help teams manage
                    operational tasks, requests and information.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Operational Visibility</h3>

                  <p>
                    Provide authorized teams with clearer access to
                    relevant workflow status and operational
                    information.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="service-section service-section-dark">
        <div className="container">
          <div className="section-heading light">
            <span className="eyebrow">OUR PROCESS</span>

            <h2>
              From healthcare business requirements to a practical
              technology solution.
            </h2>
          </div>

          <div className="service-process-grid">
            <article>
              <span>01</span>

              <h3>Discover</h3>

              <p>
                Understand the organization, users, workflows,
                operational challenges and technology requirements.
              </p>
            </article>

            <article>
              <span>02</span>

              <h3>Design</h3>

              <p>
                Translate requirements into a clear product,
                architecture and workflow strategy.
              </p>
            </article>

            <article>
              <span>03</span>

              <h3>Build</h3>

              <p>
                Develop the platform, workflows, integrations and
                automation around the agreed requirements.
              </p>
            </article>

            <article>
              <span>04</span>

              <h3>Improve</h3>

              <p>
                Use testing, feedback and operational insights to
                continuously improve the solution.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Access & Data */}
      <section className="service-section service-section-light">
        <div className="container service-two-column">
          <div className="section-heading">
            <span className="eyebrow">ACCESS & DATA</span>

            <h2>
              Build application workflows around users, roles and
              information requirements.
            </h2>
          </div>

          <div className="service-copy">
            <p>
              Healthcare applications can involve different types of
              users and information. Application access should
              therefore be structured around the requirements of the
              organization and its workflows.
            </p>

            <p>
              Solutions can incorporate appropriate authentication,
              authorization, validation and application-level security
              practices based on the system requirements.
            </p>

            <div className="service-benefits">
              <article>
                <Check size={20} />

                <div>
                  <h3>Role-Based Access</h3>

                  <p>
                    Structure application functionality around user
                    roles and organizational responsibilities.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Authentication Workflows</h3>

                  <p>
                    Implement appropriate authentication and access
                    workflows for application users.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Data Validation</h3>

                  <p>
                    Validate application inputs and business rules to
                    help maintain data quality and consistency.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Controlled Workflows</h3>

                  <p>
                    Design application workflows around defined users,
                    permissions and business processes.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="service-section service-section-dark">
        <div className="container service-two-column">
          <div className="section-heading light">
            <span className="eyebrow">INTEGRATIONS</span>

            <h2>
              Connect healthcare applications with the systems around
              them.
            </h2>
          </div>

          <div className="service-copy service-copy-dark">
            <p>
              Healthcare organizations may rely on multiple internal
              applications and external services. Appropriate
              integrations can help connect information and workflows
              between these systems.
            </p>

            <p>
              Integration requirements depend on the systems involved,
              available APIs and the specific business process.
            </p>

            <div className="service-benefits">
              <article>
                <Check size={20} />

                <div>
                  <h3>API-Based Integration</h3>

                  <p>
                    Connect applications and services through
                    structured API integrations where supported.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Internal Systems</h3>

                  <p>
                    Connect business applications to reduce unnecessary
                    duplication and disconnected workflows.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Data Synchronization</h3>

                  <p>
                    Design appropriate workflows for exchanging and
                    synchronizing information between connected
                    systems.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>External Services</h3>

                  <p>
                    Integrate relevant third-party services based on
                    application and organizational requirements.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="service-section service-section-light">
        <div className="container service-two-column">
          <div className="section-heading">
            <span className="eyebrow">QUALITY ENGINEERING</span>

            <h2>
              Validate important healthcare workflows before they
              reach users.
            </h2>
          </div>

          <div className="service-copy">
            <p>
              Healthcare applications can contain workflows that need
              consistent validation across user interfaces, APIs,
              integrations and business processes.
            </p>

            <p>
              Automated testing can be integrated into development and
              delivery processes to provide repeatable validation as
              applications evolve.
            </p>

            <div className="service-benefits">
              <article>
                <Check size={20} />

                <div>
                  <h3>UI Automation</h3>

                  <p>
                    Automate important application workflows and
                    user-facing interactions.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>API Validation</h3>

                  <p>
                    Validate APIs, service responses, integrations and
                    relevant business rules through automated testing.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Regression Testing</h3>

                  <p>
                    Repeatedly validate important functionality as new
                    features and changes are introduced.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>CI/CD Testing</h3>

                  <p>
                    Integrate appropriate automated quality checks into
                    software delivery pipelines.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Why SNA */}
      <section className="service-section service-section-light">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">WHY SNA TECHNOLOGIES</span>

            <h2>
              Technology engineering focused on practical healthcare
              workflows.
            </h2>
          </div>

          <div className="service-benefits">
            <article>
              <Check size={20} />

              <div>
                <h3>Business-First Engineering</h3>

                <p>
                  We start by understanding the operational problem
                  before defining the technology solution.
                </p>
              </div>
            </article>

            <article>
              <Check size={20} />

              <div>
                <h3>Scalable Software</h3>

                <p>
                  Design applications and platforms with future
                  requirements, integrations and organizational growth
                  in mind.
                </p>
              </div>
            </article>

            <article>
              <Check size={20} />

              <div>
                <h3>Automation-Driven Delivery</h3>

                <p>
                  Use automation across suitable business workflows
                  and software delivery processes.
                </p>
              </div>
            </article>

            <article>
              <Check size={20} />

              <div>
                <h3>Quality Engineering</h3>

                <p>
                  Incorporate testing and validation into the software
                  development and delivery lifecycle.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="service-section service-section-light">
        <div className="container service-faq-container">
          <div className="section-heading">
            <span className="eyebrow">FAQ</span>

            <h2>
              Common questions about healthcare software solutions.
            </h2>
          </div>

          <div className="service-faq">
            <article>
              <h3>What is healthcare software development?</h3>

              <p>
                Healthcare software development involves building
                digital applications and platforms for healthcare
                organizations, including operational workflows,
                portals, scheduling systems, integrations and
                information management.
              </p>
            </article>

            <article>
              <h3>
                Can you build custom software for a healthcare
                organization?
              </h3>

              <p>
                Yes. Custom software can be designed around an
                organization's specific workflows, users, integrations
                and operational requirements.
              </p>
            </article>

            <article>
              <h3>
                Can you build patient or customer portals?
              </h3>

              <p>
                Yes. Digital portals can provide appropriate access to
                information, requests, services and communication
                workflows based on the organization's requirements.
              </p>
            </article>

            <article>
              <h3>
                Can healthcare applications integrate with existing
                systems?
              </h3>

              <p>
                Yes. Where suitable APIs or integration mechanisms are
                available, applications can be connected with existing
                internal and external systems.
              </p>
            </article>

            <article>
              <h3>
                Can healthcare administrative workflows be automated?
              </h3>

              <p>
                Appropriate repetitive workflows such as
                notifications, requests, approvals, scheduling
                activities and administrative tasks can be evaluated
                for automation.
              </p>
            </article>

            <article>
              <h3>
                Do you provide automated testing for healthcare
                software?
              </h3>

              <p>
                Yes. UI, API, regression and other appropriate
                automated tests can be incorporated into the quality
                engineering and software delivery process.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="container">
          <span className="eyebrow">HEALTHCARE TECHNOLOGY</span>

          <h2>
            Ready to build a more connected healthcare workflow?
          </h2>

          <p>
            Tell us about your healthcare application, operational
            process or technology challenge. We can explore a practical
            software and automation solution around your organization.
          </p>

          <a href="/contact/" className="button button-light">
            Start a Conversation
            <ArrowRight size={16} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="service-footer">
        <div className="container">
          <div className="service-footer-top">
            <div>
              <a
                href="/"
                className="logo"
                aria-label="SNA Technologies home"
              >
                <img
                  src={snaLogo}
                  alt="SNA Technologies"
                  width="155"
                  height="57"
                />
              </a>

              <p>{siteConfig.company.description}</p>
            </div>

            <div className="service-footer-links">
              <span>EXPLORE</span>

              <a href="/">Home</a>
              <a href="/#about">About</a>
              <a href="/#services">Services</a>
              <a href="/#work">Work</a>
              <a href="/contact/">Contact</a>
            </div>

            <div className="service-footer-links">
              <span>CONTACT</span>

              <a href={`mailto:${siteConfig.company.email}`}>
                {siteConfig.company.email}
              </a>

              <a
                href={`tel:${siteConfig.company.phone.replace(/\s+/g, "")}`}
              >
                {siteConfig.company.phone}
              </a>

              <span>{siteConfig.company.location}</span>
            </div>
          </div>

          <div className="service-footer-bottom">
            <span>{siteConfig.footer.copyright}</span>

            <a href="/contact/">Start a Project</a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default HealthcareSolutions;