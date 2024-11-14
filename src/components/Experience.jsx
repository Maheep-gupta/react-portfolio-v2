import React, { useContext } from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ThemeContext from '../context/ThemeContext';

function Experience() {
  const { isDark } = useContext(ThemeContext);
  
  const experiencesData = [
    {
      title: "Completed School",
      location: "Sultanpur, U.P.",
      description:
        "I completed my schooling 10th and 12th with 89% and 95% respectively.",
      icon: React.createElement(LuGraduationCap),
      date: "2019-2021",
    },
    {
      title: "Graduation",
      location: "Sultanpur, U.P.",
      description:
        "I am currently pursuing a Bachelor of Technology and  i am in my Final Year, seeking a job.",
      icon: React.createElement(LuGraduationCap),
      date: "2021-2025",
    },
    {
      title: "Web Developer",
      location: "Remote Job",
      description:
        "Developed an Invoice generation API using Java Spring Boot that can generate invoices for customers and businesses, downloadable as PDF.",
      icon: React.createElement(CgWorkAlt),
      date: "Dec-2022 - Mar-2023",
    },
    {
      title: "Java FullStack Trainee",
      location: "JSpiders - Training & Development Center, Bengaluru",
      description:
        "At JSpiders, I am getting trained as a Java Full Stack Developer, gaining expertise in Core and Advanced Java, SQL, JDBC, Hibernate, HTML, CSS, and JavaScript.",
      icon: React.createElement(FaReact),
      date: "Apr-2024 - Current",
    },
  ];

  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <h2 className="text-3xl font-medium capitalize mb-8 text-center pt-20 sm:pt-36">
        My Experience
      </h2>
      
      <VerticalTimeline lineColor={isDark ? "#fafafa" : "#E5E7EB"}>
        {experiencesData.reverse().map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: !isDark ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
              boxShadow: "none",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              textAlign: "left",
              padding: "1.3rem 2rem",
            }}
            contentArrowStyle={{
              borderRight:
                !isDark ? "0.4rem solid #9ca3af" : "0.4rem solid rgba(255, 255, 255, 0.5)",
            }}
            date={item.date}
            icon={item.icon}
            iconStyle={{
              background: !isDark ? "white" : "#111827 ",
              fontSize: "1.5rem",
            }}
          >
            <h3 className="font-semibold capitalize">{item.title}</h3>
            <p className="font-normal !mt-0">{item.location}</p>
            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
              {item.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>


    </section>
  );
}

export default Experience;