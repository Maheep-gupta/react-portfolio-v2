import React from 'react'
import Project from './Project'
import evento from "../assets/evento.png"
import happiness from "../assets/hapiness.webp"
import blog from "../assets/blog.png"
import portfolios from "../assets/portfolios.png"

function Projects() {
  const projectsData = [
    {
      title: "EventO",
      description:
        "I worked as a Backend developer on this college project Discover seamless event planning with our intuitive platform, designed to manage every detail from start to finish. ",
      tags: ["React", "Node.js", "MongoDB", "Tailwind", "ExpressJs"],
      imageUrl: evento,
      projectUrl:"https://evento-cme.vercel.app/"
    },
    {
      title: "The Coding Scribe",
      description:
        "Experience engaging storytelling on my blog, where insightful content and a user-friendly design create a vibrant community centered around shared interests and passions.",
      tags: ["React", "ExpressJs", "Node.js", "Tailwind", "Jodit Editor"],
      imageUrl: blog,
      projectUrl:"https://thecodingscribe.vercel.app/"
    },
    {
      title: "Happiness",
      description:
        "Experience effortless online shopping with our custom-built eCommerce websites, designed for a seamless and engaging customer journey.",
      tags: ["React", "Tailwind", "MongoDB"],
      imageUrl: happiness,
      projectUrl:"https://happinesss.netlify.app/"
    }, {
      title: "Portfolios",
      description:
        "Create a stunning portfolio website that highlights your talents and achievements, designed to leave a lasting impression.",
      tags: ["React", "Tailwind"],
      imageUrl: portfolios,
      projectUrl:"/"
    },
  ]
  return (
    <section id="projects" className="scroll-mt-28 mb-28 pt-20 sm:pt-36">
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">
        My projects
      </h2>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  )
}

export default Projects