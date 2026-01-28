'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Heading from '../components/Heading';
import { FiArrowRight } from "react-icons/fi";
import ContactForm from '../components/ContactForm';
import Link from 'next/link';
import { DOMAIN } from '../../utils/api';

export default function ClientAbout({ data }) {
    useEffect(() => {
        AOS.init({
            once: false,
            duration: 1200,
            easing: 'ease-in-out',
        });
        AOS.refresh();
    }, []);

    // Safely extract all data with fallbacks
    const bannerData = data?.data?.banner_data || {};
    const approachDetails = data?.data?.approach_details || {};

    // Debug: Log the data


    return (
        <section className="overflow-hidden">
            {/* Banner section */}
            {bannerData?.main_banner_image && (
                <div
                    className="relative w-full h-[calc(100vh-82px)]"
                    data-aos="zoom-out"
                >
                    <Image
                        src={`${DOMAIN}${bannerData.main_banner_image}`}
                        alt="About banner"
                        fill
                        className="object-cover object-center"
                        priority
                        sizes="100vw"
                    />
                </div>
            )}
            {/* Know About us section */}
            <div
                className="text-center my-8 sm:my-12 px-3 sm:px-6 md:px-12"
                data-aos="fade-up"
            >
                <Heading title="Know About us" />

                {bannerData?.banner_section_short_description && (
                    <h3
                        className="text-lg sm:text-xl md:text-2xl lg:text-[30px] font-serif italic text-[#656565] leading-relaxed max-w-4xl mx-auto"
                    >
                        {bannerData.banner_section_short_description}
                    </h3>
                )}
            </div>

            {(bannerData?.banner_description_section_image || bannerData?.banner_section_description) && (
                <div
                    className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-6 md:px-0"
                    data-aos="fade-up"
                >
                    {/* Left Image */}
                    {bannerData?.banner_description_section_image && (
                        <div className="relative w-full h-[220px] sm:h-[300px] md:h-[450px]">
                            <Image
                                src={`${DOMAIN}${bannerData.banner_description_section_image}`}
                                alt="About Us"
                                fill
                                className="object-cover object-center"
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    )}

                    {/* Right Text */}
                    {bannerData?.banner_section_description && (
                        <div className="text-gray-700 leading-relaxed tracking-wide text-sm sm:text-base lg:text-lg">
                            <p className="mb-4 main_text ff_fira">
                                {bannerData.banner_section_description}
                            </p>
                        </div>
                    )}
                </div>
            )}

            {/* Our approach section */}
            <div className="my-8 md:my-16 px-4 sm:px-6 md:px-0">
                {/* Heading */}
                <div className="text-center my-8 sm:my-12" data-aos="fade-up">
                    <Heading
                        title="Our Approach"
                        description="From your personalized design to the smallest detail in finishing."
                    />
                </div>

                {/* Top row */}
                <div
                    className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-12 sm:mt-20"
                    data-aos="fade-up"
                >
                    {[
                        "Experience & Advice",
                        "Expertise & Quality",
                        "Professionalism & Trust"
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col space-y-4 sm:space-y-6text-left"
                        >
                            <p className="italic text-[#656565] text-base sm:text-lg">{item}</p>
                            <hr className="border border-gray-800 w-full" />
                        </div>
                    ))}
                </div>

                {/* Bottom row */}
                <div
                    className="max-w-7xl mx-auto mt-12 sm:mt-20 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10 items-center"
                    data-aos="fade-up"
                >
                    {/* Emergency Work */}
                    <div className="flex flex-col space-y-4 sm:space-y-6 xtext-left">
                        <p className="italic text-[#656565] text-base sm:text-lg">Emergency Work</p>
                        <hr className="border border-gray-800 w-full" />
                    </div>

                    {/* Empty middle space (hidden on mobile for balance) */}
                    <div className="hidden lg:block"></div>

                    {/* Button */}
                    <div className="flex justify-center lg:justify-end mt-4 lg:mt-0">
                        <Link
                            href="/request-quote"
                            className="bg-[#F3C76C] text-sm sm:text-md px-5 sm:px-6 py-2.5 sm:py-3 rounded-sm text-black flex items-center gap-2 transition cursor-pointer ff_fira hover:bg-[#e0b85c]"
                        >
                            Request A QUOTE <FiArrowRight className="text-base sm:text-lg" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Approach images section */}
            <div className="flex flex-col md:flex-row items-start justify-between mx-4 md:mx-20 md:px-10 md:py-12 gap-10" data-aos="fade-up">
                {/* Left column */}
                <div className="flex flex-col items-start w-full md:w-1/4">
                    {/* Small image */}
                    {approachDetails?.approach_section_img_1 && (
                        <div className="mb-6">
                            <Image
                                src={`${DOMAIN}${approachDetails.approach_section_img_1}`}
                                alt="Our Approach"
                                width={500} // max width for large screen
                                height={380} // keeps ratio but auto-adjusts
                                className="h-auto w-full"
                                sizes="(max-width: 768px) 100vw, 600px"
                            />
                        </div>
                    )}

                    {/* Description text */}
                    <p className="heading_text italic text-[22px] sm:text-[26px] md:text-[30px] leading-relaxed mt-4 w-full sm:w-[350px]">
                        Our Creations Are Characterized By A Unique Sense Of Class And Design.
                    </p>
                </div>

                {/* Right image */}
                {approachDetails?.approach_section_img_2 && (
                    <div className="w-full md:w-auto">
                        <Image
                            src={`${DOMAIN}${approachDetails.approach_section_img_2}`}
                            alt="Our Work"
                            width={760}
                            height={760}
                            className="h-auto w-full object-cover"
                            sizes="(max-width: 768px) 100vw, 760px"
                        />
                    </div>
                )}
            </div>


            {/* Contact Form section */}
            {approachDetails?.approach_section_footer_img && (
                <div data-aos="fade-up">
                    <ContactForm image={`${DOMAIN}${approachDetails.approach_section_footer_img}`} />
                </div>
            )}
        </section>
    );
}