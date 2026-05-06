"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { DOMAIN } from "@/app/utils/api";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FiArrowLeft } from "react-icons/fi";

export default function ProjectDetailGallery({ projectImages, subProject }) {
    const params = useParams();
    const locale = params?.locale || "en";

    if (!projectImages || projectImages.length === 0) {
        return <p className="text-center text-gray-400 ff_poppins py-20">No images available.</p>;
    }

    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const slides = projectImages.map((img) => ({
        src: `${DOMAIN}/${img.project_type_img}`,
        alt: img.project_type_img_alt_text || "Project Image",
        title: img.project_type_img_alt_text || "Project Image",
    }));

    return (
        <div className="container mx-auto pt-32 pb-20 max-w-7xl px-4">

            {/* Back to Projects button */}
            <Link
                href={`/${locale}/projects`}
                className="mb-10 inline-flex items-center gap-2 text-[#000] ff_poppins text-sm sm:text-base hover:text-[#F3C76C] transition-colors duration-200 group"
            >
                <FiArrowLeft className="text-lg transition-transform duration-300 group-hover:-translate-x-1" />
                Back to Projects
            </Link>

            {/* Project title */}
            <h1 className="text-center my-8 text-[#000000] text-2xl sm:text-3xl lg:text-[40px] heading_text font-[400]">
                {subProject.project_type_name}
            </h1>

            {/* Masonry photo grid — click to open lightbox */}
            <div className="columns-2 sm:columns-2 md:columns-3 gap-4 space-y-4 mt-10">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="break-inside-avoid relative overflow-hidden group cursor-pointer"
                        onClick={() => {
                            setPhotoIndex(index);
                            setIsOpen(true);
                        }}
                    >
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/30 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-white font-medium text-sm ff_poppins leading-snug">
                                {slide.title}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            <Lightbox
                open={isOpen}
                close={() => setIsOpen(false)}
                index={photoIndex}
                slides={slides}
                plugins={[Thumbnails]}
                on={{ slideChange: (newIndex) => setPhotoIndex(newIndex) }}
            />
        </div>
    );
}
