import { Info } from 'lucide-react';
import { FileUser } from 'lucide-react';
import { Images } from 'lucide-react';

import { Link } from "react-router-dom";

export default function Hero() {
    return(
        <div className="bg-stone-300 flex flex-row items-center justify-center h-screen">
            <div id="left" className="bg-background text-text flex flex-col justify-centerp-12 p-8 h-100">
                <h1 className="text-5xl font-bold tracking-[0.07em]">JACOB WONG</h1>
                <p className="mt-2 tracking-wider">
                    Actor / Musician
                </p>
                <p className="mt-6 max-w-md">
                    A musical theatre performer from Hong Kong, he has originated roles in both professional and amateur productions and has taught at numerous institutions across the city. 
                    He is now excited to continue his artistic and professional development overseas at RWCMD.
                </p>
                <div id = "Navigation" className="mt-8 flex flex-row gap-3">
                    <Link to="/about" className="outline-solid outline-1 outline-text/75 p-2 font-sans tracking-widest">
                        ABOUT
                    </Link>
                    <Link to="/gallery" className="outline-solid outline-1 outline-text/75 p-2 font-sans tracking-widest">
                        GALLERY
                    </Link>
                    <Link to="/resume" className="outline-solid outline-1 outline-text/75 p-2 font-sans tracking-widest">
                        RESUME
                    </Link>
                </div>
            </div>
            <div id="right" className="bg-primary flex items-center justify-center" >
                <img src="/heroHeadshot.JPG" className="h-100"></img>
            </div>
        </div>
    )
}