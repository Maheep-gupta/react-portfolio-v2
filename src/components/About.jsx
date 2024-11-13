import React from 'react';
import { motion } from "framer-motion";
function About() {
    return (
        <motion.section
            className="mb-28 max-w-[55rem] text-center leading-8 sm:mb-40 scroll-mt-28 pt-20 sm:pt-36"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <h2 className="text-3xl font-medium capitalize mb-8 text-center">
                About Me
            </h2>
            <p className="mb-3">
                Currently presuing my degree in{" "}
                <span className="font-medium">B.Tech</span>, I am really Passinated for programming. I enrolled in a Jspider to learn{" "}
                <span className="font-medium">Java full-stack web development</span>.{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem. My core stack
                is{" "}
                <span className="font-medium">
                    Figma,React, Node.js, and MongoDB
                </span>
                . I am also familiar with TypeScript and Next.Js. I am always looking to
                learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a software
                developer.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy playing
                video games, watching movies, and playing with my dog. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am currently
                learning about{" "}
                <span className="font-medium">history and philosophy</span>. I'm also
                learning how to play the guitar.
            </p>
        </motion.section>
    );
}

export default About;