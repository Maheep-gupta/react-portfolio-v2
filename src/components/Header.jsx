import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-scroll'; 

function Header() {
    const links = [
        { name: "Home", hash: "home" }, 
        { name: "About", hash: "about" },
        { name: "Projects", hash: "projects" },
        { name: "Skills", hash: "skills" },
        { name: "Experience", hash: "experience" },
        { name: "Contact", hash: "contact" },
    ];

    const [active, setActive] = useState('Home')
    return (
        <header className="z-[999] relative">
            <motion.div
                className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
            >
                <nav className="flex fixed w-full sm:w-fit top-[0.15rem] left-1/2 -translate-x-1/2 py-2 h-full sm:py-0">
                    <ul className="flex  h-full w-full sm:w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:flex-nowrap sm:gap-5">
                        {links.map((link) => (
                            <motion.li
                                className="h-3/4 flex items-center justify-center relative"
                                key={link.hash}
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                            >
                                <Link
                                    to={link.hash} 
                                    smooth={true}
                                    duration={500} 
                                    // spy={true}
                                    // activeClass='text-gray-950 dark:text-gray-200  '
                                    onClick={()=>setActive(link.name)}
                                    className={`flex w-full items-center text-xs sm:text-sm justify-center px-2 py-1 sm:px-3 sm:py-3 text-gray-500 transition 
                                        dark:text-gray-500 cursor-pointer dark:hover:text-gray-300 hover:text-gray-950  ${active === link.name?"text-gray-950 dark:text-gray-200":""}`}
                                >
                                    {link.name}
                                    <motion.span
                                        className={` transition-all duration-75 rounded-full absolute inset-0 -z-10  ${active===link.name?'bg-gray-100 dark:bg-gray-800':''}`}
                                        layoutId="activeSection"
                                        transition={{
                                            type: "spring",
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    />
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </nav>
            </motion.div>
        </header>
    );
}

export default Header;