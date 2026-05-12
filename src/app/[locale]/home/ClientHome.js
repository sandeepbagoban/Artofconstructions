"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { DOMAIN } from "../../utils/api";
import { useParams, useRouter } from "next/navigation";

/* ─── Scroll Reveal ─── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const delay = Number(e.target.dataset.delay || 0);
          setTimeout(() => e.target.classList.add("ch-revealed"), delay);
          io.unobserve(e.target);
        }),
      { threshold: 0.05 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── Number counter ─── */
function useCountUp(ref, target, duration = 1800) {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      let start = null;
      const step = (ts) => {
        if (!start) start = ts;
        const p = Math.min((ts - start) / duration, 1);
        const ease = 1 - Math.pow(1 - p, 4);
        el.textContent = Math.round(ease * target);
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [ref, target, duration]);
}

export default function ClientHome({ data }) {
  const router  = useRouter();
  const params  = useParams();
  const locale  = params.locale;
  const heroRef = useRef(null);
  const stat1   = useRef(null);
  const stat2   = useRef(null);
  const stat3   = useRef(null);

  useReveal();
  useCountUp(stat1, 15);
  useCountUp(stat2, 300);
  useCountUp(stat3, 98);

  /* Parallax hero */
  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    const fn = () => {
      el.style.transform = `translateY(${window.scrollY * 0.18}px)`;
    };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  if (!data?.data?.banner_data) return null;

  const { banner_data } = data.data;
  const services  = data?.data?.services || [];
  const projects  = data?.data?.projects || [];
  const svcRoutes = { 1: "renovation", 2: "planning", 3: "demolition" };

  const words = (banner_data.main_banner_name || "").trim().split(/\s+/);
  const mid   = Math.ceil(words.length / 2);
  const hL1   = words.slice(0, mid).join(" ");
  const hL2   = words.slice(mid).join(" ");

  return (
    <>
      <main className="ch-root">

        {/* ══ HERO ══ */}
        <section className="ch-hero" data-hero>
          <div className="ch-hero-track" ref={heroRef}>
            <Image
              src={`${DOMAIN}${banner_data.main_banner_image}`}
              alt={banner_data.main_banner_name || "hero"}
              fill priority
              className="ch-hero-img"
            />
          </div>
          {/* Multi-stop veil for cinematic depth */}
          <div className="ch-hero-veil" aria-hidden="true" />
          <div className="ch-hero-veil-h" aria-hidden="true" />

          <div className="ch-hero-copy">
            <p className="ch-hero-eyebrow">
              <span className="ch-hero-eyebrow-line" aria-hidden="true" />
              {banner_data.intro_label || "Since 2008"}
            </p>
            <h1 className="ch-hero-h1">
              <em className="ch-hero-l1">{hL1}</em>
              <span className="ch-hero-l2">{hL2}</span>
            </h1>
          </div>

          {/* Scroll indicator — bottom-left */}
          <div className="ch-scroll-cue" aria-hidden="true">
            <span className="ch-scroll-line" />
            <span className="ch-scroll-label">Scroll</span>
          </div>

          {/* Decorative index number */}
          <span className="ch-hero-index" aria-hidden="true">01</span>
        </section>

        {/* ══ S1 · Intro ══ */}
        <section className="ch-s ch-s-intro">
          <div className="ch-col-img" data-reveal>
            <div className="ch-frame ch-portrait">
              {banner_data.banner_description_section_image && (
                <Image
                  src={`${DOMAIN}${banner_data.banner_description_section_image}`}
                  alt={banner_data.banner_section_short_description || ""}
                  fill className="ch-img"
                  sizes="(max-width:768px) 100vw, 45vw"
                />
              )}
            </div>
            {/* floating project count badge */}
            <div className="ch-intro-badge" data-reveal data-delay="300">
              <span className="ch-intro-badge-n">300<sup>+</sup></span>
              <span className="ch-intro-badge-l">projets<br/>réalisés</span>
            </div>
          </div>

          <div className="ch-col-txt" data-reveal data-delay="100">
            <span className="ch-label">
              {banner_data.intro_label || "Exclusieve renovatie"}
            </span>
            <h2 className="ch-h-serif">
              {banner_data.banner_section_short_description}
            </h2>
            <p className="ch-body">{banner_data.banner_section_description}</p>

            {/* Stats row */}
            <div className="ch-stats">
              <div className="ch-stat">
                <span className="ch-stat-n">
                  +<span ref={stat1}>15</span>
                </span>
                <span className="ch-stat-l">Années<br />d'expérience</span>
              </div>
              <div className="ch-stat-div" />
              <div className="ch-stat">
                <span className="ch-stat-n">
                  <span ref={stat2}>300</span>+
                </span>
                <span className="ch-stat-l">Projets<br />réalisés</span>
              </div>
              <div className="ch-stat-div" />
              <div className="ch-stat">
                <span className="ch-stat-n">
                  <span ref={stat3}>98</span>
                  <sup>%</sup>
                </span>
                <span className="ch-stat-l">Clients<br />satisfaits</span>
              </div>
            </div>
          </div>
        </section>

        <div className="ch-rule" />

        {/* ══ S2 · Statement ══ */}
        <section className="ch-s ch-s-statement" data-reveal>
          <div className="ch-statement-header">
            <span className="ch-label ch-label-center">Notre approche</span>
            <h2 className="ch-h-xl">
              {banner_data.banner_section_title || banner_data.banner_section_short_description}
            </h2>
          </div>
          <p className="ch-statement-body" data-reveal data-delay="80">
            {banner_data.banner_section_description}
          </p>

          {projects.length >= 2 && (
            <div className="ch-duo" data-reveal data-delay="140">
              <div className="ch-duo-a">
                <div className="ch-frame ch-land">
                  <Image
                    src={`${DOMAIN}${projects[0].home_page_project_image}`}
                    alt={projects[0].home_page_project_title}
                    fill className="ch-img"
                    sizes="(max-width:768px) 100vw, 55vw"
                  />
                  <div className="ch-duo-caption">
                    <span>{projects[0].home_page_project_title}</span>
                  </div>
                </div>
              </div>
              <div className="ch-duo-b">
                <div className="ch-frame" style={{ aspectRatio: "1/1" }}>
                  <Image
                    src={`${DOMAIN}${projects[1].home_page_project_image}`}
                    alt={projects[1].home_page_project_title}
                    fill className="ch-img"
                    sizes="(max-width:768px) 100vw, 40vw"
                  />
                </div>
                <div className="ch-project-tag">
                  <span className="ch-project-tag-title">{projects[1].home_page_project_title}</span>
                  <span className="ch-project-arrow" aria-hidden="true">→</span>
                </div>
              </div>
            </div>
          )}
        </section>

        <div className="ch-rule" />

        {/* ══ S3 · Duurzaam ══ */}
        <section className="ch-s ch-s-duurzaam">
          <div className="ch-col-txt ch-col-offset" data-reveal>
            <span className="ch-label">
              {banner_data.duurzaam_label || "Duurzaam renoveren"}
            </span>
            <h2 className="ch-h-serif">
              {banner_data.vakmanschap_title || "Vakmanschap tot in het kleinste detail"}
            </h2>
            <p className="ch-body">{banner_data.banner_section_description}</p>
            <Link href={`/${locale}/about`} className="ch-link-arrow">
              En savoir plus <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="ch-col-img ch-col-img-r" data-reveal data-delay="100">
            <div className="ch-frame ch-portrait">
              {projects[0] && (
                <Image
                  src={`${DOMAIN}${projects[0].home_page_project_image}`}
                  alt={projects[0].home_page_project_title}
                  fill className="ch-img"
                  sizes="(max-width:768px) 100vw, 48vw"
                />
              )}
            </div>
            {projects[2] && (
              <div className="ch-swatch" data-reveal data-delay="220">
                <div className="ch-frame" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src={`${DOMAIN}${projects[2].home_page_project_image}`}
                    alt={projects[2].home_page_project_title}
                    fill className="ch-img"
                    sizes="25vw"
                  />
                </div>
                <p className="ch-swatch-label">{projects[2].home_page_project_title}</p>
              </div>
            )}
          </div>
        </section>

        <div className="ch-rule" />

        {/* ══ SERVICES ══ */}
        {services.length > 0 && (
          <section className="ch-s ch-s-services">
            <div className="ch-svc-header" data-reveal>
              <span className="ch-label">Nos services</span>
              <h2 className="ch-h-serif-sm">
                {banner_data.banner_section_title || "Ce que nous faisons"}
              </h2>
            </div>

            <div className="ch-svc-grid">
              {services.map((svc, i) => {
                const path = svcRoutes[svc.service_id];
                return (
                  <div
                    key={svc.service_id}
                    className="ch-svc-card"
                    role="button" tabIndex={0}
                    data-reveal data-delay={i * 80}
                    onClick={() => path && router.push(`/${locale}/${path}`)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && path && router.push(`/${locale}/${path}`)
                    }
                  >
                    <div className="ch-svc-img-wrap">
                      <div className="ch-frame ch-portrait">
                        <Image
                          src={`${DOMAIN}${svc.service_home_page_image}`}
                          alt={svc.service_title}
                          fill className="ch-img"
                          sizes="(max-width:768px) 100vw, 33vw"
                        />
                        <div className="ch-svc-overlay" />
                      </div>
                      <span className="ch-svc-num-float" aria-hidden="true">0{i + 1}</span>
                    </div>
                    <div className="ch-svc-meta">
                      <span className="ch-svc-title">{svc.service_title}</span>
                      <span className="ch-svc-cta">
                        Découvrir
                        <em aria-hidden="true">→</em>
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ══ CTA BANNER ══ */}
        <section className="ch-cta" data-reveal>
          <div className="ch-cta-inner">
            <span className="ch-label ch-label-light">Prêts à construire ?</span>
            <h2 className="ch-cta-title">
              Transformons votre<br />
              <em>vision en réalité.</em>
            </h2>
            <Link href={`/${locale}/contact`} className="ch-cta-btn">
              Nous contacter
              <span className="ch-cta-arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>

      </main>

      {/* ════ SCOPED STYLES ════ */}
      <style>{`

        /* ── REVEAL ── */
        [data-reveal] {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 1.2s cubic-bezier(0.16,1,0.3,1),
            transform 1.2s cubic-bezier(0.16,1,0.3,1);
        }
        [data-reveal].ch-revealed {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── HERO ── */
        .ch-hero {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 680px;
          overflow: hidden;
          background: #0a0908;
          /* The fixed navbar doesn't take up document flow space, but most
             Next.js layouts add padding-top on the wrapper equal to navbar height
             so content doesn't hide under it. The hero is the one section that
             SHOULD go under the navbar (image fills viewport edge-to-edge).
             margin-top counteracts that wrapper padding for this section only. */
          margin-top: -84px;
          /* Compensate height so the section still fills the full viewport */
          height: calc(100vh + 70px);
        }

        @media (max-width: 768px) {
          .ch-hero {
            margin-top: -62px;
            height: calc(100vh + 62px);
          }
        }
        .ch-hero-track {
          position: absolute;
          inset: -14% 0 -14% 0;
          will-change: transform;
        }
        .ch-hero-img {
          object-fit: cover;
          opacity: 0.82;
        }
        /* Bottom gradient */
        .ch-hero-veil {
          position: absolute; inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.72) 0%,
            rgba(0,0,0,0.18) 40%,
            rgba(0,0,0,0.04) 100%
          );
          z-index: 1;
        }
        /* Left-edge gradient — subtle */
        .ch-hero-veil-h {
          position: absolute; inset: 0;
          background: linear-gradient(
            to right,
            rgba(0,0,0,0.36) 0%,
            transparent 55%
          );
          z-index: 1;
        }

        /* Copy — bottom right, editorial feel */
        .ch-hero-copy {
          position: absolute;
          bottom: 80px;
          right: 7vw;
          z-index: 2;
          text-align: right;
          max-width: 680px;
        }
        .ch-hero-eyebrow {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 14px;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.32em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.38);
          margin-bottom: 20px;
        }
        .ch-hero-eyebrow-line {
          display: block;
          width: 36px;
          height: 0.5px;
          background: rgba(255,255,255,0.28);
          flex-shrink: 0;
        }
        .ch-hero-h1 {
          margin: 0;
          line-height: 0.94;
        }
        .ch-hero-l1 {
          display: block;
          font-family: var(--font-serif, 'Publico Banner', Georgia, serif);
          font-style: italic;
          font-weight: 400;
          font-size: clamp(40px, 5.4vw, 84px);
          color: rgba(255,255,255,0.46);
          letter-spacing: -0.025em;
        }
        .ch-hero-l2 {
          display: block;
          font-family: var(--font-serif, 'Publico Banner', Georgia, serif);
          font-style: normal;
          font-weight: 400;
          font-size: clamp(52px, 7.2vw, 112px);
          color: #fff;
          letter-spacing: -0.03em;
          margin-top: -0.04em;
        }

        /* Scroll cue — bottom left */
        .ch-scroll-cue {
          position: absolute;
          bottom: 40px;
          left: 7vw;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }
        .ch-scroll-line {
          display: block;
          width: 0.5px;
          height: 56px;
          background: rgba(255,255,255,0.22);
          transform-origin: top;
          animation: chScroll 3s ease-in-out infinite;
        }
        .ch-scroll-label {
          font-size: 8px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.28);
          writing-mode: vertical-rl;
          transform: rotate(180deg);
        }
        @keyframes chScroll {
          0%,100% { opacity: 0.15; transform: scaleY(0.3); }
          50%      { opacity: 0.7;  transform: scaleY(1); }
        }

        /* Section index badge */
        .ch-hero-index {
          position: absolute;
          top: 50%;
          left: 7vw;
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
        .ch-s {
          padding: 108px 7vw;
          max-width: 1540px;
          margin: 0 auto;
        }

        /* ── RULE ── */
        .ch-rule {
          height: 0.5px;
          background: #DDD9D1;
          margin: 0 7vw;
        }

        /* ── TYPOGRAPHY ── */
        .ch-label {
          display: block;
          font-size: 8.5px;
          font-weight: 600;
          letter-spacing: 0.36em;
          text-transform: uppercase;
          color: #B8934A;
          margin-bottom: 20px;
        }
        .ch-label-center { text-align: center; }
        .ch-label-light  { color: #D4AF6A; }

        .ch-h-serif {
          font-family: var(--font-serif, 'Publico Banner', Georgia, serif);
          font-style: italic;
          font-weight: 400;
          font-size: clamp(28px, 3.4vw, 50px);
          line-height: 1.12;
          letter-spacing: -0.018em;
          color: #111;
          margin: 0 0 26px;
        }
        .ch-h-serif-sm {
          font-family: var(--font-serif, 'Publico Banner', Georgia, serif);
          font-style: italic;
          font-weight: 400;
          font-size: clamp(22px, 2.4vw, 36px);
          line-height: 1.18;
          letter-spacing: -0.012em;
          color: #111;
          margin: 0 0 60px;
        }
        .ch-h-xl {
          font-family: var(--font-serif, 'Publico Banner', Georgia, serif);
          font-style: italic;
          font-weight: 400;
          font-size: clamp(40px, 6vw, 88px);
          line-height: 0.98;
          letter-spacing: -0.028em;
          color: #111;
          text-align: center;
          margin: 0 0 32px;
        }
        .ch-body {
          font-size: 12.5px;
          font-weight: 300;
          line-height: 2.1;
          color: #6B6762;
          letter-spacing: 0.018em;
          margin: 0 0 30px;
          max-width: 460px;
        }
        .ch-link-arrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #111;
          border-bottom: 0.5px solid #111;
          padding-bottom: 5px;
          transition: color 0.28s ease, border-color 0.28s ease;
        }
        .ch-link-arrow:hover { color: #B8934A; border-color: #B8934A; }
        .ch-link-arrow span {
          display: inline-block;
          transition: transform 0.28s ease;
        }
        .ch-link-arrow:hover span { transform: translateX(6px); }

        /* ── IMAGES ── */
        .ch-frame {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #E5E1D9;
        }
        .ch-portrait { aspect-ratio: 3 / 4; }
        .ch-land     { aspect-ratio: 16 / 10; }
        .ch-img {
          object-fit: cover;
          transition: transform 2.4s cubic-bezier(0.16,1,0.3,1);
        }
        .ch-frame:hover .ch-img { transform: scale(1.05); }

        /* ── S1 · INTRO ── */
        .ch-s-intro {
          display: grid;
          grid-template-columns: 46% 1fr;
          gap: 9vw;
          align-items: start;
        }
        .ch-col-img { position: relative; }
        .ch-col-txt {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-top: 56px;
        }

        /* Floating badge */
        .ch-intro-badge {
          position: absolute;
          bottom: -24px;
          right: -28px;
          background: #111;
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          z-index: 2;
        }
        .ch-intro-badge-n {
          font-family: var(--font-serif, Georgia, serif);
          font-style: italic;
          font-size: 42px;
          font-weight: 400;
          color: #fff;
          line-height: 1;
          letter-spacing: -0.02em;
        }
        .ch-intro-badge-n sup {
          font-size: 55%;
          color: #B8934A;
          font-style: normal;
          vertical-align: super;
        }
        .ch-intro-badge-l {
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.42);
          line-height: 1.6;
        }

        /* Stats */
        .ch-stats {
          display: flex;
          align-items: center;
          margin-top: 44px;
          padding-top: 36px;
          border-top: 0.5px solid #DDD9D1;
        }
        .ch-stat { flex: 1; }
        .ch-stat-div {
          width: 0.5px;
          height: 40px;
          background: #DDD9D1;
          flex-shrink: 0;
          margin: 0 18px;
        }
        .ch-stat-n {
          display: block;
          font-family: var(--font-serif, Georgia, serif);
          font-style: italic;
          font-weight: 400;
          font-size: clamp(34px, 3.6vw, 50px);
          color: #111;
          line-height: 1;
          letter-spacing: -0.022em;
        }
        .ch-stat-n sup {
          font-size: 58%;
          color: #B8934A;
          vertical-align: super;
          font-style: normal;
        }
        .ch-stat-l {
          display: block;
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #AAA69F;
          margin-top: 9px;
          line-height: 1.7;
        }

        /* ── S2 · STATEMENT ── */
        .ch-s-statement {
          padding-top: 104px;
          padding-bottom: 104px;
        }
        .ch-statement-header { margin-bottom: 0; }
        .ch-statement-body {
          font-size: 13.5px;
          font-weight: 300;
          line-height: 2;
          color: #7A766F;
          letter-spacing: 0.016em;
          max-width: 540px;
          margin: 0 auto 72px;
          text-align: center;
        }

        /* Duo images */
        .ch-duo {
          display: grid;
          grid-template-columns: 56% 1fr;
          gap: 4px;
          align-items: end;
        }
        .ch-duo-a { position: relative; }
        .ch-duo-caption {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          padding: 16px 20px;
          background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 100%);
          z-index: 2;
        }
        .ch-duo-caption span {
          font-size: 9px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.6);
        }
        .ch-duo-b {
          position: relative;
          transform: translateY(-52px);
        }
        .ch-project-tag {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px 0 0;
          border-top: 0.5px solid #DDD9D1;
          margin-top: 16px;
        }
        .ch-project-tag-title {
          font-size: 9.5px;
          font-weight: 500;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: #4a4845;
        }
        .ch-project-arrow {
          color: #B8934A;
          font-size: 15px;
          transition: transform 0.25s ease;
        }
        .ch-project-tag:hover .ch-project-arrow { transform: translateX(5px); }

        /* ── S3 · DUURZAAM ── */
        .ch-s-duurzaam {
          display: grid;
          grid-template-columns: 1fr 50%;
          gap: 9vw;
          align-items: start;
        }
        .ch-col-offset  { padding-top: 72px; }
        .ch-col-img-r   { position: relative; }
        .ch-swatch {
          position: absolute;
          bottom: -32px;
          left: -44px;
          width: 40%;
          z-index: 2;
          box-shadow: 0 24px 72px rgba(0,0,0,0.16);
        }
        .ch-swatch-label {
          font-size: 8.5px;
          font-weight: 500;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #AAA69F;
          padding: 12px 0 0;
        }

        /* ── SERVICES ── */
        .ch-s-services { padding-top: 104px; }
        .ch-svc-header {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 0;
        }
        .ch-svc-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2px;
        }
        .ch-svc-card {
          cursor: pointer;
          outline: none;
          position: relative;
          background: #F7F5F0;
        }
        .ch-svc-card:focus-visible {
          outline: 2px solid #B8934A;
          outline-offset: 3px;
        }
        .ch-svc-img-wrap { position: relative; }
        .ch-svc-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to top,
            rgba(8,7,6,0.82) 0%,
            rgba(8,7,6,0.0) 55%,
            transparent 100%
          );
          z-index: 1;
          opacity: 0.65;
          transition: opacity 0.5s ease;
        }
        .ch-svc-card:hover .ch-svc-overlay { opacity: 1; }
        /* Number floating over image */
        .ch-svc-num-float {
          position: absolute;
          top: 18px;
          left: 20px;
          z-index: 2;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.3em;
          color: rgba(255,255,255,0.5);
          pointer-events: none;
        }
        .ch-svc-meta {
          padding: 20px 22px 24px;
          border-top: 0.5px solid #E5E1D9;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          background: #F7F5F0;
          transition: background 0.32s ease;
        }
        .ch-svc-card:hover .ch-svc-meta { background: #EDEAE3; }
        .ch-svc-title {
          font-family: var(--font-serif, Georgia, serif);
          font-style: italic;
          font-weight: 400;
          font-size: clamp(16px, 1.7vw, 22px);
          color: #111;
          line-height: 1.2;
          transition: letter-spacing 0.4s ease;
        }
        .ch-svc-cta {
          font-size: 17px;
          color: #C9A878;
          display: flex;
          align-items: center;
          gap: 0;
          flex-shrink: 0;
          margin-left: 12px;
          transition: transform 0.28s ease, color 0.28s ease;
        }
        .ch-svc-cta em { font-style: normal; display: inline-block; }
        .ch-svc-card:hover .ch-svc-cta { transform: translateX(4px); color: #B8934A; }

        /* ── CTA BANNER ── */
        .ch-cta {
          background: #0e0d0c;
          padding: 0;
          position: relative;
          overflow: hidden;
        }
        /* Subtle grain texture via SVG filter */
        .ch-cta::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 80% 70% at 50% 120%, rgba(184,147,74,0.10) 0%, transparent 65%),
            radial-gradient(ellipse 40% 40% at 80% 20%, rgba(184,147,74,0.04) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
        }
        .ch-cta-inner {
          position: relative;
          z-index: 1;
          padding: 130px 7vw;
          text-align: center;
          max-width: 1540px;
          margin: 0 auto;
        }
        .ch-cta-title {
          font-family: var(--font-serif, 'Publico Banner', Georgia, serif);
          font-style: normal;
          font-weight: 400;
          font-size: clamp(38px, 5.8vw, 80px);
          line-height: 1.06;
          letter-spacing: -0.028em;
          color: rgba(255,255,255,0.88);
          margin: 20px 0 52px;
        }
        .ch-cta-title em {
          font-style: italic;
          color: #D4AF6A;
        }
        .ch-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 16px;
          font-size: 9.5px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: #111;
          background: #B8934A;
          padding: 18px 48px;
          border: none;
          cursor: pointer;
          transition: background 0.32s ease, gap 0.28s ease;
        }
        .ch-cta-btn:hover {
          background: #C9A462;
          gap: 22px;
        }
        .ch-cta-arrow {
          display: inline-block;
          font-size: 15px;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1100px) {
          .ch-s { padding: 84px 6vw; }
          .ch-rule { margin: 0 6vw; }
          .ch-s-intro { grid-template-columns: 1fr 1fr; gap: 6vw; }
          .ch-s-duurzaam { grid-template-columns: 1fr 1fr; gap: 6vw; }
          .ch-intro-badge { right: -16px; }
        }
        @media (max-width: 768px) {
          .ch-s { padding: 64px 5vw; }
          .ch-rule { margin: 0 5vw; }
          .ch-s-intro,
          .ch-s-duurzaam { grid-template-columns: 1fr; gap: 40px; }
          .ch-col-offset,
          .ch-col-txt { padding-top: 0; }
          .ch-svc-grid { grid-template-columns: 1fr; gap: 2px; }
          .ch-duo { grid-template-columns: 1fr; gap: 2px; }
          .ch-duo-b { transform: translateY(0); }
          .ch-stat-div { margin: 0 14px; }
          .ch-hero-copy { right: 5vw; bottom: 60px; }
          .ch-hero-index { display: none; }
          .ch-h-xl { font-size: clamp(34px, 9.5vw, 60px); }
          .ch-swatch { display: none; }
          .ch-intro-badge { right: 0; bottom: -20px; }
          .ch-cta-inner { padding: 88px 5vw; }
          .ch-body { max-width: 100%; }
        }
      `}</style>
    </>
  );
}