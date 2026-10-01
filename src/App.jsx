import React from 'react';
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X, Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import siteConfig from "./data/siteConfig";
import snaLogo from "./assets/sna-logo-dark.png";

const reveal = {
  hidden: { opacity: 0, y: 35 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

function SectionHeading({ eyebrow, title, light = false }) {
  return (
    <motion.div
      className={`section-heading ${light ? "light" : ""}`}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </motion.div>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <a className="logo" href="#home" onClick={() => setOpen(false)}>
        <img src={snaLogo} alt="SNA Technologies" />
      </a>

      <nav className={`nav-links ${open ? "open" : ""}`}>
        {siteConfig.navigation.map((item) => (
          <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
            {item.label}
          </a>
        ))}
      </nav>

      <a className="nav-cta" href="#contact">Let's Talk <ArrowUpRight size={16} /></a>

      <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((current) => (current + 1) % siteConfig.hero.rotatingWords.length),
      2200
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-grid" />
      <div className="hero-orb orb-one" />
      <div className="hero-orb orb-two" />

      <div className="container hero-content">
        <motion.div initial="hidden" animate="show" variants={reveal}>
          <span className="eyebrow">{siteConfig.hero.eyebrow}</span>
          <h1>{siteConfig.hero.title}</h1>
          <p className="hero-description">{siteConfig.hero.description}</p>

          <div className="hero-word">
            <span>We engineer</span>
            <AnimatePresence mode="wait">
              <motion.strong
                key={siteConfig.hero.rotatingWords[index]}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
              >
                {siteConfig.hero.rotatingWords[index]}
              </motion.strong>
            </AnimatePresence>
          </div>

          <div className="button-row">
            <a className="button button-solid" href={siteConfig.hero.primaryButton.href}>
              {siteConfig.hero.primaryButton.text} <ArrowUpRight size={18} />
            </a>
            <a className="button button-outline" href={siteConfig.hero.secondaryButton.href}>
              {siteConfig.hero.secondaryButton.text}
            </a>
          </div>
        </motion.div>
      </div>

      <div className="hero-bottom">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="stats">
      <div className="container stats-grid">
        {siteConfig.stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="container two-column">
        <SectionHeading eyebrow={siteConfig.about.eyebrow} title={siteConfig.about.title} />
        <motion.div className="about-copy" variants={reveal} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <p>{siteConfig.about.description}</p>
          <div className="highlight-list">
            {siteConfig.about.highlights.map((item, i) => (
              <div className="highlight" key={item}>
                <span>0{i + 1}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const [active, setActive] = useState(null);

  return (
    <section className="section services" id="services">
      <div className="container">
        <SectionHeading eyebrow="WHAT WE DO" title="Technology designed to create momentum." light />

        <div className="service-list">
          {siteConfig.services.map((service, i) => {
            const isActive = active === i;
            return (
              <motion.div
                className={`service-row ${isActive ? "active" : ""}`}
                key={service.title}
                variants={reveal}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.15 }}
                onClick={() => setActive(isActive ? null : i)}
              >
                <span className="service-number">{service.number}</span>
                <div className="service-main">
                  <h3>{service.title}</h3>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        {service.description}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
                <div className="service-icon">{isActive ? <Minus /> : <Plus />}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="section process">
      <div className="container">
        <SectionHeading eyebrow="HOW WE WORK" title="From challenge to working product." />

        <div className="process-grid">
          {siteConfig.process.map((item) => (
            <motion.div
              className="process-card"
              key={item.number}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="section work" id="work">
      <div className="container">
        <SectionHeading eyebrow="SELECTED WORK" title="Ideas become products." light />

        <div className="project-grid">
          {siteConfig.projects.map((project, i) => (
            <motion.article
              className={`project-card project-${i + 1}`}
              key={project.title}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
            >
              <div className="project-visual">
                <span>{project.tag}</span>
                <div className="visual-lines" />
                <strong>0{i + 1}</strong>
              </div>
              <div className="project-info">
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.href}>
  View Case Study <ArrowUpRight size={17} />
</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="section industries">
      <div className="container">
        <SectionHeading eyebrow="INDUSTRIES" title="Technology for real-world businesses." />
        <div className="industry-cloud">
          {siteConfig.industries.map((industry) => (
            <span key={industry}>{industry}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="section testimonials">
      <div className="container">
        <SectionHeading eyebrow="CLIENT PERSPECTIVE" title="Built with purpose. Delivered with discipline." />
        <div className="testimonial-grid">
          {siteConfig.testimonials.map((item) => (
            <motion.blockquote
              key={item.name + item.role}
              variants={reveal}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <span className="quote-mark">“</span>
              <p>{item.quote}</p>
              <footer>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-glow" />
      <div className="container contact-inner">
        <span className="eyebrow">{siteConfig.contact.eyebrow}</span>
        <h2>{siteConfig.contact.title}</h2>
        <p>{siteConfig.contact.description}</p>
        <a className="button button-light" href={`mailto:${siteConfig.company.email}`}>
          {siteConfig.contact.buttonText} <ArrowUpRight size={19} />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-top">
        <div>
          <a className="logo" href="#home">
            <img src={snaLogo} alt="SNA Technologies" />
          </a>
          <p>{siteConfig.company.description}</p>
        </div>
        <div className="footer-column">
          <span>EXPLORE</span>
          {siteConfig.navigation.slice(1).map((item) => (
            <a key={item.label} href={item.href}>{item.label}</a>
          ))}
        </div>
        <div className="footer-column">
          <span>CONTACT</span>
          <a href={`mailto:${siteConfig.company.email}`}>{siteConfig.company.email}</a>
          <span>{siteConfig.company.phone}</span>
          <span>{siteConfig.company.location}</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>{siteConfig.footer.copyright}</span>
        <div>
          <a href={siteConfig.social.linkedin}>LinkedIn</a>
          <a href={siteConfig.social.facebook}>Facebook</a>
          <a href={siteConfig.social.instagram}>Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Services />
        <Process />
        <Work />
        <Industries />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
