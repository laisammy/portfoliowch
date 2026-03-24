import { Link } from "react-router-dom";
import ScrollFadeIn from "./scrollFadeIn";

export default function Resume() {
    return (
        <ScrollFadeIn>
            <div className="pattern-background flex items-center justify-center w-full min-h-screen px-4 py-10">
                <div className="bg-background text-text lexend p-8 w-full max-w-4xl flex flex-col items-center justify-center">

                    <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[0.07em] flex justify-center mb-5 text-center">
                        RESUME
                    </h1>

                    <div className="mb-5">
                        <a
                            href="public/JACOBWONG_CV.pdf"
                            download
                            className="outline-1 outline-text/75 p-2 font-normal tracking-widest hover:bg-hover text-[clamp(0.9rem,1.4vw,1.2rem)]"
                        >
                            Download Resume (.PDF)
                        </a>
                    </div>

                    <h1 className="text-[clamp(1.8rem,3vw,2.5rem)] font-medium tracking-[0.07em] p-2 text-center">
                        Amateur Credits
                    </h1>

                    <div className="p-3 space-y-4">
                        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
                            <p className="font-medium">Be More Chill</p>
                            <p>Jake Dillinger</p>
                            <p>Face Productions</p>
                        </section>

                        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
                            <p className="font-medium">Heathers: The Musical</p>
                            <p>Ram Sweeney</p>
                            <p>Face Productions</p>
                        </section>

                        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
                            <p className="font-medium">Annie Jr.</p>
                            <p>Rooster</p>
                            <p>Face Productions</p>
                        </section>

                        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
                            <p className="font-medium">Shrek Jr.</p>
                            <p>Shrek</p>
                            <p>Face Productions</p>
                        </section>

                        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
                            <p className="font-medium">School of Rock</p>
                            <p>Dewey Finn</p>
                            <p>Face Productions</p>
                        </section>
                    </div>

                    <h1 className="text-[clamp(1.8rem,3vw,2.5rem)] font-medium tracking-[0.07em] p-2 mt-5 text-center">
                        Languages
                    </h1>

                    <div className="p-3 space-y-3">
                        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center sm:text-left">
                            <p>English</p>
                            <p>Fluent</p>
                        </section>

                        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center sm:text-left">
                            <p>Cantonese</p>
                            <p>Fluent</p>
                        </section>

                        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-center sm:text-left">
                            <p>Mandarin</p>
                            <p>Fluent</p>
                        </section>
                    </div>

                    <h1 className="text-[clamp(1.8rem,3vw,2.5rem)] font-medium tracking-[0.07em] p-2 mt-5 text-center">
                        Work Experience
                    </h1>

                    <div className="p-3 space-y-6 w-full">

                        <section className="flex flex-col items-center text-center">
                            <h2 className="text-[clamp(1.4rem,2.5vw,2rem)] font-normal p-2">
                                LAMDA & Musical Theatre Teacher
                            </h2>
                            <h3 className="text-[clamp(1rem,1.6vw,1.2rem)] font-light p-2">
                                The Academi Group (Feb 2026 - Present)
                            </h3>
                            <ul className="text-left space-y-1">
                                <li>• Supported student learning and progress</li>
                                <li>• Assisted in lesson preparation and planning</li>
                                <li>• Participated in show weeks</li>
                            </ul>
                        </section>

                        <section className="flex flex-col items-center text-center">
                            <h2 className="text-[clamp(1.4rem,2.5vw,2rem)] font-normal p-2">
                                Summer Intern
                            </h2>
                            <h3 className="text-[clamp(1rem,1.6vw,1.2rem)] font-light p-2">
                                Creative Collab (Jul 2025 - Sep 2025)
                            </h3>
                            <ul className="text-left space-y-1">
                                <li>• Taught children aged 6–18 across schools and youth centres</li>
                                <li>• Assisted in lesson preparation and planning</li>
                            </ul>
                        </section>

                        <section className="flex flex-col items-center text-center">
                            <h2 className="text-[clamp(1.4rem,2.5vw,2rem)] font-normal p-2">
                                Assistant Director
                            </h2>
                            <h3 className="text-[clamp(1rem,1.6vw,1.2rem)] font-light p-2">
                                HKIS High School Show / Face Productions (May 2025)
                            </h3>
                            <ul className="text-left space-y-1">
                                <li>• Assisted communication between cast and director</li>
                                <li>• Costume management</li>
                            </ul>
                        </section>

                        <section className="flex flex-col items-center text-center">
                            <h2 className="text-[clamp(1.4rem,2.5vw,2rem)] font-normal p-2">
                                Music Technician
                            </h2>
                            <h3 className="text-[clamp(1rem,1.6vw,1.2rem)] font-light p-2">
                                Sweeney Todd / Face Productions (May 2025)
                            </h3>
                            <ul className="text-left space-y-1">
                                <li>• Coordinated and directed sound cues</li>
                                <li>• Provided technical expertise</li>
                                <li>• Communicated faults and improvements</li>
                            </ul>
                        </section>
                    </div>

                    <h1 className="text-[clamp(1.8rem,3vw,2.5rem)] font-medium tracking-[0.07em] p-2 mt-5 text-center">
                        Education
                    </h1>

                    <div className="p-3 space-y-4 w-full">
                        <section className="flex flex-col items-center text-center">
                            <h2 className="text-[clamp(1.4rem,2.5vw,2rem)] font-normal p-2">
                                BA (Hons) Musical Theatre
                            </h2>
                            <h3 className="text-[clamp(1rem,1.6vw,1.2rem)] font-light p-2">
                                Royal Welsh College of Music and Drama (Expected 2028)
                            </h3>
                        </section>

                        <section className="flex flex-col items-center text-center">
                            <h2 className="text-[clamp(1.4rem,2.5vw,2rem)] font-normal p-2">
                                HKDSE
                            </h2>
                            <h3 className="text-[clamp(1rem,1.6vw,1.2rem)] font-light p-2">
                                HKBUAS (2019 - 2025)
                            </h3>
                        </section>
                    </div>

                    <h1 className="text-[clamp(1.8rem,3vw,2.5rem)] font-medium tracking-[0.07em] p-2 mt-5 text-center">
                        Certifications
                    </h1>

                    <div className="p-3 space-y-4 w-full">
                        <section className="flex flex-col items-center text-center">
                            <h2 className="text-[clamp(1.4rem,2.5vw,2rem)] font-normal p-2">
                                Singing for Musical Theater
                            </h2>
                            <h3 className="text-[clamp(1rem,1.6vw,1.2rem)] font-light p-2">
                                ABRSM (Issued Nov 2024)
                            </h3>
                        </section>

                        <section className="flex flex-col items-center text-center">
                            <h2 className="text-[clamp(1.4rem,2.5vw,2rem)] font-normal p-2">
                                Violin Performance Grade 8
                            </h2>
                            <h3 className="text-[clamp(1rem,1.6vw,1.2rem)] font-light p-2">
                                ABRSM (Issued Jan 2024)
                            </h3>
                        </section>

                        <section className="flex flex-col items-center text-center">
                            <h2 className="text-[clamp(1.4rem,2.5vw,2rem)] font-normal p-2">
                                Singing Performance Grade 8
                            </h2>
                            <h3 className="text-[clamp(1rem,1.6vw,1.2rem)] font-light p-2">
                                ABRSM (Issued May 2024)
                            </h3>
                        </section>
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