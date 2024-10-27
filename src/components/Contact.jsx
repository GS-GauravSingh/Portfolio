import React from "react";
import "../css/contact.css";
import "../css/mediaQueries.css";
import contactImage from "../assets/contact-illustration.png";
import { LuUser } from "react-icons/lu";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { TbMessage } from "react-icons/tb";
import { RiSendPlaneFill } from "react-icons/ri";
import { useThemeContext } from "../context/ThemeContext";
import { SiLeetcode } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

function Contact() {
    const { theme } = useThemeContext();
    const accessKey = import.meta.env.VITE_W3_FORMS_ACCESS_KEY;
    const [result, setResult] = React.useState("");
    const [showResults, setShowResults] = React.useState(false);

    // Sending form data to email address using W3Forms.
    const handleSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", `${accessKey}`);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            setShowResults(true);
            event.target.reset();
            setTimeout(() => {
                setResult("");
                setShowResults(false);
            }, 4000);
        }
        else{
            setShowResults(true);
            setResult("Something went wrong!! Try again after later.");
            setTimeout(() => {
                setResult("");
                setShowResults(false);
                event.target.reset();
            }, 4000);
        }
    };

    return (
        <section className="contact-container">
            <h3>Let's Connect</h3>
            <p>Let's Create Something Amazing Together!</p>

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

            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.2rem",
                }}
            >
                <p>Drop Me a Message! 😊</p>
                <p>
                    Don't like forms? Send me an&nbsp;
                    <a
                        href="mailto:gauravsingh65440@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            textDecoration: "underline",
                            color: "var(--highlight-color)",
                            textUnderlineOffset: "5px",
                        }}
                    >
                        email.
                    </a>
                </p>
            </div>

            <div>
                <img
                    src={`${contactImage}`}
                    alt="Contact Illustration"
                    className="contact-image"
                />

                <form onSubmit={handleSubmit} className="contact-form">
                    <div>
                        <span>
                            <LuUser className="contact-form-icon" />
                            <label htmlFor="userName">Name</label>
                        </span>
                        <input
                            type="text"
                            name="name"
                            id="userName"
                            required
                            placeholder="Name"
                            style={{
                                color: `${theme === "light" ? "black" : "white"}`,
                            }}
                        />
                    </div>

                    <div>
                        <span>
                            <MdOutlineAlternateEmail className="contact-form-icon" />
                            <label htmlFor="userEmail">Email</label>
                        </span>
                        <input
                            type="email"
                            name="email"
                            id="userEmail"
                            required
                            placeholder="Email"
                            style={{
                                color: `${theme === "light" ? "black" : "white"}`,
                            }}
                        />
                    </div>

                    <div>
                        <span>
                            <TbMessage className="contact-form-icon" />
                            <label htmlFor="userMessage">Message</label>
                        </span>
                        <textarea
                            name="message"
                            id="userMessage"
                            rows="10"
                            cols="50"
                            required
                            spellCheck="false"
                            placeholder="Leave a message..."
                            style={{
                                color: `${theme === "light" ? "black" : "white"}`,
                            }}
                        ></textarea>
                    </div>

                    <div>
                        <button type="submit">
                            <RiSendPlaneFill className="send-icon" />
                            <span>Send Message</span>
                        </button>

                        
                        <p className="form-results" style={{color: `${theme === "light" ? "#138808" : "#00FF40"}`}}>

                            {
                                showResults ? 
                                <span style={{display: "contents"}}>
                                    <FaCheck />
                                    {result}
                                </span>
                                : 
                                <span style={{display: "contents"}}>
                                    {result}
                                </span>
                            }
                            
                        </p>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact;
