import { Link } from "react-router-dom";

import ScrollFadeIn from "./scrollFadeIn"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
    return(
        <ScrollFadeIn>
            <div className="pattern-background flex flex-row items-center justify-center">
                <div className="bg-background text-text lexend p-8 h-max w-190 flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-light tracking-[0.2em] p-5">
                        Contact
                    </h1>
                    <div className="flex flex-row gap-3">
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
                    <div className="flex flew-row justify-center items-center mt-5">
                        <form>
                            <div className="flex flex-col">
                                <label for="name">Name</label>
                                <input type="text" id="name" name="name" placeholder="Name" className="w-xl p-3 outline-1 outline-text mt-1.5 mb-4 w-f"></input>
                            </div>

                            <div className="flex flex-col">
                                <label for="email">Email</label>
                                <input type="text" id="email" name="email" placeholder="Email" className="w-full p-3 outline-1 outline-text mt-1.5 mb-4"></input> 
                            </div>

                            <div className="flex flex-col">
                                <label for="subject">Subject</label>
                                <input type="text" id="subject" name="subject" placeholder="Subject" className="w-full p-3 outline-1 outline-text mt-1.5 mb-4"></input>
                            </div>

                            <div className="flex flex-col">
                                <label for="message">Message</label>
                                <textarea id="message" name="message" placeholder="Your message" className="h-20 p-3 outline-1 outline-text mt-1.5 mb-4"></textarea>
                            </div>

                            <div className="flex flex-col items-center">
                                <label className="bg-background outline-solid outline-1 outline-text/75 p-2 font-normal tracking-widest mt-5 hover:bg-hover">Submit</label>
                            </div>
                        </form>
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
            </div>
        </ScrollFadeIn>
    )
}