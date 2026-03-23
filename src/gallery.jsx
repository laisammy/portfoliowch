import { useState } from "react";

import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { Link } from "react-router-dom";

import ScrollFadeIn from "./scrollFadeIn";

const photos = [
    { src: "/IMG_4425.jpeg", width: 3000, height: 4000 },
    { src: "/IMG_4426.jpeg", width: 2048, height: 1365 },
    { src: "/IMG_4427.jpeg", width: 1440, height: 1440 },
    { src: "/IMG_4428.jpeg", width: 2048, height: 1365 },
    { src: "/IMG_4429.jpeg", width: 2048, height: 1365 },
    { src: "/IMG_4430.jpeg", width: 1600, height: 1068 },
    { src: "/IMG_4431.jpeg", width: 1600, height: 1068 },
    { src: "/IMG_4432.jpeg", width: 2048, height: 1365 },
    { src: "/IMG_4433.jpeg", width: 1199, height: 1919 },
    { src: "/IMG_4434.jpeg", width: 1280, height: 1920 },
];

export default function Gallery() {
    const [index, setIndex] = useState(-1);

    return (
        <ScrollFadeIn>
            <div className="pattern-background flex items-center justify-center w-full min-h-screen px-4 py-10">
                <div className="bg-background text-text lexend w-full max-w-4xl mx-auto p-6">

                    <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-semibold tracking-[0.07em] flex justify-center mb-5 text-center">
                        GALLERY
                    </h1>

                    <ColumnsPhotoAlbum
                        photos={photos}
                        columns={(containerWidth) => {
                            if (containerWidth < 400) return 1;
                            if (containerWidth < 800) return 2;
                            return 3;
                        }}
                        onClick={({ index }) => setIndex(index)}
                    />

                    <Lightbox
                        slides={photos}
                        open={index >= 0}
                        index={index}
                        close={() => setIndex(-1)}
                        plugins={[Fullscreen, Thumbnails, Zoom]}
                    />

                    <div id="Navigation" className="mt-7 flex flex-wrap gap-3 text-[clamp(0.9rem,1.4vw,1.2rem)] justify-center">
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