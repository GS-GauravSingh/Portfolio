import React from "react";
import "../css/skills.css";
import "../css/mediaQueries.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiReactjsLine } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { useThemeContext } from "../context/ThemeContext";

function Skills() {

    const {theme} = useThemeContext();

    return (
        <section className="skills-container">
            <div>
                <h3>Skills</h3>
                <p>These are the technologies I've worked with:</p>
            </div>

            <div className="grid-container">
                <div className="grid-item grid-item-1">
                    <FaHtml5 className="grid-item-icon" />
                    <span className="grid-item-text" style={{color: `${theme === "light" ? "black" : "white"}`}}>HTML</span>
                </div>
                <div className="grid-item grid-item-2">
                    <FaCss3Alt className="grid-item-icon" />
                    <span className="grid-item-text" style={{color: `${theme === "light" ? "black" : "white"}`}}>CSS</span>
                </div>
                <div className="grid-item grid-item-3">
                    <RiTailwindCssFill className="grid-item-icon" />
                    <span className="grid-item-text" style={{color: `${theme === "light" ? "black" : "white"}`}}>TailwindCSS</span>
                </div>
                <div className="grid-item grid-item-4">
                    <SiJavascript className="grid-item-icon" />
                    <span className="grid-item-text" style={{color: `${theme === "light" ? "black" : "white"}`}}>JavaScript</span>
                </div>
                <div className="grid-item grid-item-5">
                    <RiReactjsLine className="grid-item-icon" />
                    <span className="grid-item-text" style={{color: `${theme === "light" ? "black" : "white"}`}}>React.JS</span>
                </div>
                <div className="grid-item grid-item-6">
                    <SiRedux className="grid-item-icon" />
                    <span className="grid-item-text" style={{color: `${theme === "light" ? "black" : "white"}`}}>Redux</span>
                </div>
                <div className="grid-item grid-item-8">
                    <SiMongodb className="grid-item-icon" />
                    <span className="grid-item-text" style={{color: `${theme === "light" ? "black" : "white"}`}}>MongoDB</span>
                </div>
                <div className="grid-item grid-item-7" style={{boxShadow: `${theme === "light" ? "0 5px 5px black" : "0 5px 5px white"}`}}>
                    <SiExpress className="grid-item-icon" style={{color: `${theme === "light" ? "black" : "white"}`}} />
                    <span className="grid-item-text" style={{color: `${theme === "light" ? "black" : "white"}`}}>Express.JS</span>
                </div>
                <div className="grid-item grid-item-9">
                    <FaNodeJs className="grid-item-icon" />
                    <span className="grid-item-text" style={{color: `${theme === "light" ? "black" : "white"}`}}>Node.JS</span>
                </div>
            </div>
        </section>
    );
}

export default Skills;
