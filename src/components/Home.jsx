import React from 'react';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from 'react-scroll';
import profileImage from "../assets/profilePic.jpeg"

const Home = () => {
  // const { isDark, setIsDark } = useContext(ThemeContext); // Accessing theme context

  return (
    <section
      id="home"
      className="mb-28 max-w-[55rem] text-center sm:mb-0 scroll-mt-[100rem] pt-28 sm:pt-36"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <img
              src={profileImage}
              alt="Maheep potraait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-48 w-48 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-3 right-3 text-6xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl  font-normal font-outfit !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Maheep Gupta.</span> I'm an Emerging{" "}
        <span className="font-bold">full-stack developer</span> I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">MERN Technology , </span> <span className="underline">Java</span> and {" "}
        <span className="underline">React Native</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          to="contact"
          className="group dark:border bg-gray-900 text-white px-7 py-3 flex items-center font-outfit gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 dark:border-0 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 font-outfit border"
          href="https://drive.google.com/file/d/1MUmgCjjx5eLuaM9OSpZKOJfCN0QIjl6u/view?usp=sharing"
          target='_blank'
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <div className='flex gap-x-2'>

          <a
            className="bg-white h-8 w-8 justify-center dark:border-0  text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] border active:scale-105 transition cursor-pointer borderBlack font-outfit dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/maheep-gupta-281867222/"
            target="_blank"
          >
            <BsLinkedin className='text-lg' />
          </a>

          <a
            className="bg-white  h-8 w-8  justify-center dark:border-0 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 border active:scale-105 transition cursor-pointer font-outfit borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/Maheep-gupta/"
            target="_blank"
          >
            <FaGithubSquare className='text-lg' />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;