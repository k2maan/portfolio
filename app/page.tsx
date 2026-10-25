import Image from "next/image";
import portrait from "@/public/profile-2.jpg";
import { bluecoreUrl, contact, experience, products, workStories } from "@/lib/data";
import ProductPlate from "@/components/product-plate";
import CopyEmail from "@/components/copy-email";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import CountFigure from "@/components/count-figure";
import DotPortrait from "@/components/dot-portrait";

export default function Home() {
  const [first, second, ...rest] = products;

  return (
    <>
      <section className="hero" aria-labelledby="hero-name">
        <h1 id="hero-name" className="hero-name">
          <span className="line">
            <span data-spot="name">Ketuman</span>
          </span>
          <span className="line">
            <span data-spot="name" className="stop">
              Vishwakarma
            </span>
          </span>
        </h1>
        <p className="hero-lead">
          I embed with customers’ engineering teams, build whatever it takes to get our product live in their stack, and
          keep it running in production.
        </p>
        {/* The credit strip: role, the outside-work line, and the links, along one rule */}
        <div className="hero-meta">
          <p className="hero-role">
            Forward Deployed Engineer at{" "}
            <a href={bluecoreUrl} target="_blank" rel="noopener noreferrer">
              Bluecore
            </a>
          </p>
          <p className="hero-aside">Outside work, I build things of my own, from the first sketch to the launch.</p>
          <p className="text-links">
            <CopyEmail email={contact.email} />
            <a className="text-link" href={contact.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
              GitHub
            </a>
            <a className="text-link" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
              LinkedIn
            </a>
            <a className="text-link" href={contact.x} target="_blank" rel="noopener noreferrer">
              <XIcon />X
            </a>
          </p>
        </div>
        <DotPortrait src={portrait.src} />
      </section>

      <section id="work" className="section" aria-labelledby="work-title">
        <div className="poster">
          <h2 id="work-title" data-spot>
            Work
          </h2>
          <p>
            I have been an FDE for enterprise clients across several regions, from scoping to production. A few things
            I’ve built there:
          </p>
        </div>

        <ol className="rows">
          {workStories.map((story) => (
            <li key={story.title} className="row">
              <p className="fig">
                <CountFigure figure={story.figure} from={story.from} />
                <span className="caption">{story.figureLabel}</span>
              </p>
              <div className="story">
                <h3>{story.title}</h3>
                <p>{story.body}</p>
                <p className="caption stack">{story.stack.join(", ")}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="exp">
          <h3>Experience</h3>
          <ol>
            {experience.map((item) => (
              <li key={item.org}>
                <span className={`caption when${item.current ? " now" : ""}`}>{item.period}</span>
                <span className="what">
                  {item.role},{" "}
                  {item.url ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.org}
                    </a>
                  ) : (
                    item.org
                  )}
                </span>
                <span className="note">{item.note}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="projects" className="section" aria-labelledby="projects-title">
        <div className="poster">
          <h2 id="projects-title" data-spot>
            Projects
          </h2>
          <p>Things I’ve designed, built and shipped on my own.</p>
        </div>

        <div className="feature feature-left">
          <ProductPlate product={first} size="feature" />
        </div>
        <div className="feature feature-right">
          <ProductPlate product={second} size="feature" />
        </div>

        <div className="plates">
          {rest.map((product) => (
            <ProductPlate key={product.slug} product={product} size="small" />
          ))}
        </div>
      </section>

      <section id="contact" className="section contact" aria-labelledby="contact-title">
        <div className="poster">
          <h2 id="contact-title" data-spot>
            Contact
          </h2>
          <p>Working on something that has to run inside someone else’s systems? Write to me.</p>
        </div>
        <div className="contact-body">
          <div className="contact-main">
            <CopyEmail email={contact.email} variant="large" />
            <div className="contact-links">
              <a className="icon-link" href={contact.github} target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
                GitHub
              </a>
              <a className="icon-link" href={contact.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
                LinkedIn
              </a>
              <a className="icon-link" href={contact.x} target="_blank" rel="noopener noreferrer">
                <XIcon />X
              </a>
            </div>
          </div>
          <div className="portrait contact-portrait" tabIndex={-1}>
            <Image
              src={portrait}
              alt="Ketuman in a black jacket and shirt, arms crossed, smiling at the camera"
              placeholder="blur"
              sizes="(min-width: 860px) 25vw, 100vw"
            />
          </div>
        </div>
      </section>
    </>
  );
}
