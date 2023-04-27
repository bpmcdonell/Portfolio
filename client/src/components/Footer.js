import React from "react";
import { Link } from "react-router-dom";
import mailSVG from "./social-icons/mail.svg";
import githubSVG from "./social-icons/github.svg";
import linkedinSVG from "./social-icons/linkedin.svg";
import twitterSVG from "./social-icons/twitter.svg";
import 'bootstrap/dist/css/bootstrap.min.css';


const Footer = () => {

    return (
        <footer>
            <div className="footerDiv">
                <div className="linkBundle">
                    <a href="mailto:bpmcdonell@gmail.com"><img src={mailSVG} className="footerSVG"></img></a>
                    <a href="https://www.github.com/bpmcdonell"><img src={githubSVG} className="footerSVG"></img></a>
                    <a href="https://www.linkedin.com/in/bpmcdonell"><img src={linkedinSVG} className="footerSVG"></img></a>
                    <a href="https://www.twitter.com/bpmcdonell"><img src={twitterSVG} className="footerSVG"></img></a>
                </div>
                <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <div className="footerText">bpmcdonell{` • `}{`© ${new Date().getFullYear()}`}</div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;