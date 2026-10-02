import React, { useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";

import siteConfig from "../data/siteConfig";
import snaLogo from "../assets/sna-logo-dark.webp";

function Services() {
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
      "Software Development & Technology Services | SNA Technologies";

    const description =
      "Explore SNA Technologies software development and technology services including custom software, web and mobile applications, AI automation, cloud DevOps and QA test automation.";

    const canonical = "https://sna-technologies.com/services/";

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

    const existingSchema = document.getElementById("services-page-schema");

    if (existingSchema) {
      existingSchema.remove();
    }

    const schema = document.createElement("script");

    schema.id = "services-page-schema";
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
            name: "Custom Software Development",
            url: "https://sna-technologies.com/services/custom-software-development/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Web Application Development",
            url: "https://sna-technologies.com/services/web-application-development/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Mobile App Development",
            url: "https://sna-technologies.com/services/mobile-app-development/",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "AI & Business Automation",
            url: "https://sna-technologies.com/services/ai-automation/",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Cloud & DevOps",
            url: "https://sna-technologies.com/services/cloud-devops/",
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "QA & Test Automation",
            url: "https://sna-technologies.com/services/qa-test-automation/",
          },
        ],
      },
    });

    document.head.appendChild(schema);

    return () => {
      const schemaElement = document.getElementById(
        "services-page-schema"
      );

      if (schemaElement) {
        schemaElement.remove();
      }
    };
  }, []);

  const services = [
    {
      number: "01",
      title: "Custom Software Development",
      description:
        "Purpose-built software designed around your workflows, users and business goals.",
      href: "/services/custom-software-development/",
    },
    {
      number: "02",
      title: "Web Application Development",
      description:
        "Modern, responsive and high-performance web applications for business operations and digital products.",
      href: "/services/web-application-development/",
    },
    {
      number: "03",
      title: "Mobile App Development",
      description:
        "User-focused mobile applications for Android, iOS and cross-platform delivery.",
      href: "/services/mobile-app-development/",
    },
    {
      number: "04",
      title: "AI & Business Automation",
      description:
        "Intelligent workflows and automation designed to reduce repetitive work and improve business processes.",
      href: "/services/ai-automation/",
    },
    {
      number: "05",
      title: "Cloud & DevOps",
      description:
        "Cloud infrastructure, CI/CD, deployment automation and DevOps practices for reliable software delivery.",
      href: "/services/cloud-devops/",
    },
    {
      number: "06",
      title: "QA & Test Automation",
      description:
        "Quality engineering, UI automation, API testing and automated validation that protects every release.",
      href: "/services/qa-test-automation/",
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
          <span className="eyebrow">OUR SERVICES</span>

          <h1>Technology Services Built Around Your Business.</h1>

          <p className="service-hero-description">
            From software development to automation, cloud and
            quality engineering.
          </p>

          <p className="service-hero-copy">
            SNA Technologies provides software and technology services
            across the digital product lifecycle. We combine
            engineering, automation and product thinking to build
            practical solutions around real business requirements.
          </p>

          <div className="button-row">
            <a href="#services" className="button button-solid">
              Explore Services
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
            <span className="eyebrow">END-TO-END ENGINEERING</span>

            <h2>
              One technology partner across multiple stages of
              delivery.
            </h2>
          </div>

          <div className="service-copy">
            <p>
              A digital product may require more than application
              development. It can involve architecture, integrations,
              automation, deployment infrastructure and continuous
              quality validation.
            </p>

            <p>
              Our services cover these areas so businesses can address
              individual technology requirements or combine multiple
              capabilities around a larger initiative.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="service-section service-section-dark"
      >
        <div className="container">
          <div className="section-heading light">
            <span className="eyebrow">CAPABILITIES</span>

            <h2>
              Software and technology services for modern businesses.
            </h2>
          </div>

          <div className="service-capability-grid">
            {services.map((service) => (
              <article
                className="service-capability-card"
                key={service.number}
              >
                <span>{service.number}</span>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <a
                  href={service.href}
                  className="button button-outline"
                  style={{
                    marginTop: "28px",
                    display: "inline-flex",
                  }}
                >
                  Explore Service
                  <ArrowRight size={15} />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Service Selection */}
      <section className="service-section service-section-light">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">WHERE TO START</span>

            <h2>
              The right starting point depends on the problem you
              need to solve.
            </h2>
          </div>

          <div className="service-process-grid">
            <article>
              <span>01</span>

              <h3>New Product</h3>

              <p>
                Starting a new software product, business platform,
                web application or mobile application.
              </p>
            </article>

            <article>
              <span>02</span>

              <h3>Existing System</h3>

              <p>
                Improving, extending, integrating or modernizing an
                existing application or business system.
              </p>
            </article>

            <article>
              <span>03</span>

              <h3>Business Automation</h3>

              <p>
                Replacing repetitive processes with connected
                workflows and intelligent automation.
              </p>
            </article>

            <article>
              <span>04</span>

              <h3>Software Quality</h3>

              <p>
                Building automated testing and quality engineering
                into an existing software delivery process.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Engineering Principles */}
      <section className="service-section service-section-dark">
        <div className="container">
          <div className="section-heading light">
            <span className="eyebrow">OUR ENGINEERING PRINCIPLES</span>

            <h2>
              Technology decisions should support the business.
            </h2>
          </div>

          <div className="service-benefits">
            <article>
              <Check size={20} />

              <div>
                <h3>Business-First</h3>

                <p>
                  Start with the business problem and desired outcome,
                  then define the technology around it.
                </p>
              </div>
            </article>

            <article>
              <Check size={20} />

              <div>
                <h3>Maintainable</h3>

                <p>
                  Build systems that can be understood, maintained
                  and extended as requirements evolve.
                </p>
              </div>
            </article>

            <article>
              <Check size={20} />

              <div>
                <h3>Automation-Driven</h3>

                <p>
                  Identify opportunities to automate repetitive
                  technical and business processes.
                </p>
              </div>
            </article>

            <article>
              <Check size={20} />

              <div>
                <h3>Quality-Focused</h3>

                <p>
                  Integrate testing and validation throughout the
                  software delivery lifecycle.
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
            <span className="eyebrow">OUR PROCESS</span>

            <h2>
              A structured approach from discovery to delivery.
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
              Questions about our technology services.
            </h2>
          </div>

          <div className="service-faq">
            <article>
              <h3>What software development services do you provide?</h3>

              <p>
                SNA Technologies provides custom software development,
                web application development, mobile app development,
                AI and business automation, cloud and DevOps, and QA
                and test automation services.
              </p>
            </article>

            <article>
              <h3>Can multiple services be combined in one project?</h3>

              <p>
                Yes. A project may combine software development,
                automation, integrations, cloud infrastructure,
                deployment workflows and quality engineering depending
                on its requirements.
              </p>
            </article>

            <article>
              <h3>Can you work with an existing development team?</h3>

              <p>
                Technology services can be structured around existing
                systems and delivery workflows, depending on the
                project requirements and responsibilities involved.
              </p>
            </article>

            <article>
              <h3>Do you work with international businesses?</h3>

              <p>
                SNA Technologies is positioned to work with businesses
                internationally through modern digital delivery and
                collaboration workflows.
              </p>
            </article>

            <article>
              <h3>How do I discuss a potential project?</h3>

              <p>
                Contact us with an overview of the problem, product,
                workflow or system you are working with. We can then
                discuss the requirements and potential technical
                direction.
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
            Have a technology requirement? Let's talk about it.
          </h2>

          <p>
            Whether you need software, automation, cloud engineering
            or quality engineering, start with the business problem.
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

export default Services;