"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaReact } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaAws } from "react-icons/fa";

export default function Timelinee() {
  return (
    <div>
      <VerticalTimeline>
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work"
          date="2024 - present"
          iconStyle={{ background: "rgb(129, 199, 132)", color: "#fff" }}
          icon={<FaAws />}
          contentStyle={{ background: "#fff", color: "#000", borderBottom: "10px solid rgb(76, 175, 80)", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
          contentArrowStyle={{ borderRight: "10px solid rgb(129, 199, 132)" }}
        >
          <h2 className="vertical-timeline-element-title text-white ">Software Engineering Fellow</h2>
          <h4 className="vertical-timeline-element-subtitle">Headstarter AI, PK</h4>
          <p>
          Next.js, Firebase, Langchain, AWS, RAG, OpenAI, Stripe
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          visible={true}
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: "rgb(129, 199, 132)", color: "#fff" }}
          icon={<FaPython />}
          contentStyle={{ background: "#fff", color: "#000", borderBottom: "10px solid rgb(76, 175, 80)", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
          contentArrowStyle={{ borderRight: "10px solid rgb(129, 199, 132)" }}
        >
          <h2 className="vertical-timeline-element-title text-white ">Software Research Fellow</h2>
          <h4 className="vertical-timeline-element-subtitle">National Center of Artificial Intelligence, PK</h4>
          <p>
          SLAM , ROS, Visual Odometery, Computer Vision, Python, Mobile Robotics, Latex
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
           visible={true}
           className="vertical-timeline-element--work"
           date="2020 - 2021"
           iconStyle={{ background: "rgb(129, 199, 132)", color: "#fff" }}
           icon={<FaReact />}
           contentStyle={{ background: "#fff", color: "#000", borderBottom: "10px solid rgb(76, 175, 80)", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}
           contentArrowStyle={{ borderRight: "10px solid rgb(129, 199, 132)" }}
        >
          <h2 className="vertical-timeline-element-title text-white ">Embedded Software Engineer</h2>
          <h4 className="vertical-timeline-element-subtitle">Technosol Private Limited , PK</h4>
          <p>
          React Native, React, C, Web and Mobile App Design, RestfulAPI's
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
