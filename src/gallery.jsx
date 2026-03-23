import { ColumnsPhotoAlbum } from "react-photo-album";
import "react-photo-album/columns.css";

import { Link } from "react-router-dom";

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
  return (
    <div className="bg-stone-300 flex items-center justify-center w-full">
        <div className="bg-background w-full max-w-4xl mx-auto p-6">
            <h1 className="text-4xl font-light tracking-[0.2em] p-5 mb-5">
                Gallery
            </h1>
            <ColumnsPhotoAlbum photos={photos} columns={3} />
            <div id = "Navigation" className="mt-8 flex flex-row gap-3 items-center justify-center">
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
  );
}



