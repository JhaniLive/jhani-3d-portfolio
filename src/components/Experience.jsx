import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "./Experience.scss";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      date={experience.date}
      iconStyle={{ 
        "--icon-bg": experience.iconBg
      }}
      icon={
        <div className="icon-wrapper">
          <img
            src={experience.icon}
            alt={experience.company_name}
          />
        </div>
      }
    >
      <div className="content-header">
        <h3 className="job-title">
          {experience.title}
        </h3>
        <p className="company-name">
          {experience.company_name}
        </p>
      </div>

      <ul className="achievement-list">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="achievement-item"
          >
            <span className="bullet">•</span>
            <span className="text">{point}</span>
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="experience-section">
      <div className="header">
        <p className="sub-text">
          🚀 My Professional Journey
        </p>
        <h2 className="main-title">
          Experience & Expertise
        </h2>
        <p className="description">
          From crafting pixel-perfect UIs to architecting AI-powered applications, 
          I've evolved into a developer who bridges creativity with cutting-edge technology. 
          Here's my journey of building exceptional digital experiences.
        </p>
      </div>

      <div className="timeline-container">
        <VerticalTimeline
          lineColor="#915eff"
        >
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
