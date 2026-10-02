import React, { useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";

import siteConfig from "../data/siteConfig";
import snaLogo from "../assets/sna-logo-dark.webp";

function AIAutomation() {
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

    const title =
      "AI & Business Automation Services | SNA Technologies";

    const description =
      "SNA Technologies provides AI automation services, business process automation, workflow automation and AI-powered solutions that help businesses reduce repetitive work and operate more efficiently.";

    const canonical =
      "https://sna-technologies.com/services/ai-automation/";

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
      "ai-automation-service-schema"
    );

    if (existingSchema) {
      existingSchema.remove();
    }

    const schema = document.createElement("script");

    schema.id = "ai-automation-service-schema";
    schema.type = "application/ld+json";

    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "AI & Business Automation",
      serviceType: "AI Automation Services",
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
        "ai-automation-service-schema"
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
          <span className="eyebrow">AI & AUTOMATION</span>

          <h1>
            AI & Automation That Makes Your Business Work Smarter
          </h1>

          <p className="service-hero-description">
            Turn repetitive processes into intelligent, connected
            workflows.
          </p>

          <p className="service-hero-copy">
            SNA Technologies builds practical AI and automation solutions
            that connect business processes, applications and data to
            reduce repetitive work and improve operational efficiency.
          </p>

          <div className="button-row">
            <a href="/contact/" className="button button-solid">
              Discuss Your Automation Needs
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
            <span className="eyebrow">INTELLIGENT AUTOMATION</span>

            <h2>
              Automate the work that slows your business down.
            </h2>
          </div>

          <div className="service-copy">
            <p>
              Many business processes involve repetitive tasks,
              disconnected systems and manual data movement. These
              processes can often be improved by connecting systems and
              introducing the right level of automation.
            </p>

            <p>
              We design automation around your actual workflows rather
              than forcing your business into a predefined process.
              Where AI adds value, we integrate it into the workflow
              alongside conventional software automation.
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
              Practical AI and automation for real business processes.
            </h2>
          </div>

          <div className="service-capability-grid">
            <article className="service-capability-card">
              <span>01</span>

              <h3>Business Process Automation</h3>

              <p>
                Automate repetitive business workflows across
                departments, applications and operational processes.
              </p>
            </article>

            <article className="service-capability-card">
              <span>02</span>

              <h3>Workflow Automation</h3>

              <p>
                Connect tasks, approvals, notifications and data
                movement into structured automated workflows.
              </p>
            </article>

            <article className="service-capability-card">
              <span>03</span>

              <h3>AI-Powered Applications</h3>

              <p>
                Integrate AI capabilities into business applications
                where intelligent processing can improve the user or
                operational experience.
              </p>
            </article>

            <article className="service-capability-card">
              <span>04</span>

              <h3>AI Integrations</h3>

              <p>
                Connect AI services and models with existing
                applications, APIs, databases and business systems.
              </p>
            </article>

            <article className="service-capability-card">
              <span>05</span>

              <h3>AI Agents & Assistants</h3>

              <p>
                Build task-focused AI assistants and agent-based
                workflows designed around defined business operations.
              </p>
            </article>

            <article className="service-capability-card">
              <span>06</span>

              <h3>Intelligent Data Processing</h3>

              <p>
                Use automation and AI to process, classify, extract and
                route information across business workflows.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Engineering */}
      <section className="service-section service-section-light">
        <div className="container service-two-column">
          <div className="section-heading">
            <span className="eyebrow">ENGINEERING</span>

            <h2>
              Automation designed to fit your existing technology.
            </h2>
          </div>

          <div className="service-copy">
            <p>
              Automation is most effective when it works with the
              systems your business already depends on. We can design
              integrations around APIs, databases, web applications
              and existing business platforms.
            </p>

            <p>
              Our approach combines conventional software engineering
              with AI capabilities where they provide a meaningful
              advantage.
            </p>

            <div className="service-benefits">
              <article>
                <Check size={20} />

                <div>
                  <h3>API-First Integrations</h3>

                  <p>
                    Connect business systems through reliable APIs and
                    structured integrations.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Workflow Orchestration</h3>

                  <p>
                    Coordinate multiple steps, systems and actions
                    through structured workflows.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Human-in-the-Loop</h3>

                  <p>
                    Keep people involved where decisions, approvals or
                    exceptions require human oversight.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Scalable Architecture</h3>

                  <p>
                    Build automation foundations that can evolve as
                    business processes and requirements change.
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
              From repetitive task to reliable automated workflow.
            </h2>
          </div>

          <div className="service-process-grid">
            <article>
              <span>01</span>

              <h3>Discover</h3>

              <p>
                Understand the existing process, systems, users,
                dependencies and opportunities for automation.
              </p>
            </article>

            <article>
              <span>02</span>

              <h3>Design</h3>

              <p>
                Define the automation workflow, integrations,
                decision points and appropriate AI capabilities.
              </p>
            </article>

            <article>
              <span>03</span>

              <h3>Build</h3>

              <p>
                Develop, integrate and validate the automation with
                continuous feedback from the business.
              </p>
            </article>

            <article>
              <span>04</span>

              <h3>Improve</h3>

              <p>
                Monitor the workflow, handle exceptions and improve
                the automation as business needs evolve.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="service-section service-section-light">
        <div className="container service-two-column">
          <div className="section-heading">
            <span className="eyebrow">INTEGRATION</span>

            <h2>
              Connect the tools your business already uses.
            </h2>
          </div>

          <div className="service-copy">
            <p>
              Effective automation often depends on connecting
              multiple systems. We build integration workflows that
              allow information and actions to move between the
              applications involved in a business process.
            </p>

            <div className="service-benefits">
              <article>
                <Check size={20} />

                <div>
                  <h3>Business Applications</h3>

                  <p>
                    Connect internal applications and operational
                    platforms into unified workflows.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>CRMs & Portals</h3>

                  <p>
                    Automate data movement and actions across CRM,
                    customer and business portals.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Databases & APIs</h3>

                  <p>
                    Integrate structured data sources and APIs into
                    automated business processes.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Notifications & Approvals</h3>

                  <p>
                    Automate notifications, routing and approval steps
                    while keeping people involved when required.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Engineering */}
      <section className="service-section service-section-dark">
        <div className="container service-two-column">
          <div className="section-heading light">
            <span className="eyebrow">RELIABILITY</span>

            <h2>
              Automation needs engineering discipline.
            </h2>
          </div>

          <div className="service-copy service-copy-dark">
            <p>
              Automation becomes part of the business infrastructure
              once people depend on it. That makes reliability,
              validation and maintainability important parts of the
              engineering process.
            </p>

            <p>
              We consider failure scenarios, integration dependencies,
              validation and monitoring when designing automated
              workflows.
            </p>

            <div className="service-benefits">
              <article>
                <Check size={20} />

                <div>
                  <h3>Validation</h3>

                  <p>
                    Validate automated actions and outputs against
                    defined business requirements.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Error Handling</h3>

                  <p>
                    Design workflows to handle failures, exceptions
                    and unexpected conditions.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Monitoring</h3>

                  <p>
                    Build visibility into automated processes so issues
                    can be identified and addressed.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Maintainability</h3>

                  <p>
                    Keep automation understandable and adaptable as
                    workflows and systems change.
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
              Automation focused on business value, not technology
              for its own sake.
            </h2>
          </div>

          <div className="service-benefits">
            <article>
              <Check size={20} />

              <div>
                <h3>Business-First Thinking</h3>

                <p>
                  We start with the business problem and workflow
                  before selecting the technology.
                </p>
              </div>
            </article>

            <article>
              <Check size={20} />

              <div>
                <h3>Practical AI</h3>

                <p>
                  AI is introduced where it can provide meaningful
                  value rather than being added simply because it is
                  available.
                </p>
              </div>
            </article>

            <article>
              <Check size={20} />

              <div>
                <h3>Integration Mindset</h3>

                <p>
                  We consider the applications, data and processes
                  surrounding the automation.
                </p>
              </div>
            </article>

            <article>
              <Check size={20} />

              <div>
                <h3>Long-Term Engineering</h3>

                <p>
                  Solutions are designed with maintainability,
                  reliability and future changes in mind.
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
              Common questions about AI and automation.
            </h2>
          </div>

          <div className="service-faq">
            <article>
              <h3>What types of business processes can be automated?</h3>

              <p>
                Repetitive workflows involving data entry, approvals,
                notifications, system integrations, information
                processing and routine operational tasks can often be
                automated. The right approach depends on the specific
                process and systems involved.
              </p>
            </article>

            <article>
              <h3>
                Do I need to replace my existing business software?
              </h3>

              <p>
                Not necessarily. Automation can often be introduced by
                integrating with existing applications, APIs and
                databases rather than replacing the systems already in
                use.
              </p>
            </article>

            <article>
              <h3>Where can AI add value to business automation?</h3>

              <p>
                AI can be useful for tasks such as information
                extraction, classification, summarization, natural
                language interaction and other processes where
                conventional rule-based automation may be insufficient.
              </p>
            </article>

            <article>
              <h3>Can automation include human approval steps?</h3>

              <p>
                Yes. Automated workflows can include human review,
                approval and exception-handling steps where business
                decisions require human involvement.
              </p>
            </article>

            <article>
              <h3>Can you integrate automation with our existing APIs?</h3>

              <p>
                Yes. API-based integrations can be used to connect
                applications and move information or trigger actions
                between systems.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="container">
          <span className="eyebrow">LET'S AUTOMATE</span>

          <h2>
            Have a repetitive process? Let's turn it into a smarter
            workflow.
          </h2>

          <p>
            Tell us what your team is doing manually today. We can
            explore where software, automation and AI can make the
            process simpler and more efficient.
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

              <a href={`tel:${siteConfig.company.phone.replace(/\s+/g, "")}`}>
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

export default AIAutomation;