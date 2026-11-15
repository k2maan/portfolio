import Image from "next/image";
import portrait from "@/public/portrait-square.jpg";
import { bluecoreUrl, contact, experience, products, timeline, workStories } from "@/lib/data";
import CopyEmail from "@/components/copy-email";
import ShippedStrip from "@/components/shipped-strip";
import ProjectIndex from "@/components/project-index";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export default function Home() {
  return (
    <>
      <section className="intro" aria-labelledby="intro-name">
        <div className="intro-inner">
          <div className="intro-head">
            <h1 id="intro-name">Ketuman Vishwakarma</h1>
            <Image
              className="intro-portrait"
              src={portrait}
              alt="Ketuman, smiling, in a black jacket and shirt"
              sizes="(min-width: 860px) 176px, 96px"
              priority
            />
          </div>
          <p className="intro-lead">
            I’m a Forward Deployed Engineer at{" "}
            <a href={bluecoreUrl} target="_blank" rel="noopener noreferrer">
              Bluecore
            </a>
            , helping large retailers get our product live and keep it working. On my own time I build small products,
            and I’m moving on to more serious ones.
          </p>
          <ul className="intro-links">
            <li>
              <CopyEmail email={contact.email} />
            </li>
            <li>
              <a href={contact.github} target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
                GitHub
              </a>
            </li>
            <li>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
                LinkedIn
              </a>
            </li>
            <li>
              <a href={contact.x} target="_blank" rel="noopener noreferrer">
                <XIcon />X
              </a>
            </li>
          </ul>
          <ShippedStrip products={products} timeline={timeline} />
        </div>
      </section>

      <section id="projects" className="section projects" aria-labelledby="projects-title">
        <div className="section-head">
          <h2 id="projects-title">Projects</h2>
          <p className="section-lead">Products I’ve designed and built on my own.</p>
        </div>
        <ProjectIndex products={products} />
      </section>

      <section id="work" className="work" aria-labelledby="work-title">
        <div className="work-inner">
          <div className="section-head">
            <h2 id="work-title">Work</h2>
            <p className="section-lead">
              At Bluecore I work directly with enterprise retail brands in the US, EU, UK, Japan and Canada, from scoping
              an integration to supporting it in production.
            </p>
          </div>

          <div className="stories">
            {workStories.map((story) => (
              <article key={story.title} className="story">
                <div className="story-text">
                  <h3>{story.title}</h3>
                  <p className="story-body">{story.short}</p>
                  {story.aside && <p className="story-aside">{story.aside}</p>}
                </div>
                <p className="story-fact">
                  <span className="story-figure">{story.figure}</span>
                  <span className="story-label">{story.figureLabel}</span>
                </p>
              </article>
            ))}
          </div>

          <h3 className="roles-title">Experience</h3>
          <ol className="roles">
            {experience.map((role) => (
              <li key={role.org} className="role">
                <div>
                  <h3>
                    {role.role},{" "}
                    {role.url ? (
                      <a href={role.url} target="_blank" rel="noopener noreferrer">
                        {role.org}
                      </a>
                    ) : (
                      role.org
                    )}
                  </h3>
                  <p className="role-note">{role.note}</p>
                </div>
                <p className="role-when">{role.period}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="contact" className="contact" aria-labelledby="contact-title">
        <div className="contact-inner">
          <h2 id="contact-title">Say hello</h2>
          <p>Working on something that has to run inside someone else’s systems, or just finished one of the games? Write to me.</p>
          <CopyEmail email={contact.email} variant="large" />
          <ul className="contact-links">
            <li>
              <a href={contact.github} target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
                GitHub
              </a>
            </li>
            <li>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
                LinkedIn
              </a>
            </li>
            <li>
              <a href={contact.x} target="_blank" rel="noopener noreferrer">
                <XIcon />X
              </a>
            </li>
          </ul>
          <p className="colophon">Set in Funnel Display and Funnel Sans. Built with Next.js, hosted on Vercel.</p>
        </div>
      </section>
    </>
  );
}
