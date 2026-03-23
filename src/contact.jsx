import { Link } from "react-router-dom";

import ScrollFadeIn from "./scrollFadeIn"

export default function Contact() {
    return(
        <ScrollFadeIn>
            <div className="bg-stone-300 flex flex-row items-center justify-center">
                <div className="bg-background text-text lexend p-8 h-max w-190 flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-light tracking-[0.2em] p-5 mb-5">
                        Contact
                    </h1>
                    <div className="flex flew-row justify-center items-center">
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