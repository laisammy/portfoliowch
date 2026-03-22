import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="bg-stone-300 flex flex-row items-center justify-center h-screen">
            <div className="bg-background text-text p-8 h-100 w-190 flex flex-col items-center justify-center">
                <h1 className="text-5xl font-bold tracking-[0.07em] flex justify-center mb-5">ABOUT JACOB WONG</h1>
                <p>
                    A musical theatre performer from Hong Kong, he has originated roles in both professional and amateur productions and has taught at numerous institutions across the city. 
                    He is now excited to continue his artistic and professional development overseas at RWCMD.
                </p>
                <div id = "Navigation" className="mt-40 flex flex-row gap-3">
                    <Link to="/" className="outline-solid outline-1 outline-text/75 p-2 font-sans tracking-widest">
                        HOME
                    </Link>
                    <Link to="/gallery" className="outline-solid outline-1 outline-text/75 p-2 font-sans tracking-widest">
                        GALLERY
                    </Link>
                    <Link to="/resume" className="outline-solid outline-1 outline-text/75 p-2 font-sans tracking-widest">
                        RESUME
                    </Link>
                </div>
            </div>
        </div>
    )
}