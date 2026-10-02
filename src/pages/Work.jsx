import React, { useEffect } from "react";
import { ArrowRight } from "lucide-react";

import siteConfig from "../data/siteConfig";
import snaLogo from "../assets/sna-logo-dark.webp";

function Work() {
  useEffect(() => {
    const setMeta = (attribute, key, content) => {
      let element = document.head.querySelector(
        `meta[${attribute}="${key}"]`
      );

      if (!element) {
        element = document.createElement("meta");

        if (attribute === "property") {
          element.setAttribute("property", key);
        } else {
          element.setAttribute("name", key);
        }

        document.head.appendChild(element);
      }

      element.setAttribute(attribute, key);
      element.setAttribute("content", content);
    };

    const title = "Our Work | Software & Digital Solutions | SNA Technologies";

    const description =
      "Explore software, business automation and digital solution concepts from SNA Technologies, including enterprise platforms, real estate CRM and digital operations solutions.";

    const canonical = "https://sna-technologies.com/work/";

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

    const existingSchema = document.getElementById("work-page-schema");

    if (existingSchema) {
      existingSchema.remove();
    }

    const schema = document.createElement("script");

    schema.id = "work-page-schema";
    schema.type = "application/ld+json";

    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: title,
      description,
      url: canonical,
      isPartOf: {
        "@type": "WebSite",
        name: siteConfig.company.name,
        url: "https://sna-technologies.com/",
      },
      about: {
        "@type": "Thing",
        name: "Software and Digital Solutions",
      },
    });

    document.head.appendChild(schema);

    return () => {
      const schemaElement = document.getElementById("work-page-schema");

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
          <span className="eyebrow">OUR WORK</span>

          <h1>Technology Designed Around Real Business Needs.</h1>

          <p className="service-hero-description">
            Software, automation and digital solution concepts built
            around the way businesses actually operate.
          </p>

          <p className="service-hero-copy">
            Our work spans business platforms, CRM systems,
            operational automation and digital products. Each
            solution starts with understanding the business problem
            and defining the technology around it.
          </p>

          <div className="button-row">
            <a href="#projects" className="button button-solid">
              Explore Our Work
              <ArrowRight size={16} />
            </a>

            <a href="/contact/" className="button button-outline">
              Start a Project
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="service-section service-section-light">
        <div className="container service-two-column">
          <div className="section-heading">
            <span className="eyebrow">WHAT WE BUILD</span>

            <h2>
              Digital products that connect technology with business
              operations.
            </h2>
          </div>

          <div className="service-copy">
            <p>
              Businesses often have complex workflows spread across
              people, spreadsheets, applications and disconnected
              systems.
            </p>

            <p>
              We design and build digital solutions that bring those
              workflows together through software, automation,
              integrations and quality engineering.
            </p>

            <p>
              The projects presented here represent solution
              concepts and areas of work rather than claims of
              specific client engagements.
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="service-section service-section-dark"
      >
        <div className="container">
          <div className="section-heading light">
            <span className="eyebrow">SELECTED WORK</span>

            <h2>
              Solutions shaped around business workflows.
            </h2>
          </div>

          <div className="service-capability-grid">
            {siteConfig.projects.map((project, index) => (
              <article
                className="service-capability-card"
                key={`${project.title}-${index}`}
              >
                <span>
                  {project.tag || `PROJECT ${String(index + 1).padStart(2, "0")}`}
                </span>

                <h3>{project.title}</h3>

                <p>
                  <strong>{project.category}</strong>
                  <br />
                  {project.description}
                </p>

                <a
                  href={project.href || "/contact/"}
                  className="button button-outline"
                  style={{
                    marginTop: "28px",
                    display: "inline-flex",
                  }}
                >
                  Discuss a Similar Solution
                  <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="service-section service-section-light">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">SOLUTION AREAS</span>

            <h2>
              From individual applications to connected business
              systems.
            </h2>
          </div>

          <div className="service-process-grid">
            <article>
              <span>01</span>

              <h3>Business Platforms</h3>

              <p>
                Centralized applications designed to bring important
                business operations into one digital environment.
              </p>
            </article>

            <article>
              <span>02</span>

              <h3>CRM Solutions</h3>

              <p>
                Customer, property, lead and relationship workflows
                organized around the needs of the business.
              </p>
            </article>

            <article>
              <span>03</span>

              <h3>Automation</h3>

              <p>
                Connected workflows that reduce repetitive tasks and
                improve operational visibility.
              </p>
            </article>

            <article>
              <span>04</span>

              <h3>Digital Products</h3>

              <p>
                Web and mobile products designed around users,
                workflows and measurable business requirements.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Engineering */}
      <section className="service-section service-section-dark">
        <div className="container service-two-column">
          <div className="section-heading light">
            <span className="eyebrow">ENGINEERING BEHIND THE WORK</span>

            <h2>
              Building is only part of delivering a dependable
              digital product.
            </h2>
          </div>

          <div className="service-copy service-copy-dark">
            <p>
              Modern software needs more than an interface. It needs
              architecture, integrations, deployment workflows,
              automated testing and ongoing technical maintenance.
            </p>

            <p>
              Our engineering capabilities span the complete software
              delivery lifecycle.
            </p>

            <div className="service-benefits">
              <article>
                <div>
                  <h3>Software Engineering</h3>

                  <p>
                    Web applications, business platforms, APIs and
                    custom software solutions.
                  </p>
                </div>
              </article>

              <article>
                <div>
                  <h3>Automation</h3>

                  <p>
                    Business and technical workflows designed to
                    reduce repetitive manual processes.
                  </p>
                </div>
              </article>

              <article>
                <div>
                  <h3>Cloud & DevOps</h3>

                  <p>
                    CI/CD, deployment automation and cloud
                    infrastructure practices.
                  </p>
                </div>
              </article>

              <article>
                <div>
                  <h3>Quality Engineering</h3>

                  <p>
                    UI, API, regression and end-to-end test
                    automation integrated into delivery workflows.
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
            <span className="eyebrow">FROM IDEA TO DELIVERY</span>

            <h2>
              Every project begins with understanding the business.
            </h2>
          </div>

          <div className="service-process-grid">
            {siteConfig.process.map((step) => (
              <article key={step.number}>
                <span>{step.number}</span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="container">
          <span className="eyebrow">YOUR PROJECT COULD BE NEXT</span>

          <h2>
            Have a product, workflow or business problem in mind?
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

export default Work;