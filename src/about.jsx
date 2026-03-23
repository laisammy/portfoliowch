import { Link } from "react-router-dom";

import ScrollFadeIn from "./scrollFadeIn"

export default function About() {
    return (
        <ScrollFadeIn>
            <div className="pattern-background flex flex-row items-center justify-center h-screen">
                <div className="bg-background text-text lexend p-8 h-max w-190 flex flex-col items-center justify-center">
                    <h1 className="text-5xl font-semibold tracking-[0.07em] flex justify-center mb-5">ABOUT JACOB WONG</h1>
                    <p className="font-light text-center">
                        A dedicated musical theatre performer from Hong Kong, he has spent over a decade training and performing with Face Productions, progressing from ensemble work in junior shows to leading and featured roles across major productions. 
                        His credits include Dewey Finn in School of Rock, Shrek in Shrek Jr, Rooster in Annie Jr, Ram Sweeney in Heathers and Jake Dillinger in Be More Chill. 
                    </p>
                    <p className="font-light text-center mt-3">
                        Beyond performing, he has taught extensively at institutions across Hong Kong, working with students of all ages in singing, music, and theatre, and has contributed to creative teams as an assistant director and music technician. 
                        With a strong foundation in performance, musicianship, and education, he is now excited to continue his artistic and professional development overseas at the Royal Welsh College of Music & Drama.
                    </p>
                    <div className="flex flex-row items-center justify-center mt-6 gap-3">
                        <img src="/IMG_4430.jpeg" className="w-1/3" ></img>
                        <img src="/IMG_4432.jpeg" className="w-1/3"></img>
                        <img src="/IMG_4431.jpeg" className="w-1/3"></img>
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

