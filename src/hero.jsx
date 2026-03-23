import ScrollFadeIn from "./scrollFadeIn";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
    return(
        <ScrollFadeIn>
            <div className="pattern-background flex flex-row items-center justify-center h-screen">
                <div id="left" className="bg-background text-text lexend flex flex-col justify-centerp-12 p-8 h-100">
                    <h1 className="text-5xl font-semibold tracking-[0.07em]">JACOB WONG</h1>
                    <p className="font-normal mt-2 tracking-wider">
                        Actor / Musician
                    </p>
                    <p className="mt-6 max-w-md font-light">
                        A musical theatre performer from Hong Kong, he has originated roles in both professional and amateur productions and has taught at numerous institutions across the city. 
                        He is now excited to continue his artistic and professional development overseas at RWCMD.
                    </p>

                    <div className="flex flex-row gap-3 mt-6">
                        <div className="flex flex-row gap-6">
                            <a href="https://www.instagram.com/jacobwch" className="flex items-center g-2 hover:text-textHover">
                                <span>
                                    Instagram
                                </span>
                                <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                            </a>
                        </div>
                        <div className="flex flex-row gap-3">
                            <a href="https://www.linkedin.com/in/jacob-wong-012865324/" className="flex items-center g-2 hover:text-textHover">
                                <span>
                                    Linkedin
                                </span>
                                <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                            </a>
                        </div>
                    </div>

                    <div id = "Navigation" className="mt-7 flex flex-row gap-3">
                        <Link to="/" className="outline-solid outline-1 outline-text/75 p-2 font-sans tracking-widest hover:bg-hover">
                            HOME
                        </Link>
                        <Link to="/about" className="outline-solid outline-1 outline-text/75 p-2 font-sans tracking-widest hover:bg-hover">
                            ABOUT
                        </Link>
                        <Link to="/gallery" className="outline-solid outline-1 outline-text/75 p-2 font-sans tracking-widest hover:bg-hover">
                            GALLERY
                        </Link>
                        <Link to="/resume" className="outline-solid outline-1 outline-text/75 p-2 font-sans tracking-widest hover:bg-hover">
                            RESUME
                        </Link>
                        <Link to="/contact" className="outline-solid outline-1 outline-text/75 p-2 font-sans tracking-widest hover:bg-hover">
                            CONTACT
                        </Link>
                    </div>
                </div>
                <div id="right" className="bg-primary flex items-center justify-center" >
                    <img src="/heroHeadshot.JPG" className="h-100"></img>
                </div>
            </div>
        </ScrollFadeIn>
    )
}