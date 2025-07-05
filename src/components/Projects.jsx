import React from "react";
import ProjectCard from "./ProjectCard";
import "../css/projects.css";
import amazonCloneImg from "../assets/project-images/AmazonClone.png";
import amazonUiCloneImg from "../assets/project-images/AmazonUIClone.png";
import sortingVisualizerImg from "../assets/project-images/SortingVisualizer.png";
import ticTacToeGameImg from "../assets/project-images/TicTacToeGame.png";
import urlShortener from "../assets/project-images/URLShortner.png";
import talks from "../assets/project-images/Talks.png";
import "../css/mediaQueries.css";

function Projects() {
    return (
        <section className="projects-container">
            <div>
                <h3>Projects</h3>
                <p>Here are some of the projects I've created:</p>
            </div>

            <div>
                {/* Talks - PERN Stack Project */}
                <ProjectCard
                    title="Talks"
                    image={talks}
                    imageAltText="Talks Project Image"
                    imageTitle="Talks - a real-time chat application built using the PERN stack"
                    description="
                        <p><strong>Talks</strong> is a full-stack real-time chat application built using the <strong>PERN stack</strong> (<strong>PostgreSQL</strong>, <strong>Express.js</strong>, <strong>React.js</strong>, <strong>Node.js</strong>), enabling <em>one-to-one</em> and <em>group messaging</em> with real-time communication via <strong>Socket.IO</strong>.</p>
                        <p>Implemented <strong>JWT-based two-step email OTP verification</strong> and <strong>Google Authentication</strong> for secure login.</p>
                        <p>Used <strong>Zod</strong> with <strong>React Hook Form</strong> for reliable form validation and better user input control.</p>
                        <p>Managed global state with <strong>Zustand</strong> and applied <strong>DaisyUI</strong> for <em>multi-theme support</em> and consistent UI design.</p>
                        <p>Built and validated <strong>RESTful APIs</strong> using <strong>Express.js</strong> and <strong>Joi</strong>, ensuring robust backend validation.</p>
                        <p>Optimized <strong>PostgreSQL</strong> queries with <strong>Sequelize ORM</strong>, leveraging associations to reduce redundant DB calls and improve API response time by <strong>~30%</strong>.</p>
                        <p>Designed efficient schema for scalable <strong>private</strong> and <strong>group chat</strong> functionality.</p>
                        <p>Configured <strong>Multer</strong> and <strong>Cloudinary</strong> for secure and scalable image uploads.</p>
                        <p>Frontend is built with <strong>React.js</strong>, offering a <em>modern, responsive UI</em> and real-time communication powered by <strong>Socket.IO</strong>.</p>
                        "
                    techStack={["postgresql", "expressjs", "reactjs", "nodejs"]}
                    githubLink="https://github.com/GS-GAURAVSINGH/TALKS"
                    liveLink="https://talkschatapp.vercel.app/"
                />

                {/* Separation */}
                <p className="separator"></p>

                {/* URL Shortener - MERN Stack Project */}
                <ProjectCard
                    title="URL Shortener"
                    image={urlShortener}
                    imageAltText="URL Shortener Project Image"
                    imageTitle="URL Shortener"
                    description="
                        <p><strong>URL Shortener</strong> is a full-stack application built using the <strong>MERN stack</strong> (<strong>MongoDB</strong>, <strong>Express.js</strong>, <strong>React.js</strong>, <strong>Node.js</strong>) that allows users to generate custom short links, track total clicks, and manage their URLs in a secure and efficient environment.</p>
                        <p>Implemented <strong>JWT-based two-step email OTP verification</strong> to ensure secure user registration and login.</p>
                        <p>Added a <strong>rate limiter</strong> to restrict users to <strong>50 API requests per hour</strong>, preventing abuse and enhancing overall API reliability.</p>
                        <p>Designed and tested <strong>RESTful APIs</strong> using <strong>Postman</strong> and optimized database queries to reduce latency by <strong>~30%</strong>.</p>
                        <p>The backend is powered by <strong>Mongoose ODM</strong> for schema modeling and validation, with <strong>CORS</strong> configured to enable secure cross-origin access.</p>
                        <p>The frontend is styled using <strong>Tailwind CSS</strong> for a <em>clean and responsive UI</em> and integrates <strong>Axios</strong> for efficient API communication.</p>
                        "

                    techStack={["mongodb", "expressjs", "reactjs", "nodejs"]}
                    githubLink="https://github.com/GS-GauravSingh/URL_Shortener_Frontend"
                    liveLink="https://url-shortener-frontend-v65a.onrender.com/"
                />

                {/* Separation */}
                <p className="separator"></p>

                {/* Amazon Clone */}
                <ProjectCard
                    title="Amazon Clone"
                    image={amazonCloneImg}
                    imageAltText="Amazon Clone Project Image"
                    imageTitle="Amazon Clone"
                    description="
                        <p><strong>Amazon UI Clone</strong> is a full-stack e-commerce web application built using <strong>React.js</strong>, <strong>Tailwind CSS</strong>, <strong>Redux</strong>, and <strong>Firebase</strong>, replicating the core features of Amazon's platform.</p>
                        <p>It features a <em>responsive user interface</em> with secure <strong>Firebase Authentication</strong> for user login and signup.</p>
                        <p>Implemented seamless <strong>state management</strong> using <strong>Redux</strong> for adding and removing products from the cart in real-time.</p>
                        <p>Provides a <em>realistic and smooth online shopping experience</em> with dynamic UI updates and clean product display components.</p>
                        "

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
                    description="
                        <p><strong>Sorting Visualizer</strong> is a web application built with <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong> to visually demonstrate how different sorting algorithms work in real-time.</p>
                        <p>It implements six algorithms: <strong>Bubble Sort</strong>, <strong>Selection Sort</strong>, <strong>Insertion Sort</strong>, <strong>Merge Sort</strong>, <strong>Quick Sort</strong>, and <strong>Heap Sort</strong>.</p>
                        <p>The project offers an <em>interactive and engaging interface</em> that helps users understand the internal working of each algorithm through dynamic visual feedback.</p>
                        "

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
                    description="
                        <p>This project recreates the look and feel of the Amazon website using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>.</p>
                        <p>It features core UI components such as a <strong>navigation bar</strong>, <strong>product listings</strong>, and <strong>footer</strong>, delivering a familiar layout and design.</p>
                        <p>The goal is to offer a <em>visually similar browsing experience</em> to the original Amazon platform, making it ideal for practicing frontend development and UI replication.</p>
                        "

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
                    description="
                        <p>A fun and interactive <strong>Tic Tac Toe</strong> game built using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>.</p>
                        <p>This project demonstrates my ability to build <em>responsive</em>, <em>interactive web applications</em> with clean design and smooth gameplay.</p>
                        <p>Fully responsive and mobile-friendly — <em>play it on any device!</em></p>
                        "

                    techStack={["html", "css", "javascript"]}
                    githubLink="https://github.com/GS-GauravSingh/Tic-Tac-Toe-Game/"
                    liveLink="https://gs-gauravsingh.github.io/Tic-Tac-Toe-Game/"
                />
            </div>
        </section>
    );
}

export default Projects;
