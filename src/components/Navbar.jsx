import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li>
                        <a target="_blank" href="./assets/Resume/Resume.webp "className="open-resume">Resume</a>
                    </li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;

{/* <a target="_blank" href="/assets/Resume/Resume.pdf"><i class="fa fa-download fa-2x resume_download" aria-hidden="true" ></i></a> */}