import { useState } from "react";

import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
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
            <div className="pattern-background flex items-center justify-center w-full">
                <div className="bg-background w-full max-w-4xl mx-auto p-6">
                    <h1 className="text-4xl font-light tracking-[0.2em] p-5 mb-5">
                        Gallery
                    </h1>
                    <ColumnsPhotoAlbum photos={photos} columns={3} onClick={({ index }) => setIndex(index)} />
                    <Lightbox
                        slides={photos}
                        open={index >= 0}
                        index={index}
                        close={() => setIndex(-1)}

                        plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                    />
                    <div id = "Navigation" className="mt-8 flex flex-row gap-3 items-center justify-center">
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
    );
}





