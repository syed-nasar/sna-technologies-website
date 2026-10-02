import React, { useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";

import siteConfig from "../data/siteConfig";
import snaLogo from "../assets/sna-logo-dark.webp";

function About() {
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

    const title = "About SNA Technologies | Software & Technology Company";

    const description =
      "Learn about SNA Technologies, a software and technology company focused on custom software, automation, AI, cloud, DevOps and quality engineering.";

    const canonical = "https://sna-technologies.com/about/";

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

    const existingSchema = document.getElementById("about-page-schema");

    if (existingSchema) {
      existingSchema.remove();
    }

    const schema = document.createElement("script");

    schema.id = "about-page-schema";
    schema.type = "application/ld+json";

    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      name: title,
      description,
      url: canonical,
      mainEntity: {
        "@type": "Organization",
        name: siteConfig.company.name,
        legalName: "SNA TECHNOLOGIES (SMC-PRIVATE) LIMITED",
        url: "https://sna-technologies.com/",
        logo: "https://sna-technologies.com/sna-logo-dark.png",
        description: siteConfig.company.description,
      },
    });

    document.head.appendChild(schema);

    return () => {
      const schemaElement = document.getElementById("about-page-schema");

      if (schemaElement) {
        schemaElement.remove();
      }
    };
  }, []);

  return (
    <main className="service-page">
      {/* Header */}
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
            <a href="/about/">About</a>
            <a href="/services/">Services</a>
            <a href="/work/">Work</a>
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
          <span className="eyebrow">ABOUT SNA TECHNOLOGIES</span>

          <h1>Technology Built Around Your Business.</h1>

          <p className="service-hero-description">
            Engineering practical digital solutions for businesses
            that want to work smarter and move forward.
          </p>

          <p className="service-hero-copy">
            SNA Technologies is a software and technology company
            focused on building practical, scalable and maintainable
            digital solutions. We combine software engineering,
            automation and product thinking to solve real business
            problems.
          </p>

          <div className="button-row">
            <a href="/contact/" className="button button-solid">
              Start a Project
              <ArrowRight size={16} />
            </a>

            <a href="#approach" className="button button-outline">
              Our Approach
            </a>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="service-section service-section-light">
        <div className="container service-two-column">
          <div className="section-heading">
            <span className="eyebrow">WHO WE ARE</span>

            <h2>
              A technology partner focused on solving the problem
              behind the software.
            </h2>
          </div>

          <div className="service-copy">
            <p>
              Technology should serve the business rather than
              become another layer of complexity. Our approach starts
              with understanding what the organization is trying to
              achieve.
            </p>

            <p>
              From custom applications and automation to cloud
              infrastructure and quality engineering, we focus on
              building solutions that are practical to operate,
              maintain and evolve.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="service-section service-section-dark">
        <div className="container">
          <div className="section-heading light">
            <span className="eyebrow">WHAT WE DO</span>

            <h2>
              Software engineering across the modern technology
              lifecycle.
            </h2>
          </div>

          <div className="service-capability-grid">
            <article className="service-capability-card">
              <span>01</span>

              <h3>Custom Software</h3>

              <p>
                Purpose-built software designed around specific
                business workflows, users and operational requirements.
              </p>
            </article>

            <article className="service-capability-card">
              <span>02</span>

              <h3>Web Applications</h3>

              <p>
                Modern web applications and business platforms built
                for usability, maintainability and future growth.
              </p>
            </article>

            <article className="service-capability-card">
              <span>03</span>

              <h3>Mobile Applications</h3>

              <p>
                Mobile experiences designed for Android, iOS and
                cross-platform application delivery.
              </p>
            </article>

            <article className="service-capability-card">
              <span>04</span>

              <h3>AI & Automation</h3>

              <p>
                Intelligent workflows and automation designed to
                reduce repetitive work and connect business processes.
              </p>
            </article>

            <article className="service-capability-card">
              <span>05</span>

              <h3>Cloud & DevOps</h3>

              <p>
                Cloud infrastructure, CI/CD and deployment practices
                designed for reliable software delivery.
              </p>
            </article>

            <article className="service-capability-card">
              <span>06</span>

              <h3>Quality Engineering</h3>

              <p>
                Automated testing and quality engineering practices
                that help protect important software releases.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section
        id="approach"
        className="service-section service-section-light"
      >
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">OUR APPROACH</span>

            <h2>
              Business-first thinking. Engineering discipline.
            </h2>
          </div>

          <div className="service-benefits">
            <article>
              <Check size={20} />

              <div>
                <h3>Understand Before Building</h3>

                <p>
                  We begin by understanding the business problem,
                  users, workflows and desired outcome before defining
                  the solution.
                </p>
              </div>
            </article>

            <article>
              <Check size={20} />

              <div>
                <h3>Keep Solutions Practical</h3>

                <p>
                  Technology choices should support the business
                  rather than introduce unnecessary complexity.
                </p>
              </div>
            </article>

            <article>
              <Check size={20} />

              <div>
                <h3>Build for Change</h3>

                <p>
                  Applications and systems should be maintainable and
                  capable of evolving as business requirements change.
                </p>
              </div>
            </article>

            <article>
              <Check size={20} />

              <div>
                <h3>Quality Throughout</h3>

                <p>
                  Testing and validation are considered part of the
                  engineering lifecycle rather than an afterthought.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="service-section service-section-dark">
        <div className="container service-two-column">
          <div className="section-heading light">
            <span className="eyebrow">ENGINEERING MINDSET</span>

            <h2>
              Modern technology, applied where it creates real value.
            </h2>
          </div>

          <div className="service-copy service-copy-dark">
            <p>
              We work across software development, automation,
              artificial intelligence, cloud infrastructure,
              DevOps and quality engineering.
            </p>

            <p>
              The technology stack is selected around the problem,
              existing systems, requirements and long-term direction
              of the solution.
            </p>

            <div className="service-benefits">
              <article>
                <Check size={20} />

                <div>
                  <h3>Modern Architecture</h3>

                  <p>
                    Structure applications around clear requirements,
                    maintainable components and appropriate
                    architecture.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Automation</h3>

                  <p>
                    Identify repetitive technical and business
                    processes where automation can provide meaningful
                    value.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Cloud & DevOps</h3>

                  <p>
                    Apply appropriate cloud and delivery practices to
                    support reliable software development and
                    deployment.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Quality Engineering</h3>

                  <p>
                    Integrate automated validation into the software
                    lifecycle to improve release confidence.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="service-section service-section-light">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">HOW WE WORK</span>

            <h2>
              A clear path from business problem to working solution.
            </h2>
          </div>

          <div className="service-process-grid">
            <article>
              <span>01</span>

              <h3>Discover</h3>

              <p>
                Understand the business, users, requirements and
                measurable goals.
              </p>
            </article>

            <article>
              <span>02</span>

              <h3>Design</h3>

              <p>
                Turn requirements into a clear product, technical and
                delivery strategy.
              </p>
            </article>

            <article>
              <span>03</span>

              <h3>Build</h3>

              <p>
                Develop, integrate and validate the solution with
                continuous feedback.
              </p>
            </article>

            <article>
              <span>04</span>

              <h3>Improve</h3>

              <p>
                Continue refining the solution as the business,
                technology and user requirements evolve.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="service-section service-section-dark">
        <div className="container service-two-column">
          <div className="section-heading light">
            <span className="eyebrow">LONG-TERM PARTNERSHIP</span>

            <h2>
              Technology should continue creating value after launch.
            </h2>
          </div>

          <div className="service-copy service-copy-dark">
            <p>
              Software is rarely finished when it is first released.
              New requirements, users, integrations and operational
              needs naturally emerge over time.
            </p>

            <p>
              We approach technology with maintainability and future
              change in mind, helping businesses build a foundation
              that can evolve with them.
            </p>

            <div className="service-benefits">
              <article>
                <Check size={20} />

                <div>
                  <h3>Maintainable Systems</h3>

                  <p>
                    Build software that teams can understand,
                    maintain and extend over time.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Continuous Improvement</h3>

                  <p>
                    Improve applications through ongoing feedback,
                    testing and changing business requirements.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Technology Alignment</h3>

                  <p>
                    Keep technology decisions aligned with the
                    direction and needs of the business.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Reliable Delivery</h3>

                  <p>
                    Combine engineering, automation and quality
                    practices throughout the delivery lifecycle.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="service-section service-section-light">
        <div className="container service-faq-container">
          <div className="section-heading">
            <span className="eyebrow">FAQ</span>

            <h2>
              Common questions about SNA Technologies.
            </h2>
          </div>

          <div className="service-faq">
            <article>
              <h3>What is SNA Technologies?</h3>

              <p>
                SNA Technologies is a software and technology company
                focused on custom software, web and mobile
                applications, AI and automation, cloud and DevOps,
                and quality engineering.
              </p>
            </article>

            <article>
              <h3>What types of software does SNA Technologies build?</h3>

              <p>
                We build purpose-built business software including
                web applications, mobile applications, business
                platforms, portals, workflow systems and integrated
                digital solutions.
              </p>
            </article>

            <article>
              <h3>Do you work with businesses internationally?</h3>

              <p>
                SNA Technologies is positioned to work with businesses
                and organizations internationally through modern
                digital delivery and collaboration workflows.
              </p>
            </article>

            <article>
              <h3>Can you work with an existing software system?</h3>

              <p>
                Yes. Existing applications can be assessed for
                enhancements, integrations, automation, modernization
                and quality engineering based on the requirements.
              </p>
            </article>

            <article>
              <h3>Do you provide ongoing software support?</h3>

              <p>
                Software can be continuously improved after launch as
                requirements, users, integrations and operational needs
                evolve.
              </p>
            </article>

            <article>
              <h3>How does a project with SNA Technologies begin?</h3>

              <p>
                Projects begin with a conversation about the business
                problem, requirements and desired outcome. From there,
                the appropriate technical approach can be defined.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="container">
          <span className="eyebrow">LET'S BUILD</span>

          <h2>
            Have a business problem worth solving with technology?
          </h2>

          <p>
            Tell us what you are trying to build, improve or
            automate. We will start with the problem and work toward
            the right technology.
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
              <a href="/about/">About</a>
              <a href="/services/">Services</a>
              <a href="/work/">Work</a>
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

export default About;