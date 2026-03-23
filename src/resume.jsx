import { Link } from "react-router-dom";

export default function Resume() {
    return (
        <div className="bg-stone-300 flex flex-row items-center justify-center w-full">
            <div className="bg-background text-text p-8 h-max w-190 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-medium tracking-[0.07em] p-2">
                    Work Experience
                </h1>
                <div className="p-3">
                    <section className="flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-normal tracking-[0.07em] p-2">
                            Choir Teacher
                        </h2>
                        <h3 className="text-16 font-light tracking-[0.07em] p-2">
                            HKBUAS (June 2025 - July 2025)
                        </h3>
                        <ul>
                            <li> &#8226; Led an excursion to Denmark with a choir from Hong Kong</li>
                            <li> &#8226; Organized activities and debriefing</li>
                        </ul>
                    </section>
                    <section className="flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-normal tracking-[0.07em] p-2">
                            Assistant Director
                        </h2>
                        <h3 className="text-16 font-light tracking-[0.07em] p-2">
                            HKIS High School Show / Face Productions (May 2025)
                        </h3>
                        <ul>
                            <li> &#8226; Assisted with the communication between the cast and the director</li>
                            <li> &#8226; Costume Management</li>
                        </ul>
                    </section>
                    <section className="flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-normal tracking-[0.07em] p-2">
                            Music Technician
                        </h2>
                        <h3 className="text-16 font-light tracking-[0.07em] p-2">
                            Sweeney Todd / Face Productions (May 2025)
                        </h3>
                        <ul>
                            <li> &#8226; Coordinated and directed Sound Cues for the show.</li>
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


                <div id = "Navigation" className="mt-8 flex flex-row gap-3">
                    <Link to="/" className="outline-solid outline-1 outline-text/75 p-2 font-sans tracking-widest">
                        HOME
                    </Link>
                    <Link to="/About" className="outline-solid outline-1 outline-text/75 p-2 font-sans tracking-widest">
                        ABOUT
                    </Link>
                    <Link to="/Gallery" className="outline-solid outline-1 outline-text/75 p-2 font-sans tracking-widest">
                        GALLERY
                    </Link>
                </div>
            </div>
        </div>
    )
}

aaaaa