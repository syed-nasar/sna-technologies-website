import React, { useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";

import siteConfig from "../data/siteConfig";
import snaLogo from "../assets/sna-logo-dark.webp";

function Industries() {
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

      element.setAttribute("content", content);
    };

    const title =
      "Industry Software Solutions | SNA Technologies";

    const description =
      "Explore industry-focused software solutions from SNA Technologies for real estate, finance, healthcare and logistics businesses.";

    const canonical = "https://sna-technologies.com/industries/";

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
      "industries-page-schema"
    );

    if (existingSchema) {
      existingSchema.remove();
    }

    const schema = document.createElement("script");

    schema.id = "industries-page-schema";
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
      mainEntity: {
        "@type": "ItemList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Real Estate Software Solutions",
            url: "https://sna-technologies.com/industries/real-estate/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Finance Software Solutions",
            url: "https://sna-technologies.com/industries/finance/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Healthcare Software Solutions",
            url: "https://sna-technologies.com/industries/healthcare/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "Logistics Software Solutions",
            url: "https://sna-technologies.com/industries/logistics/",
          },
        ],
      },
    });

    document.head.appendChild(schema);

    return () => {
      const schemaElement = document.getElementById(
        "industries-page-schema"
      );

      if (schemaElement) {
        schemaElement.remove();
      }
    };
  }, []);

  const industries = [
    {
      number: "01",
      title: "Real Estate",
      description:
        "CRM platforms, property workflows, agent applications, lead management, portals and business automation.",
      href: "/industries/real-estate/",
    },
    {
      number: "02",
      title: "Finance",
      description:
        "Business platforms, workflow automation, customer portals, API integrations, data workflows and quality engineering.",
      href: "/industries/finance/",
    },
    {
      number: "03",
      title: "Healthcare",
      description:
        "Business platforms, workflow automation, portals, integrations, data workflows and quality engineering.",
      href: "/industries/healthcare/",
    },
    {
      number: "04",
      title: "Logistics",
      description:
        "Operational platforms, workflow automation, tracking systems, customer portals, integrations and data workflows.",
      href: "/industries/logistics/",
    },
  ];

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
          <span className="eyebrow">INDUSTRIES</span>

          <h1>
            Technology Solutions Built Around Industry Workflows.
          </h1>

          <p className="service-hero-description">
            Practical software and automation for businesses with
            complex operational requirements.
          </p>

          <p className="service-hero-copy">
            Different industries have different workflows, users,
            systems and operational challenges. Our approach is to
            understand those requirements and build technology around
            the way the business operates.
          </p>

          <div className="button-row">
            <a href="#industries" className="button button-solid">
              Explore Industries
              <ArrowRight size={16} />
            </a>

            <a href="/contact/" className="button button-outline">
              Discuss Your Business
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="service-section service-section-light">
        <div className="container service-two-column">
          <div className="section-heading">
            <span className="eyebrow">INDUSTRY CONTEXT</span>

            <h2>
              Technology becomes more useful when it reflects how a
              business actually works.
            </h2>
          </div>

          <div className="service-copy">
            <p>
              Industry-specific software often needs to account for
              specialized workflows, terminology, users, integrations
              and operational processes.
            </p>

            <p>
              We use industry context to understand those
              requirements while keeping the engineering approach
              focused on practical, maintainable digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section
        id="industries"
        className="service-section service-section-dark"
      >
        <div className="container">
          <div className="section-heading light">
            <span className="eyebrow">INDUSTRY SOLUTIONS</span>

            <h2>
              Explore technology solutions by industry.
            </h2>
          </div>

          <div className="service-capability-grid">
            {industries.map((industry) => (
              <article
                className="service-capability-card"
                key={industry.number}
              >
                <span>{industry.number}</span>

                <h3>{industry.title}</h3>

                <p>{industry.description}</p>

                <a
                  href={industry.href}
                  className="button button-outline"
                  style={{
                    marginTop: "28px",
                    display: "inline-flex",
                  }}
                >
                  Explore Solutions
                  <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Common Technology Needs */}
      <section className="service-section service-section-light">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">COMMON TECHNOLOGY NEEDS</span>

            <h2>
              Industry requirements often connect back to the same
              core technology challenges.
            </h2>
          </div>

          <div className="service-process-grid">
            <article>
              <span>01</span>

              <h3>Business Software</h3>

              <p>
                Centralized applications that bring important
                operational workflows into one environment.
              </p>
            </article>

            <article>
              <span>02</span>

              <h3>Workflow Automation</h3>

              <p>
                Automated processes that connect teams, systems and
                repetitive business activities.
              </p>
            </article>

            <article>
              <span>03</span>

              <h3>System Integration</h3>

              <p>
                APIs and connected systems that allow business
                information to move between applications.
              </p>
            </article>

            <article>
              <span>04</span>

              <h3>Quality Engineering</h3>

              <p>
                Automated testing and validation to support reliable
                software delivery and ongoing changes.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="service-section service-section-dark">
        <div className="container">
          <div className="section-heading light">
            <span className="eyebrow">OUR APPROACH</span>

            <h2>
              Industry knowledge informs the solution. Engineering
              makes it usable.
            </h2>
          </div>

          <div className="service-benefits">
            <article>
              <Check size={20} />

              <div>
                <h3>Understand the Workflow</h3>

                <p>
                  Identify how people, systems and processes currently
                  work before defining the technology.
                </p>
              </div>
            </article>

            <article>
              <Check size={20} />

              <div>
                <h3>Map the Requirements</h3>

                <p>
                  Translate business processes into clear functional
                  and technical requirements.
                </p>
              </div>
            </article>

            <article>
              <Check size={20} />

              <div>
                <h3>Connect the Systems</h3>

                <p>
                  Consider integrations and data flows where multiple
                  systems need to work together.
                </p>
              </div>
            </article>

            <article>
              <Check size={20} />

              <div>
                <h3>Validate the Solution</h3>

                <p>
                  Use testing and quality engineering throughout
                  development and delivery.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="service-section service-section-light">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">FROM REQUIREMENTS TO DELIVERY</span>

            <h2>
              A structured process for industry-focused technology.
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

      {/* FAQ */}
      <section className="service-section service-section-light">
        <div className="container service-faq-container">
          <div className="section-heading">
            <span className="eyebrow">FAQ</span>

            <h2>
              Questions about industry-focused solutions.
            </h2>
          </div>

          <div className="service-faq">
            <article>
              <h3>
                Can you build software for an industry not listed
                here?
              </h3>

              <p>
                Yes. The industries listed here represent current
                solution areas. Technology projects can also be
                approached around the specific workflows and
                requirements of other businesses.
              </p>
            </article>

            <article>
              <h3>
                Do you build completely custom industry software?
              </h3>

              <p>
                Custom software can be designed around an
                organization's workflows, users, integrations and
                operational requirements.
              </p>
            </article>

            <article>
              <h3>
                Can you improve an existing industry application?
              </h3>

              <p>
                Existing systems can be assessed for enhancements,
                integrations, automation, modernization and quality
                engineering based on project requirements.
              </p>
            </article>

            <article>
              <h3>
                Can industry software integrate with other systems?
              </h3>

              <p>
                Where appropriate, APIs and other integration
                approaches can connect applications and business
                workflows.
              </p>
            </article>

            <article>
              <h3>
                Do you work with international businesses?
              </h3>

              <p>
                SNA Technologies is positioned to work with businesses
                internationally through modern digital delivery and
                collaboration workflows.
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
            Have an industry-specific technology requirement?
          </h2>

          <p>
            Tell us about your workflows, systems and business goals.
            We can start by understanding the problem and defining
            the right technology direction.
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

export default Industries;