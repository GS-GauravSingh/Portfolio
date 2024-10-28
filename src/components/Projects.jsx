import React from "react";
import ProjectCard from "./ProjectCard";
import "../css/projects.css";
import amazonCloneImg from "../assets/project-images/AmazonClone.png";
import amazonUiCloneImg from "../assets/project-images/AmazonUIClone.png";
import sortingVisualizerImg from "../assets/project-images/SortingVisualizer.png";
import ticTacToeGameImg from "../assets/project-images/TicTacToeGame.png";
import urlShortener from "../assets/project-images/URLShortner.png";
import "../css/mediaQueries.css";

function Projects() {
    return (
        <section className="projects-container">
            <div>
                <h3>Projects</h3>
                <p>Here are some of the projects I've created:</p>
            </div>

            <div>
                {/* URL Shortener - MERN Stack Project */}
                <ProjectCard
                    title="URL Shortener"
                    image={urlShortener}
                    imageAltText="Amazon Clone Project Image"
                    imageTitle="Amazon Clone"
                    description="A full-featured URL shortener application built with the MERN stack, designed to simplify long URLs for easy sharing. It includes secure JWT authentication for managing user sessions and user account features such as login, logout, and registration. Each user operates in a private environment, where they can view and manage only their own generated short URLs, ensuring data privacy and security. The application also tracks the total clicks on each short URL, providing useful insights."
                    techStack={["mongodb", "expressjs", "reactjs", "nodejs"]}
                    githubLink="https://github.com/GS-GauravSingh/URLShortner"
                    liveLink="https://github.com/GS-GauravSingh/URLShortner"
                />

                {/* Separation */}
                <p className="separator"></p>

                {/* Amazon Clone */}
                <ProjectCard
                    title="Amazon Clone"
                    image={amazonCloneImg}
                    imageAltText="Amazon Clone Project Image"
                    imageTitle="Amazon Clone"
                    description="The Amazon Clone Project is a full-stack web application that replicates Amazon's e-commerce platform, using React.js, Tailwind CSS, Redux, and Firebase. It features a responsive user interface, secure user authentication, and seamless state management for adding and removing products from the cart, providing a realistic online shopping experience."
                    techStack={["tailwindcss", "reactjs", "redux"]}
                    githubLink="https://github.com/GS-GauravSingh/Full-Stack-Project-Amazon-Clone"
                    liveLink="https://clone-7840d.firebaseapp.com/"
                />

                {/* Separation */}
                <p className="separator"></p>

                {/* Sorting Visualizer */}
                <ProjectCard
                    title="Sorting Visualizer"
                    image={sortingVisualizerImg}
                    imageAltText="Sorting Visualizer Project Image"
                    imageTitle="Sorting Visualizer"
                    description="The Sorting Visualizer Project is a web application designed to visually demonstrate the process of various sorting algorithms. Built with HTML, CSS, and JavaScript, it implements six different algorithms: Bubble Sort, Selection Sort, Insertion Sort, Merge Sort, Quick Sort, and Heap Sort. This project helps users understand how these algorithms work by providing an interactive and engaging visualization of each sorting process."
                    techStack={["html", "css", "javascript"]}
                    githubLink="https://github.com/GS-GauravSingh/Sorting-Visualizer"
                    liveLink="https://gs-gauravsingh.github.io/Sorting-Visualizer/"
                />

                {/* Separation */}
                <p className="separator"></p>

                {/* Amazon UI Clone */}
                <ProjectCard
                    title="Amazon UI Clone"
                    image={amazonUiCloneImg}
                    imageAltText="Amazon UI Clone Project Image"
                    imageTitle="Amazon UI Clone"
                    description="Using HTML, CSS, and JavaScript, this project recreates the look and feel of the Amazon website. It includes key features like the navigation bar, product listings, and footer, aiming to provide a similar browsing experience as the original site."
                    techStack={["html", "css", "javascript"]}
                    githubLink="https://github.com/GS-GauravSingh/Amazon-Clone"
                    liveLink="https://gs-gauravsingh.github.io/Amazon-Clone/"
                />

                {/* Separation */}
                <p className="separator"></p>

                {/* Tic Tac Toe Game */}
                <ProjectCard
                    title="Tic Tac Toe Game"
                    image={ticTacToeGameImg}
                    imageAltText="Tic Tac Toe Game Project Image"
                    imageTitle="Tic Tac Toe Game"
                    description="A fun Tic Tac Toe game made with HTML, CSS, and JavaScript. This project shows my ability to create interactive web applications with a clean and responsive design. Play it on any device!"
                    techStack={["html", "css", "javascript"]}
                    githubLink="https://github.com/GS-GauravSingh/Tic-Tac-Toe-Game/"
                    liveLink="https://gs-gauravsingh.github.io/Tic-Tac-Toe-Game/"
                />
            </div>
        </section>
    );
}

export default Projects;
