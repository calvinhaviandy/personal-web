import Image from "next/image";
import Link from "next/link";
import Icon from "@/app/components/Icon";
import ExperienceList from "@/app/components/ExperienceList";
import SelectedWork from "@/app/components/SelectedWork";
import experiences from "@/public/api/experience.json";
import projects from "@/public/api/project.json";

const socialLinks = [
  { label: "GitHub", icon: "github", href: "https://github.com/calvinhaviandy", external: true },
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/calvinhaviandy/", external: true },
  { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/calvinhaviandy/", external: true },
  { label: "Email", icon: "mail", href: "mailto:calvinhaviandy@gmail.com", external: false },
] as const;

const toolkit = ["TypeScript", "React", "Next.js", "Laravel", "Figma"];
const featuredProjectCount = projects.filter((project) => project.featured).length;

export default function HomePage() {
  return (
    <main id="top" className="home-page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-meta"><span>PORTFOLIO / 2026</span><span>BASED IN INDONESIA</span></div>

        <div className="portrait-orbit" aria-hidden="true">
          <span className="orbit-plane orbit-plane-one">
            <span className="orbit-rotor orbit-rotor-one"><span className="orbit-marker orbit-marker-one" /></span>
          </span>
          <span className="orbit-plane orbit-plane-two">
            <span className="orbit-rotor orbit-rotor-two"><span className="orbit-marker orbit-marker-two" /></span>
          </span>
          <div className="portrait-core">
            <Image
              src="/image/profile/space-avatar.png"
              alt=""
              fill
              priority
              sizes="(max-width: 600px) 128px, 152px"
              className="portrait-image"
            />
          </div>
        </div>

        <p className="hero-kicker"><span className="small-star" aria-hidden="true"><Icon name="sparkle" /></span> FULL-STACK DEVELOPER & DESIGNER</p>
        <h1 id="hero-title">Calvin<br /><span>Haviandy.</span></h1>
        <p className="hero-intro">I turn rough ideas into websites people can use. I design the screen, write the code, and care about how it feels.</p>
        <div className="availability"><span className="availability-dot" aria-hidden="true" /> AVAILABLE FOR SELECTED WORK</div>
      </section>

      <section id="links" className="content-section links-section" aria-labelledby="links-title">
        <div className="section-label"><span>01 / FIND ME</span></div>
        <h2 id="links-title" className="visually-hidden">Explore and connect</h2>
        <div className="links-panel">
          <Link href="#work" className="link-card">
            <span className="link-card-kicker">{String(featuredProjectCount).padStart(2, "0")} SELECTED PROJECTS</span>
            <svg className="link-card-orbit" viewBox="0 0 160 160" width="160" height="160" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true" focusable="false">
              <ellipse cx="80" cy="80" rx="68" ry="27" transform="rotate(-28 80 80)" />
              <ellipse cx="80" cy="80" rx="68" ry="27" transform="rotate(62 80 80)" />
              <circle cx="80" cy="80" r="16" />
              <circle cx="139" cy="48" r="3" fill="currentColor" stroke="none" />
              <circle cx="48" cy="21" r="2" fill="currentColor" stroke="none" />
              <path d="M80 72v16M72 80h16" />
            </svg>
            <div className="link-card-content">
              <strong className="link-card-title">Explore<br />my work.</strong>
              <p className="link-card-note">Websites, apps &amp; interfaces.</p>
            </div>
            <span className="link-card-arrow" aria-hidden="true"><Icon name="arrow-up-right" /></span>
          </Link>
          <ul className="social-links">
            {socialLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className="social-link"
                >
                  <span className="social-link-icon" aria-hidden="true"><Icon name={item.icon} /></span>
                  <span className="social-link-arrow" aria-hidden="true"><Icon name="arrow-up-right" /></span>
                  <strong className="social-link-label">{item.label}</strong>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <SelectedWork />

      <section id="about" className="content-section about-section" aria-labelledby="about-title">
        <div className="section-label"><span>03 / ABOUT</span><span>THE PERSON BEHIND THE SCREEN</span></div>
        <h2 id="about-title" className="section-title">Curious by design<span className="title-period">.</span></h2>
        <p className="about-copy">I&apos;m Calvin, a developer who also designs. I like taking an idea from its first sketch to the moment someone actually uses it. Clear interfaces, thoughtful details, and code that makes sense later matter to me.</p>
        <div className="toolkit-block">
          <p className="micro-label">TOOLS I REACH FOR</p>
          <ul className="toolkit-list">
            {toolkit.map((tool) => <li key={tool}>{tool}</li>)}
          </ul>
        </div>
      </section>

      <section id="experience" className="content-section experience-section" aria-labelledby="experience-title">
        <div className="section-label"><span>04 / EXPERIENCE</span><span>PAST & PRESENT</span></div>
        <h2 id="experience-title" className="section-title">Along the way<span className="title-period">.</span></h2>
        <ExperienceList items={experiences} />
      </section>

      <section id="contact" className="content-section contact-section" aria-labelledby="contact-title">
        <span className="contact-star" aria-hidden="true"><Icon name="asterisk" /></span>
        <p className="micro-label">05 / NEXT CONNECTION</p>
        <h2 id="contact-title">Have an idea<br />worth building?</h2>
        <p>Send me the rough version. We can figure out the rest together.</p>
        <a href="mailto:calvinhaviandy@gmail.com" className="contact-link">Let&apos;s talk <span aria-hidden="true"><Icon name="arrow-up-right" /></span></a>
        <a href="mailto:calvinhaviandy@gmail.com" className="contact-email">calvinhaviandy@gmail.com</a>
      </section>
    </main>
  );
}
