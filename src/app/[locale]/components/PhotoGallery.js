'use client';

import { useState, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Image from 'next/image';
import { DOMAIN } from '../../utils/api';

const Gallery = ({ services }) => {
    const [activeTab, setActiveTab] = useState('gallery1');
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);
    const [galleryOne, setGalleryOne] = useState([]);
    const [galleryTwo, setGalleryTwo] = useState([]);

    useEffect(() => {
        if (services && services.length > 0) {
            const tabOneImages = services[0]?.get_sub_service_images?.map(img => ({
                src: `${DOMAIN}${img.sub_service_tab_images}`,
                alt: img.sub_service_tab_images_alt_text
            })) || [];

            const tabTwoImages = services[1]?.get_sub_service_images?.map(img => ({
                src: `${DOMAIN}${img.sub_service_tab_images}`,
                alt: img.sub_service_tab_images_alt_text
            })) || [];

            setGalleryOne(tabOneImages);
            setGalleryTwo(tabTwoImages);
        }
    }, [services]);

    const currentImages = activeTab === 'gallery1' ? galleryOne : galleryTwo;

    if (!services || services.length === 0) return null;

    return (
        <div className="container mx-auto md:py-12 max-w-7xl px-4 md:px-0" data-aos="fade-up">
            {/* Tabs */}
            <div className="flex justify-center mb-10 overflow-x-auto">
                <div className="flex items-center gap-4 md:gap-8 md:text-lg text-md flex-nowrap whitespace-nowrap tracking-widest">
                    <span
                        onClick={() => setActiveTab('gallery1')}
                        className={`cursor-pointer ${activeTab === 'gallery1' ? 'text-[#1F2937] font-medium tracking-widest' : 'text-[#C7C7C7]'}`}
                    >
                        {services[0]?.sub_service_name || 'Gallery 1'}
                    </span>

                    {/* Star icon stays visible */}
                    <span className="flex-shrink-0">
                        <Image
                            src="/assets/images/star_icon.png"
                            alt="star"
                            width={24}
                            height={24}
                        />
                    </span>

                    <span
                        onClick={() => setActiveTab('gallery2')}
                        className={`cursor-pointer ${activeTab === 'gallery2' ? 'text-[#1F2937] font-medium tracking-widest' : 'text-[#C7C7C7]'}`}
                    >
                        {services[1]?.sub_service_name || 'Gallery 2'}
                    </span>
                </div>
            </div>



            {/* Grid Layout */}
            {currentImages.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-12 gap-4">
                    {currentImages.slice(0, 6).map((img, i) => (
                        <div
                            key={i}
                            className={
                                // Mobile = always span 2 columns, Desktop = original layout
                                i === 0 ? 'col-span-2 md:col-span-6' :
                                    i === 1 ? 'col-span-1 md:col-span-3' :
                                        i === 2 ? 'col-span-1 md:col-span-3' :
                                            i === 3 ? 'col-span-1 md:col-span-3' :
                                                i === 4 ? 'col-span-1 md:col-span-3' :
                                                    'col-span-2 md:col-span-6'
                            }
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                onClick={() => {
                                    setIndex(i);
                                    setOpen(true);
                                }}
                                className="w-full h-48 md:h-70 object-cover rounded cursor-pointer shadow-md"
                            />
                        </div>
                    ))}
                </div>

            )}

            {/* Lightbox */}
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={currentImages}
                index={index}
                plugins={[Thumbnails]}
            />
        </div>
    );
};

export default Gallery;
