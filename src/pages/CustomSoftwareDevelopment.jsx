import { ArrowRight, Check } from "lucide-react";
import React, { useEffect } from "react";
import siteConfig from "../data/siteConfig";
import snaLogo from "../assets/sna-logo-dark.webp";

const pageTitle =
  "Custom Software Development Services | SNA Technologies";

const pageDescription =
  "SNA Technologies provides custom software development services for businesses that need scalable applications, business platforms, workflow systems, CRM solutions and enterprise software.";

const canonicalUrl =
  "https://sna-technologies.com/services/custom-software-development/";

function setMeta(attribute, key, content) {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function CustomSoftwareDevelopment() {
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
      name: "Custom Software Development",
      serviceType: "Custom Software Development",
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
      "custom-software-development-schema"
    );

    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = "custom-software-development-schema";
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
        <section className="service-hero">
          <div className="service-hero-grid" />

          <div className="service-hero-orb service-hero-orb-one" />
          <div className="service-hero-orb service-hero-orb-two" />

          <div className="container service-hero-content">
            <span className="eyebrow">CUSTOM SOFTWARE DEVELOPMENT</span>

            <h1>Custom Software Development for Growing Businesses</h1>

            <p className="service-hero-description">
              Build software around the way your business actually works.
            </p>

            <p className="service-hero-copy">
              SNA Technologies designs and develops custom software solutions
              for businesses that need more than off-the-shelf tools can
              provide. We turn complex workflows, operational requirements and
              business ideas into reliable digital products that are built to
              scale.
            </p>

            <p className="service-hero-copy">
              Whether you need a new business platform, an internal operations
              system, a customer-facing application or a specialized
              enterprise solution, we build software around your users,
              processes and long-term goals.
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

        <section className="service-section service-section-light">
          <div className="container">
            <div className="service-two-column">
              <div className="section-heading">
                <span className="eyebrow">WHY CUSTOM SOFTWARE</span>

                <h2>Software Built Around Your Business</h2>
              </div>

              <div className="service-copy">
                <p>
                  Every business has different processes, requirements and
                  challenges. Instead of forcing your operations into a generic
                  platform, custom software allows you to build technology
                  around the way your organization actually works.
                </p>

                <p>
                  We work with businesses to understand their existing
                  workflows, identify opportunities for improvement and develop
                  software that makes their operations more connected,
                  efficient and scalable.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="service-section service-section-dark">
          <div className="container">
            <div className="section-heading light">
              <span className="eyebrow">WHAT WE CAN BUILD</span>

              <h2>Technology Designed Around Your Requirements</h2>
            </div>

            <div className="service-capability-grid">
              <article className="service-capability-card">
                <span>01</span>
                <h3>Business Management Systems</h3>
                <p>
                  Centralized platforms that help teams manage operations,
                  workflows, data and day-to-day business activities from one
                  place.
                </p>
              </article>

              <article className="service-capability-card">
                <span>02</span>
                <h3>Enterprise Applications</h3>
                <p>
                  Scalable applications designed to support complex
                  organizational processes, multiple users, integrations and
                  growing operational requirements.
                </p>
              </article>

              <article className="service-capability-card">
                <span>03</span>
                <h3>CRM &amp; Business Platforms</h3>
                <p>
                  Custom CRM and business management solutions designed around
                  your sales, customer, operational and reporting workflows.
                </p>
              </article>

              <article className="service-capability-card">
                <span>04</span>
                <h3>Customer &amp; Partner Portals</h3>
                <p>
                  Secure web-based portals that give customers, partners and
                  other stakeholders access to the information and services
                  they need.
                </p>
              </article>

              <article className="service-capability-card">
                <span>05</span>
                <h3>Workflow &amp; Operations Platforms</h3>
                <p>
                  Digital systems that replace fragmented processes and
                  repetitive manual work with connected, trackable workflows.
                </p>
              </article>

              <article className="service-capability-card">
                <span>06</span>
                <h3>SaaS Products</h3>
                <p>
                  Technology products designed for multiple users or
                  organizations, with scalable architecture and the foundations
                  required for long-term product growth.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="service-section service-section-light">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">OUR APPROACH</span>

              <h2>Our Custom Software Development Approach</h2>
            </div>

            <div className="service-process-grid">
              <article>
                <span>01</span>
                <h3>Discover</h3>
                <p>
                  We start by understanding your business, users, existing
                  systems, requirements and objectives. The goal is to define
                  the actual problem before deciding on the technology.
                </p>
              </article>

              <article>
                <span>02</span>
                <h3>Design</h3>
                <p>
                  We translate requirements into a clear product and technical
                  strategy, including application structure, user experience,
                  integrations and delivery priorities.
                </p>
              </article>

              <article>
                <span>03</span>
                <h3>Build</h3>
                <p>
                  Our engineering process focuses on maintainable code,
                  scalable architecture and continuous validation. Development
                  progresses through clear milestones with regular feedback.
                </p>
              </article>

              <article>
                <span>04</span>
                <h3>Launch</h3>
                <p>
                  We help move the solution into production with deployment,
                  testing and release practices designed for reliability. After
                  launch, the product can continue evolving as your business
                  grows.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="service-section service-section-dark">
          <div className="container">
            <div className="service-two-column service-two-column-dark">
              <div className="section-heading light">
                <span className="eyebrow">INTEGRATION &amp; SCALE</span>

                <h2>Built for Integration and Scale</h2>
              </div>

              <div className="service-copy service-copy-dark">
                <p>
                  Modern business software rarely operates in isolation.
                </p>

                <p>
                  We design applications that can work with existing systems,
                  databases, APIs and third-party platforms. Whether you are
                  connecting multiple business functions or replacing
                  fragmented tools, the architecture is designed with future
                  growth and integration requirements in mind.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="service-section service-section-light">
          <div className="container">
            <div className="service-two-column">
              <div className="section-heading">
                <span className="eyebrow">QUALITY ENGINEERING</span>

                <h2>Quality Engineering from the Start</h2>
              </div>

              <div className="service-copy">
                <p>
                  Quality is part of the development process—not something
                  added at the end.
                </p>

                <p>
                  Our engineering approach incorporates automated testing, API
                  validation, regression coverage and continuous integration
                  practices where appropriate. This helps teams release
                  software with greater confidence while reducing the risk of
                  defects reaching production.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="service-section service-section-dark">
          <div className="container">
            <div className="section-heading light">
              <span className="eyebrow">WHY SNA TECHNOLOGIES</span>

              <h2>Engineering Focused on Business Outcomes</h2>
            </div>

            <div className="service-benefits">
              <article>
                <Check size={20} />
                <div>
                  <h3>Business-First Engineering</h3>
                  <p>
                    We begin with the business problem and work toward the
                    right technology solution.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />
                <div>
                  <h3>Scalable Architecture</h3>
                  <p>
                    Solutions are designed with maintainability, integration
                    and future growth in mind.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />
                <div>
                  <h3>Automation-Driven Delivery</h3>
                  <p>
                    Automation across development, testing and deployment helps
                    improve consistency and delivery efficiency.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />
                <div>
                  <h3>Long-Term Technology Partnership</h3>
                  <p>
                    We aim to build technology that continues to provide value
                    beyond the initial release.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="service-section service-section-light">
          <div className="container service-faq-container">
            <div className="section-heading">
              <span className="eyebrow">FAQ</span>

              <h2>Frequently Asked Questions</h2>
            </div>

            <div className="service-faq">
              <article>
                <h3>What is custom software development?</h3>
                <p>
                  Custom software development is the process of designing and
                  building software specifically around a business&apos;s
                  requirements, workflows and users rather than adapting an
                  off-the-shelf product to fit.
                </p>
              </article>

              <article>
                <h3>When should a business choose custom software?</h3>
                <p>
                  Custom software can be appropriate when existing products
                  cannot support important business requirements, when multiple
                  systems need to be connected, or when a business needs a
                  solution designed around unique processes.
                </p>
              </article>

              <article>
                <h3>
                  Can you integrate custom software with our existing systems?
                </h3>
                <p>
                  Yes. Custom applications can be designed to integrate with
                  existing databases, APIs, third-party platforms and other
                  business systems where appropriate.
                </p>
              </article>

              <article>
                <h3>Can you modernize existing software?</h3>
                <p>
                  Yes. Existing applications can be assessed, modernized,
                  integrated or gradually replaced depending on their
                  architecture, business importance and technical requirements.
                </p>
              </article>

              <article>
                <h3>Do you provide ongoing support?</h3>
                <p>
                  Yes. Software can be continuously maintained and enhanced
                  after launch as business requirements, users and technology
                  evolve.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="service-cta">
          <div className="container">
            <span className="eyebrow">LET&apos;S BUILD</span>

            <h2>Let&apos;s Build Something That Fits Your Business</h2>

            <p>
              Have a business process that could work better with the right
              technology?
            </p>

            <p>
              Tell us what you&apos;re trying to build, improve or automate.
              We&apos;ll start with the problem and work toward the right
              solution.
            </p>

            <a href="/contact/" className="button button-light">
              Start a Project
              <ArrowRight size={16} />
            </a>
          </div>
        </section>
      </main>

      <footer className="service-footer">
        <div className="container">
          <div className="service-footer-top">
            <div>
              <a href="/" className="logo" aria-label="SNA Technologies home">
                <img src={snaLogo} alt="SNA Technologies" />
              </a>

              <p>
                {siteConfig.company.description}
              </p>
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
              <a href={`tel:${siteConfig.company.phone.replace(/\s/g, "")}`}>
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

export default CustomSoftwareDevelopment;