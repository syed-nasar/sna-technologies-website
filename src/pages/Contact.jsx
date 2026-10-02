import React, { useEffect } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

import siteConfig from "../data/siteConfig";
import snaLogo from "../assets/sna-logo-dark.webp";

function Contact() {
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
      "Contact SNA Technologies | Start a Software Project";

    const description =
      "Contact SNA Technologies to discuss custom software, web and mobile applications, AI automation, cloud, DevOps or QA test automation.";

    const canonical = "https://sna-technologies.com/contact/";

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

    const existingSchema = document.getElementById("contact-page-schema");

    if (existingSchema) {
      existingSchema.remove();
    }

    const schema = document.createElement("script");

    schema.id = "contact-page-schema";
    schema.type = "application/ld+json";

    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: title,
      description,
      url: canonical,
      mainEntity: {
        "@type": "Organization",
        name: siteConfig.company.name,
        legalName: "SNA TECHNOLOGIES (SMC-PRIVATE) LIMITED",
        url: "https://sna-technologies.com/",
        email: siteConfig.company.email,
        telephone: siteConfig.company.phone,
      },
    });

    document.head.appendChild(schema);

    return () => {
      const schemaElement = document.getElementById(
        "contact-page-schema"
      );

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
          <span className="eyebrow">LET'S BUILD</span>

          <h1>Let's Turn Your Technology Idea Into Something Real.</h1>

          <p className="service-hero-description">
            Tell us what you are trying to build, improve or
            automate.
          </p>

          <p className="service-hero-copy">
            Whether you are starting a new digital product,
            modernizing an existing system or looking to automate a
            business workflow, the conversation starts with
            understanding the problem.
          </p>

          <div className="button-row">
            <a
              href={`mailto:${siteConfig.company.email}`}
              className="button button-solid"
            >
              Email Us
              <ArrowRight size={16} />
            </a>

            <a href="#contact-details" className="button button-outline">
              Contact Details
            </a>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <section
        id="contact-details"
        className="service-section service-section-light"
      >
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">GET IN TOUCH</span>

            <h2>
              Tell us what you want to build.
            </h2>
          </div>

          <div className="service-benefits">
            <article>
              <Mail size={22} />

              <div>
                <h3>Email</h3>

                <p>
                  <a href={`mailto:${siteConfig.company.email}`}>
                    {siteConfig.company.email}
                  </a>
                </p>
              </div>
            </article>

            <article>
              <Phone size={22} />

              <div>
                <h3>Phone</h3>

                <p>
                  <a
                    href={`tel:${siteConfig.company.phone.replace(
                      /\s+/g,
                      ""
                    )}`}
                  >
                    {siteConfig.company.phone}
                  </a>
                </p>
              </div>
            </article>

            <article>
              <MapPin size={22} />

              <div>
                <h3>Location</h3>

                <p>{siteConfig.company.location}</p>
              </div>
            </article>

            <article>
              <ArrowRight size={22} />

              <div>
                <h3>Project Discussions</h3>

                <p>
                  Share your requirements, goals and existing
                  challenges so we can understand what you need.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* What to Share */}
      <section className="service-section service-section-dark">
        <div className="container service-two-column">
          <div className="section-heading light">
            <span className="eyebrow">STARTING THE CONVERSATION</span>

            <h2>
              You do not need to have everything figured out.
            </h2>
          </div>

          <div className="service-copy service-copy-dark">
            <p>
              A project conversation can start with a business
              problem, an idea, an existing application or a process
              that needs improvement.
            </p>

            <p>
              The more context you can provide, the easier it is to
              understand the scope and identify an appropriate
              technical direction.
            </p>

            <div className="service-benefits">
              <article>
                <div>
                  <h3>What are you trying to solve?</h3>

                  <p>
                    Describe the business problem or opportunity that
                    led you to look for a technology solution.
                  </p>
                </div>
              </article>

              <article>
                <div>
                  <h3>What are you trying to build?</h3>

                  <p>
                    Share what you have in mind, whether it is an
                    application, platform, automation or digital
                    product.
                  </p>
                </div>
              </article>

              <article>
                <div>
                  <h3>What exists today?</h3>

                  <p>
                    Tell us about existing software, workflows,
                    integrations or systems that are part of the
                    environment.
                  </p>
                </div>
              </article>

              <article>
                <div>
                  <h3>What does success look like?</h3>

                  <p>
                    Explain the outcome you want the technology to
                    support.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="service-section service-section-light">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">WHAT CAN WE HELP WITH?</span>

            <h2>
              Technology services for different stages of your
              business.
            </h2>
          </div>

          <div className="service-process-grid">
            <article>
              <span>01</span>

              <h3>Custom Software</h3>

              <p>
                Purpose-built business software and applications
                designed around your requirements.
              </p>
            </article>

            <article>
              <span>02</span>

              <h3>Web & Mobile</h3>

              <p>
                Modern web and mobile applications for customers,
                employees and business operations.
              </p>
            </article>

            <article>
              <span>03</span>

              <h3>AI & Automation</h3>

              <p>
                Intelligent workflows and automation for repetitive
                processes and operational efficiency.
              </p>
            </article>

            <article>
              <span>04</span>

              <h3>Cloud, DevOps & QA</h3>

              <p>
                Delivery infrastructure, deployment automation and
                quality engineering for software teams.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="container">
          <span className="eyebrow">START A CONVERSATION</span>

          <h2>
            Have an idea, system or workflow you want to improve?
          </h2>

          <p>
            Get in touch with SNA Technologies and tell us what you
            are trying to build, improve or automate.
          </p>

          <a
            href={`mailto:${siteConfig.company.email}`}
            className="button button-light"
          >
            {siteConfig.company.email}
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

export default Contact;