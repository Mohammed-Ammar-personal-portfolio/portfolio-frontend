import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";

const ExperienceEducation = () => {
  const timelineData = [
    {
      type: "experience",
      title: "Frontend Developer",
      subtitle: "Quarks Technosoft",
      date: "Jan 2023 - Present",
      description: [
        "Developed and maintained responsive user interfaces.",
        "Implemented modern design patterns using React and Tailwind CSS.",
        "Collaborated with cross-functional teams to deliver high-quality projects.",
      ],
    },
    {
      type: "education",
      title: "Bachelor of Computer Science",
      subtitle: "XYZ University",
      date: "2018 - 2022",
      description: [
        "Graduated with honors in Computer Science.",
        "Specialized in Full-Stack Web Development.",
        "Completed a capstone project on e-commerce platforms.",
      ],
    },
    {
      type: "experience",
      title: "Intern - Software Engineer",
      subtitle: "Tech Solutions",
      date: "May 2022 - Dec 2022",
      description: [
        "Optimized website performance by 30%.",
        "Built reusable components with React.",
        "Worked closely with backend teams to integrate APIs.",
      ],
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-6 lg:px-20">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Experience & Education
      </h2>
      <VerticalTimeline>
        {timelineData.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: item.type === "experience" ? "#1d4ed8" : "#9333ea",
              color: "#fff",
            }}
            contentArrowStyle={{
              borderRight: `7px solid ${
                item.type === "experience" ? "#1d4ed8" : "#9333ea"
              }`,
            }}
            date={item.date}
            iconStyle={{
              background: item.type === "experience" ? "#1d4ed8" : "#9333ea",
              color: "#fff",
            }}
            icon={
              item.type === "experience" ? (
                <FaBriefcase size={24} />
              ) : (
                <FaGraduationCap size={24} />
              )
            }
          >
            <h3 className="vertical-timeline-element-title text-xl font-bold">
              {item.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-lg font-semibold mb-2">
              {item.subtitle}
            </h4>
            <ul className="list-disc list-inside space-y-2">
              {item.description.map((desc, idx) => (
                <li key={idx} className="text-sm text-gray-200">
                  {desc}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};

export default ExperienceEducation;
