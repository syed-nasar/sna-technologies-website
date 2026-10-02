import { ArrowRight, Check } from "lucide-react";
import React, { useEffect } from "react";
import siteConfig from "../data/siteConfig";
import snaLogo from "../assets/sna-logo-dark.webp";

const pageTitle =
  "Web Application Development Services | SNA Technologies";

const pageDescription =
  "SNA Technologies provides web application development services for businesses that need scalable applications, business platforms, customer portals, SaaS products and enterprise web solutions.";

const canonicalUrl =
  "https://sna-technologies.com/services/web-application-development/";

function setMeta(attribute, key, content) {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function WebApplicationDevelopment() {
  useEffect(() => {
    const previousTitle = document.title;

    document.title = pageTitle;

    setMeta("name", "description", pageDescription);

    setMeta("property", "og:title", pageTitle);
    setMeta("property", "og:description", pageDescription);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:url", canonicalUrl);
    setMeta("property", "og:site_name", siteConfig.company.name);
    setMeta(
      "property",
      "og:image",
      "https://sna-technologies.com/sna-logo-dark.png"
    );

    setMeta("name", "twitter:card", "summary");
    setMeta("name", "twitter:title", pageTitle);
    setMeta("name", "twitter:description", pageDescription);
    setMeta(
      "name",
      "twitter:image",
      "https://sna-technologies.com/sna-logo-dark.png"
    );

    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", canonicalUrl);

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Web Application Development",
      serviceType: "Web Application Development",
      description: pageDescription,
      url: canonicalUrl,
      provider: {
        "@type": "Organization",
        name: siteConfig.company.name,
        url: "https://sna-technologies.com/",
      },
      areaServed: {
        "@type": "Place",
        name: "Worldwide",
      },
    };

    let schemaScript = document.getElementById(
      "web-application-development-schema"
    );

    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = "web-application-development-schema";
      schemaScript.type = "application/ld+json";
      document.head.appendChild(schemaScript);
    }

    schemaScript.textContent = JSON.stringify(structuredData);

    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="service-page">
      <header className="service-page-header">
        <div className="service-page-nav">
          <a href="/" className="logo" aria-label="SNA Technologies home">
            <img src={snaLogo} alt="SNA Technologies" />
          </a>

          <nav className="service-page-links" aria-label="Main navigation">
            <a href="/#about">About</a>
            <a href="/#services">Services</a>
            <a href="/#work">Work</a>
            <a href="/contact/">Contact</a>
          </nav>

          <a href="/contact/" className="service-page-nav-cta">
            Start a Project
            <ArrowRight size={15} />
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="service-hero">
          <div className="service-hero-grid" />

          <div className="service-hero-orb service-hero-orb-one" />
          <div className="service-hero-orb service-hero-orb-two" />

          <div className="container service-hero-content">
            <span className="eyebrow">WEB APPLICATION DEVELOPMENT</span>

            <h1>Modern Web Applications Built Around Your Business</h1>

            <p className="service-hero-description">
              Build web applications that work around the way your business
              actually operates.
            </p>

            <p className="service-hero-copy">
              SNA Technologies designs and develops modern web applications
              for businesses that need reliable digital platforms, customer
              portals, internal systems and scalable online products.
            </p>

            <p className="service-hero-copy">
              Whether you are replacing spreadsheets, connecting fragmented
              systems, improving an existing platform or launching a new
              digital product, we build web applications around your users,
              workflows and long-term goals.
            </p>

            <div className="button-row">
              <a href="/contact/" className="button button-solid">
                Start a Project
                <ArrowRight size={16} />
              </a>

              <a href="/#services" className="button button-outline">
                Explore Services
              </a>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="service-section service-section-light">
          <div className="container">
            <div className="service-two-column">
              <div className="section-heading">
                <span className="eyebrow">WEB APPLICATIONS</span>

                <h2>
                  Software that works where your business works.
                </h2>
              </div>

              <div className="service-copy">
                <p>
                  Modern businesses depend on web applications for everything
                  from internal operations to customer-facing digital
                  experiences.
                </p>

                <p>
                  We build web applications that bring business processes,
                  data, users and integrations together in one reliable digital
                  environment.
                </p>

                <p>
                  Whether you are replacing spreadsheets, connecting
                  fragmented systems or launching a new digital product, we
                  design the application around the problem you need to solve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="service-section service-section-dark">
          <div className="container">
            <div className="section-heading light">
              <span className="eyebrow">WHAT WE BUILD</span>

              <h2>
                Web applications designed for real business use.
              </h2>
            </div>

            <div className="service-capability-grid">
              <article className="service-capability-card">
                <span>01</span>

                <h3>Business Web Applications</h3>

                <p>
                  Custom applications that centralize business operations,
                  workflows, data and day-to-day processes.
                </p>
              </article>

              <article className="service-capability-card">
                <span>02</span>

                <h3>Enterprise Web Applications</h3>

                <p>
                  Scalable web systems designed for complex workflows,
                  multiple teams, integrations and growing organizations.
                </p>
              </article>

              <article className="service-capability-card">
                <span>03</span>

                <h3>Customer Portals</h3>

                <p>
                  Secure digital portals that allow customers to access
                  services, information, transactions and support workflows.
                </p>
              </article>

              <article className="service-capability-card">
                <span>04</span>

                <h3>Partner Portals</h3>

                <p>
                  Connected web platforms that help partners collaborate,
                  exchange information and manage shared processes.
                </p>
              </article>

              <article className="service-capability-card">
                <span>05</span>

                <h3>SaaS Applications</h3>

                <p>
                  Scalable web products designed to support multiple users or
                  organizations and evolve as the product grows.
                </p>
              </article>

              <article className="service-capability-card">
                <span>06</span>

                <h3>Web Portals &amp; Dashboards</h3>

                <p>
                  Focused interfaces for reporting, analytics, administration,
                  operations and information management.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Engineering */}
        <section className="service-section service-section-light">
          <div className="container">
            <div className="service-two-column">
              <div className="section-heading">
                <span className="eyebrow">ENGINEERING</span>

                <h2>
                  Built for performance, integration and scale.
                </h2>
              </div>

              <div className="service-copy">
                <p>
                  A modern web application needs more than an attractive
                  interface. It needs an architecture that can support users,
                  data, integrations, security and future growth.
                </p>

                <p>
                  We design applications with maintainability and scalability
                  in mind, selecting technologies and architecture based on the
                  actual requirements of the product.
                </p>

                <div className="service-check-list">
                  <div>
                    <Check size={18} />
                    <span>Responsive user experiences</span>
                  </div>

                  <div>
                    <Check size={18} />
                    <span>API-driven application architecture</span>
                  </div>

                  <div>
                    <Check size={18} />
                    <span>Database and business logic integration</span>
                  </div>

                  <div>
                    <Check size={18} />
                    <span>Third-party system integrations</span>
                  </div>

                  <div>
                    <Check size={18} />
                    <span>Scalable application architecture</span>
                  </div>

                  <div>
                    <Check size={18} />
                    <span>Security-conscious engineering practices</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="service-section service-section-dark">
          <div className="container">
            <div className="section-heading light">
              <span className="eyebrow">OUR APPROACH</span>

              <h2>
                From business requirement to production-ready application.
              </h2>
            </div>

            <div className="service-process-grid">
              <article>
                <span>01</span>

                <h3>Discover</h3>

                <p>
                  Understand your users, workflows, business goals and
                  technical requirements before defining the solution.
                </p>
              </article>

              <article>
                <span>02</span>

                <h3>Design</h3>

                <p>
                  Define the application structure, user experience,
                  integrations and technical direction.
                </p>
              </article>

              <article>
                <span>03</span>

                <h3>Develop</h3>

                <p>
                  Build the application through clear development milestones
                  with continuous validation and feedback.
                </p>
              </article>

              <article>
                <span>04</span>

                <h3>Launch</h3>

                <p>
                  Test, deploy and support the application with practices
                  designed for reliable production delivery.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* Integration */}
        <section className="service-section service-section-light">
          <div className="container">
            <div className="service-two-column">
              <div className="section-heading">
                <span className="eyebrow">INTEGRATION</span>

                <h2>
                  Connect the systems your business already uses.
                </h2>
              </div>

              <div className="service-copy">
                <p>
                  Business applications rarely operate independently. They
                  often need to exchange data with existing systems, databases,
                  APIs and third-party platforms.
                </p>

                <p>
                  We design web applications with integration requirements in
                  mind so that information can move between systems reliably
                  and efficiently.
                </p>

                <div className="service-benefits">
                  <article>
                    <Check size={20} />

                    <div>
                      <h3>APIs</h3>

                      <p>
                        Connect applications and services through reliable
                        interfaces.
                      </p>
                    </div>
                  </article>

                  <article>
                    <Check size={20} />

                    <div>
                      <h3>Databases</h3>

                      <p>
                        Work with existing and new data systems according to
                        application requirements.
                      </p>
                    </div>
                  </article>

                  <article>
                    <Check size={20} />

                    <div>
                      <h3>Third-Party Platforms</h3>

                      <p>
                        Integrate external business services into your digital
                        workflows.
                      </p>
                    </div>
                  </article>

                  <article>
                    <Check size={20} />

                    <div>
                      <h3>Internal Systems</h3>

                      <p>
                        Connect fragmented business workflows and information
                        sources.
                      </p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quality Engineering */}
        <section className="service-section service-section-dark">
          <div className="container">
            <div className="service-two-column service-two-column-dark">
              <div className="section-heading light">
                <span className="eyebrow">QUALITY ENGINEERING</span>

                <h2>
                  Quality built into the development lifecycle.
                </h2>
              </div>

              <div className="service-copy service-copy-dark">
                <p>
                  Reliable web applications require continuous validation, not
                  just testing immediately before release.
                </p>

                <p>
                  Our engineering approach can incorporate automated testing,
                  API validation, regression coverage and continuous
                  integration practices based on the needs of the application.
                </p>

                <p>
                  This helps development teams identify problems earlier and
                  release changes with greater confidence.
                </p>
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
                Engineering focused on the business behind the application.
              </h2>
            </div>

            <div className="service-benefits">
              <article>
                <Check size={20} />

                <div>
                  <h3>Business-First Engineering</h3>

                  <p>
                    We begin with the business problem and design the
                    technology around the actual requirement.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Scalable Architecture</h3>

                  <p>
                    Applications are designed with maintainability,
                    integration and future growth in mind.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Automation-Driven Delivery</h3>

                  <p>
                    Automation across development, testing and deployment can
                    improve consistency and delivery efficiency.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Long-Term Technology Partnership</h3>

                  <p>
                    We build applications that can continue evolving as your
                    users, business and technology requirements grow.
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

              <h2>Frequently Asked Questions</h2>
            </div>

            <div className="service-faq">
              <article>
                <h3>What is web application development?</h3>

                <p>
                  Web application development is the process of designing and
                  building interactive software that users access through a web
                  browser. Web applications can support internal business
                  operations, customer services, portals, SaaS products and
                  many other use cases.
                </p>
              </article>

              <article>
                <h3>What types of web applications can you build?</h3>

                <p>
                  We can build business applications, enterprise platforms,
                  customer portals, partner portals, dashboards, workflow
                  systems and SaaS products based on the requirements of the
                  business.
                </p>
              </article>

              <article>
                <h3>
                  Can you integrate a web application with existing systems?
                </h3>

                <p>
                  Yes. Applications can be designed to work with existing
                  databases, APIs, internal systems and third-party services
                  where appropriate.
                </p>
              </article>

              <article>
                <h3>Can you modernize an existing web application?</h3>

                <p>
                  Yes. Existing applications can be assessed and modernized,
                  integrated or gradually replaced depending on their
                  architecture and business requirements.
                </p>
              </article>

              <article>
                <h3>Can you develop SaaS applications?</h3>

                <p>
                  Yes. SaaS applications can be designed around multi-user or
                  multi-organization requirements with architecture intended to
                  support future product growth.
                </p>
              </article>

              <article>
                <h3>Do you provide ongoing support after launch?</h3>

                <p>
                  Yes. Applications can be maintained and enhanced after launch
                  as business requirements, users and technology evolve.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="service-cta">
          <div className="container">
            <span className="eyebrow">LET&apos;S BUILD</span>

            <h2>Have a Web Application in Mind?</h2>

            <p>
              Tell us what you are trying to build, improve or automate.
              We&apos;ll start with the problem and work toward the right
              technology solution.
            </p>

            <a href="/contact/" className="button button-light">
              Start a Project
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="service-footer">
        <div className="container">
          <div className="service-footer-top">
            <div>
              <a href="/" className="logo" aria-label="SNA Technologies home">
                <img src={snaLogo} alt="SNA Technologies" />
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
                href={`tel:${siteConfig.company.phone.replace(/\s/g, "")}`}
              >
                {siteConfig.company.phone}
              </a>

              <span>{siteConfig.company.location}</span>
            </div>
          </div>

          <div className="service-footer-bottom">
            <span>{siteConfig.footer.copyright}</span>

            <a href="/">SNA Technologies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default WebApplicationDevelopment;