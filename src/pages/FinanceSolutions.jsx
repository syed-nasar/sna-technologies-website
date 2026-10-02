import React, { useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";

import siteConfig from "../data/siteConfig";
import snaLogo from "../assets/sna-logo-dark.webp";

function FinanceSolutions() {
  useEffect(() => {
    const setMeta = (attribute, key, content) => {
      let element = document.head.querySelector(
        `meta[${attribute}="${key}"]`
      );

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    const title = "Finance Software Solutions | SNA Technologies";

    const description =
      "SNA Technologies builds finance software solutions including business platforms, workflow automation, customer portals, API integrations, data workflows and quality engineering for financial businesses.";

    const canonical =
      "https://sna-technologies.com/industries/finance/";

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
      "finance-service-schema"
    );

    if (existingSchema) {
      existingSchema.remove();
    }

    const schema = document.createElement("script");

    schema.id = "finance-service-schema";
    schema.type = "application/ld+json";

    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Finance Software Solutions",
      serviceType: "Financial Software Development",
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
        "finance-service-schema"
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
          <span className="eyebrow">FINANCE TECHNOLOGY</span>

          <h1>
            Technology Solutions for Modern Financial Businesses
          </h1>

          <p className="service-hero-description">
            Build secure, scalable and connected digital workflows for
            financial operations.
          </p>

          <p className="service-hero-copy">
            SNA Technologies builds software and automation solutions
            for financial businesses that need reliable digital
            platforms, connected workflows, customer experiences and
            operational systems.
          </p>

          <div className="button-row">
            <a href="/contact/" className="button button-solid">
              Discuss Your Finance Solution
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
            <span className="eyebrow">FINANCE SOFTWARE</span>

            <h2>
              Financial operations depend on reliable digital
              systems.
            </h2>
          </div>

          <div className="service-copy">
            <p>
              Financial businesses manage information-intensive
              workflows involving customers, transactions, records,
              approvals, reporting and internal operations.
            </p>

            <p>
              Purpose-built software can connect these processes,
              reduce repetitive work and provide teams with more
              consistent access to the information required for daily
              operations.
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
              Digital solutions for the workflows behind financial
              businesses.
            </h2>
          </div>

          <div className="service-capability-grid">
            <article className="service-capability-card">
              <span>01</span>

              <h3>Financial Business Platforms</h3>

              <p>
                Build centralized platforms for managing business
                workflows, records, users, approvals and operational
                information.
              </p>
            </article>

            <article className="service-capability-card">
              <span>02</span>

              <h3>Customer Portals</h3>

              <p>
                Create secure customer-facing web experiences for
                accessing relevant information, submitting requests and
                interacting with business services.
              </p>
            </article>

            <article className="service-capability-card">
              <span>03</span>

              <h3>Workflow Automation</h3>

              <p>
                Automate repetitive operational workflows, approvals,
                notifications and data processing where appropriate.
              </p>
            </article>

            <article className="service-capability-card">
              <span>04</span>

              <h3>Data & Reporting Systems</h3>

              <p>
                Build structured data workflows and reporting
                experiences that help teams access and work with
                operational information.
              </p>
            </article>

            <article className="service-capability-card">
              <span>05</span>

              <h3>API Integrations</h3>

              <p>
                Connect internal applications and external services
                through APIs and structured integration workflows.
              </p>
            </article>

            <article className="service-capability-card">
              <span>06</span>

              <h3>Quality Engineering</h3>

              <p>
                Apply automated testing and quality engineering
                practices to help validate business-critical financial
                applications.
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
              Connect people, data and processes across the financial
              operation.
            </h2>
          </div>

          <div className="service-copy">
            <p>
              Financial operations can involve multiple teams and
              systems working with the same information. Disconnected
              workflows can make it harder to maintain consistency and
              visibility.
            </p>

            <p>
              Custom software can bring relevant processes together
              while giving users access to the functionality and data
              appropriate to their roles.
            </p>

            <div className="service-benefits">
              <article>
                <Check size={20} />

                <div>
                  <h3>Customer Workflows</h3>

                  <p>
                    Structure customer-facing processes around
                    applications, portals and defined business
                    workflows.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Approval Processes</h3>

                  <p>
                    Digitize approval workflows and provide clearer
                    visibility into process status and activities.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Data Processing</h3>

                  <p>
                    Automate appropriate data processing workflows to
                    reduce repetitive operational activities.
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
              From financial business requirements to a practical
              technology solution.
            </h2>
          </div>

          <div className="service-process-grid">
            <article>
              <span>01</span>

              <h3>Discover</h3>

              <p>
                Understand the business process, users, systems,
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
                Develop the platform, integrations and automation
                workflows around the agreed requirements.
              </p>
            </article>

            <article>
              <span>04</span>

              <h3>Improve</h3>

              <p>
                Use feedback, testing and operational insights to
                continuously improve the solution.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Security & Access */}
      <section className="service-section service-section-light">
        <div className="container service-two-column">
          <div className="section-heading">
            <span className="eyebrow">SECURITY & ACCESS</span>

            <h2>
              Build access and application workflows around business
              requirements.
            </h2>
          </div>

          <div className="service-copy">
            <p>
              Financial applications often handle sensitive business
              information and require clear control over users,
              permissions and application workflows.
            </p>

            <p>
              Technology solutions can incorporate appropriate access
              controls, validation and application-level security
              practices based on the requirements of the system.
            </p>

            <div className="service-benefits">
              <article>
                <Check size={20} />

                <div>
                  <h3>Role-Based Access</h3>

                  <p>
                    Structure application functionality around user
                    roles and business responsibilities.
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
                  <h3>Input Validation</h3>

                  <p>
                    Validate application inputs and business rules to
                    help maintain data quality and consistency.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Audit-Friendly Workflows</h3>

                  <p>
                    Design workflows with appropriate records of
                    relevant user activities and business actions.
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
              Connect financial applications with the systems around
              them.
            </h2>
          </div>

          <div className="service-copy service-copy-dark">
            <p>
              Modern financial software often needs to exchange data
              with other applications, services and internal systems.
              Well-designed integrations can help create more connected
              workflows.
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
                    Connect different business applications to reduce
                    unnecessary duplication and disconnected workflows.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Data Synchronization</h3>

                  <p>
                    Design appropriate workflows for exchanging and
                    synchronizing information between connected systems.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>External Services</h3>

                  <p>
                    Integrate relevant third-party services based on
                    application and business requirements.
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
              Validate critical financial workflows before they reach
              users.
            </h2>
          </div>

          <div className="service-copy">
            <p>
              Business-critical applications require dependable
              validation across user interfaces, APIs, integrations and
              important workflows.
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
                    customer or staff-facing interactions.
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
                    Repeatedly validate critical functionality as new
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
              Technology engineering focused on practical financial
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
                  requirements, integrations and business growth in
                  mind.
                </p>
              </div>
            </article>

            <article>
              <Check size={20} />

              <div>
                <h3>Automation-Driven Delivery</h3>

                <p>
                  Use automation across business workflows and software
                  delivery where it provides meaningful value.
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
              Common questions about finance software solutions.
            </h2>
          </div>

          <div className="service-faq">
            <article>
              <h3>What is finance software development?</h3>

              <p>
                Finance software development involves building digital
                applications and platforms for financial business
                workflows, customer experiences, operational processes,
                data management and integrations.
              </p>
            </article>

            <article>
              <h3>Can you build custom software for a financial business?</h3>

              <p>
                Yes. Custom software can be designed around the
                organization's specific workflows, users, integrations
                and operational requirements.
              </p>
            </article>

            <article>
              <h3>Can you build customer portals for financial businesses?</h3>

              <p>
                Yes. Customer portals can provide secure, role-appropriate
                access to relevant information, requests, workflows and
                services.
              </p>
            </article>

            <article>
              <h3>Can you integrate financial software with existing systems?</h3>

              <p>
                Yes. Where suitable APIs or integration mechanisms are
                available, applications can be connected with existing
                internal and external systems.
              </p>
            </article>

            <article>
              <h3>Can financial workflows be automated?</h3>

              <p>
                Appropriate repetitive workflows such as notifications,
                data processing, approvals and internal operational
                tasks can be evaluated for automation.
              </p>
            </article>

            <article>
              <h3>Do you provide automated testing for financial software?</h3>

              <p>
                Yes. UI, API, regression and other appropriate automated
                tests can be incorporated into the quality engineering
                and software delivery process.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="container">
          <span className="eyebrow">FINANCE TECHNOLOGY</span>

          <h2>
            Ready to build a more connected financial workflow?
          </h2>

          <p>
            Tell us about your financial application, operational
            process or technology challenge. We can explore a practical
            software and automation solution around your business.
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

export default FinanceSolutions;