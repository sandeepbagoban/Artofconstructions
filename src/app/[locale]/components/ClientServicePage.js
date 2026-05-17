'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DOMAIN } from '@/app/utils/api';

/* ── Scroll reveal ── */
function useReveal() {
    useEffect(() => {
        const els = document.querySelectorAll('[data-reveal]');
        const io = new IntersectionObserver(
            (entries) => entries.forEach((e) => {
                if (!e.isIntersecting) return;
                const delay = Number(e.target.dataset.delay || 0);
                setTimeout(() => e.target.classList.add('sv-revealed'), delay);
                io.unobserve(e.target);
            }),
            { threshold: 0.06 }
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);
}

export default function ClientServicePage({ data, locale, config }) {
    /*
      config = {
        label: 'Nos services',          // eyebrow label
        accent: '#B8934A',              // accent color (optional, defaults to gold)
      }
    */
    const service = data?.data?.service;
    const service_details = data?.data?.service_details || [];

    useReveal();

    // Active sub-service tab — default first
    const [activeIdx, setActiveIdx] = useState(0);
    const [lightbox, setLightbox] = useState(null); // { slides, index }

    if (!service) return null;

    const accent = config?.accent || '#B8934A';
    const label = config?.label || 'Nos services';

    const active = service_details[activeIdx];
    const activeImages = active?.get_sub_service_images || [];

    const allSlides = activeImages.map((img) => ({
        src: `${DOMAIN}${img.sub_service_tab_images}`,
        alt: img.sub_service_tab_images_alt_text || active?.fr_sub_service_name || '',
    }));

    return (
        <>
            <main className="sv-root">

                {/* ── HERO ── */}
                <section className="sv-hero">
                    <div className="sv-hero-img-wrap">
                        <Image
                            src={`${DOMAIN}${service.service_banner_img}`}
                            alt={service.service_banner_img_alt_text || service.service_title}
                            fill priority
                            className="sv-hero-img"
                        />
                    </div>
                    <div className="sv-hero-veil" />
                    <div className="sv-hero-copy">
                        <p className="sv-eyebrow">
                            <span className="sv-eyebrow-line" />
                            {label}
                        </p>
                        <h1 className="sv-hero-h1">{service.service_title}</h1>
                        <p className="sv-hero-sub">{service.service_short_description}</p>
                    </div>
                    <div className="sv-scroll-cue" aria-hidden="true">
                        <span className="sv-scroll-line" />
                        <span className="sv-scroll-label">Scroll</span>
                    </div>
                </section>

                {/* ── INTRO ── */}
                <section className="sv-s sv-intro" data-reveal>
                    <div className="sv-intro-img" data-reveal data-delay="60">
                        <div className="sv-frame sv-portrait">
                            <Image
                                src={`${DOMAIN}${service.service_home_page_image}`}
                                alt={service.service_home_page_img_alt_text || service.service_title}
                                fill
                                className="sv-img"
                                sizes="(max-width:768px) 100vw, 44vw"
                            />
                        </div>
                    </div>
                    <div className="sv-intro-txt" data-reveal data-delay="140">
                        <span className="sv-label">{service.service_title}</span>
                        <h2 className="sv-h-serif">{service.service_short_description}</h2>
                        <p className="sv-body">{service.service_long_description}</p>
                        {locale && (
                            <Link href={`/${locale}/contact`} className="sv-link-arrow">
                                Nous contacter <span aria-hidden="true">→</span>
                            </Link>
                        )}
                    </div>
                </section>

                <div className="sv-rule" />

                {/* ── SUB-SERVICES ── */}
                {service_details.length > 0 && (
                    <section className="sv-s sv-subs">
                        <div className="sv-subs-header" data-reveal>
                            <span className="sv-label sv-label-center">Ce que nous proposons</span>
                            <h2 className="sv-h-xl">{service.service_title}</h2>
                        </div>

                        {/* Tab bar */}
                        <nav className="sv-tabs" data-reveal data-delay="80">
                            {service_details.map((sub, i) => (
                                <button
                                    key={sub.sub_service_id}
                                    onClick={() => setActiveIdx(i)}
                                    className={`sv-tab ${activeIdx === i ? 'sv-tab--active' : ''}`}
                                >
                                    {sub.fr_sub_service_name || sub.sub_service_name}
                                    {i < service_details.length - 1 && (
                                        <span className="sv-tab-dot" aria-hidden="true" />
                                    )}
                                </button>
                            ))}
                        </nav>

                        {/* Image masonry grid */}
                        {activeImages.length === 0 ? (
                            <p className="sv-empty">Aucune image disponible.</p>
                        ) : (
                            <div className="sv-gallery" data-reveal data-delay="120">
                                {allSlides.map((slide, i) => (
                                    <div
                                        key={i}
                                        className="sv-gitem"
                                        style={{ '--i': i }}
                                        onClick={() => setLightbox({ slides: allSlides, index: i })}
                                    >
                                        <Image
                                            src={slide.src}
                                            alt={slide.alt}
                                            width={600}
                                            height={400}
                                            loading={i < 4 ? 'eager' : 'lazy'}
                                            className="sv-gitem-img"
                                        />
                                        <div className="sv-gitem-overlay">
                                            <span className="sv-gitem-zoom">⊕</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </section>
                )}

                {/* ── CTA / FOOTER IMAGE ── */}
                {service.service_detail_page_footer_img && (
                    <section className="sv-cta">
                        <div className="sv-cta-img-wrap">
                            <Image
                                src={`${DOMAIN}${service.service_detail_page_footer_img}`}
                                alt={service.service_detail_page_footer_img_alt_text || ''}
                                fill
                                className="sv-cta-img"
                                sizes="100vw"
                            />
                        </div>
                        <div className="sv-cta-veil" />
                        <div className="sv-cta-inner" data-reveal>
                            <span className="sv-label sv-label-light">Prêts à construire ?</span>
                            <h2 className="sv-cta-title">
                                Transformons votre<br />
                                <em>vision en réalité.</em>
                            </h2>
                            {locale && (
                                <Link href={`/${locale}/contact`} className="sv-cta-btn">
                                    Nous contacter
                                    <span aria-hidden="true">→</span>
                                </Link>
                            )}
                        </div>
                    </section>
                )}
            </main>

            {/* ── LIGHTBOX ── */}
            {lightbox && (
                <Lightbox
                    slides={lightbox.slides}
                    startIndex={lightbox.index}
                    onClose={() => setLightbox(null)}
                />
            )}

            <style>{`
                /* ── REVEAL ── */
                [data-reveal] {
                    opacity: 0;
                    transform: translateY(24px);
                    transition: opacity 1.1s cubic-bezier(0.16,1,0.3,1),
                                transform 1.1s cubic-bezier(0.16,1,0.3,1);
                }
                [data-reveal].sv-revealed { opacity: 1; transform: translateY(0); }

                /* ── ROOT ── */
                .sv-root { background: #FAF9F7; }

                /* ── HERO ── */
                .sv-hero {
                    position: relative;
                    width: 100%;
                    height: 100vh;
                    min-height: 560px;
                    overflow: hidden;
                    background: #0a0908;
                    margin-top: -84px;
                    height: calc(100vh + 84px);
                }
                @media (max-width: 768px) {
                    .sv-hero { margin-top: -62px; height: calc(85vh + 62px); }
                }
                .sv-hero-img-wrap {
                    position: absolute;
                    inset: -10% 0 -10% 0;
                }
                .sv-hero-img { object-fit: cover; opacity: 0.75; }
                .sv-hero-veil {
                    position: absolute; inset: 0;
                    background: linear-gradient(
                        to top,
                        rgba(0,0,0,0.75) 0%,
                        rgba(0,0,0,0.15) 45%,
                        transparent 100%
                    );
                    z-index: 1;
                }
                .sv-hero-copy {
                    position: absolute;
                    bottom: 80px; left: 7vw;
                    z-index: 2;
                    max-width: 600px;
                }
                .sv-eyebrow {
                    display: flex; align-items: center; gap: 14px;
                    font-size: 9px; font-weight: 500; letter-spacing: 0.32em;
                    text-transform: uppercase; color: rgba(255,255,255,0.45);
                    margin-bottom: 20px;
                }
                .sv-eyebrow-line {
                    display: block; width: 36px; height: 0.5px;
                    background: rgba(255,255,255,0.28); flex-shrink: 0;
                }
                .sv-hero-h1 {
                    font-family: var(--font-serif, Georgia, serif);
                    font-style: italic; font-weight: 400;
                    font-size: clamp(44px, 6.5vw, 96px);
                    line-height: 0.96; letter-spacing: -0.028em;
                    color: #fff; margin: 0 0 20px;
                }
                .sv-hero-sub {
                    font-size: 13px; font-weight: 300; line-height: 1.8;
                    color: rgba(255,255,255,0.6);
                    letter-spacing: 0.01em; max-width: 420px; margin: 0;
                }
                .sv-scroll-cue {
                    position: absolute; bottom: 40px; right: 7vw; z-index: 2;
                    display: flex; flex-direction: column; align-items: center; gap: 12px;
                }
                .sv-scroll-line {
                    display: block; width: 0.5px; height: 56px;
                    background: rgba(255,255,255,0.22);
                    animation: svScroll 3s ease-in-out infinite;
                }
                .sv-scroll-label {
                    font-size: 8px; letter-spacing: 0.3em; text-transform: uppercase;
                    color: rgba(255,255,255,0.28); writing-mode: vertical-rl;
                    transform: rotate(180deg);
                }
                @keyframes svScroll {
                    0%,100% { opacity: 0.15; transform: scaleY(0.3); }
                    50%      { opacity: 0.7;  transform: scaleY(1); }
                }

                /* ── COMMON SECTION ── */
                .sv-s { padding: 100px 7vw; max-width: 1540px; margin: 0 auto; }
                .sv-rule { height: 0.5px; background: #DDD9D1; margin: 0 7vw; }

                /* ── TYPOGRAPHY ── */
                .sv-label {
                    display: block; font-size: 8.5px; font-weight: 600;
                    letter-spacing: 0.36em; text-transform: uppercase;
                    color: #B8934A; margin-bottom: 18px;
                }
                .sv-label-center { text-align: center; }
                .sv-label-light  { color: #D4AF6A; }
                .sv-h-serif {
                    font-family: var(--font-serif, Georgia, serif);
                    font-style: italic; font-weight: 400;
                    font-size: clamp(26px, 3.2vw, 46px);
                    line-height: 1.14; letter-spacing: -0.016em;
                    color: #111; margin: 0 0 24px;
                }
                .sv-h-xl {
                    font-family: var(--font-serif, Georgia, serif);
                    font-style: italic; font-weight: 400;
                    font-size: clamp(36px, 5.5vw, 80px);
                    line-height: 0.98; letter-spacing: -0.026em;
                    color: #111; text-align: center; margin: 0 0 52px;
                }
                .sv-body {
                    font-size: 13px; font-weight: 300; line-height: 2.1;
                    color: #6B6762; letter-spacing: 0.015em;
                    margin: 0 0 32px; max-width: 480px;
                }
                .sv-link-arrow {
                    display: inline-flex; align-items: center; gap: 12px;
                    font-size: 9.5px; font-weight: 600; letter-spacing: 0.2em;
                    text-transform: uppercase; color: #111;
                    border-bottom: 0.5px solid #111; padding-bottom: 5px;
                    text-decoration: none;
                    transition: color 0.28s ease, border-color 0.28s ease;
                }
                .sv-link-arrow:hover { color: #B8934A; border-color: #B8934A; }
                .sv-link-arrow span { transition: transform 0.28s ease; }
                .sv-link-arrow:hover span { transform: translateX(6px); }

                /* ── IMAGES ── */
                .sv-frame { position: relative; width: 100%; overflow: hidden; background: #E5E1D9; }
                .sv-portrait { aspect-ratio: 3/4; }
                .sv-img { object-fit: cover; transition: transform 2.4s cubic-bezier(0.16,1,0.3,1); }
                .sv-frame:hover .sv-img { transform: scale(1.04); }

                /* ── INTRO ── */
                .sv-intro {
                    display: grid;
                    grid-template-columns: 44% 1fr;
                    gap: 8vw; align-items: start;
                }
                .sv-intro-txt { padding-top: 48px; }

                /* ── SUB-SERVICES ── */
                .sv-subs { padding-top: 100px; }
                .sv-subs-header { margin-bottom: 0; }

                /* Tabs */
                .sv-tabs {
                    display: flex; justify-content: center;
                    align-items: center; flex-wrap: wrap;
                    gap: 0; margin-bottom: 52px;
                }
                .sv-tab {
                    display: inline-flex; align-items: center; gap: 20px;
                    background: none; border: none; padding: 10px 0;
                    font-size: 10.5px; font-weight: 500; letter-spacing: 0.24em;
                    text-transform: uppercase; color: #AAAAAA;
                    cursor: pointer; font-family: inherit;
                    transition: color 0.25s ease;
                }
                .sv-tab:hover { color: #666; }
                .sv-tab--active { color: #111; border-bottom: 1.5px solid #111; }
                .sv-tab-dot {
                    display: inline-block; width: 4px; height: 4px;
                    border-radius: 50%; background: #DDD; margin-left: 20px;
                    flex-shrink: 0;
                }

                /* Gallery masonry */
                .sv-gallery {
                    columns: 2; column-gap: 12px;
                    transition: opacity 0.25s ease;
                }
                @media (min-width: 768px)  { .sv-gallery { columns: 3; } }
                @media (min-width: 1200px) { .sv-gallery { columns: 4; } }

                .sv-gitem {
                    break-inside: avoid; margin-bottom: 12px;
                    position: relative; overflow: hidden; cursor: pointer;
                    animation: svFade 0.4s ease both;
                    animation-delay: calc(var(--i) * 50ms);
                }
                @keyframes svFade {
                    from { opacity: 0; transform: translateY(14px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .sv-gitem-img {
                    width: 100%; height: auto; display: block;
                    transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
                }
                .sv-gitem:hover .sv-gitem-img { transform: scale(1.05); }
                .sv-gitem-overlay {
                    position: absolute; inset: 0;
                    background: rgba(0,0,0,0.32);
                    display: flex; align-items: center; justify-content: center;
                    opacity: 0; transition: opacity 0.3s ease;
                }
                .sv-gitem:hover .sv-gitem-overlay { opacity: 1; }
                .sv-gitem-zoom { font-size: 30px; color: #fff; line-height: 1; }
                .sv-empty { text-align: center; color: #AAA; padding: 48px 0; }

                /* ── CTA SECTION ── */
                .sv-cta {
                    position: relative; overflow: hidden;
                    height: 520px; background: #0e0d0c;
                }
                @media (max-width: 768px) { .sv-cta { height: 420px; } }
                .sv-cta-img-wrap { position: absolute; inset: 0; }
                .sv-cta-img { object-fit: cover; opacity: 0.45; }
                .sv-cta-veil {
                    position: absolute; inset: 0;
                    background: linear-gradient(
                        to right,
                        rgba(0,0,0,0.75) 0%,
                        rgba(0,0,0,0.3) 60%,
                        transparent 100%
                    );
                    z-index: 1;
                }
                .sv-cta-inner {
                    position: relative; z-index: 2;
                    height: 100%; display: flex; flex-direction: column;
                    justify-content: center; padding: 0 7vw;
                    max-width: 680px;
                }
                .sv-cta-title {
                    font-family: var(--font-serif, Georgia, serif);
                    font-weight: 400;
                    font-size: clamp(32px, 4.5vw, 64px);
                    line-height: 1.08; letter-spacing: -0.024em;
                    color: rgba(255,255,255,0.9);
                    margin: 16px 0 40px;
                }
                .sv-cta-title em { font-style: italic; color: #D4AF6A; }
                .sv-cta-btn {
                    display: inline-flex; align-items: center; gap: 14px;
                    font-size: 9.5px; font-weight: 600; letter-spacing: 0.22em;
                    text-transform: uppercase; color: #111;
                    background: #B8934A; padding: 16px 40px;
                    text-decoration: none; width: fit-content;
                    transition: background 0.3s ease, gap 0.28s ease;
                }
                .sv-cta-btn:hover { background: #C9A462; gap: 20px; }

                /* ── RESPONSIVE ── */
                @media (max-width: 1024px) {
                    .sv-s { padding: 80px 6vw; }
                    .sv-rule { margin: 0 6vw; }
                    .sv-intro { grid-template-columns: 1fr 1fr; gap: 6vw; }
                }
                @media (max-width: 768px) {
                    .sv-s { padding: 60px 5vw; }
                    .sv-rule { margin: 0 5vw; }
                    .sv-intro { grid-template-columns: 1fr; gap: 36px; }
                    .sv-intro-txt { padding-top: 0; }
                    .sv-body { max-width: 100%; }
                    .sv-gallery { columns: 2; }
                    .sv-hero-copy { left: 5vw; bottom: 60px; }
                    .sv-scroll-cue { display: none; }
                }
            `}</style>
        </>
    );
}

/* ── Simple inline lightbox (no extra package needed) ── */
function Lightbox({ slides, startIndex, onClose }) {
    const [idx, setIdx] = useState(startIndex);

    useEffect(() => {
        const handler = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % slides.length);
            if (e.key === 'ArrowLeft') setIdx((i) => (i - 1 + slides.length) % slides.length);
        };
        window.addEventListener('keydown', handler);
        return () => window.removeEventListener('keydown', handler);
    }, [slides.length, onClose]);

    return (
        <div className="lb-backdrop" onClick={onClose}>
            <button className="lb-close" onClick={onClose} aria-label="Close">✕</button>
            <button className="lb-prev" onClick={(e) => { e.stopPropagation(); setIdx((i) => (i - 1 + slides.length) % slides.length); }} aria-label="Previous">‹</button>
            <div className="lb-img-wrap" onClick={(e) => e.stopPropagation()}>
                <img src={slides[idx].src} alt={slides[idx].alt} className="lb-img" />
            </div>
            <button className="lb-next" onClick={(e) => { e.stopPropagation(); setIdx((i) => (i + 1) % slides.length); }} aria-label="Next">›</button>
            <div className="lb-counter">{idx + 1} / {slides.length}</div>
            <style>{`
                .lb-backdrop {
                    position: fixed; inset: 0; z-index: 9999;
                    background: rgba(0,0,0,0.92);
                    display: flex; align-items: center; justify-content: center;
                }
                .lb-img-wrap { max-width: 90vw; max-height: 85vh; }
                .lb-img { max-width: 90vw; max-height: 85vh; object-fit: contain; display: block; }
                .lb-close {
                    position: absolute; top: 20px; right: 28px;
                    background: none; border: none; color: #fff;
                    font-size: 24px; cursor: pointer; z-index: 2;
                    opacity: 0.7; transition: opacity 0.2s;
                }
                .lb-close:hover { opacity: 1; }
                .lb-prev, .lb-next {
                    position: absolute; top: 50%; transform: translateY(-50%);
                    background: none; border: none; color: #fff;
                    font-size: 52px; cursor: pointer; z-index: 2;
                    opacity: 0.6; transition: opacity 0.2s; line-height: 1;
                    padding: 0 20px;
                }
                .lb-prev { left: 0; }
                .lb-next { right: 0; }
                .lb-prev:hover, .lb-next:hover { opacity: 1; }
                .lb-counter {
                    position: absolute; bottom: 20px; left: 50%;
                    transform: translateX(-50%);
                    color: rgba(255,255,255,0.5);
                    font-size: 11px; letter-spacing: 0.2em;
                }
            `}</style>
        </div>
    );
}
