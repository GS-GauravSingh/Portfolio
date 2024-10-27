import React from "react";
import "../css/footer.css";
import "../css/mediaQueries.css";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

function Footer() {
    return (
        <footer className="footer-container">
            <div>Copyright &copy; 2024 By Gaurav Singh</div>
            <a href="#">
                <MdKeyboardDoubleArrowUp className="back-to-top-icon" />

                <span>Back to top</span>
            </a>
        </footer>
    );
}

export default Footer;
