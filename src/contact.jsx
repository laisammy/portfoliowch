import { Link } from "react-router-dom";
import ScrollFadeIn from "./scrollFadeIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
    return (
        <ScrollFadeIn>
            <div className="pattern-background flex items-center justify-center min-h-screen px-4 py-10">
                <div className="bg-background text-text lexend p-8 w-full max-w-4xl flex flex-col items-center justify-center">

                    <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[0.07em] flex justify-center mb-5 text-center">
                        CONTACT
                    </h1>

                    <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-6 text-[clamp(1rem,1.6vw,1.3rem)]">
                        <a href="https://www.instagram.com/jacobwch" className="flex items-center gap-2 hover:text-textHover">
                            <span>Instagram</span>
                            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                        </a>

                        <a href="https://www.linkedin.com/in/jacob-wong-012865324/" className="flex items-center gap-2 hover:text-textHover">
                            <span>LinkedIn</span>
                            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                        </a>
                    </div>

                    <div className="flex flex-row justify-center items-center w-full">
                        <form className="w-full max-w-lg">

                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-[clamp(1rem,1.4vw,1.2rem)]">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    className="w-full p-3 outline-1 outline-text mt-1.5 mb-4"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="email" className="text-[clamp(1rem,1.4vw,1.2rem)]">Email</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    className="w-full p-3 outline-1 outline-text mt-1.5 mb-4"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="subject" className="text-[clamp(1rem,1.4vw,1.2rem)]">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Subject"
                                    className="w-full p-3 outline-1 outline-text mt-1.5 mb-4"
                                />
                            </div>

                            <div className="flex flex-col">
                                <label htmlFor="message" className="text-[clamp(1rem,1.4vw,1.2rem)]">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    placeholder="Your message"
                                    className="h-28 p-3 outline-1 outline-text mt-1.5 mb-4"
                                ></textarea>
                            </div>

                            <div className="flex flex-col items-center">
                                <label
                                    className="bg-background outline-1 outline-text/75 p-2 font-normal tracking-widest mt-5 hover:bg-hover text-[clamp(0.9rem,1.4vw,1.2rem)]"
                                >
                                    Submit
                                </label>
                            </div>

                        </form>
                    </div>

                    <div id="Navigation" className="mt-7 flex flex-wrap gap-3 text-[clamp(0.9rem,1.4vw,1.2rem)]">
                        <Link to="/" className="outline-1 outline-text/75 p-2 tracking-widest hover:bg-hover">
                            HOME
                        </Link>
                        <Link to="/about" className="outline-1 outline-text/75 p-2 tracking-widest hover:bg-hover">
                            ABOUT
                        </Link>
                        <Link to="/gallery" className="outline-1 outline-text/75 p-2 tracking-widest hover:bg-hover">
                            GALLERY
                        </Link>
                        <Link to="/resume" className="outline-1 outline-text/75 p-2 tracking-widest hover:bg-hover">
                            RESUME
                        </Link>
                        <Link to="/contact" className="outline-1 outline-text/75 p-2 tracking-widest hover:bg-hover">
                            CONTACT
                        </Link>
                    </div>

                </div>
            </div>
        </ScrollFadeIn>
    );
}