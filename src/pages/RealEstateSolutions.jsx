import React, { useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";

import siteConfig from "../data/siteConfig";
import snaLogo from "../assets/sna-logo-dark.webp";

function RealEstateSolutions() {
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

    const title = "Real Estate Software Solutions | SNA Technologies";

    const description =
      "SNA Technologies builds real estate software solutions including CRM platforms, property management workflows, agent applications, lead management systems, portals and business automation.";

    const canonical =
      "https://sna-technologies.com/industries/real-estate/";

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
      "real-estate-service-schema"
    );

    if (existingSchema) {
      existingSchema.remove();
    }

    const schema = document.createElement("script");

    schema.id = "real-estate-service-schema";
    schema.type = "application/ld+json";

    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Real Estate Software Solutions",
      serviceType: "Real Estate Software Development",
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
        "real-estate-service-schema"
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
          <span className="eyebrow">REAL ESTATE TECHNOLOGY</span>

          <h1>
            Technology Solutions for Modern Real Estate Businesses
          </h1>

          <p className="service-hero-description">
            Connect properties, people, processes and data through
            better technology.
          </p>

          <p className="service-hero-copy">
            SNA Technologies builds software and automation solutions
            for real estate businesses that need better ways to manage
            properties, agents, leads, customers and day-to-day
            operations.
          </p>

          <div className="button-row">
            <a href="/contact/" className="button button-solid">
              Discuss Your Real Estate Solution
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
            <span className="eyebrow">REAL ESTATE SOFTWARE</span>

            <h2>
              Real estate operations need technology built around the
              business.
            </h2>
          </div>

          <div className="service-copy">
            <p>
              Real estate businesses manage interconnected workflows
              involving properties, agents, leads, customers,
              appointments, documents and transactions.
            </p>

            <p>
              A well-designed software platform can bring these
              processes together, give teams better visibility and
              reduce repetitive administrative work.
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
              Digital solutions for the workflows behind real estate.
            </h2>
          </div>

          <div className="service-capability-grid">
            <article className="service-capability-card">
              <span>01</span>

              <h3>Real Estate CRM</h3>

              <p>
                Centralize leads, contacts, agents, activities and
                customer interactions in a CRM designed around your
                business process.
              </p>
            </article>

            <article className="service-capability-card">
              <span>02</span>

              <h3>Property Management</h3>

              <p>
                Build platforms for organizing property information,
                availability, ownership data, activities and related
                operational workflows.
              </p>
            </article>

            <article className="service-capability-card">
              <span>03</span>

              <h3>Agent Applications</h3>

              <p>
                Provide agents with digital tools for managing leads,
                properties, tasks, appointments and customer
                interactions.
              </p>
            </article>

            <article className="service-capability-card">
              <span>04</span>

              <h3>Lead Management</h3>

              <p>
                Automate lead capture, assignment, follow-ups and
                pipeline management to create a more structured sales
                workflow.
              </p>
            </article>

            <article className="service-capability-card">
              <span>05</span>

              <h3>Property Portals</h3>

              <p>
                Build customer-facing and internal portals that make
                relevant property information and workflows accessible
                through modern web experiences.
              </p>
            </article>

            <article className="service-capability-card">
              <span>06</span>

              <h3>Business Automation</h3>

              <p>
                Automate repetitive real estate workflows and connect
                systems to reduce manual processes and improve
                operational visibility.
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
              Bring fragmented real estate processes into one
              connected system.
            </h2>
          </div>

          <div className="service-copy">
            <p>
              Real estate teams often work across spreadsheets,
              messaging platforms, CRM systems, property databases and
              other disconnected tools.
            </p>

            <p>
              Custom software can connect these workflows around a
              common business process while giving different users
              access to the information and functionality they need.
            </p>

            <div className="service-benefits">
              <article>
                <Check size={20} />

                <div>
                  <h3>Lead-to-Agent Workflows</h3>

                  <p>
                    Structure lead assignment, follow-ups and agent
                    activities around defined business rules.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Property Data</h3>

                  <p>
                    Organize property information and related records in
                    a centralized digital platform.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Customer Management</h3>

                  <p>
                    Give teams a clearer view of customer interactions,
                    requirements, activities and communication history.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Operational Automation</h3>

                  <p>
                    Automate repetitive activities and connect
                    workflows across the real estate operation.
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
              From real estate requirements to a practical digital
              solution.
            </h2>
          </div>

          <div className="service-process-grid">
            <article>
              <span>01</span>

              <h3>Discover</h3>

              <p>
                Understand your property workflows, users, operational
                challenges and business requirements.
              </p>
            </article>

            <article>
              <span>02</span>

              <h3>Design</h3>

              <p>
                Translate business requirements into a clear product,
                workflow and technical solution.
              </p>
            </article>

            <article>
              <span>03</span>

              <h3>Build</h3>

              <p>
                Develop the platform, applications and integrations
                around the agreed business workflows.
              </p>
            </article>

            <article>
              <span>04</span>

              <h3>Improve</h3>

              <p>
                Use feedback and operational insights to continuously
                improve the system as business requirements evolve.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="service-section service-section-light">
        <div className="container service-two-column">
          <div className="section-heading">
            <span className="eyebrow">INTEGRATIONS</span>

            <h2>
              Connect the systems your real estate business already
              depends on.
            </h2>
          </div>

          <div className="service-copy">
            <p>
              Real estate platforms rarely operate in isolation.
              Integrations can connect CRM systems, websites, portals,
              communication tools, APIs and other business services.
            </p>

            <div className="service-benefits">
              <article>
                <Check size={20} />

                <div>
                  <h3>CRM Integrations</h3>

                  <p>
                    Connect customer and lead information across
                    relevant business systems.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Website & Portal Integration</h3>

                  <p>
                    Connect public-facing property experiences with
                    internal business systems where appropriate.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>API Integrations</h3>

                  <p>
                    Connect external services and internal applications
                    through structured APIs and integration workflows.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Communication Workflows</h3>

                  <p>
                    Integrate relevant communication and notification
                    workflows into business processes.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile & Access */}
      <section className="service-section service-section-dark">
        <div className="container service-two-column">
          <div className="section-heading light">
            <span className="eyebrow">CONNECTED TEAMS</span>

            <h2>
              Give agents and teams access to the information they need.
            </h2>
          </div>

          <div className="service-copy service-copy-dark">
            <p>
              Real estate operations involve users working from offices,
              branches, properties and client meetings. Digital tools
              should support these different working environments.
            </p>

            <p>
              Depending on the requirements, we can build responsive
              web applications and mobile experiences that provide
              access to relevant workflows across devices.
            </p>

            <div className="service-benefits">
              <article>
                <Check size={20} />

                <div>
                  <h3>Responsive Web Applications</h3>

                  <p>
                    Provide teams with business applications that work
                    across modern desktop and mobile browsers.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Mobile Applications</h3>

                  <p>
                    Extend relevant real estate workflows into mobile
                    applications for agents and field teams.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Role-Based Access</h3>

                  <p>
                    Structure application functionality around different
                    user roles and operational responsibilities.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Centralized Information</h3>

                  <p>
                    Give authorized users a consistent view of relevant
                    business and property information.
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
              Technology designed around real estate operations.
            </h2>
          </div>

          <div className="service-benefits">
            <article>
              <Check size={20} />

              <div>
                <h3>Business-First Engineering</h3>

                <p>
                  We start with the workflows and problems that the
                  technology needs to solve.
                </p>
              </div>
            </article>

            <article>
              <Check size={20} />

              <div>
                <h3>Custom Solutions</h3>

                <p>
                  Build software around your organization's processes
                  instead of forcing those processes into a generic
                  system.
                </p>
              </div>
            </article>

            <article>
              <Check size={20} />

              <div>
                <h3>Automation-Driven Workflows</h3>

                <p>
                  Identify repetitive activities that can be automated
                  to improve operational efficiency.
                </p>
              </div>
            </article>

            <article>
              <Check size={20} />

              <div>
                <h3>Scalable Architecture</h3>

                <p>
                  Design applications and platforms with future
                  functionality, integrations and business growth in
                  mind.
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
              Common questions about real estate software solutions.
            </h2>
          </div>

          <div className="service-faq">
            <article>
              <h3>What is real estate software development?</h3>

              <p>
                Real estate software development involves building
                digital platforms and applications for workflows such
                as property management, CRM, lead management, agent
                operations, portals and business automation.
              </p>
            </article>

            <article>
              <h3>Can you build a custom real estate CRM?</h3>

              <p>
                Yes. A custom CRM can be designed around your lead
                management, agent workflows, customer records,
                activities and operational requirements.
              </p>
            </article>

            <article>
              <h3>Can you build software for real estate agents?</h3>

              <p>
                Yes. Agent-focused applications can provide workflows
                for leads, properties, customers, appointments, tasks
                and other activities relevant to the organization's
                processes.
              </p>
            </article>

            <article>
              <h3>Can a real estate system integrate with existing software?</h3>

              <p>
                Yes. Where suitable APIs or integration mechanisms are
                available, a custom platform can connect with existing
                business systems and services.
              </p>
            </article>

            <article>
              <h3>Can you automate real estate business processes?</h3>

              <p>
                Yes. Repetitive workflows such as lead assignment,
                notifications, data processing and other operational
                activities can be evaluated for automation.
              </p>
            </article>

            <article>
              <h3>Can you build both web and mobile real estate applications?</h3>

              <p>
                Yes. Depending on the requirements, a real estate
                solution can include responsive web applications,
                mobile applications or both.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="container">
          <span className="eyebrow">REAL ESTATE TECHNOLOGY</span>

          <h2>
            Ready to build a better digital workflow for your real
            estate business?
          </h2>

          <p>
            Tell us about your properties, agents, customers,
            operational workflows or software requirements. We can
            explore a technology solution around the way your business
            works.
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

export default RealEstateSolutions;