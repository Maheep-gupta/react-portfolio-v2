import React, { useRef, useState } from 'react';
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import axios from 'axios';

function Contact() {
    const form = useRef();
    const [pending, setPending] = useState(false);
    const [emailValid, setEmailValid] = useState(true);

    const sendEmail = (e) => {
        setPending(true);
        e.preventDefault();
        // axios.get('https://emailvalidation.abstractapi.com/v1/?api_key=2231df4ab26341f9a9b23375f40b909c&email=' + form.current.user_email)
        // .then(response => {
        //     console.log(response.data);
        //     setEmailValid(response.data.is_valid_format.value)
        // })
        // .catch(error => {
        //     console.log(error);
        // });
        if (emailValid) {
            emailjs
                .sendForm(
                    import.meta.env.VITE_YOUR_SERVICE_ID,
                    import.meta.env.VITE_YOUR_TEMPLATE_ID,
                    form.current,
                    import.meta.env.VITE_YOUR_PUBLIC_KEY
                )
                .then(
                    () => {
                        console.log('SUCCESS!');
                        toast.success("Email sent successfully!");
                        setPending(false);
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        toast.error(error.message);
                        setPending(false);
                    }
                );
        }
    };



    return (
        <motion.section
            id="contact"
            className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center pt-20 sm:pt-36"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <h2 className="text-3xl font-medium capitalize pb-3 text-center">
                Contact me
            </h2>

            <p className="text-gray-700 mb-3  dark:text-white/80">
                Please contact me directly at{" "}
                <a className="underline" href="mailto:maheepgupta321@gmail.com">
                    maheepgupta321@gmail.com
                </a>{" "}
                or through this form.
            </p>

            <form
                ref={form}
                onSubmit={sendEmail}
                className="mt-10 flex flex-col dark:text-black mx-2 sm:m-0"
            >
                <input
                    className={`h-14 px-4 mb-3 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none ${emailValid?null:"border-red-600"}`}
                    name="user_email"
                    type="email"
                    required

                    maxLength={500}
                    placeholder="Your email"

                />

                {emailValid ? null : <span className='text-left text-red-600'>Enter a valid Email</span>}
                <input
                    className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="user_name"
                    type="text"
                    required
                    maxLength={500}
                    placeholder="Your Name"
                />
                <textarea
                    className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                />
                <button
                    type="submit"
                    className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
                    disabled={pending}
                >
                    {pending ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                    ) : (
                        <>
                            Submit{" "}
                            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
                        </>
                    )}
                </button>
            </form>
        </motion.section>
    );
}

export default Contact;