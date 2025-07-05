import React from "react";
import myImage from "../assets/my-images/image.png";
import { SiLeetcode } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { BsMoonStarsFill } from "react-icons/bs";
import { BsSunFill } from "react-icons/bs";
import { useThemeContext } from "../context/ThemeContext";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import "../css/home.css";
import "../css/mediaQueries.css";

function Home() {
    const { theme, toggleTheme } = useThemeContext();

    function handleThemeSwitch() {
        toggleTheme();
    }

    return (
        <section className="home-container">
            <section className="home-content">
                {/* Image */}
                <div className="image-container">
                    <img
                        src={myImage}
                        alt="Gaurav Singh Profile Pic"
                        className="home-profile-image"
                    />

                    {/* JavaScript */}
                    {theme === "light" ? (
                        <BsSunFill
                            className="theme-icon"
                            onClick={handleThemeSwitch}
                        />
                    ) : (
                        <BsMoonStarsFill
                            className="theme-icon"
                            onClick={handleThemeSwitch}
                        />
                    )}
                </div>

                {/* Text Content - Short Introduction */}
                <div className="text-content-container">
                    <h3 className="name">
                        Gaurav <br /> Singh
                    </h3>

                    <h4 className="tagline">
                        <span className="tech-stack">MERN </span>
                        <span>Stack Developer</span>
                    </h4>

                    <div className="social-icon-container">
                        <a
                            href="https://leetcode.com/u/Gaurav__Singh/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <SiLeetcode className="social-icon" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/gaurav-singh-370770229/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaLinkedinIn className="social-icon" />
                        </a>

                        <a
                            href="https://github.com/GS-GauravSingh"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <IoLogoGithub className="social-icon" />
                        </a>
                    </div>

                    <p className="short-intro">
                        👋 Hello, I'm <strong>Gaurav Singh</strong> — a{" "}
                        <strong>full-stack MERN developer</strong> skilled in
                        building <em>scalable</em> web applications with clean
                        code and great user experience.
                    </p>

                    <a
                        href="https://gs-gauravsingh.github.io/MyResume/GauravSinghResume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-btn"
                    >
                        <FaDownload className="icon" />
                        <span>Resume</span>
                    </a>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="tech-stack-container">
                <p>Tech Stack</p>

                <div className="tech-stack-icons">
                    <div>
                        <div>
                            <SiMongodb className="tech-stack-icon mongoDB-icon" />
                            <span>M</span>
                        </div>

                        <span
                            className="popup"
                            style={{
                                color: `${theme === "light" ? "white" : "black"}`,
                            }}
                        >
                            MongoDB
                        </span>
                    </div>

                    <div>
                        <div>
                            <SiExpress
                                className="tech-stack-icon express-icon"
                                style={{
                                    color: `${theme === "light" ? "black" : "white"}`,
                                }}
                            />
                            <span>E</span>
                        </div>
                        <span
                            className="popup"
                            style={{
                                backgroundColor: `${theme === "light" ? "black" : "white"}`,
                                color: `${theme === "light" ? "white" : "black"}`,
                            }}
                        >
                            Express.JS
                        </span>
                    </div>

                    <div>
                        <div>
                            <RiReactjsLine className="tech-stack-icon react-icon" />
                            <span>R</span>
                        </div>
                        <span
                            className="popup"
                            style={{
                                color: `${theme === "light" ? "white" : "black"}`,
                            }}
                        >
                            React.JS
                        </span>
                    </div>

                    <div>
                        <div>
                            <FaNodeJs className="tech-stack-icon nodejs-icon" />
                            <span>N</span>
                        </div>
                        <span
                            className="popup"
                            style={{
                                color: `${theme === "light" ? "white" : "black"}`,
                            }}
                        >
                            Node.JS
                        </span>
                    </div>
                </div>
            </section>
        </section>
    );
}

export default Home;
