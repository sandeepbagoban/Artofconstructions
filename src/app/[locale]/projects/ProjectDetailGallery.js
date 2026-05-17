'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Lightbox from 'yet-another-react-lightbox';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import { DOMAIN } from '@/app/utils/api';
import { useParams } from 'next/navigation';
import { FiArrowLeft } from 'react-icons/fi';

export default function ProjectDetailGallery({ data, slug }) {
    const params = useParams();
    const locale = params?.locale || 'fr';

    const subProject = data?.subProject;
    const projectImages = data?.project_images || [];

    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const slides = projectImages.map((img) => ({
        src: `${DOMAIN}${img.project_type_img}`,
        alt: img.project_type_img_alt_text || subProject?.project_type_name || 'Project',
    }));

    return (
        <div className="pd-root">

            {/* Back */}
            <Link href={`/${locale}/projects`} className="pd-back">
                <FiArrowLeft />
                Back to Projects
            </Link>

            {/* Hero banner image */}
            {subProject?.project_type_single_img && (
                <div className="pd-hero">
                    <Image
                        src={`${DOMAIN}${subProject.project_type_single_img}`}
                        alt={subProject.project_type_single_img_alt_text || subProject.project_type_name}
                        fill
                        priority
                        className="pd-hero-img"
                    />
                    <div className="pd-hero-veil" />
                    <div className="pd-hero-copy">
                        <h1 className="pd-hero-title">{subProject.project_type_name}</h1>
                        {subProject.project_date && (
                            <p className="pd-hero-date">{subProject.project_date}</p>
                        )}
                    </div>
                </div>
            )}

            {/* Description */}
            {subProject?.project_Details && (
                <div className="pd-desc">
                    <p>{subProject.project_Details}</p>
                </div>
            )}

            {/* No hero fallback title */}
            {!subProject?.project_type_single_img && (
                <h1 className="pd-title-fallback">{subProject?.project_type_name}</h1>
            )}

            {/* Image grid */}
            {slides.length === 0 ? (
                <p className="pd-empty">No images available.</p>
            ) : (
                <div className="pd-grid">
                    {slides.map((slide, i) => (
                        <div
                            key={i}
                            className="pd-item"
                            style={{ '--i': i }}
                            onClick={() => { setPhotoIndex(i); setIsOpen(true); }}
                        >
                            <Image
                                src={slide.src}
                                alt={slide.alt}
                                width={600}
                                height={400}
                                loading={i < 6 ? 'eager' : 'lazy'}
                                className="pd-item-img"
                            />
                            <div className="pd-item-overlay">
                                <span className="pd-zoom">⊕</span>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Lightbox */}
            <Lightbox
                open={isOpen}
                close={() => setIsOpen(false)}
                index={photoIndex}
                slides={slides}
                plugins={[Thumbnails]}
                on={{ view: ({ index }) => setPhotoIndex(index) }}
            />

            <style>{`
                .pd-root { max-width: 1400px; margin: 0 auto; padding: 100px 5vw 80px; }

                .pd-back {
                    display: inline-flex; align-items: center; gap: 8px;
                    font-size: 11px; font-weight: 500; letter-spacing: 0.18em;
                    text-transform: uppercase; color: #666;
                    text-decoration: none; margin-bottom: 40px;
                    transition: color 0.2s ease;
                }
                .pd-back:hover { color: #B8934A; }

                .pd-hero {
                    position: relative; width: 100%; height: 500px;
                    overflow: hidden; margin-bottom: 48px;
                    background: #111;
                }
                @media (max-width: 768px) { .pd-hero { height: 280px; } }
                .pd-hero-img { object-fit: cover; }
                .pd-hero-veil {
                    position: absolute; inset: 0;
                    background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 60%);
                    z-index: 1;
                }
                .pd-hero-copy {
                    position: absolute; bottom: 40px; left: 5vw; z-index: 2;
                }
                .pd-hero-title {
                    font-size: clamp(28px, 4vw, 56px);
                    font-weight: 400; color: #fff;
                    letter-spacing: -0.02em; margin: 0 0 8px;
                }
                .pd-hero-date {
                    font-size: 11px; letter-spacing: 0.25em;
                    text-transform: uppercase; color: rgba(255,255,255,0.55);
                    margin: 0;
                }

                .pd-desc {
                    max-width: 720px; margin: 0 auto 56px;
                    font-size: 15px; line-height: 1.9; color: #6B6762;
                    text-align: center;
                }

                .pd-title-fallback {
                    font-size: clamp(28px, 4vw, 52px); font-weight: 400;
                    text-align: center; margin-bottom: 48px; letter-spacing: -0.02em;
                }

                /* Grid */
                .pd-grid { columns: 2; column-gap: 12px; }
                @media (min-width: 768px) { .pd-grid { columns: 3; } }

                .pd-item {
                    break-inside: avoid; margin-bottom: 12px;
                    position: relative; overflow: hidden; cursor: pointer;
                    animation: pdFade 0.4s ease both;
                    animation-delay: calc(var(--i) * 35ms);
                }
                @keyframes pdFade {
                    from { opacity: 0; transform: translateY(12px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .pd-item-img {
                    width: 100%; height: auto; display: block;
                    transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
                }
                .pd-item:hover .pd-item-img { transform: scale(1.04); }
                .pd-item-overlay {
                    position: absolute; inset: 0;
                    background: rgba(0,0,0,0.3);
                    display: flex; align-items: center; justify-content: center;
                    opacity: 0; transition: opacity 0.3s ease;
                }
                .pd-item:hover .pd-item-overlay { opacity: 1; }
                .pd-zoom { font-size: 32px; color: #fff; line-height: 1; }

                .pd-empty { text-align: center; color: #AAA; padding: 60px 0; }
            `}</style>
        </div>
    );
}