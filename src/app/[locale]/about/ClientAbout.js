'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight } from 'react-icons/fi';
import ContactForm from '../components/ContactForm';
import { DOMAIN } from '../../utils/api';

/* ─── Scroll Reveal (same pattern as ClientHome) ─── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const delay = Number(e.target.dataset.delay || 0);
          setTimeout(() => e.target.classList.add('ca-revealed'), delay);
          io.unobserve(e.target);
        }),
      { threshold: 0.05 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── Parallax helper ─── */
function useParallax(ref, factor = 0.18) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fn = () => {
      el.style.transform = `translateY(${window.scrollY * factor}px)`;
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, [ref, factor]);
}

export default function ClientAbout({ data }) {
  const heroTrackRef = useRef(null);

  useReveal();
  useParallax(heroTrackRef, 0.16);

  const bannerData      = data?.data?.banner_data      || {};
  const approachDetails = data?.data?.approach_details || {};

  const approachItems = [
    { label: 'Experience & Advice',       num: '01' },
    { label: 'Expertise & Quality',       num: '02' },
    { label: 'Professionalism & Trust',   num: '03' },
    { label: 'Emergency Work',            num: '04' },
  ];

  return (
    <>
      <main className="ca-root">

        {/* ══ HERO ══ */}
        {bannerData?.main_banner_image && (
          <section className="ca-hero">
            <div className="ca-hero-track" ref={heroTrackRef}>
              <Image
                src={`${DOMAIN}${bannerData.main_banner_image}`}
                alt="About"
                fill priority
                className="ca-hero-img"
              />
            </div>
            <div className="ca-hero-veil"   aria-hidden="true" />
            <div className="ca-hero-veil-h" aria-hidden="true" />

            <div className="ca-hero-copy">
              <p className="ca-hero-eyebrow">
                <span className="ca-hero-eyebrow-line" aria-hidden="true" />
                Notre histoire
              </p>
              <h1 className="ca-hero-h1">
                <em className="ca-hero-l1">Know</em>
                <span className="ca-hero-l2">About Us</span>
              </h1>
            </div>

            {/* Scroll cue */}
            <div className="ca-scroll-cue" aria-hidden="true">
              <span className="ca-scroll-line" />
              <span className="ca-scroll-label">Scroll</span>
            </div>

            {/* Decorative index */}
            <span className="ca-hero-index" aria-hidden="true">02</span>
          </section>
        )}

        {/* ══ S1 · WHO WE ARE ══ */}
        {(bannerData?.banner_section_short_description || bannerData?.banner_section_description || bannerData?.banner_description_section_image) && (
          <section className="ca-s ca-s-intro">
            {/* Left — sticky label + short desc */}
            <div className="ca-col-txt" data-reveal>
              <span className="ca-label">Qui sommes-nous</span>

              {bannerData?.banner_section_short_description && (
                <h2 className="ca-h-serif">
                  {bannerData.banner_section_short_description}
                </h2>
              )}

              {bannerData?.banner_section_description && (
                <p className="ca-body">
                  {bannerData.banner_section_description}
                </p>
              )}

              {/* Decorative rule + accent line */}
              <div className="ca-accent-rule" aria-hidden="true">
                <span className="ca-accent-dot" />
                <span className="ca-accent-line" />
              </div>
            </div>

            {/* Right — portrait image with floating tag */}
            {bannerData?.banner_description_section_image && (
              <div className="ca-col-img" data-reveal data-delay="120">
                <div className="ca-frame ca-portrait">
                  <Image
                    src={`${DOMAIN}${bannerData.banner_description_section_image}`}
                    alt="About Us"
                    fill
                    className="ca-img"
                    sizes="(max-width:768px) 100vw, 50vw"
                    priority
                  />
                </div>

                {/* Floating tag bottom-left */}
                <div className="ca-float-tag">
                  <span className="ca-float-tag-line" />
                  <p className="ca-float-tag-text">Artisans du bâtiment</p>
                </div>
              </div>
            )}
          </section>
        )}

        <div className="ca-rule" />

        {/* ══ S2 · OUR APPROACH ══ */}
        <section className="ca-s ca-s-approach">
          {/* Header */}
          <div className="ca-approach-header" data-reveal>
            <span className="ca-label ca-label-center">Notre méthode</span>
            <h2 className="ca-h-xl">Our Approach</h2>
            <p className="ca-approach-sub">
              From your personalized design to the smallest detail in finishing.
            </p>
          </div>

          {/* Approach grid */}
          <div className="ca-approach-grid">
            {approachItems.map((item, i) => (
              <div
                key={i}
                className="ca-approach-card"
                data-reveal
                data-delay={i * 90}
              >
                <span className="ca-approach-num" aria-hidden="true">{item.num}</span>
                <div className="ca-approach-divider" />
                <p className="ca-approach-label">{item.label}</p>
              </div>
            ))}
          </div>

          {/* CTA row */}
          <div className="ca-approach-cta" data-reveal data-delay="200">
            <span className="ca-approach-cta-text">
              Ready to start your project?
            </span>
            <Link
              href="/request-quote"
              className="ca-btn-gold"
            >
              Request A Quote
              <FiArrowRight className="ca-btn-icon" />
            </Link>
          </div>
        </section>

        <div className="ca-rule" />

        {/* ══ S3 · APPROACH IMAGERY ══ */}
        {(approachDetails?.approach_section_img_1 || approachDetails?.approach_section_img_2) && (
          <section className="ca-s ca-s-imagery">
            {/* Left col */}
            <div className="ca-imagery-left" data-reveal>
              {approachDetails?.approach_section_img_1 && (
                <div className="ca-frame ca-img-sq">
                  <Image
                    src={`${DOMAIN}${approachDetails.approach_section_img_1}`}
                    alt="Our Approach"
                    fill
                    className="ca-img"
                    sizes="(max-width:768px) 100vw, 30vw"
                  />
                </div>
              )}

              <blockquote className="ca-quote" data-reveal data-delay="120">
                <span className="ca-quote-mark" aria-hidden="true">"</span>
                Our Creations Are Characterized By A Unique Sense Of Class And Design.
              </blockquote>
            </div>

            {/* Right — tall image */}
            {approachDetails?.approach_section_img_2 && (
              <div className="ca-imagery-right" data-reveal data-delay="80">
                <div className="ca-frame ca-portrait-lg">
                  <Image
                    src={`${DOMAIN}${approachDetails.approach_section_img_2}`}
                    alt="Our Work"
                    fill
                    className="ca-img"
                    sizes="(max-width:768px) 100vw, 55vw"
                  />
                  {/* Overlay caption */}
                  <div className="ca-img-caption">
                    <span className="ca-img-caption-line" aria-hidden="true" />
                    <span className="ca-img-caption-text">Savoir-faire & Précision</span>
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {/* ══ CONTACT FORM ══ */}
        {approachDetails?.approach_section_footer_img && (
          <div data-reveal>
            <ContactForm image={`${DOMAIN}${approachDetails.approach_section_footer_img}`} />
          </div>
        )}

      </main>

      {/* ════ SCOPED STYLES ════ */}
      <style>{`

        /* ── REVEAL ── */
        [data-reveal] {
          opacity: 0;
          transform: translateY(30px);
          transition:
            opacity 1.3s cubic-bezier(0.16,1,0.3,1),
            transform 1.3s cubic-bezier(0.16,1,0.3,1);
        }
        [data-reveal].ca-revealed {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── ROOT ── */
        .ca-root {
          overflow: hidden;
          background: #FAFAF8;
        }

        /* ── HERO ── */
        .ca-hero {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #0a0908;
          margin-top: -84px;
          height: calc(100vh + 70px);
        }
        @media (max-width: 768px) {
          .ca-hero {
            margin-top: -62px;
            height: calc(100vh + 62px);
          }
        }
        .ca-hero-track {
          position: absolute;
          inset: -14% 0 -14% 0;
          will-change: transform;
        }
        .ca-hero-img {
          object-fit: cover;
          opacity: 0.78;
        }
        .ca-hero-veil {
          position: absolute; inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.78) 0%,
            rgba(0,0,0,0.22) 45%,
            rgba(0,0,0,0.04) 100%
          );
          z-index: 1;
        }
        .ca-hero-veil-h {
          position: absolute; inset: 0;
          background: linear-gradient(
            to right,
            rgba(0,0,0,0.32) 0%,
            transparent 60%
          );
          z-index: 1;
        }

        /* Hero copy — bottom-left this time (contrast with ClientHome's bottom-right) */
        .ca-hero-copy {
          position: absolute;
          bottom: 80px;
          left: 7vw;
          z-index: 2;
          text-align: left;
          max-width: 680px;
        }
        .ca-hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.38);
          margin-bottom: 20px;
        }
        .ca-hero-eyebrow-line {
          display: block;
          width: 36px;
          height: 0.5px;
          background: rgba(255,255,255,0.28);
          flex-shrink: 0;
        }
        .ca-hero-h1 {
          margin: 0;
          line-height: 0.94;
        }
        .ca-hero-l1 {
          display: block;
          font-family: var(--font-serif, 'Publico Banner', Georgia, serif);
          font-style: italic;
          font-weight: 400;
          font-size: clamp(40px, 5.4vw, 84px);
          color: rgba(255,255,255,0.46);
          letter-spacing: -0.025em;
        }
        .ca-hero-l2 {
          display: block;
          font-family: var(--font-serif, 'Publico Banner', Georgia, serif);
          font-style: normal;
          font-weight: 400;
          font-size: clamp(52px, 7.2vw, 112px);
          color: #C9A84C;
          letter-spacing: -0.03em;
          margin-top: -0.04em;
        }

        /* Scroll cue — bottom right (mirrored vs home) */
        .ca-scroll-cue {
          position: absolute;
          bottom: 40px;
          right: 7vw;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .ca-scroll-line {
          display: block;
          width: 0.5px;
          height: 56px;
          background: rgba(255,255,255,0.22);
          transform-origin: top;
          animation: caScroll 3s ease-in-out infinite;
        }
        .ca-scroll-label {
          font-size: 8px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
        @keyframes caScroll {
          0%,100% { opacity: 0.15; transform: scaleY(0.3); }
          50%      { opacity: 0.7;  transform: scaleY(1); }
        }

        .ca-hero-index {
          position: absolute;
          top: 50%;
          right: 7vw;
          transform: translateY(-50%);
          z-index: 2;
          font-family: var(--font-serif, Georgia, serif);
          font-style: italic;
          font-size: clamp(80px, 9vw, 140px);
          font-weight: 400;
          color: rgba(255,255,255,0.04);
          line-height: 1;
          letter-spacing: -0.04em;
          pointer-events: none;
          user-select: none;
        }

        /* ── COMMON SECTION ── */
        .ca-s {
          padding: 108px 7vw;
          max-width: 1540px;
          margin: 0 auto;
        }

        /* ── RULE ── */
        .ca-rule {
          height: 0.5px;
          background: #DDD9D1;
          margin: 0 7vw;
        }

        /* ── TYPOGRAPHY ── */
        .ca-label {
          display: block;
          font-size: 8.5px;
          font-weight: 600;
          letter-spacing: 0.36em;
          text-transform: uppercase;
          color: #B8934A;
          margin-bottom: 20px;
        }
        .ca-label-center { text-align: center; }

        .ca-h-serif {
          font-family: var(--font-serif, 'Publico Banner', Georgia, serif);
          font-style: italic;
          font-weight: 400;
          font-size: clamp(28px, 3.4vw, 50px);
          line-height: 1.12;
          letter-spacing: -0.018em;
          color: #111;
          margin: 0 0 28px;
        }
        .ca-h-xl {
          font-family: var(--font-serif, 'Publico Banner', Georgia, serif);
          font-style: italic;
          font-weight: 400;
          font-size: clamp(42px, 6.2vw, 92px);
          line-height: 0.96;
          letter-spacing: -0.03em;
          color: #111;
          text-align: center;
          margin: 0 0 24px;
        }
        .ca-body {
          font-size: 12.5px;
          font-weight: 300;
          line-height: 2.1;
          color: #6B6762;
          letter-spacing: 0.018em;
          margin: 0 0 36px;
          max-width: 480px;
        }

        /* ── S1 · INTRO ── */
        .ca-s-intro {
          display: grid;
          grid-template-columns: 42% 1fr;
          gap: 9vw;
          align-items: start;
        }
        .ca-col-txt {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 48px;
        }
        .ca-col-img { position: relative; }

        /* Accent rule under text */
        .ca-accent-rule {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 8px;
        }
        .ca-accent-dot {
          display: block;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #B8934A;
          flex-shrink: 0;
        }
        .ca-accent-line {
          display: block;
          height: 0.5px;
          width: 80px;
          background: #B8934A;
          opacity: 0.5;
        }

        /* Image frame */
        .ca-frame {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #E5E1D9;
        }
        .ca-portrait     { aspect-ratio: 3 / 4; }
        .ca-portrait-lg  { aspect-ratio: 4 / 5; }
        .ca-img-sq       { aspect-ratio: 1 / 1; }
        .ca-img {
          object-fit: cover;
          transition: transform 2.6s cubic-bezier(0.16,1,0.3,1);
        }
        .ca-frame:hover .ca-img { transform: scale(1.04); }

        /* Floating tag on intro image */
        .ca-float-tag {
          position: absolute;
          bottom: 32px;
          left: -28px;
          z-index: 2;
          background: #FAFAF8;
          padding: 18px 24px 18px 20px;
          display: flex;
          align-items: center;
          gap: 14px;
          box-shadow: 0 12px 48px rgba(0,0,0,0.10);
        }
        .ca-float-tag-line {
          display: block;
          width: 2px;
          height: 36px;
          background: #B8934A;
          flex-shrink: 0;
        }
        .ca-float-tag-text {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #111;
          margin: 0;
          white-space: nowrap;
        }

        /* ── S2 · APPROACH ── */
        .ca-s-approach { padding-top: 108px; }
        .ca-approach-header {
          text-align: center;
          margin-bottom: 80px;
        }
        .ca-approach-sub {
          font-family: var(--font-serif, Georgia, serif);
          font-style: italic;
          font-size: clamp(14px, 1.6vw, 20px);
          color: #9A9690;
          margin: 0 auto;
          max-width: 420px;
          line-height: 1.7;
          letter-spacing: 0.01em;
        }

        /* 4-column approach grid */
        .ca-approach-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border-top: 0.5px solid #DDD9D1;
        }
        .ca-approach-card {
          padding: 40px 32px 40px 0;
          border-right: 0.5px solid #DDD9D1;
          position: relative;
          transition: background 0.4s ease;
        }
        .ca-approach-card:last-child { border-right: none; }
        .ca-approach-card:hover { background: #F3F0EB; }
        .ca-approach-num {
          display: block;
          font-family: var(--font-serif, Georgia, serif);
          font-style: italic;
          font-size: clamp(36px, 4vw, 60px);
          font-weight: 400;
          color: rgba(184,147,74,0.14);
          line-height: 1;
          letter-spacing: -0.03em;
          margin-bottom: 18px;
          transition: color 0.4s ease;
        }
        .ca-approach-card:hover .ca-approach-num {
          color: rgba(184,147,74,0.35);
        }
        .ca-approach-divider {
          width: 28px;
          height: 0.5px;
          background: #B8934A;
          margin-bottom: 16px;
          transition: width 0.5s cubic-bezier(0.16,1,0.3,1);
        }
        .ca-approach-card:hover .ca-approach-divider { width: 56px; }
        .ca-approach-label {
          font-family: var(--font-serif, Georgia, serif);
          font-style: italic;
          font-size: clamp(15px, 1.5vw, 20px);
          font-weight: 400;
          color: #2A2826;
          line-height: 1.3;
          margin: 0;
          letter-spacing: -0.01em;
        }

        /* CTA row below approach */
        .ca-approach-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 64px;
          padding-top: 40px;
          border-top: 0.5px solid #DDD9D1;
        }
        .ca-approach-cta-text {
          font-family: var(--font-serif, Georgia, serif);
          font-style: italic;
          font-size: clamp(16px, 1.8vw, 24px);
          color: #6B6762;
          letter-spacing: -0.01em;
        }
        .ca-btn-gold {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #111;
          background: #B8934A;
          padding: 18px 40px;
          border: none;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.32s ease, gap 0.28s ease;
          flex-shrink: 0;
        }
        .ca-btn-gold:hover { background: #C9A462; gap: 18px; }
        .ca-btn-icon { font-size: 14px; transition: transform 0.28s ease; }
        .ca-btn-gold:hover .ca-btn-icon { transform: translateX(3px); }

        /* ── S3 · IMAGERY ── */
        .ca-s-imagery {
          display: grid;
          grid-template-columns: 36% 1fr;
          gap: 6vw;
          align-items: end;
          padding-bottom: 130px;
        }
        .ca-imagery-left {
          display: flex;
          flex-direction: column;
          gap: 44px;
        }
        .ca-imagery-right { position: relative; }

        /* Image caption overlay */
        .ca-img-caption {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 24px;
          background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%);
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .ca-img-caption-line {
          display: block;
          width: 28px;
          height: 0.5px;
          background: rgba(255,255,255,0.5);
          flex-shrink: 0;
        }
        .ca-img-caption-text {
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.65);
        }

        /* Quote */
        .ca-quote {
          font-family: var(--font-serif, Georgia, serif);
          font-style: italic;
          font-weight: 400;
          font-size: clamp(20px, 2.2vw, 32px);
          line-height: 1.35;
          letter-spacing: -0.015em;
          color: #2A2826;
          margin: 0;
          padding-left: 24px;
          border-left: 2px solid #B8934A;
          position: relative;
        }
        .ca-quote-mark {
          display: block;
          font-family: var(--font-serif, Georgia, serif);
          font-size: 80px;
          line-height: 0.6;
          color: rgba(184,147,74,0.18);
          margin-bottom: 10px;
          font-style: normal;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .ca-s { padding: 84px 6vw; }
          .ca-rule { margin: 0 6vw; }
          .ca-s-intro { grid-template-columns: 1fr 1fr; gap: 6vw; }
          .ca-s-imagery { grid-template-columns: 38% 1fr; gap: 5vw; }
          .ca-approach-grid { grid-template-columns: repeat(2, 1fr); }
          .ca-approach-card:nth-child(2) { border-right: none; }
          .ca-approach-card:nth-child(3) { border-right: 0.5px solid #DDD9D1; }
        }
        @media (max-width: 768px) {
          .ca-s { padding: 64px 5vw; }
          .ca-rule { margin: 0 5vw; }
          .ca-s-intro { grid-template-columns: 1fr; gap: 48px; }
          .ca-col-txt { padding-top: 0; }
          .ca-float-tag { left: 0; bottom: 20px; }
          .ca-approach-grid { grid-template-columns: 1fr 1fr; }
          .ca-approach-card:nth-child(2) { border-right: none; }
          .ca-approach-card:nth-child(3) { border-right: 0.5px solid #DDD9D1; }
          .ca-approach-card:nth-child(4) { border-right: none; }
          .ca-approach-cta { flex-direction: column; gap: 28px; text-align: center; }
          .ca-s-imagery { grid-template-columns: 1fr; gap: 40px; }
          .ca-hero-copy { left: 5vw; bottom: 60px; }
          .ca-hero-index { display: none; }
          .ca-body { max-width: 100%; }
        }
        @media (max-width: 480px) {
          .ca-approach-grid { grid-template-columns: 1fr; }
          .ca-approach-card { border-right: none; }
          .ca-approach-card:nth-child(3) { border-right: none; }
        }
      `}</style>
    </>
  );
}
