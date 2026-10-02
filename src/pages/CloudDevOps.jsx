import React, { useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";

import siteConfig from "../data/siteConfig";
import snaLogo from "../assets/sna-logo-dark.webp";

function CloudDevOps() {
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

    const title = "Cloud & DevOps Services | SNA Technologies";

    const description =
      "SNA Technologies provides cloud and DevOps services including CI/CD implementation, deployment automation, cloud infrastructure, cloud migration and reliable software delivery practices.";

    const canonical =
      "https://sna-technologies.com/services/cloud-devops/";

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
      "cloud-devops-service-schema"
    );

    if (existingSchema) {
      existingSchema.remove();
    }

    const schema = document.createElement("script");

    schema.id = "cloud-devops-service-schema";
    schema.type = "application/ld+json";

    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Cloud & DevOps Services",
      serviceType: "Cloud and DevOps Services",
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
        "cloud-devops-service-schema"
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
          <span className="eyebrow">CLOUD & DEVOPS</span>

          <h1>
            Reliable Cloud Infrastructure and DevOps Engineering
          </h1>

          <p className="service-hero-description">
            Build, deploy and operate software with greater confidence.
          </p>

          <p className="service-hero-copy">
            SNA Technologies helps businesses improve software delivery
            through cloud infrastructure, CI/CD, deployment automation
            and practical DevOps engineering.
          </p>

          <div className="button-row">
            <a href="/contact/" className="button button-solid">
              Discuss Your Infrastructure Needs
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
            <span className="eyebrow">CLOUD ENGINEERING</span>

            <h2>
              Infrastructure should support your software, not slow it
              down.
            </h2>
          </div>

          <div className="service-copy">
            <p>
              Modern applications depend on reliable infrastructure,
              repeatable deployments and clear operational practices.
              Cloud and DevOps engineering brings these areas together
              into a more consistent software delivery process.
            </p>

            <p>
              We help teams establish practical infrastructure and
              deployment workflows around their applications, whether
              they are starting a new product or improving an existing
              environment.
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
              Cloud and DevOps practices built around reliable delivery.
            </h2>
          </div>

          <div className="service-capability-grid">
            <article className="service-capability-card">
              <span>01</span>

              <h3>Cloud Infrastructure</h3>

              <p>
                Design and configure cloud infrastructure that supports
                application workloads, environments and operational
                requirements.
              </p>
            </article>

            <article className="service-capability-card">
              <span>02</span>

              <h3>CI/CD Implementation</h3>

              <p>
                Build continuous integration and delivery pipelines
                that make software builds, testing and deployments more
                repeatable.
              </p>
            </article>

            <article className="service-capability-card">
              <span>03</span>

              <h3>Deployment Automation</h3>

              <p>
                Automate application deployment processes to reduce
                repetitive manual steps and improve release
                consistency.
              </p>
            </article>

            <article className="service-capability-card">
              <span>04</span>

              <h3>Cloud Migration</h3>

              <p>
                Plan and execute application and infrastructure
                migrations with attention to dependencies, environments
                and operational continuity.
              </p>
            </article>

            <article className="service-capability-card">
              <span>05</span>

              <h3>Infrastructure Automation</h3>

              <p>
                Use repeatable configuration and automation practices
                to make infrastructure easier to manage and maintain.
              </p>
            </article>

            <article className="service-capability-card">
              <span>06</span>

              <h3>AWS DevOps</h3>

              <p>
                Apply cloud and DevOps engineering practices to
                applications running on AWS environments and services.
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
              A delivery pipeline that connects development and
              operations.
            </h2>
          </div>

          <div className="service-copy">
            <p>
              DevOps is more than deploying an application to the
              cloud. A reliable delivery process connects source
              control, builds, testing, deployment and operational
              environments.
            </p>

            <p>
              We focus on establishing repeatable workflows that allow
              development teams to move from code changes to validated
              deployments with fewer manual dependencies.
            </p>

            <div className="service-benefits">
              <article>
                <Check size={20} />

                <div>
                  <h3>Automated Builds</h3>

                  <p>
                    Create consistent application builds through
                    automated pipelines and defined build processes.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Automated Testing</h3>

                  <p>
                    Integrate automated validation into delivery
                    pipelines before software reaches deployment
                    environments.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Environment Management</h3>

                  <p>
                    Establish clearer development, testing, staging and
                    production environment workflows.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Repeatable Deployments</h3>

                  <p>
                    Reduce deployment variation through automated and
                    documented release processes.
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
              From infrastructure requirements to reliable delivery.
            </h2>
          </div>

          <div className="service-process-grid">
            <article>
              <span>01</span>

              <h3>Assess</h3>

              <p>
                Understand the existing application, infrastructure,
                deployment process and operational requirements.
              </p>
            </article>

            <article>
              <span>02</span>

              <h3>Design</h3>

              <p>
                Define the cloud architecture, environments,
                infrastructure and delivery pipeline.
              </p>
            </article>

            <article>
              <span>03</span>

              <h3>Implement</h3>

              <p>
                Build infrastructure, configure CI/CD and automate the
                required deployment workflows.
              </p>
            </article>

            <article>
              <span>04</span>

              <h3>Improve</h3>

              <p>
                Monitor the environment and continuously improve
                reliability, deployment workflows and operational
                practices.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Integration */}
      <section className="service-section service-section-light">
        <div className="container service-two-column">
          <div className="section-heading">
            <span className="eyebrow">DELIVERY ECOSYSTEM</span>

            <h2>
              Connect development tools, infrastructure and delivery
              workflows.
            </h2>
          </div>

          <div className="service-copy">
            <p>
              A DevOps environment typically spans multiple tools and
              systems. We can help connect source control, CI/CD,
              automated testing, infrastructure and deployment
              workflows into a more consistent delivery process.
            </p>

            <div className="service-benefits">
              <article>
                <Check size={20} />

                <div>
                  <h3>Source Control</h3>

                  <p>
                    Integrate development workflows with source control
                    and structured branching practices.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>CI/CD Pipelines</h3>

                  <p>
                    Automate builds, validation and deployments through
                    continuous integration and delivery workflows.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Cloud Platforms</h3>

                  <p>
                    Connect application delivery workflows with cloud
                    infrastructure and services.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Testing & Quality</h3>

                  <p>
                    Include automated quality checks and testing within
                    the software delivery lifecycle.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Reliability */}
      <section className="service-section service-section-dark">
        <div className="container service-two-column">
          <div className="section-heading light">
            <span className="eyebrow">RELIABILITY</span>

            <h2>
              Infrastructure and delivery designed for repeatability.
            </h2>
          </div>

          <div className="service-copy service-copy-dark">
            <p>
              Reliable delivery depends on reducing unnecessary
              variation. Infrastructure, deployments and validation
              should follow defined and repeatable processes wherever
              practical.
            </p>

            <p>
              We consider deployment dependencies, failure scenarios,
              environment differences and operational visibility when
              designing DevOps workflows.
            </p>

            <div className="service-benefits">
              <article>
                <Check size={20} />

                <div>
                  <h3>Deployment Consistency</h3>

                  <p>
                    Reduce variation between deployments through
                    repeatable automated processes.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Environment Isolation</h3>

                  <p>
                    Maintain clearer separation between development,
                    testing and production environments.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Operational Visibility</h3>

                  <p>
                    Improve visibility into deployments,
                    infrastructure and application operations.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Maintainable Infrastructure</h3>

                  <p>
                    Keep infrastructure and delivery workflows
                    understandable and adaptable as requirements evolve.
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
              DevOps engineering focused on practical software
              delivery.
            </h2>
          </div>

          <div className="service-benefits">
            <article>
              <Check size={20} />

              <div>
                <h3>Engineering-First Approach</h3>

                <p>
                  We treat infrastructure and delivery as engineering
                  problems connected to the application itself.
                </p>
              </div>
            </article>

            <article>
              <Check size={20} />

              <div>
                <h3>Automation-Driven Delivery</h3>

                <p>
                  We focus on reducing unnecessary manual steps through
                  repeatable automation.
                </p>
              </div>
            </article>

            <article>
              <Check size={20} />

              <div>
                <h3>Quality Integration</h3>

                <p>
                  Testing and validation can be integrated directly
                  into the software delivery lifecycle.
                </p>
              </div>
            </article>

            <article>
              <Check size={20} />

              <div>
                <h3>Long-Term Maintainability</h3>

                <p>
                  Infrastructure and deployment workflows should remain
                  understandable as applications and teams evolve.
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
              Common questions about cloud and DevOps services.
            </h2>
          </div>

          <div className="service-faq">
            <article>
              <h3>What are DevOps services?</h3>

              <p>
                DevOps services help connect software development and
                operations through practices such as CI/CD, deployment
                automation, infrastructure management, testing and
                operational workflows.
              </p>
            </article>

            <article>
              <h3>Can you help improve an existing CI/CD pipeline?</h3>

              <p>
                Yes. Existing pipelines can be reviewed and improved
                around build automation, automated testing, deployment
                workflows and environment management.
              </p>
            </article>

            <article>
              <h3>Do you provide AWS DevOps services?</h3>

              <p>
                We can design and implement cloud and DevOps workflows
                for applications running in AWS environments, depending
                on the application's architecture and requirements.
              </p>
            </article>

            <article>
              <h3>Can you migrate an existing application to the cloud?</h3>

              <p>
                Cloud migration can involve application, infrastructure,
                data and deployment considerations. The appropriate
                migration approach depends on the existing system and
                its operational requirements.
              </p>
            </article>

            <article>
              <h3>
                Can automated testing be included in our DevOps
                pipeline?
              </h3>

              <p>
                Yes. Automated API, integration, UI and other suitable
                tests can be incorporated into CI/CD workflows to
                provide validation during software delivery.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="service-cta">
        <div className="container">
          <span className="eyebrow">BUILD WITH CONFIDENCE</span>

          <h2>
            Ready to improve how your software is built and deployed?
          </h2>

          <p>
            Tell us about your application, infrastructure or delivery
            challenges. We can explore a practical cloud and DevOps
            approach around your existing technology.
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

export default CloudDevOps;