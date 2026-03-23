import { Link } from "react-router-dom";

import ScrollFadeIn from "./scrollFadeIn";

export default function Resume() {
    return (
        <ScrollFadeIn>
            <div className="pattern-background flex flex-row items-center justify-center w-full">
                <div className="bg-background text-text lexend p-8 h-max w-190 flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-light tracking-[0.2em] p-5 mb-5">
                        RESUME
                    </h1>
                    <h1 className="text-4xl font-medium tracking-[0.07em] p-2">
                        Theater Experience
                    </h1>
                    <div className="p-3 space-y-2">
                        <section className="grid grid-cols-3 gap-10">
                            <p className="font-medium">
                                Be More Chill
                            </p>
                            <p>
                                Jake Dillinger
                            </p>
                            <p>
                                Face Productions
                            </p>
                        </section>
                        <section className="grid grid-cols-3 gap-10">
                            <p className="font-medium">
                                Heathers: The Musical
                            </p>
                            <p>
                                Ram Sweeney
                            </p>
                            <p>
                                Face Productions
                            </p>
                        </section>
                        <section className="grid grid-cols-3 gap-10">
                            <p className="font-medium">
                                Annie Jr.
                            </p>
                            <p>
                                Rooster
                            </p>
                            <p>
                                Face Productions
                            </p>
                        </section>
                        <section className="grid grid-cols-3 gap-10">
                            <p className="font-medium">
                                Shrek Jr.
                            </p>
                            <p>
                                Shrek
                            </p>
                            <p>
                                Face Productions
                            </p>
                        </section>
                        <section className="grid grid-cols-3 gap-10">
                            <p className="font-medium">
                                School of Rock
                            </p>
                            <p>
                                Dewey Finn
                            </p>
                            <p>
                                Face Productions
                            </p>
                        </section>
                    </div>

                    <h1 className="text-4xl font-medium tracking-[0.07em] p-2 mt-5">
                        Work Experience
                    </h1>
                    <div className="p-3">
                        <section className="flex flex-col items-center justify-center">
                            <h2 className="text-3xl font-normal tracking-[0.07em] p-2">
                                LAMDA & Musical Theatre Teacher
                            </h2>
                            <h3 className="text-16 font-light tracking-[0.07em] p-2">
                                The Academi Group (Feb 2026 - Present)
                            </h3>
                            <ul className="ml-25 mr-25">
                                <li> &#8226; Supported student learning and progress</li>
                                <li> &#8226; Assisted in lesson preperation and planning</li>
                                <li> &#8226; Participated in show weeks</li>
                            </ul>
                        </section>
                        <section className="flex flex-col items-center justify-center">
                            <h2 className="text-3xl font-normal tracking-[0.07em] p-2">
                                Summer Intern
                            </h2>
                            <h3 className="text-16 font-light tracking-[0.07em] p-2">
                                Creative Collab (Jul 2025 - Sep 2025)
                            </h3>
                            <ul className="ml-25 mr-25">
                                <li> &#8226; Taught children aged 6 - 18 across schools and youth education centres in Hong Kong</li>
                                <li> &#8226; Assisted in lesson preperation and planning</li>
                            </ul>
                        </section>
                        <section className="flex flex-col items-center justify-center mt-2">
                            <h2 className="text-3xl font-normal tracking-[0.07em] p-2">
                                Assistant Director
                            </h2>
                            <h3 className="text-16 font-light tracking-[0.07em] p-2">
                                HKIS High School Show / Face Productions (May 2025)
                            </h3>
                            <ul className="ml-30 mr-30">
                                <li> &#8226; Assisted with the communication between the cast and the director</li>
                                <li> &#8226; Costume Management</li>
                            </ul>
                        </section>
                        <section className="flex flex-col items-center justify-center mt-2">
                            <h2 className="text-3xl font-normal tracking-[0.07em] p-2">
                                Music Technician
                            </h2>
                            <h3 className="text-16 font-light tracking-[0.07em] p-2">
                                Sweeney Todd / Face Productions (May 2025)
                            </h3>
                            <ul>
                                <li> &#8226; Coordinated and directed Sound Cues for the show</li>
                                <li> &#8226; Provided technical expertise</li>
                                <li> &#8226; Communicated faults and possible improvements</li>
                            </ul>
                        </section>
                    </div>

                    <h1 className="text-4xl font-medium tracking-[0.07em] p-2 mt-5">
                        Education
                    </h1>

                    <div className="p-3">
                        <section className="flex flex-col items-center justify-center">
                            <h2 className="text-3xl font-normal tracking-[0.07em] p-2">
                                BA (Hons) Musical Theatre
                            </h2>
                            <h3 className="text-16 font-light tracking-[0.07em] p-2">
                                Royal Welsh College of Music and Drama (Expected 2029)
                            </h3>
                        </section>
                        <section className="flex flex-col items-center justify-center">
                            <h2 className="text-3xl font-normal tracking-[0.07em] p-2">
                                HKDSE
                            </h2>
                            <h3 className="text-16 font-light tracking-[0.07em] p-2">
                                HKBUAS (2019 - 2025)
                            </h3>
                        </section>
                    </div>

                    <h1 className="text-4xl font-medium tracking-[0.07em] p-2 mt-5">
                        Certifications
                    </h1>

                    <div className="p-3">
                        <section className="flex flex-col items-center justify-center">
                            <h2 className="text-3xl font-normal tracking-[0.07em] p-2">
                                Singing for Musical Theater
                            </h2>
                            <h3 className="text-16 font-light tracking-[0.07em] p-2">
                                ABRSM (Issued Nov 2024)
                            </h3>
                        </section>
                        <section className="flex flex-col items-center justify-center">
                            <h2 className="text-3xl font-normal tracking-[0.07em] p-2">
                                Violin Performance Grade 8
                            </h2>
                            <h3 className="text-16 font-light tracking-[0.07em] p-2">
                                ABRSM (Issued Jan 2024)
                            </h3>
                        </section>
                        <section className="flex flex-col items-center justify-center">
                            <h2 className="text-3xl font-normal tracking-[0.07em] p-2">
                                Singing Performance Grade 8
                            </h2>
                            <h3 className="text-16 font-light tracking-[0.07em] p-2">
                                ABRSM (Issued May 2024)
                            </h3>
                        </section>
                    </div>

                    <div className="mt-5">
                        <button>
                            <a href="public/JACOBWONG_CV.pdf" download className="outline-solid outline-1 outline-text/75 p-2 font-normal tracking-widest">Download Resume (.PDF)</a>
                        </button>
                    </div>


                    <div id = "Navigation" className="mt-8 flex flex-row gap-3">
                        <Link to="/" className="outline-solid outline-1 outline-text/75 p-2 font-sans tracking-widest">
                            HOME
                        </Link>
                        <Link to="/about" className="outline-solid outline-1 outline-text/75 p-2 font-sans tracking-widest">
                            ABOUT
                        </Link>
                        <Link to="/gallery" className="outline-solid outline-1 outline-text/75 p-2 font-sans tracking-widest">
                            GALLERY
                        </Link>
                        <Link to="/resume" className="outline-solid outline-1 outline-text/75 p-2 font-sans tracking-widest">
                            RESUME
                        </Link>
                        <Link to="/contact" className="outline-solid outline-1 outline-text/75 p-2 font-sans tracking-widest">
                            CONTACT
                        </Link>
                    </div>
                </div>
            </div>
        </ScrollFadeIn>
    )
}
