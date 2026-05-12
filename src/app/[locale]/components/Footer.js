"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Footer() {
  const params = useParams();
  const locale = params?.locale || "en";
  const year   = new Date().getFullYear();

  return (
    <footer className="ft-root">

      {/* ── Top: logo centred ── */}
      <div className="ft-logo-wrap">
        <Link href={`/${locale}`}>
          <Image
            src="/assets/images/logo.svg"
            alt="ART Construction"
            width={220}
            height={54}
            className="ft-logo"
          />
        </Link>
      </div>

      {/* ── Main grid: address · contact · socials ── */}
      <div className="ft-grid">

        {/* Address */}
        <div className="ft-col">
          <span className="ft-eyebrow">Address</span>
          <address className="ft-address">
            ART–Construction SRL<br />
            Hermesstraat, 24<br />
            1930 Zaventem
          </address>
        </div>

        {/* Contact */}
        <div className="ft-col ft-col-center">
          <span className="ft-eyebrow">Contact</span>
          <a href="tel:+32486619189" className="ft-contact-link">0486 / 61 91 89</a>
          <a href="mailto:info@artconstruction.be" className="ft-contact-link">
            info@artconstruction.be
          </a>
        </div>

        {/* Socials */}
        <div className="ft-col ft-col-right">
          <span className="ft-eyebrow">Follow Us</span>
          <div className="ft-socials">
            {[
              { label: "FB",  href: "#", title: "Facebook"  },
              { label: "IG",  href: "#", title: "Instagram" },
              { label: "TW",  href: "#", title: "Twitter"   },
              { label: "LI",  href: "#", title: "LinkedIn"  },
            ].map(({ label, href, title }) => (
              <a key={label} href={href} className="ft-social" aria-label={title} title={title}>
                <span className="ft-social-lbl">{label}</span>
              </a>
            ))}
          </div>
        </div>

      </div>

      {/* ── Divider ── */}
      <div className="ft-rule" />

      {/* ── Bottom bar ── */}
      <div className="ft-bottom">
        <p className="ft-legal">
          ART–Construction SRL &nbsp;·&nbsp; VAT: BE 0456.299.183
        </p>
        <p className="ft-copy">
          © {year} ART–Construction SRL. All rights reserved.
          &nbsp;|&nbsp;
          <Link href={`/${locale}/privacy-policy`} className="ft-privacy">
            Privacy Policy
          </Link>
        </p>
      </div>

      <style>{`
        .ft-root {
          background: #111110;
          color: #fff;
          padding: 80px 6vw 40px;
          font-family: var(--font-sans, 'Poppins', sans-serif);
        }

        /* Logo */
        .ft-logo-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 64px;
        }
        .ft-logo {
          width: auto !important;
          height: auto !important;
          max-width: 180px;
          filter: brightness(0) invert(1);
          opacity: 0.88;
          transition: opacity 0.2s ease;
        }
        .ft-logo:hover { opacity: 1; }

        /* Grid */
        .ft-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 40px;
          max-width: 1100px;
          margin: 0 auto 56px;
        }

        /* Cols */
        .ft-col {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .ft-col-center { align-items: center; text-align: center; }
        .ft-col-right  { align-items: flex-end; text-align: right; }

        /* Eyebrow */
        .ft-eyebrow {
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #C9A84C;
          margin-bottom: 12px;
        }

        /* Address */
        .ft-address {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.9;
          color: rgba(255,255,255,0.55);
          font-style: normal;
          letter-spacing: 0.02em;
        }

        /* Contact links */
        .ft-contact-link {
          font-size: 13px;
          font-weight: 300;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: color 0.22s ease;
        }
        .ft-contact-link:hover { color: #C9A84C; }

        /* Socials */
        .ft-socials {
          display: flex;
          gap: 10px;
          margin-top: 4px;
        }
        .ft-social {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 0.5px solid rgba(255,255,255,0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: border-color 0.22s ease, background 0.22s ease;
        }
        .ft-social:hover {
          border-color: #C9A84C;
          background: rgba(201,168,76,0.1);
        }
        .ft-social-lbl {
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: rgba(255,255,255,0.45);
          transition: color 0.22s ease;
        }
        .ft-social:hover .ft-social-lbl { color: #C9A84C; }

        /* Rule */
        .ft-rule {
          height: 0.5px;
          background: rgba(255,255,255,0.08);
          max-width: 1100px;
          margin: 0 auto 32px;
        }

        /* Bottom */
        .ft-bottom {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        .ft-legal, .ft-copy {
          font-size: 11px;
          font-weight: 300;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.06em;
          margin: 0;
        }
        .ft-privacy {
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .ft-privacy:hover { color: #C9A84C; }

        @media (max-width: 768px) {
          .ft-root { padding: 60px 5vw 32px; }
          .ft-grid {
            grid-template-columns: 1fr;
            gap: 36px;
            text-align: center;
          }
          .ft-col-center,
          .ft-col-right { align-items: center; text-align: center; }
          .ft-socials { justify-content: center; }
          .ft-bottom {
            flex-direction: column;
            text-align: center;
            gap: 8px;
          }
        }
      `}</style>
    </footer>
  );
}
