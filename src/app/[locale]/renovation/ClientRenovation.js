'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import Heading from '../components/Heading';
import AOS from 'aos';
import Gallery from '../components/PhotoGallery';
import ContactForm from '../components/ContactForm';
import { DOMAIN } from '../../utils/api';

export default function ClientRenovation({ data }) {
    useEffect(() => {
        AOS.init({
            once: false,
            duration: 1200,
            easing: 'ease-in-out',
        });
        AOS.refresh();
    }, []);

    const service = data?.data?.service;
    const service_details = data?.data?.service_details;

    if (!service) {
        return <div className="text-center py-20">Loading...</div>;
    }

    return (
        <div>
            <div className="container mx-auto md:py-12 max-w-7xl px-4" data-aos="fade-up">
                <Heading
                    title="Renovation & Construction"
                    description={service.service_short_description ?? 'N/A'}
                />

                {/* Banner section */}
                <div className="grid place-items-center md:mt-12 mt-6 gap-8">
                    {service.service_banner_img && (
                        <div className="relative w-full max-w-[850px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
                            <Image
                                src={`${DOMAIN}${service.service_banner_img}`}
                                alt={service.service_banner_img_alt_text || 'Renovation banner'}
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 850px"
                                priority
                            />
                        </div>
                    )}

                    {service.service_long_description && (
                        <p className="max-w-[850px] w-full main_text ff_fira md:    py-6 text-lg text-gray-700 text-center md:text-left leading-relaxed">
                            {service.service_long_description}
                        </p>
                    )}
                </div>

                {/* Gallery Section */}
                <div className="mt-10">
                    <Heading title="Renovation Services" />
                    <Gallery services={service_details} />
                </div>
            </div>

            {/* Contact Form */}
            <div>
                <ContactForm
                    image={
                        service.service_detail_page_footer_img
                            ? `${DOMAIN}${service.service_detail_page_footer_img}`
                            : undefined
                    }
                />
            </div>
        </div>
    );
}
