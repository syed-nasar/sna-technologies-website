import { ArrowRight, Check } from "lucide-react";
import React, { useEffect } from "react";
import siteConfig from "../data/siteConfig";
import snaLogo from "../assets/sna-logo-dark.webp";

const pageTitle =
  "Mobile App Development Services | SNA Technologies";

const pageDescription =
  "SNA Technologies provides mobile app development services for businesses that need reliable Android, iOS and cross-platform applications built around real user needs.";

const canonicalUrl =
  "https://sna-technologies.com/services/mobile-app-development/";

function setMeta(attribute, key, content) {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function MobileAppDevelopment() {
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
      name: "Mobile App Development",
      serviceType: "Mobile App Development",
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
      "mobile-app-development-schema"
    );

    if (!schemaScript) {
      schemaScript = document.createElement("script");
      schemaScript.id = "mobile-app-development-schema";
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
            <span className="eyebrow">MOBILE APP DEVELOPMENT</span>

            <h1>Mobile Applications Built for Real-World Users</h1>

            <p className="service-hero-description">
              Build mobile applications that give your customers, employees
              and partners a reliable way to interact with your business
              wherever they are.
            </p>

            <p className="service-hero-copy">
              SNA Technologies designs and develops mobile applications for
              businesses that need reliable customer experiences, internal
              tools, operational applications and connected digital products.
            </p>

            <p className="service-hero-copy">
              Whether you are launching a new mobile product, extending an
              existing web platform or creating a mobile experience around
              your business workflows, we build applications around your
              users, requirements and long-term goals.
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
                <span className="eyebrow">MOBILE APPLICATIONS</span>

                <h2>
                  Mobile experiences designed around your users.
                </h2>
              </div>

              <div className="service-copy">
                <p>
                  A successful mobile application needs more than a polished
                  interface. It needs to fit naturally into the way people use
                  your product or interact with your business.
                </p>

                <p>
                  We build mobile applications that bring users, business
                  processes, data and integrations together in a reliable
                  digital experience.
                </p>

                <p>
                  From customer-facing applications to internal business
                  tools, we design the application around the problem you need
                  to solve and the users who will rely on it.
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
                Mobile applications designed for real business use.
              </h2>
            </div>

            <div className="service-capability-grid">
              <article className="service-capability-card">
                <span>01</span>

                <h3>Customer Mobile Apps</h3>

                <p>
                  Mobile experiences that help customers access products,
                  services, information and business workflows.
                </p>
              </article>

              <article className="service-capability-card">
                <span>02</span>

                <h3>Business Mobile Applications</h3>

                <p>
                  Internal mobile tools that help teams manage operations,
                  information and workflows from anywhere.
                </p>
              </article>

              <article className="service-capability-card">
                <span>03</span>

                <h3>Android Applications</h3>

                <p>
                  Android applications designed around your product
                  requirements, target users and operational environment.
                </p>
              </article>

              <article className="service-capability-card">
                <span>04</span>

                <h3>iOS Applications</h3>

                <p>
                  iOS applications focused on usability, reliability and a
                  consistent experience across supported devices.
                </p>
              </article>

              <article className="service-capability-card">
                <span>05</span>

                <h3>Cross-Platform Applications</h3>

                <p>
                  Cross-platform mobile applications for products that need
                  efficient delivery across multiple mobile platforms.
                </p>
              </article>

              <article className="service-capability-card">
                <span>06</span>

                <h3>Mobile Portals &amp; Tools</h3>

                <p>
                  Focused mobile portals and applications that connect users
                  with business systems and operational processes.
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
                  Built for performance, integration and growth.
                </h2>
              </div>

              <div className="service-copy">
                <p>
                  A modern mobile application needs more than an attractive
                  interface. It needs an architecture that can support users,
                  data, integrations, security and future product growth.
                </p>

                <p>
                  We design mobile applications with maintainability and
                  scalability in mind, selecting the appropriate technical
                  approach based on the actual requirements of the product.
                </p>

                <div className="service-check-list">
                  <div>
                    <Check size={18} />
                    <span>Responsive and intuitive mobile experiences</span>
                  </div>

                  <div>
                    <Check size={18} />
                    <span>API-driven application architecture</span>
                  </div>

                  <div>
                    <Check size={18} />
                    <span>Secure authentication and user management</span>
                  </div>

                  <div>
                    <Check size={18} />
                    <span>Database and backend integration</span>
                  </div>

                  <div>
                    <Check size={18} />
                    <span>Third-party service integrations</span>
                  </div>

                  <div>
                    <Check size={18} />
                    <span>
                      Scalable and maintainable application architecture
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology */}
        <section className="service-section service-section-dark">
          <div className="container">
            <div className="section-heading light">
              <span className="eyebrow">TECHNOLOGY</span>

              <h2>
                The right technology for the product you&apos;re building.
              </h2>
            </div>

            <div className="service-benefits">
              <article>
                <Check size={20} />

                <div>
                  <h3>React Native</h3>

                  <p>
                    Cross-platform application development with a shared
                    engineering approach.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Flutter</h3>

                  <p>
                    Cross-platform mobile experiences built around consistent
                    product interfaces.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Native Platforms</h3>

                  <p>
                    Platform-specific development where the product requires
                    native capabilities or experiences.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>API Integration</h3>

                  <p>
                    Mobile applications connected to business systems,
                    services and backend platforms.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="service-section service-section-dark">
          <div className="container">
            <div className="section-heading light">
              <span className="eyebrow">OUR APPROACH</span>

              <h2>
                From product idea to production-ready application.
              </h2>
            </div>

            <div className="service-process-grid">
              <article>
                <span>01</span>

                <h3>Discover</h3>

                <p>
                  Understand your users, product goals, workflows and
                  technical requirements before defining the solution.
                </p>
              </article>

              <article>
                <span>02</span>

                <h3>Design</h3>

                <p>
                  Define the user experience, application structure,
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
                  Connect your mobile application to the systems behind your
                  business.
                </h2>
              </div>

              <div className="service-copy">
                <p>
                  Mobile applications often depend on the systems and services
                  that already power your business.
                </p>

                <p>
                  We design mobile applications with integration requirements
                  in mind so that users can access the information and
                  workflows they need without disconnecting from the systems
                  behind your business.
                </p>

                <div className="service-benefits">
                  <article>
                    <Check size={20} />

                    <div>
                      <h3>APIs</h3>

                      <p>
                        Connect mobile applications with backend services and
                        business logic.
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
                        Integrate external services required by your product
                        and business workflows.
                      </p>
                    </div>
                  </article>

                  <article>
                    <Check size={20} />

                    <div>
                      <h3>Business Systems</h3>

                      <p>
                        Connect mobile experiences with the operational
                        systems your teams already use.
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
                  Quality built into the mobile development lifecycle.
                </h2>
              </div>

              <div className="service-copy service-copy-dark">
                <p>
                  Mobile applications need to work reliably across devices,
                  operating systems and real-world usage conditions.
                </p>

                <p>
                  Our engineering approach can incorporate functional
                  validation, API testing, regression coverage and automation
                  practices based on the needs of the application.
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
                Mobile engineering focused on the business behind the
                application.
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
                <h3>What types of mobile applications can you build?</h3>

                <p>
                  We can build customer-facing applications, internal
                  business applications, mobile portals, operational tools and
                  other mobile products based on your requirements.
                </p>
              </article>

              <article>
                <h3>
                  Do you develop both Android and iOS applications?
                </h3>

                <p>
                  Yes. The appropriate development approach depends on your
                  product requirements, target users, technical needs and
                  application goals.
                </p>
              </article>

              <article>
                <h3>
                  Can you develop cross-platform mobile applications?
                </h3>

                <p>
                  Yes. Cross-platform approaches such as React Native and
                  Flutter can be considered when they are appropriate for the
                  product and its requirements.
                </p>
              </article>

              <article>
                <h3>
                  Can you integrate a mobile app with existing systems?
                </h3>

                <p>
                  Yes. Mobile applications can be designed to work with
                  backend APIs, databases, business platforms and third-party
                  services where appropriate.
                </p>
              </article>

              <article>
                <h3>
                  Can you modernize an existing mobile application?
                </h3>

                <p>
                  Yes. Existing applications can be assessed and modernized,
                  integrated or gradually improved depending on their
                  architecture and business requirements.
                </p>
              </article>

              <article>
                <h3>Do you provide ongoing support after launch?</h3>

                <p>
                  Yes. Applications can be maintained and enhanced after
                  launch as business requirements, users and technology
                  evolve.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="service-cta">
          <div className="container">
            <span className="eyebrow">LET&apos;S BUILD</span>

            <h2>Have a Mobile App in Mind?</h2>

            <p>
              Tell us what you are trying to build, improve or automate.
              We&apos;ll start with the users, the problem and the right
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

export default MobileAppDevelopment;