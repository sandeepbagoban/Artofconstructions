"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { DOMAIN } from "@/app/utils/api";
import { useRouter } from "next/navigation";

export default function ProjectDetailGallery({ projectImages, subProject }) {
    const router = useRouter();

    if (!projectImages || projectImages.length === 0) {
        return <p className="text-center text-gray-500">No images available</p>;
    }

    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    // Prepare slides array
    const slides = projectImages.map((img) => ({

        src: `${DOMAIN}/${img.project_type_img}`,
        alt: img.project_type_img_alt_text || "Project Image",
        title: img.project_type_img_alt_text || "Project Image",
    }));
    console.log(subProject, " slidesss")

    return (
        <div className="container mx-auto md:py-12 max-w-7xl px-4">
            {/* Back Button */}
            <button
                onClick={() => router.back()}
                className="mb-6 py-2 text-[#2B5450] cursor-pointer text-2xl"
            >
                Back to projects
            </button>

            <h1 className="text-center mb-4 text-[#2B5450] text-2xl ff_fira">{subProject.project_type_name}</h1>

            {/* Grid container */}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden shadow-lg group cursor-pointer"
                        onClick={() => {
                            setPhotoIndex(index);
                            setIsOpen(true);
                        }}
                    >
                        {/* Image wrapper with responsive heights */}
                        <div className="relative w-full h-40 sm:h-56 md:h-[450px]">
                            <Image
                                src={slide.src}
                                alt={slide.alt}
                                fill
                                className="object-cover"
                            />
                        </div>

                        {/* Overlay (bottom to top effect) */}
                        <div
                            className="absolute inset-0 flex items-center justify-center m-4 bg-white/70 
                                translate-y-full group-hover:translate-y-0 
                                opacity-0 group-hover:opacity-100 
                                transition-all duration-500 ease-out"
                        >
                            <span className="text-[#2B5450] font-semibold text-sm sm:text-lg md:text-xl text-center leading-snug">
                                {slide.title}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox with thumbnail slider */}
            <Lightbox
                open={isOpen}
                close={() => setIsOpen(false)}
                index={photoIndex}
                slides={slides}
                plugins={[Thumbnails]}
                on={{
                    slideChange: (newIndex) => setPhotoIndex(newIndex),
                }}
            />
        </div>
    );
}
