'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
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

    const [activeTab, setActiveTab] = useState(tabs[0]?.slug || null);
    const [currentDetails, setCurrentDetails] = useState(project_details);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const res = await axios.get(`${DOMAIN}api/project-details/${activeTab}`);
                setCurrentDetails(res.data?.data?.project_details || []);
            } catch (error) {
                console.error('Error fetching project details:', error);
                setCurrentDetails([]);
            } finally {
                setLoading(false);
            }
        }
        if (activeTab) fetchData();
    }, [activeTab, locale]);

    const currentImages = currentDetails.map((detail) => ({
        src: `${process.env.NEXT_PUBLIC_API_URL}/${detail.project_type_single_img}`,
        alt: detail.project_type_single_img_alt_text || detail.project_type_name || 'Project Image',
        name: detail.project_type_name,
        description: detail.project_Details,
        date: detail.project_date,
        slug: detail.project_type_slug,
    }));

    return (
        <div className="container mx-auto pt-32 pb-20 max-w-7xl px-4 sm:px-6">

            {/* Page title */}
            <h1 className="text-[40px] sm:text-[56px] lg:text-[72px] heading_text font-[400] text-center mb-4">
                PROJECTS
            </h1>

            {/* Grey dot tags — Construction · Renovation · B2B */}
            <div className="flex justify-center items-center gap-3 mb-10">
                {tabs.map((tab, idx) => (
                    <div key={`tag-${tab.slug}`} className="flex items-center gap-3">
                        <span className="text-[#AAAAAA] ff_poppins text-sm sm:text-base tracking-widest uppercase">
                            {tab.label}
                        </span>
                        {idx < tabs.length - 1 && (
                            <span className="text-[#AAAAAA] text-xs">●</span>
                        )}
                    </div>
                ))}
            </div>

            {/* Active filter tabs */}
            <div className="flex justify-center my-8">
                <div className="flex gap-6 sm:gap-10 text-sm sm:text-base items-center overflow-x-auto no-scrollbar whitespace-nowrap">
                    {tabs.map((tab, idx) => (
                        <div key={`${tab.slug}-${idx}`} className="flex items-center gap-4 sm:gap-6">
                            <span
                                onClick={() => setActiveTab(tab.slug)}
                                className={`tracking-widest uppercase cursor-pointer transition-colors duration-300 ff_poppins ${
                                    activeTab === tab.slug
                                        ? 'text-[#1F2937] font-semibold border-b border-[#1F2937] pb-0.5'
                                        : 'text-[#C7C7C7] hover:text-[#888]'
                                }`}
                            >
                                {tab.label}
                            </span>
                            {idx < tabs.length - 1 && (
                                <Image src="/assets/images/star_icon.png" alt="·" width={14} height={14} className="opacity-30" />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Photo grid — click the photo to open detail */}
            {loading ? (
                <div className="flex justify-center items-center py-20">
                    <div className="w-10 h-10 border-4 border-[#F3C76C] border-t-transparent rounded-full animate-spin"></div>
                </div>
            ) : (
                <>
                    {currentImages.length === 0 ? (
                        <p className="text-center text-gray-400 ff_poppins py-20">No projects available.</p>
                    ) : (
                        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5 mt-10">
                            {currentImages.map((proj, i) => (
                                <Link
                                    key={i}
                                    href={`/${locale}/projects/${proj.slug}`}
                                    className="break-inside-avoid block group relative overflow-hidden"
                                >
                                    <Image
                                        src={proj.src}
                                        alt={proj.alt}
                                        width={600}
                                        height={800}
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                                    />
                                    {/* Hover overlay with project name */}
                                    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                                        <p className="text-white ff_poppins text-base font-medium leading-snug">
                                            {proj.name}
                                        </p>
                                        {proj.date && (
                                            <p className="text-white/70 ff_poppins text-xs mt-1 tracking-widest uppercase">
                                                {proj.date}
                                            </p>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </>
            )}
        </div>
    );
}
