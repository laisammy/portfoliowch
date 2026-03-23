import ScrollFadeIn from "./scrollFadeIn";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
    return(
        <ScrollFadeIn>
            <div className="pattern-background min-h-screen flex items-center justify-center max-h-1">
                <div className="flex flex-col md:flex-row w-full max-w-6xl scale-60">
                    <div className="bg-background text-text lexend flex flex-col justify-center p-9 w-full">
                        <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-semibold tracking-[0.07em]">
                        JACOB WONG
                        </h1>

                        <p className="font-normal mt-2 tracking-wider text-[clamp(1.3rem,2.5vw,2rem)]">
                        Actor / Musician
                        </p>

                        <p className="mt-6 font-light max-w-md text-[clamp(1rem,1.8vw,1.3rem)]">
                        A musical theatre performer from Hong Kong, he has originated roles in both professional and amateur productions and has taught at numerous institutions across the city. 
                        He is now excited to continue his artistic and professional development overseas at RWCMD.
                        </p>

                        <div className="flex flex-wrap gap-6 mt-6 text-[clamp(1rem,1.8vw,1.3rem)]">
                        <a href="https://www.instagram.com/jacobwch" className="flex items-center gap-2 hover:text-textHover">
                            <span>Instagram</span>
                            <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
                        </a>

                        <a href="https://www.linkedin.com/in/jacob-wong-012865324/" className="flex items-center gap-2 hover:text-textHover">
                            <span>LinkedIn</span>
                            <FontAwesomeIcon icon={faLinkedin} className="text-2xl" />
                        </a>
                        </div>

                        <div id="Navigation" className="text-[clamp(1rem,1.4vw,1.2rem)] mt-7 flex flex-wrap gap-3">
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

                    <div className="flex items-center justify-center w-full">
                    <img
                        src="/heroHeadshot.JPG"
                        className="w-full h-full object-cover"
                    />
                    </div>
                </div>
            </div>
        </ScrollFadeIn>
    )
}