import React from 'react'
import { motion } from "framer-motion";
function Skills() {
    const fadeInAnimationVariants = {
        initial: {
          opacity: 0,
          y: 100,
        },
        animate: (index) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.05 * index,
          },
        }),
    };
    const skillsData = [
        "Core Java",
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "ReactJs",
        "Next.js",
        "Node.js",
        "Socket.io",
        "ExpressJs",
        "Git",
        "GitHub",
        "Tailwind",
        "Bootstrap",
        "Framer Motion",
        "MongoDB",
        "SQL",
        "JDBC",
        "Hibernate",
        "RESTful APIs",
        "Vercel",

      ]
    return (
        <section
        id="skills"
        className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      >
      <h2 className="text-3xl font-medium capitalize mb-8 text-center pt-20 sm:pt-36">
        My skills
      </h2>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
          {skillsData.map((skill, index) => (
            <motion.li
              className="bg-gray-200 hover:bg-gray-400 dark:hover:bg-gray-800 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
              key={index}
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </section>
  )
}

export default Skills