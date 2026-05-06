"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";
import { DOMAIN } from "../../utils/api";
import { useParams, useRouter } from "next/navigation";

export default function ClientHome({ data }) {
  const router = useRouter();
  const params = useParams();
  const locale = params.locale;

  useEffect(() => {
    AOS.init({ once: false, duration: 1200, easing: "ease-in-out" });
    AOS.refresh();
  }, []);

  if (!data || !data.data || !data.data.banner_data) {
    return <div className="text-center py-8">Loading...</div>;
  }

  const { banner_data } = data.data;
  const services = data?.data?.services || [];
  const projects = data?.data?.projects || [];
  const bannerTitle = banner_data?.main_banner_name || "";

  const handleManualRedirect = (id) => {
    let targetPath = "";
    switch (id) {
      case 1: targetPath = "renovation"; break;
      case 2: targetPath = "planning"; break;
      case 3: targetPath = "demolition"; break;
      default: targetPath = "";
    }
    if (targetPath) router.push(`/${locale}/${targetPath}`);
  };

  return (
    <section className="overflow-hidden">
      {/* ── Hero Banner ── */}
      <div className="relative w-full min-h-[50vh] h-[100vh]" data-aos="zoom-out">
        <Image
          src={`${DOMAIN}${banner_data.main_banner_image}`}
          alt="ART Construction hero"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0 z-10"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0) 100%)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 px-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-[80px] font-[400] leading-tight text-center">
            {bannerTitle.split(" ").slice(0, Math.ceil(bannerTitle.split(" ").length / 2)).join(" ")}
          </h1>
          <h1 className="text-3xl sm:text-5xl lg:text-[80px] font-[400] text-[#F3C76C] leading-tight text-center">
            {bannerTitle.split(" ").slice(Math.ceil(bannerTitle.split(" ").length / 2)).join(" ")}
          </h1>
        </div>
      </div>

      {/* ── Intro section ── */}
      <div className="w-full px-4 md:py-16 py-10 bg-white">
        <div className="max-w-7xl mx-auto" data-aos="fade-up">
          <div className="text-center mb-10">
            <h2 className="text-[26px] sm:text-[34px] lg:text-[46px] heading_text font-[400] mb-4 leading-snug">
              {banner_data.banner_section_short_description || "We Are ART Construction"}
            </h2>
            <p className="secondary_text ff_poppins text-sm sm:text-base lg:text-[17px] max-w-3xl mx-auto leading-relaxed">
              {banner_data.banner_section_description || ""}
            </p>
          </div>
          <div
            className="relative w-full h-[280px] sm:h-[420px] md:h-[520px] lg:h-[620px] overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Image
              src={`${DOMAIN}${banner_data.banner_description_section_image}`}
              alt="ART Construction project"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full my-2 px-8">
        <hr className="border-t border-[#DFDFDF]" />
      </div>

      {/* ── Services section ── */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-14 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12">
          <h2 className="text-3xl sm:text-5xl lg:text-[58px] heading_text" data-aos="fade-right">
            SERVICES
          </h2>
          <p className="ff_poppins main_text text-sm sm:text-base lg:text-[16px] tracking-wide sm:text-right max-w-xs" data-aos="fade-left">
            We Design Spaces That Inspire And Endure.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">
          {services.map((service, index) => (
            <div
              key={service.service_id}
              className={`flex flex-col cursor-pointer group ${index === 1 ? "md:mt-16" : ""}`}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              onClick={() => handleManualRedirect(service.service_id)}
            >
              <div className="overflow-hidden w-full">
                <Image
                  src={`${DOMAIN}${service.service_home_page_image}`}
                  alt={service.service_title}
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-3 pt-3 text-sm sm:text-base ff_poppins main_text tracking-wide">
                {service.service_title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="w-full my-2 px-8">
        <hr className="border-t border-[#DFDFDF]" />
      </div>

      {/* ── Projects section ── */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-14 bg-white">
        <div className="max-w-7xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-5xl lg:text-[58px] heading_text" data-aos="fade-right">
            PROJECTS
          </h2>
        </div>

        {/* Asymmetric staggered grid — NO arrows, just click the photo */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {projects.map((project, index) => (
            <div
              key={project.home_page_project_title}
              className={`flex flex-col group ${index === 1 ? "md:mt-20" : ""}`}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Project title above image */}
              <p className="text-sm sm:text-base main_text ff_poppins tracking-wide mb-4">
                {project.home_page_project_title}
              </p>

              {/* Clickable image only — no arrow */}
              <Link href={`/${locale}/projects/${project.home_page_project_slug}`}>
                <div className="relative w-full overflow-hidden">
                  <Image
                    src={`${DOMAIN}${project.home_page_project_image}`}
                    alt={project.home_page_project_image_alt_text}
                    width={0}
                    height={0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
              </Link>

              <p className="mt-3 text-sm sm:text-base main_text ff_poppins leading-relaxed">
                {project.home_page_project_short_description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
