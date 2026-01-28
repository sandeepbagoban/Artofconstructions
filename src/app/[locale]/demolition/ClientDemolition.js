'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Heading from '../components/Heading';
import AOS from 'aos';
import ContactForm from '../components/ContactForm';
import { DOMAIN } from '../../utils/api';

export default function ClientDemolition({ data }) {
    const [activeTab, setActiveTab] = useState('interior');

    useEffect(() => {
        AOS.init({
            once: false,
            duration: 1200,
            easing: 'ease-in-out',
        });
        AOS.refresh();
    }, []);

    // ✅ Correct path
    const service = data?.data?.service;
    const service_details = data?.data?.service_details;

    if (!service) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            <div className="container mx-auto md:py-12 max-w-7xl px-4" data-aos="fade-up">
                <Heading
                    title={'Renovation & Construction'}
                    description={service.service_short_description ?? 'N/A'}
                />

                {/* Image + Text Section */}
                <div className="grid place-items-center md:mt-12 mt-6 gap-8">
                    {/* Banner Image */}
                    <div className="relative w-full max-w-[850px] h-[200px] sm:h-[300px] md:h-[350px]">
                        <Image
                            src={`${DOMAIN}${service.service_banner_img ?? 'N/A'}`}
                            alt={service.service_banner_img_alt_text}
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                    {/* Description */}
                    <div className="w-full max-w-[850px]">
                        <p className="main_text ff_fira text-base sm:text-lg md:py-6 text-center md:text-left">
                            {service.service_long_description ?? 'N/A'}
                        </p>
                    </div>
                </div>

                {/* Tabs Heading */}
                <div className="mt-12">
                    <Heading title={'Demolition & removal service'} />
                </div>

                {/* Tabs Navigation */}
                <div className="flex justify-center my-10 px-4">
                    <div className="flex justify-center items-center gap-4 sm:gap-8 text-base sm:text-lg whitespace-nowrap overflow-x-auto">
                        <button
                            onClick={() => setActiveTab('interior')}
                            className={`cursor-pointer transition-colors ${activeTab === 'interior' ? 'text-[#1F2937]' : 'text-[#C7C7C7]'}`}
                        >
                            Demolition & Rubble Removal
                        </button>

                        <div className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6">
                            <Image
                                src="/assets/images/star_icon.png"
                                alt="divider"
                                width={24}
                                height={24}
                            />
                        </div>

                        <button
                            onClick={() => setActiveTab('exterior')}
                            className={`cursor-pointer transition-colors ${activeTab === 'exterior' ? 'text-[#1F2937]' : 'text-[#C7C7C7]'}`}
                        >
                            Safety & Professionalism
                        </button>
                    </div>

                </div>

                {/* Tab Content */}
                <div className="max-w-2xl mx-auto px-4">
                    {activeTab === 'interior' ? (
                        <div className="space-y-6">
                            <div className="flex justify-center items-center">
                                <div className="flex justify-center items-center h-14 w-14 bg-[#E9E9E9] rounded-full">
                                    <Image
                                        src="/assets/images/demolition_icon_one.png"
                                        alt="icon"
                                        width={30}
                                        height={30}
                                    />
                                </div>
                            </div>
                            <p className="text-base sm:text-lg main_text ff_fira text-center">
                                Looking for demolition experts? Look no further, our services include:
                                Application and verification of demolition permits, asbestos inspection, dismantling, deconstruction and demolition, cutting of debris, ecological sorting and removal of rubble, demolition waste and large bulky items.
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <div className="flex justify-center items-center">
                                <div className="flex justify-center items-center h-14 w-14 bg-[#E9E9E9] rounded-full">
                                    <Image
                                        src="/assets/images/demolition_icon_two.png"
                                        alt="icon"
                                        width={30}
                                        height={30}
                                    />
                                </div>
                            </div>
                            <p className="text-base sm:text-lg main_text ff_fira text-center">
                                The demolition phase of any renovation or construction project is critical and requires experienced and qualified personnel.
                                We respond quickly and responsibly, and our teams are trained to meet the demands of these services.
                                Call on us and you'll be guaranteed speed, safety, and expertise!
                            </p>
                        </div>
                    )}
                </div>
            </div>

            {/* Contact Form */}
            <div>
                <ContactForm image={`${DOMAIN}${service.service_detail_page_footer_img}`} />
            </div>
        </div>

    );
};
