'use client';

import { useState, useEffect } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Image from 'next/image';
import Heading from '../components/Heading';
import Link from 'next/link';
import axios from 'axios';
import { DOMAIN } from '@/app/utils/api';

export default function ClientProjectsGallery({ data, locale }) {
    const { project_tabs = [], project_details = [] } = data?.data || {};

    if (!project_tabs.length) {
        return <div>Loading...</div>;
    }

    const tabs = project_tabs.map((proj) => ({
        slug: proj.project_slug,
        label: proj.project_name,
    }));

    // Store slug instead of id
    const [activeTab, setActiveTab] = useState(tabs[0]?.slug || null);
    const [currentDetails, setCurrentDetails] = useState(project_details);
    const [loading, setLoading] = useState(false);

    // Lightbox state
    // const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    // Fetch data on tab change
    useEffect(() => {
        async function fetchData() {

            try {
                setLoading(true);
                const res = await axios.get(
                    `${DOMAIN}api/project-details/${activeTab}`
                );
                setCurrentDetails(res.data?.data?.project_details || []);
            } catch (error) {
                console.error('Error fetching project details:', error);
                setCurrentDetails([]);
            } finally {
                setLoading(false);
            }
        }

        if (activeTab) {
            fetchData();
        }
    }, [activeTab, locale]);

    const currentImages = currentDetails.map((detail) => ({
        src: `${process.env.NEXT_PUBLIC_API_URL}/${detail.project_type_single_img}`,
        alt:
            detail.project_type_single_img_alt_text ||
            detail.project_type_name ||
            'Project Image',
        name: detail.project_type_name,
        description: detail.project_Details, // ✅ fixed (your API has project_Details, not project_description)
        date: detail.project_date,
        slug: detail.project_type_slug,
    }));

    return (
        <div
            className="container mx-auto md:py-10 max-w-7xl px-4 sm:px-6"
            data-aos="fade-up"
        >
            <Heading title="Projects" />

            {/* Tabs */}
            <div className="flex justify-center my-6 sm:my-10">
                <div className="flex gap-4 sm:gap-8 text-md sm:text-lg items-center overflow-x-auto no-scrollbar whitespace-nowrap">
                    {tabs.map((tab, idx) => (
                        <div key={`${tab.slug}-${idx}`} className="flex items-center gap-2 sm:gap-4">
                            <span
                                onClick={() => setActiveTab(tab.slug)}
                                className={`tracking-widest cursor-pointer ${activeTab === tab.slug ? 'text-[#1F2937] font-medium' : 'text-[#C7C7C7]'
                                    }`}
                            >
                                {tab.label}
                            </span>
                            {idx < tabs.length - 1 && (
                                <Image
                                    src="/assets/images/star_icon.png"
                                    alt="star"
                                    width={20}
                                    height={20}
                                />
                            )}
                        </div>
                    ))}

                </div>
            </div>

            {/* Card Layout */}
            {loading ? (
                <div className="flex justify-center items-center py-20">
                    <div className="w-12 h-12 border-4 border-[#F3C76C] border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : (
                <div className="space-y-12">
                    {currentImages.length === 0 ? (
                        <p className="text-center text-gray-500">No projects available</p>
                    ) : (
                        currentImages.map((proj, i) => (
                            <div
                                key={i}
                                className={`flex flex-col md:flex-row items-stretch gap-8 ${i % 2 === 1 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                {/* Project Image */}
                                <div
                                    className="w-full md:w-1/2 cursor-pointer shadow-md h-[400px]"
                                    onClick={() => {
                                        setIndex(i);
                                        // setOpen(true);
                                    }}
                                >
                                    <Image
                                        src={proj.src}
                                        alt={proj.alt}
                                        width={535}
                                        height={200}
                                        className="w-full h-full object-cover"
                                    />
                                </div>


                                {/* Project Info */}
                                <div className="w-full md:w-1/2 flex flex-col justify-between">
                                    {/* Top Section (title, description, date) */}
                                    <div className="space-y-3">
                                        <h3 className="text-[24px] font-medium ff_fira text-[#2B5450]">
                                            {proj.name || "Project Name"}
                                        </h3>
                                        <p className="text-[18px] font-normal ff_fira text-[#464646]">
                                            Project Detail: {proj.description || "No description"}
                                        </p>
                                        {proj.date && (
                                            <p className="text-[18px] font-normal ff_fira text-[#464646]">
                                                Project Date : {proj.date}
                                            </p>
                                        )}
                                    </div>


                                    {/* Bottom Section (button) */}
                                    <Link
                                        href={`/${locale}/projects/${proj.slug}`}
                                        className="mt-4 inline-flex items-center gap-2 bg-[#F3C76C] px-8 py-3 text-md ff_fira text-[#000000] self-start"
                                    >
                                        View Project
                                        <Image
                                            src="/assets/images/arrow_icon.png"
                                            alt="arrow"
                                            width={24}
                                            height={24}
                                            className="ml-3 sm:ml-5"
                                        />
                                    </Link>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}


            {/* Lightbox */}
            {/* <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={currentImages}
                index={index}
                plugins={[Thumbnails]}
            /> */}
        </div>
    );
}
