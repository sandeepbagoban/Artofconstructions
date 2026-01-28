'use client';

import Image from "next/image";
import AOS from 'aos';
import { useEffect } from "react";
import Heading from "../components/Heading";
import Gallery from "../components/PhotoGallery";
import ContactForm from "../components/ContactForm";
import { DOMAIN } from "../../utils/api";

export default function ClientPlannig({ data }) {
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

    const servicesTitle = service.service_title;


    return (
        <div>
            <div className="container mx-auto md:py-12 py:6 max-w-7xl" data-aos="fade-up">
                <Heading title={'Planning & Creation'} description={service.service_short_description ?? 'N/A'} />
                <div className="grid grid-cols-12 gap-4 items-center md:my-20 my-10">
                    {/* Image - 4 columns */}
                    <div className="col-span-12 md:col-span-4 flex justify-center">
                        <Image
                            src={`${DOMAIN}${service.service_banner_img ?? 'N/A'}`}
                            alt={service.service_banner_img_alt_text}
                            width={490}
                            height={550}
                            priority
                            className="object-cover w-[350px] md:w-[490px] h-auto"
                        />
                    </div>

                    {/* Text - 6 columns */}
                    <div className="col-span-12 md:col-span-7 text-center md:text-left">
                        <p className="main_text ff_fira text-lg">
                            {service.service_long_description ?? 'N/A'}
                        </p>
                    </div>
                </div>


                <div>
                    <Heading title={'Design & Creation Services'} />
                    <Gallery services={service_details} />

                </div>
            </div>
            <div>
                <ContactForm image={`${DOMAIN}${service.service_detail_page_footer_img}`} />
            </div>
        </div>
    );
};
