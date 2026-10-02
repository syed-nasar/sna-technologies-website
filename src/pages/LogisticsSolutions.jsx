import React, { useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";

import siteConfig from "../data/siteConfig";
import snaLogo from "../assets/sna-logo-dark.webp";

function LogisticsSolutions() {
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

    const title = "Logistics Software Solutions | SNA Technologies";

    const description =
      "SNA Technologies builds logistics software solutions including operational platforms, workflow automation, tracking systems, customer portals, API integrations, data workflows and quality engineering.";

    const canonical =
      "https://sna-technologies.com/industries/logistics/";

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
      "logistics-service-schema"
    );

    if (existingSchema) {
      existingSchema.remove();
    }

    const schema = document.createElement("script");

    schema.id = "logistics-service-schema";
    schema.type = "application/ld+json";

    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Logistics Software Solutions",
      serviceType: "Logistics Software Development",
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
        "logistics-service-schema"
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
          <span className="eyebrow">LOGISTICS TECHNOLOGY</span>

          <h1>
            Technology Solutions for Modern Logistics Businesses
          </h1>

          <p className="service-hero-description">
            Build connected systems that help logistics teams manage
            operations, information and workflows more efficiently.
          </p>

          <p className="service-hero-copy">
            SNA Technologies builds software and automation solutions
            for logistics businesses that need reliable operational
            platforms, tracking workflows, customer portals and
            connected business systems.
          </p>

          <div className="button-row">
            <a href="/contact/" className="button button-solid">
              Discuss Your Logistics Solution
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
            <span className="eyebrow">LOGISTICS SOFTWARE</span>

            <h2>
              Logistics operations depend on visibility and connected
              workflows.
            </h2>
          </div>

          <div className="service-copy">
            <p>
              Logistics businesses coordinate information across
              orders, shipments, vehicles, drivers, customers,
              warehouses and internal teams.
            </p>

            <p>
              Purpose-built software can connect these workflows,
              automate repetitive processes and provide teams with
              better access to operational information.
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
              modern logistics.
            </h2>
          </div>

          <div className="service-capability-grid">
            <article className="service-capability-card">
              <span>01</span>

              <h3>Logistics Management Platforms</h3>

              <p>
                Build centralized applications for managing logistics
                operations, records, users, orders and workflows.
              </p>
            </article>

            <article className="service-capability-card">
              <span>02</span>

              <h3>Shipment & Delivery Workflows</h3>

              <p>
                Digitize shipment, delivery and operational workflows
                around the specific requirements of the business.
              </p>
            </article>

            <article className="service-capability-card">
              <span>03</span>

              <h3>Tracking Systems</h3>

              <p>
                Build applications that connect tracking information
                with operational workflows and user-facing
                experiences.
              </p>
            </article>

            <article className="service-capability-card">
              <span>04</span>

              <h3>Customer Portals</h3>

              <p>
                Create customer-facing portals for relevant shipment
                information, requests, status updates and services.
              </p>
            </article>

            <article className="service-capability-card">
              <span>05</span>

              <h3>Workflow Automation</h3>

              <p>
                Automate suitable notifications, operational tasks,
                approvals and repetitive business processes.
              </p>
            </article>

            <article className="service-capability-card">
              <span>06</span>

              <h3>API Integrations</h3>

              <p>
                Connect logistics applications with internal systems,
                tracking services and other relevant platforms through
                APIs.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Operations */}
      <section className="service-section service-section-light">
        <div className="container service-two-column">
          <div className="section-heading">
            <span className="eyebrow">LOGISTICS OPERATIONS</span>

            <h2>
              Connect orders, shipments, teams and operational data.
            </h2>
          </div>

          <div className="service-copy">
            <p>
              Logistics workflows often span multiple teams and
              operational stages. Information can move between
              customers, dispatch teams, drivers, warehouse personnel
              and management.
            </p>

            <p>
              A connected software platform can bring relevant
              processes together and provide users with information
              appropriate to their role.
            </p>

            <div className="service-benefits">
              <article>
                <Check size={20} />

                <div>
                  <h3>Order Management</h3>

                  <p>
                    Structure digital workflows around order creation,
                    processing, status and operational coordination.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Dispatch Workflows</h3>

                  <p>
                    Support dispatch operations through structured
                    digital workflows and connected information.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Delivery Management</h3>

                  <p>
                    Build workflows around delivery activities,
                    updates, exceptions and operational records.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Operational Visibility</h3>

                  <p>
                    Give authorized teams clearer access to relevant
                    operational information and workflow status.
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
              From logistics requirements to a practical technology
              solution.
            </h2>
          </div>

          <div className="service-process-grid">
            <article>
              <span>01</span>

              <h3>Discover</h3>

              <p>
                Understand the operation, users, workflows,
                technology requirements and business challenges.
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
                Develop the platform, integrations and automation
                workflows around the agreed requirements.
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

      {/* Tracking & Integrations */}
      <section className="service-section service-section-light">
        <div className="container service-two-column">
          <div className="section-heading">
            <span className="eyebrow">TRACKING & INTEGRATIONS</span>

            <h2>
              Connect logistics data with the systems that depend on
              it.
            </h2>
          </div>

          <div className="service-copy">
            <p>
              Logistics businesses may use multiple applications for
              orders, tracking, fleet operations, customers and
              internal management.
            </p>

            <p>
              Appropriate integrations can connect these systems and
              create more consistent workflows across the operation.
            </p>

            <div className="service-benefits">
              <article>
                <Check size={20} />

                <div>
                  <h3>Tracking APIs</h3>

                  <p>
                    Connect suitable tracking services and operational
                    applications through available APIs.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Fleet Systems</h3>

                  <p>
                    Integrate relevant fleet or vehicle information
                    into operational workflows where supported.
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
                  <h3>Customer Systems</h3>

                  <p>
                    Connect customer-facing experiences with relevant
                    operational information and services.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Automation */}
      <section className="service-section service-section-dark">
        <div className="container service-two-column">
          <div className="section-heading light">
            <span className="eyebrow">AUTOMATION</span>

            <h2>
              Reduce repetitive logistics tasks with intelligent
              workflows.
            </h2>
          </div>

          <div className="service-copy service-copy-dark">
            <p>
              Repetitive operational activities can consume time and
              introduce unnecessary manual steps across logistics
              workflows.
            </p>

            <p>
              Automation can be applied where appropriate to improve
              process consistency and reduce repetitive administrative
              work.
            </p>

            <div className="service-benefits">
              <article>
                <Check size={20} />

                <div>
                  <h3>Status Notifications</h3>

                  <p>
                    Automate relevant status updates and notifications
                    throughout operational workflows.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Workflow Triggers</h3>

                  <p>
                    Trigger appropriate actions based on defined
                    business events and workflow conditions.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Data Processing</h3>

                  <p>
                    Automate suitable repetitive data processing and
                    operational tasks.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Exception Workflows</h3>

                  <p>
                    Structure workflows for handling exceptions,
                    updates and operational follow-up activities.
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
              Validate the workflows that keep logistics applications
              moving.
            </h2>
          </div>

          <div className="service-copy">
            <p>
              Logistics software can involve interconnected
              workflows across applications, APIs, tracking systems
              and user interfaces.
            </p>

            <p>
              Automated testing can provide repeatable validation as
              software changes and new capabilities are introduced.
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
              Technology engineering focused on practical logistics
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
                <h3>Connected Systems</h3>

                <p>
                  Design applications and integrations that help
                  connect relevant logistics workflows and information.
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
              Common questions about logistics software solutions.
            </h2>
          </div>

          <div className="service-faq">
            <article>
              <h3>What is logistics software development?</h3>

              <p>
                Logistics software development involves building
                digital applications and platforms for logistics
                operations, including order management, shipment
                workflows, tracking, customer portals and
                integrations.
              </p>
            </article>

            <article>
              <h3>
                Can you build custom software for a logistics company?
              </h3>

              <p>
                Yes. Custom software can be designed around the
                company's specific operational workflows, users,
                integrations and technology requirements.
              </p>
            </article>

            <article>
              <h3>
                Can you build shipment or delivery management
                software?
              </h3>

              <p>
                Yes. Digital workflows can be designed around shipment
                processing, dispatch, delivery activities, status
                updates and related operational requirements.
              </p>
            </article>

            <article>
              <h3>
                Can logistics software integrate with tracking
                systems?
              </h3>

              <p>
                Yes. Where suitable APIs or integration mechanisms are
                available, tracking systems can be connected with
                logistics applications and operational workflows.
              </p>
            </article>

            <article>
              <h3>Can logistics workflows be automated?</h3>

              <p>
                Appropriate repetitive activities such as
                notifications, data processing, workflow triggers and
                operational tasks can be evaluated for automation.
              </p>
            </article>

            <article>
              <h3>
                Do you provide automated testing for logistics
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
          <span className="eyebrow">LOGISTICS TECHNOLOGY</span>

          <h2>
            Ready to build a more connected logistics operation?
          </h2>

          <p>
            Tell us about your logistics application, operational
            workflow or technology challenge. We can explore a
            practical software and automation solution around your
            business.
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

export default LogisticsSolutions;