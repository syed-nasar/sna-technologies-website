import React, { useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";

import siteConfig from "../data/siteConfig";
import snaLogo from "../assets/sna-logo-dark.webp";

function QATestAutomation() {
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

    const title = "QA & Test Automation Services | SNA Technologies";

    const description =
      "SNA Technologies provides QA and test automation services including UI automation, API testing, regression automation, software testing and CI/CD test automation for reliable software delivery.";

    const canonical =
      "https://sna-technologies.com/services/qa-test-automation/";

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
      "qa-test-automation-service-schema"
    );

    if (existingSchema) {
      existingSchema.remove();
    }

    const schema = document.createElement("script");

    schema.id = "qa-test-automation-service-schema";
    schema.type = "application/ld+json";

    schema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "QA & Test Automation Services",
      serviceType: "QA and Test Automation Services",
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
        "qa-test-automation-service-schema"
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
          <span className="eyebrow">QA & TEST AUTOMATION</span>

          <h1>
            Quality Engineering and Test Automation That Protects Every
            Release
          </h1>

          <p className="service-hero-description">
            Build confidence into every stage of software delivery.
          </p>

          <p className="service-hero-copy">
            SNA Technologies helps businesses improve software quality
            through automated testing, API validation, regression
            automation and quality engineering practices integrated into
            modern delivery workflows.
          </p>

          <div className="button-row">
            <a href="/contact/" className="button button-solid">
              Discuss Your QA Needs
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
            <span className="eyebrow">QUALITY ENGINEERING</span>

            <h2>
              Quality should be part of the delivery process, not the
              final checkpoint.
            </h2>
          </div>

          <div className="service-copy">
            <p>
              Modern software changes continuously. As applications
              grow, relying entirely on manual regression testing can
              make releases slower and increase the risk of defects
              reaching users.
            </p>

            <p>
              We build practical QA and test automation solutions that
              help teams validate critical functionality repeatedly,
              identify problems earlier and maintain confidence as their
              products evolve.
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
              Automated quality engineering across the software
              lifecycle.
            </h2>
          </div>

          <div className="service-capability-grid">
            <article className="service-capability-card">
              <span>01</span>

              <h3>UI Test Automation</h3>

              <p>
                Automate critical user journeys and application
                workflows to validate frontend functionality across
                supported environments.
              </p>
            </article>

            <article className="service-capability-card">
              <span>02</span>

              <h3>API Test Automation</h3>

              <p>
                Validate APIs, service responses, business rules and
                integration points through automated API testing.
              </p>
            </article>

            <article className="service-capability-card">
              <span>03</span>

              <h3>Regression Automation</h3>

              <p>
                Build maintainable regression suites that repeatedly
                validate important application functionality as the
                product changes.
              </p>
            </article>

            <article className="service-capability-card">
              <span>04</span>

              <h3>End-to-End Testing</h3>

              <p>
                Automate complete business workflows across connected
                application components and systems.
              </p>
            </article>

            <article className="service-capability-card">
              <span>05</span>

              <h3>CI/CD Test Automation</h3>

              <p>
                Integrate automated tests into CI/CD pipelines so
                software can be validated consistently throughout the
                delivery lifecycle.
              </p>
            </article>

            <article className="service-capability-card">
              <span>06</span>

              <h3>Quality Engineering</h3>

              <p>
                Establish automation and validation practices that
                improve test coverage, release confidence and long-term
                maintainability.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Engineering */}
      <section className="service-section service-section-light">
        <div className="container service-two-column">
          <div className="section-heading">
            <span className="eyebrow">AUTOMATION ENGINEERING</span>

            <h2>
              Automation designed around the way your application
              actually works.
            </h2>
          </div>

          <div className="service-copy">
            <p>
              Effective test automation is more than writing scripts.
              The automation architecture needs to remain reliable as
              applications, environments and requirements change.
            </p>

            <p>
              We focus on reusable test components, clear test
              organization, reliable synchronization, meaningful
              validation and maintainable automation workflows.
            </p>

            <div className="service-benefits">
              <article>
                <Check size={20} />

                <div>
                  <h3>Maintainable Frameworks</h3>

                  <p>
                    Structure automation frameworks so tests and shared
                    components remain easier to maintain as applications
                    evolve.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Reusable Components</h3>

                  <p>
                    Build reusable utilities and automation components
                    that reduce unnecessary duplication across test
                    suites.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Reliable Validation</h3>

                  <p>
                    Focus assertions on meaningful application
                    behavior, data and business outcomes rather than
                    fragile implementation details.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Clear Test Reporting</h3>

                  <p>
                    Organize test execution and results so teams can
                    understand failures and take appropriate action.
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
              From quality assessment to reliable automated coverage.
            </h2>
          </div>

          <div className="service-process-grid">
            <article>
              <span>01</span>

              <h3>Assess</h3>

              <p>
                Understand the application, existing test coverage,
                release process, environments and quality challenges.
              </p>
            </article>

            <article>
              <span>02</span>

              <h3>Plan</h3>

              <p>
                Identify automation opportunities and define a test
                strategy around critical functionality and business
                risk.
              </p>
            </article>

            <article>
              <span>03</span>

              <h3>Automate</h3>

              <p>
                Build and integrate automated UI, API, regression and
                end-to-end tests based on the agreed testing strategy.
              </p>
            </article>

            <article>
              <span>04</span>

              <h3>Improve</h3>

              <p>
                Review automation results, maintain test suites and
                continuously improve coverage and reliability.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="service-section service-section-light">
        <div className="container service-two-column">
          <div className="section-heading">
            <span className="eyebrow">AUTOMATION TECHNOLOGY</span>

            <h2>
              Modern testing tools for web, API and delivery
              automation.
            </h2>
          </div>

          <div className="service-copy">
            <p>
              The right automation technology depends on the
              application, team, existing technology and testing
              objectives. We work with modern automation approaches
              suited to the product and its delivery workflow.
            </p>

            <div className="service-benefits">
              <article>
                <Check size={20} />

                <div>
                  <h3>Selenium</h3>

                  <p>
                    Browser automation for web applications and
                    established automated testing environments.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Playwright</h3>

                  <p>
                    Modern browser automation for reliable end-to-end
                    testing of web applications.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Cypress</h3>

                  <p>
                    Fast and developer-friendly web testing for
                    application workflows and regression coverage.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>API Testing</h3>

                  <p>
                    Automated API validation for services, integrations,
                    responses and business logic.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* CI/CD */}
      <section className="service-section service-section-dark">
        <div className="container service-two-column">
          <div className="section-heading light">
            <span className="eyebrow">CONTINUOUS QUALITY</span>

            <h2>
              Put automated testing where it can protect every
              release.
            </h2>
          </div>

          <div className="service-copy service-copy-dark">
            <p>
              Automated testing becomes more valuable when it is part of
              the software delivery process rather than executed only
              before major releases.
            </p>

            <p>
              Integrating appropriate automated tests into CI/CD
              workflows allows teams to receive earlier feedback when
              changes affect existing functionality.
            </p>

            <div className="service-benefits">
              <article>
                <Check size={20} />

                <div>
                  <h3>Pull Request Validation</h3>

                  <p>
                    Run appropriate automated checks as part of the
                    development and code review workflow.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Regression Gates</h3>

                  <p>
                    Use automated regression suites to provide
                    validation before software moves through delivery
                    stages.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Scheduled Testing</h3>

                  <p>
                    Run selected test suites on scheduled or recurring
                    workflows when continuous execution is appropriate.
                  </p>
                </div>
              </article>

              <article>
                <Check size={20} />

                <div>
                  <h3>Faster Feedback</h3>

                  <p>
                    Give development and delivery teams earlier
                    visibility into automated test failures.
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
              Quality engineering focused on reliable software
              delivery.
            </h2>
          </div>

          <div className="service-benefits">
            <article>
              <Check size={20} />

              <div>
                <h3>Automation-First Thinking</h3>

                <p>
                  We identify repeatable validation opportunities and
                  use automation where it provides meaningful value.
                </p>
              </div>
            </article>

            <article>
              <Check size={20} />

              <div>
                <h3>Engineering-Focused QA</h3>

                <p>
                  Testing is considered alongside application
                  architecture, development and delivery workflows.
                </p>
              </div>
            </article>

            <article>
              <Check size={20} />

              <div>
                <h3>API & UI Coverage</h3>

                <p>
                  Automated validation can cover both application
                  interfaces and the APIs and services behind them.
                </p>
              </div>
            </article>

            <article>
              <Check size={20} />

              <div>
                <h3>CI/CD Integration</h3>

                <p>
                  Test automation can become part of the delivery
                  pipeline so quality checks happen continuously.
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
              Common questions about QA and test automation services.
            </h2>
          </div>

          <div className="service-faq">
            <article>
              <h3>What is test automation?</h3>

              <p>
                Test automation uses software and automated frameworks
                to execute repeatable tests, validate application
                behavior and provide faster feedback during software
                development and delivery.
              </p>
            </article>

            <article>
              <h3>What types of testing can you automate?</h3>

              <p>
                Depending on the application, automation can cover UI
                workflows, APIs, regression scenarios, integration
                flows and end-to-end business processes.
              </p>
            </article>

            <article>
              <h3>Do you provide Selenium, Playwright and Cypress automation?</h3>

              <p>
                Yes. Selenium, Playwright and Cypress can be used for
                web application automation depending on the project's
                technology, requirements and existing testing
                environment.
              </p>
            </article>

            <article>
              <h3>Can API testing be integrated into CI/CD?</h3>

              <p>
                Yes. Automated API tests can be executed as part of CI
                and CD workflows to validate services and integrations
                before software progresses through delivery stages.
              </p>
            </article>

            <article>
              <h3>Can you build a test automation framework from scratch?</h3>

              <p>
                Yes. A framework can be designed around the
                application's architecture, testing requirements,
                development workflow and preferred automation
                technology.
              </p>
            </article>

            <article>
              <h3>Can you improve an existing automation framework?</h3>

              <p>
                Existing frameworks can be reviewed for maintainability,
                reliability, coverage, execution time and integration
                with the software delivery process.
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
            Ready to make quality part of every release?
          </h2>

          <p>
            Tell us about your application, current testing process or
            automation challenges. We can explore a practical quality
            engineering approach around your product.
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

export default QATestAutomation;