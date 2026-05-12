"use client";

import React, { useState, useEffect } from "react";
import { IoClose } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [drawerOpen,   setDrawerOpen]   = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled,     setScrolled]     = useState(false);
  const [overHero,     setOverHero]     = useState(false);

  const pathname          = usePathname();
  const currentLocale     = pathname.split("/")[1] || "en";
  const pathWithoutLocale = pathname.split("/").slice(2).join("/") || "";

  useEffect(() => {
    let hero = null;
    let raf  = null;

    const evaluate = () => {
      const y = window.scrollY;
      setScrolled(y > 60);
      setOverHero(!!hero && y <= 60);
    };

    const findHero = (attempts = 0) => {
      hero = document.querySelector(".ch-hero, .art-hero, [data-hero]");
      if (hero) {
        evaluate();
      } else if (attempts < 20) {
        setTimeout(() => findHero(attempts + 1), 50);
      } else {
        evaluate();
      }
    };

    findHero(0);

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        setScrolled(y > 60);
        setOverHero(!!hero && y <= 60);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  const close = () => { setDrawerOpen(false); setServicesOpen(false); };

  const services = [
    { label: "Rénovation",    slug: "renovation"  },
    { label: "Planification", slug: "planning"    },
    { label: "Démolition",    slug: "demolition"  },
  ];

  const navLinks = [
    { label: "Projets",    href: `/${currentLocale}/projects` },
    { label: "À propos",   href: `/${currentLocale}/about`    },
    { label: "Actualités", href: `/${currentLocale}/news`     },
  ];

  const isLight = overHero && !scrolled;

  return (
    <>
      <style>{`
        /* ── Base bar — all nb-bar rules are dead to us ── */
        .nav-root {
          position: fixed !important;
          top: 0 !important; left: 0 !important; right: 0 !important;
          z-index: 9999 !important;
          height: 70px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 44px;
          /* Smooth transition between hero and scrolled states */
          transition:
            background      0.55s cubic-bezier(0.45,0,0.55,1),
            box-shadow      0.55s cubic-bezier(0.45,0,0.55,1),
            backdrop-filter 0.55s ease;
        }

        /* STATE: sitting over the hero at page top */
        .nav-root.nav-over-hero {
         background: linear-gradient(to bottom, rgba(0, 0, 0, 0.42) 0%, rgb(0 0 0 / 23%) 65%, #00000014 100%) !important;
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    box-shadow: none !important;
        }

        /* STATE: scrolled down — frosted cream */
        .nav-root.nav-scrolled {
          background: rgba(247,245,240,0.95) !important;
          backdrop-filter: blur(20px) !important;
          -webkit-backdrop-filter: blur(20px) !important;
          box-shadow: 0 0.5px 0 #DDD9D1 !important;
        }

        /* ── Left cluster ── */
        .nav-left {
          display: flex;
          align-items: center;
          gap: 32px;
          z-index: 1;
        }

        /* ── Hamburger ── */
        .nav-ham {
          background: none; border: none;
          cursor: pointer; padding: 4px;
          display: flex; flex-direction: column;
          gap: 6px; flex-shrink: 0;
        }
        .nav-ham-line {
          display: block;
          width: 22px; height: 0.5px;
          background: currentColor;
          transition: opacity 0.2s ease;
        }
        .nav-ham-line-short { width: 14px; }
        .nav-ham:hover .nav-ham-line { opacity: 0.4; }
        .nav-col-light { color: #ffffff; }
        .nav-col-dark  { color: #111111; }

        /* ── Inline nav links ── */
        .nav-links {
          display: flex; gap: 28px;
          list-style: none; margin: 0; padding: 0;
        }
        .nav-links li a {
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.16em; text-transform: uppercase;
          transition: color 0.22s ease, opacity 0.22s ease;
        }
        .nav-links-light li a { color: rgba(255,255,255,0.5); }
        .nav-links-light li a:hover { color: #fff; }
        .nav-links-dark  li a { color: #999591; }
        .nav-links-dark  li a:hover { color: #111; }

        /* ── Logo — absolutely centred ── */
        .nav-logo-wrap {
          position: absolute;
          left: 50%; transform: translateX(-50%);
          z-index: 0;
        }
        .nav-logo-img {
          width: auto !important; height: auto !important;
          max-width: 180px;
          transition: filter 0.4s ease, opacity 0.3s ease;
        }
        // .nav-logo-light { filter: brightness(0) invert(1); }
        .nav-logo-dark  { filter: none; }

        /* ── Right cluster ── */
        .nav-right {
          display: flex; align-items: center;
          gap: 28px; z-index: 1;
        }

        /* ── Language switcher ── */
        .nav-lang {
          display: flex; align-items: center; gap: 10px;
        }
        .nav-lang-item {
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.18em; text-transform: uppercase;
          transition: color 0.2s ease;
        }
        .nav-lang-light .nav-lang-item       { color: rgba(255,255,255,0.42); }
        .nav-lang-light .nav-lang-item:hover { color: #fff; }
        .nav-lang-light .nav-lang-active     { color: #fff !important; font-weight: 700; }
        .nav-lang-dark  .nav-lang-item       { color: #999591; }
        .nav-lang-dark  .nav-lang-item:hover { color: #111; }
        .nav-lang-dark  .nav-lang-active     { color: #111 !important; font-weight: 700; }
        .nav-lang-sep {
          display: block; width: 0.5px; height: 10px;
          background: currentColor; opacity: 0.2;
        }

        /* ── CTA button ── */
        .nav-cta {
          font-size: 9px; font-weight: 600;
          letter-spacing: 0.2em; text-transform: uppercase;
          padding: 10px 22px;
          border: 0.5px solid currentColor;
          transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;
        }
        .nav-cta-light {
          color: rgba(255,255,255,0.65);
          border-color: rgba(255,255,255,0.3);
        }
        .nav-cta-light:hover {
          background: rgba(255,255,255,0.1);
          color: #fff;
          border-color: rgba(255,255,255,0.6);
        }
        .nav-cta-dark  { color: #111; border-color: #111; }
        .nav-cta-dark:hover { background: #111; color: #F7F5F0; }

        /* ── Drawer backdrop ── */
        .nav-overlay {
          position: fixed; inset: 0;
          background: rgba(14,12,11,0.32);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 9998;
        }

        /* ── Drawer panel ── */
        .nav-drawer {
          position: fixed;
          top: 0; left: 0;
          width: 340px; height: 100%;
          background: #FDFCFA;
          z-index: 10000;
          transform: translateX(-100%);
          transition: transform 0.56s cubic-bezier(0.16,1,0.3,1);
          box-shadow: 16px 0 64px rgba(0,0,0,0.08);
          display: flex; flex-direction: column;
          overflow-y: auto;
        }
        .nav-drawer-open { transform: translateX(0); }

        .nav-dhead {
          display: flex; align-items: center;
          justify-content: space-between;
          padding: 22px 28px 20px;
          border-bottom: 0.5px solid #DDD9D1;
          flex-shrink: 0;
        }
        .nav-dhead-logo {
          width: auto !important; height: auto !important;
          max-width: 120px;
        }
        .nav-dclose {
          background: none; border: none; cursor: pointer;
          padding: 4px; color: #999591;
          display: flex; align-items: center;
          transition: color 0.2s ease, transform 0.3s ease;
        }
        .nav-dclose:hover { color: #111; transform: rotate(90deg); }

        .nav-dbody {
          flex: 1; padding: 36px 28px 44px;
          display: flex; flex-direction: column;
          justify-content: space-between;
        }

        .nav-dlist {
          list-style: none; margin: 0; padding: 0;
          display: flex; flex-direction: column; gap: 2px;
        }

        .nav-dlink {
          display: block;
          font-size: 13px; font-weight: 300;
          letter-spacing: 0.08em; color: #1C1A18;
          padding: 12px 0;
          border-bottom: 0.5px solid #DDD9D1;
          transition: color 0.2s ease, padding-left 0.25s cubic-bezier(0.16,1,0.3,1);
        }
        .nav-dlink:hover { color: #B8934A; padding-left: 6px; }

        .nav-dacc {
          display: flex; align-items: center;
          justify-content: space-between;
          width: 100%; background: none; border: none;
          cursor: pointer; padding: 12px 0;
          border-bottom: 0.5px solid #DDD9D1;
          font-family: var(--font-sans, 'Poppins', sans-serif);
          font-size: 13px; font-weight: 300;
          letter-spacing: 0.08em; color: #1C1A18;
          transition: color 0.2s ease;
        }
        .nav-dacc:hover { color: #B8934A; }
        .nav-dacc-icon {
          width: 14px; height: 14px; flex-shrink: 0;
          transition: transform 0.3s cubic-bezier(0.16,1,0.3,1);
        }
        .nav-dacc-open .nav-dacc-icon { transform: rotate(-180deg); }

        .nav-dsub {
          list-style: none; margin: 0;
          padding: 0 0 0 18px;
          border-left: 1.5px solid #DDD9D1;
          max-height: 0; overflow: hidden;
          transition: max-height 0.36s cubic-bezier(0.16,1,0.3,1);
        }
        .nav-dsub-open { max-height: 180px; margin-top: 4px; }

        .nav-dsublink {
          display: block;
          font-size: 12px; font-weight: 300;
          letter-spacing: 0.06em; color: #999591;
          padding: 9px 0;
          transition: color 0.2s ease;
        }
        .nav-dsublink:hover { color: #B8934A; }

        .nav-dfooter { margin-top: 40px; }
        .nav-dfooter-cta {
          display: flex; align-items: center;
          justify-content: space-between;
          font-size: 10px; font-weight: 600;
          letter-spacing: 0.2em; text-transform: uppercase;
          color: #111; border: 0.5px solid #111;
          padding: 15px 20px; margin-bottom: 28px;
          transition: background 0.25s ease, color 0.25s ease;
        }
        .nav-dfooter-cta:hover { background: #111; color: #F7F5F0; }
        .nav-dfooter-cta span {
          display: inline-block;
          transition: transform 0.25s ease;
        }
        .nav-dfooter-cta:hover span { transform: translateX(5px); }

        .nav-dfooter-lang {
          display: flex; gap: 12px; align-items: center;
        }
        .nav-dfooter-lang a {
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.14em; text-transform: uppercase;
          color: #999591; transition: color 0.2s ease;
        }
        .nav-dfooter-lang a:hover { color: #111; }
        .nav-lang-active { color: #111 !important; font-weight: 700; }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .nav-root { padding: 0 32px; }
          .nav-links { gap: 20px; }
        }
        @media (max-width: 768px) {
          .nav-root { padding: 0 22px; height: 62px; }
          .nav-links { display: none; }
          .nav-right { gap: 18px; }
          .nav-drawer { width: 290px; }
          .nav-logo-img { max-width: 150px; }
        }
      `}</style>

      {/* ── Top Bar ── */}
      <header className={`nav-root ${isLight ? "nav-over-hero" : "nav-scrolled"}`}>

        {/* Left */}
        <div className="nav-left">
          <button
            className={`nav-ham ${isLight ? "nav-col-light" : "nav-col-dark"}`}
            onClick={() => setDrawerOpen(true)}
            aria-label="Open menu"
          >
            <span className="nav-ham-line" />
            <span className="nav-ham-line nav-ham-line-short" />
          </button>

          <ul className={`nav-links ${isLight ? "nav-links-light" : "nav-links-dark"}`}>
            {navLinks.map((l) => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Centre: logo */}
        <div className="nav-logo-wrap">
          <Link href={`/${currentLocale}`}>
            <Image
              src="/assets/images/logo.svg"
              alt="ART Construction"
              width={210} height={48}
              priority
              className={`nav-logo-img ${isLight ? "nav-logo-light" : "nav-logo-dark"}`}
            />
          </Link>
        </div>

        {/* Right */}
        <div className="nav-right">
          <div className={`nav-lang ${isLight ? "nav-lang-light" : "nav-lang-dark"}`}>
            <Link
              href={`/fr/${pathWithoutLocale}`}
              className={`nav-lang-item${currentLocale === "fr" ? " nav-lang-active" : ""}`}
            >FR</Link>
            <span className="nav-lang-sep" />
            <Link
              href={`/en/${pathWithoutLocale}`}
              className={`nav-lang-item${currentLocale === "en" ? " nav-lang-active" : ""}`}
            >EN</Link>
          </div>

          <Link
            href={`/${currentLocale}/contact`}
            className={`nav-cta ${isLight ? "nav-cta-light" : "nav-cta-dark"}`}
          >
            Contact
          </Link>
        </div>
      </header>

      {/* ── Drawer backdrop ── */}
      {drawerOpen && <div className="nav-overlay" onClick={close} />}

      {/* ── Drawer panel ── */}
      <div className={`nav-drawer${drawerOpen ? " nav-drawer-open" : ""}`}>

        <div className="nav-dhead">
          <Link href={`/${currentLocale}`} onClick={close}>
            <Image
              src="/assets/images/logo.svg"
              alt="ART Construction"
              width={148} height={38}
              className="nav-dhead-logo"
            />
          </Link>
          <button onClick={close} className="nav-dclose" aria-label="Close menu">
            <IoClose size={20} />
          </button>
        </div>

        <div className="nav-dbody">
          <ul className="nav-dlist">

            <li>
              <Link href={`/${currentLocale}`} className="nav-dlink" onClick={close}>
                Accueil
              </Link>
            </li>

            <li>
              <button
                className={`nav-dacc${servicesOpen ? " nav-dacc-open" : ""}`}
                onClick={() => setServicesOpen((p) => !p)}
              >
                <span>Services</span>
                <svg className="nav-dacc-icon" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <ul className={`nav-dsub${servicesOpen ? " nav-dsub-open" : ""}`}>
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/${currentLocale}/${s.slug}`} className="nav-dsublink" onClick={close}>
                      {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="nav-dlink" onClick={close}>{l.label}</Link>
              </li>
            ))}

          </ul>

          <div className="nav-dfooter">
            <Link href={`/${currentLocale}/contact`} className="nav-dfooter-cta" onClick={close}>
              Nous contacter <span aria-hidden="true">→</span>
            </Link>
            <div className="nav-dfooter-lang">
              <Link
                href={`/fr/${pathWithoutLocale}`} onClick={close}
                className={`nav-lang-item${currentLocale === "fr" ? " nav-lang-active" : ""}`}
              >Français</Link>
              <span style={{ color: "#ddd" }}>·</span>
              <Link
                href={`/en/${pathWithoutLocale}`} onClick={close}
                className={`nav-lang-item${currentLocale === "en" ? " nav-lang-active" : ""}`}
              >English</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
