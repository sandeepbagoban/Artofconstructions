'use client';

import { useState, useTransition, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DOMAIN } from '@/app/utils/api';
import axios from 'axios';

export default function ClientProjectsGallery({ data, locale }) {
    const { project_tabs = [], project_details = [] } = data?.data || {};

    const tabs = project_tabs.map((proj) => ({
        slug: proj.fr_project_slug,
        label: proj.fr_project_name,
    }));

    const [activeTab, setActiveTab] = useState(tabs[0]?.slug || null);
    const [imagesByTab, setImagesByTab] = useState({
        [tabs[0]?.slug]: toImages(project_details),
    });
    const [isPending, startTransition] = useTransition();

    const handleTabClick = useCallback(async (slug) => {
        if (slug === activeTab) return;
        setActiveTab(slug);
        if (imagesByTab[slug] !== undefined) return;

        startTransition(async () => {
            try {
                // Matches exactly: DOMAIN + "api/" + "project-details/" + slug
                const res = await axios.get(
                    `${DOMAIN}api/project-details/${slug}?lang=${locale}`
                );
                const details = res.data?.data?.project_details || [];
                setImagesByTab((prev) => ({ ...prev, [slug]: toImages(details) }));
            } catch (e) {
                console.error('Tab fetch failed:', e.message);
                setImagesByTab((prev) => ({ ...prev, [slug]: [] }));
            }
        });
    }, [activeTab, imagesByTab, locale]);

    const currentImages = imagesByTab[activeTab] ?? [];
    if (!tabs.length) return null;

    return (
        <div className="pg-root">
            <h1 className="pg-title">PROJECTS</h1>

            <nav className="pg-tabs" aria-label="Project categories">
                {tabs.map((tab, idx) => (
                    <button
                        key={tab.slug}
                        onClick={() => handleTabClick(tab.slug)}
                        className={`pg-tab ${activeTab === tab.slug ? 'pg-tab--active' : ''}`}
                    >
                        {tab.label}
                        {idx < tabs.length - 1 && <span className="pg-tab-sep" aria-hidden="true" />}
                    </button>
                ))}
            </nav>

            <div className={`pg-grid ${isPending ? 'pg-grid--loading' : ''}`}>
                {currentImages.length === 0 && !isPending ? (
                    <p className="pg-empty">No projects found for this category.</p>
                ) : (
                    currentImages.map((proj, i) => (
                        <Link
                            key={proj.slug + i}
                            href={`/${locale}/projects/${proj.slug}`}
                            className="pg-item"
                            style={{ '--i': i }}
                        >
                            <Image
                                src={proj.src}
                                alt={proj.alt}
                                width={600}
                                height={800}
                                loading={i < 6 ? 'eager' : 'lazy'}
                                className="pg-item-img"
                            />
                            <div className="pg-item-overlay">
                                <p className="pg-item-name">{proj.name}</p>
                                {proj.date && <p className="pg-item-date">{proj.date}</p>}
                            </div>
                        </Link>
                    ))
                )}
            </div>

            <style>{`
                .pg-root { max-width: 1400px; margin: 0 auto; padding: 120px 5vw 80px; }
                .pg-title { font-size: clamp(40px, 7vw, 88px); font-weight: 400; text-align: center; letter-spacing: 0.1em; margin-bottom: 12px; }
                .pg-tabs { display: flex; justify-content: center; align-items: center; gap: 0; margin-bottom: 48px; flex-wrap: wrap; }
                .pg-tab { display: inline-flex; align-items: center; gap: 24px; background: none; border: none; padding: 10px 0; font-size: 11px; font-weight: 500; letter-spacing: 0.25em; text-transform: uppercase; color: #AAAAAA; cursor: pointer; transition: color 0.25s ease; font-family: inherit; }
                .pg-tab:hover { color: #555; }
                .pg-tab--active { color: #111; border-bottom: 1.5px solid #111; }
                .pg-tab-sep { display: inline-block; width: 4px; height: 4px; border-radius: 50%; background: #DDD; margin-left: 24px; flex-shrink: 0; }
                .pg-grid { columns: 1; gap: 16px; column-gap: 16px; transition: opacity 0.2s ease; }
                .pg-grid--loading { opacity: 0.5; pointer-events: none; }
                @media (min-width: 600px)  { .pg-grid { columns: 2; } }
                @media (min-width: 1024px) { .pg-grid { columns: 3; } }
                .pg-item { display: block; break-inside: avoid; margin-bottom: 16px; position: relative; overflow: hidden; animation: pgFadeUp 0.45s ease both; animation-delay: calc(var(--i) * 40ms); }
                @keyframes pgFadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
                .pg-item-img { width: 100%; height: auto; display: block; object-fit: cover; transition: transform 0.6s cubic-bezier(0.16,1,0.3,1); }
                .pg-item:hover .pg-item-img { transform: scale(1.04); }
                .pg-item-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%); display: flex; flex-direction: column; justify-content: flex-end; padding: 20px; opacity: 0; transition: opacity 0.3s ease; }
                .pg-item:hover .pg-item-overlay { opacity: 1; }
                .pg-item-name { color: #fff; font-size: 14px; font-weight: 500; margin: 0; }
                .pg-item-date { color: rgba(255,255,255,0.65); font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; margin: 4px 0 0; }
                .pg-empty { text-align: center; color: #AAA; padding: 60px 0; }
            `}</style>
        </div>
    );
}

function toImages(details = []) {
    return details.map((d) => ({
        src: `${DOMAIN}${d.project_type_single_img}`,
        alt: d.project_type_single_img_alt_text || d.project_type_name || 'Project',
        name: d.project_type_name,
        date: d.project_date,
        slug: d.project_type_slug,
    }));
}