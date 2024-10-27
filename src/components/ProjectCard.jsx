import React from "react";
import "../css/projectCard.css";
import {
    FaHtml5,
    FaCss3Alt,
    FaNodeJs,
    FaExternalLinkAlt,
    FaGithub,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { useThemeContext } from "../context/ThemeContext";

function ProjectCard({
    title,
    image,
    imageAltText,
    imageTitle = "",
    description,
    techStack,
    githubLink,
    liveLink,
}) {
    const { theme } = useThemeContext();
    const techStackObject = {
        html: (
            <FaHtml5
                style={{ color: "#FF5225" }}
                className="project-tech-icon"
            />
        ),
        css: (
            <FaCss3Alt
                style={{ color: "#3B82F6" }}
                className="project-tech-icon"
            />
        ),
        tailwindcss: (
            <RiTailwindCssFill
                style={{ color: "#48A9B5" }}
                className="project-tech-icon"
            />
        ),
        javascript: (
            <SiJavascript
                style={{ color: "#F7E025" }}
                className="project-tech-icon"
            />
        ),
        reactjs: (
            <RiReactjsLine
                style={{ color: "#50D6FF" }}
                className="project-tech-icon"
            />
        ),
        redux: (
            <SiRedux
                style={{ color: "#7248B6" }}
                className="project-tech-icon"
            />
        ),
        expressjs: (
            <SiExpress
                style={{ color: `${theme === "light" ? "black" : "white"}` }}
                className="project-tech-icon"
            />
        ),
        mongodb: (
            <SiMongodb
                style={{ color: "#00ED64" }}
                className="project-tech-icon"
            />
        ),
        nodejs: (
            <FaNodeJs
                style={{ color: "#58A846" }}
                className="project-tech-icon"
            />
        ),
    };

    return (
        <section className="project-card-container">
            <img src={`${image}`} alt={`${imageAltText}`} />

            <div className="project-description">
                <div className="project-links">
                    <a href={`${githubLink}`} target="_blank" rel="noopener noreferrer">
                        <FaGithub className="project-working-link" />
                    </a>
                    <a href={`${liveLink}`} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt className="project-working-link" />
                    </a>
                </div>

                <h3>{title}</h3>

                <p>{description}</p>

                <div>
                    <h3>Tech Stack:</h3>

                    <div>
                        {techStack.map((tech, idx) => {
                            return (
                                <span key={idx}>{techStackObject[tech]}</span>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProjectCard;
