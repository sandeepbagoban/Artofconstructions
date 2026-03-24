// "use client";

// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Image from "next/image";
// import Link from "next/link";
// import { DOMAIN } from "../../utils/api";
// import { useParams } from "next/navigation";

// export default function ClientHome({ data }) {
//   useEffect(() => {
//     AOS.init({
//       once: false,
//       duration: 1200,
//       easing: "ease-in-out",
//     });
//     AOS.refresh();
//   }, []);

//   // If data is loading or not available yet
//   if (!data || !data.data || !data.data.banner_data) {
//     return <div className="text-center py-8">Loading...</div>;
//   }
//   const { banner_data } = data.data;

//   const services = data?.data?.services || [];

//   const projects = data?.data?.projects || [];

//   const bannerTitle = banner_data?.main_banner_name || "";
//   const bannerImage = banner_data?.main_banner_image || "";
//   console.log("bannerImage", bannerImage);

//   const params = useParams(); // { locale: "en" }
//   const locale = params.locale;
//   return (
//     <section className="overflow-hidden">
//       {/* Banner section start */}
//       {/* Changed h-[calc(100vh-82px)] to h-[100vh] to go behind navbar */}
//       <div
//         className="relative w-full min-h-[50vh] h-[100vh]"
//         data-aos="zoom-out"
//       >
//         {/* The Background Image */}
//         <Image
//           src={`${DOMAIN}${banner_data.main_banner_image}`}
//           alt="image"
//           fill
//           className="object-cover"
//           priority
//         />

//         {/* Color Overlay Layer */}
//         {/* inset-0 makes it cover the whole parent, bg-[#7faccd]/60 adds the color with 60% opacity */}
//         <div
//           className="absolute inset-0 bg-[#88cdff6e]/60 z-10"
//           aria-hidden="true"
//         />

//         {/* Text Content Layer */}
//         {/* Note: I've bumped z-index to z-20 to ensure it stays above the overlay */}
//         <div
//           className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 px-4"
//           data-aos="fade-up"
//           data-aos-delay="400"
//         >
//           <h1 className="text-3xl sm:text-5xl lg:text-[80px] font-[400] leading-tight text-center">
//             {bannerTitle
//               .split(" ")
//               .slice(0, Math.ceil(bannerTitle.split(" ").length / 2))
//               .join(" ")}
//           </h1>

//           <h1 className="text-3xl sm:text-5xl lg:text-[80px] font-[400] text-[#F3C76C] leading-tight text-center">
//             {bannerTitle
//               .split(" ")
//               .slice(Math.ceil(bannerTitle.split(" ").length / 2))
//               .join(" ")}
//           </h1>
//         </div>
//       </div>
//       {/* Banner section End */}

//       {/* We are ArtConstruction Start */}
//       <div className="w-full px-4 md:py-10 py-5 bg-white">
//         <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6 items-center">
//           {/* Center column properly */}
//           <div
//             className="col-span-12 md:col-span-8 md:col-start-3 text-center"
//             data-aos="fade-up"
//           >
//             {/* Heading */}
//             <h1 className="text-[28px] sm:text-[36px] lg:text-[50px] heading_text font-[400] mb-4">
//               {banner_data.banner_section_short_description || "Heading"}
//             </h1>

//             {/* Description */}
//             <p className="secondary_text mb-6 ff_poppins text-sm sm:text-base lg:text-lg">
//               {banner_data.banner_section_description || "Description"}
//             </p>

//             {/* ✅ Image container (CENTERED + RESPONSIVE) */}
//             <div
//               className="relative w-full max-w-[950px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded overflow-hidden mx-auto"
//               data-aos="fade-up"
//               data-aos-delay="300"
//             >
//               <Image
//                 src={`${DOMAIN}${banner_data.banner_description_section_image}`}
//                 alt="Project"
//                 fill
//                 className="object-cover"
//                 priority
//                 sizes="(max-width: 768px) 100vw, 50vw"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* We are ArtConstruction End */}

//       {/* Divider section start */}
//       <div className="w-full my-5 px-8">
//         <hr className="border-t-2 border-[#DFDFDF]" />
//       </div>
//       {/* Divider section end */}

//       {/* Services section start */}
//       <div className="w-full px-4 sm:px-6 lg:px-8 lg:py-10 bg-white">
//         {/* Heading */}
//         <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-12 items-center gap-4 mb-10">
//           <h2
//             className="sm:col-span-6 text-3xl sm:text-5xl lg:text-[60px] heading_text text-center sm:text-left"
//             data-aos="fade-right"
//           >
//             SERVICES
//           </h2>
//           <p
//             className="sm:col-span-5 ff_poppins main_text text-center sm:text-right text-sm sm:text-base lg:text-[16px] tracking-wide"
//             data-aos="fade-left"
//           >
//             We Design Spaces That Inspire And Endure.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
//           {services.map((service, index) => (
//             <div
//               key={service.service_id}
//               className={`flex flex-col
//                     ${
//                       index === services.length - 1 && services.length % 2 !== 0
//                         ? "md:col-span-2 md:items-center"
//                         : ""
//                     }
//                     ${
//                       index === 1 ? "md:items-end md:mt-10 mt-6" : "items-start"
//                     }
//                 `}
//               data-aos="fade-up"
//               data-aos-delay={index * 200}
//             >
//               <Link href={service.service_page_slug}>
//                 <div className="overflow-hidden group w-full">
//                   <Image
//                     src={`${DOMAIN}${service.service_home_page_image}`}
//                     alt={service.service_title}
//                     width={0}
//                     height={0}
//                     sizes="100vw"
//                     className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-110"
//                   />
//                 </div>
//               </Link>
//               <p className="mt-2 py-4 text-sm sm:text-base lg:text-[16px] ff_poppins main_text text-center sm:text-left">
//                 {service.service_title}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* Services section end */}

//       {/* Projects section Start */}
//       <div className="w-full px-4 sm:px-6 lg:px-8 py-10 bg-white">
//         {/* Heading */}
//         <div className="max-w-7xl mx-auto text-center mb-10">
//           <h2
//             className="text-3xl sm:text-5xl lg:text-[60px] heading_text"
//             data-aos="fade-right"
//           >
//             Projects
//           </h2>
//         </div>

//         {/* Grid */}
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
//           {projects.map((service, index) => (
//             <div
//               key={service.home_page_project_title}
//               className={`flex flex-col
//           ${
//             index === projects.length - 1 && projects.length % 2 !== 0
//               ? "md:col-span-2 md:items-center"
//               : ""
//           }
//           ${index === 1 ? "md:items-end md:mt-10" : ""}
//         `}
//               data-aos="fade-up"
//               data-aos-delay={index * 200}
//             >
//               {/* For second card, show description on top */}
//               {index === 1 && (
//                 <p className="mb-4 py-4 text-base sm:text-lg main_text ff_poppins w-full max-w-[500px]">
//                   {service.home_page_project_short_description}
//                 </p>
//               )}

//               <div className="group w-full max-w-[500px] cursor-pointer">
//                 {/* Title for all EXCEPT the 2nd card */}
//                 {index !== 1 && (
//                   <div className="my-4 w-full relative overflow-hidden">
//                     <p className="text-lg main_text ff_poppins z-10 relative transition-all duration-500 ease-in-out">
//                       {service.home_page_project_title}
//                     </p>
//                     <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-end items-center">
//                       <Image
//                         src="/assets/images/arrow_icon.png"
//                         alt="arrow"
//                         width={34}
//                         height={34}
//                         className="transition-transform duration-500 ease-in-out group-hover:-translate-x-[150px] mr-10"
//                       />
//                     </div>
//                   </div>
//                 )}

//                 {/* IMAGE */}
//                 <Link
//                   href={`/${locale}/projects/${service.home_page_project_slug}`}
//                 >
//                   <div className="relative w-full overflow-hidden">
//                     <Image
//                       src={`${DOMAIN}${service.home_page_project_image}`}
//                       alt={service.home_page_project_image_alt_text}
//                       width={0}
//                       height={0}
//                       sizes="100vw"
//                       className="w-full h-auto object-cover"
//                     />
//                     {/* Hover Overlay */}
//                     <div className="absolute inset-0 bg-[#ebebebeb] flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-all duration-500">
//                       <div className="flex flex-col items-center justify-center space-y-2">
//                         <Image
//                           src="/assets/images/arrow_icon.png"
//                           alt="arrow"
//                           width={40}
//                           height={40}
//                         />
//                         <p className="text-black text-lg sm:text-xl text-center px-4 mt-4">
//                           ({service.home_page_project_title})
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </Link>

//                 {/* Title for ONLY the 2nd card */}
//                 {index === 1 && (
//                   <div className="mt-4 w-full relative overflow-hidden">
//                     <p className="text-lg main_text ff_poppins z-10 relative transition-all duration-500 ease-in-out">
//                       {service.home_page_project_title}
//                     </p>
//                     <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-end items-center">
//                       <Image
//                         src="/assets/images/arrow_icon.png"
//                         alt="arrow"
//                         width={34}
//                         height={34}
//                         className="transition-transform duration-500 ease-in-out group-hover:-translate-x-[150px] mr-10"
//                       />
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Description for other cards */}
//               {index !== 1 && (
//                 <p className="mt-2 py-4 text-base sm:text-lg main_text ff_poppins w-full max-w-[500px]">
//                   {service.home_page_project_short_description}
//                 </p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//       {/* Projects section end */}
//     </section>
//   );
// }
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
    AOS.init({
      once: false,
      duration: 1200,
      easing: "ease-in-out",
    });
    AOS.refresh();
  }, []);

  // If data is loading or not available yet
  if (!data || !data.data || !data.data.banner_data) {
    return <div className="text-center py-8">Loading...</div>;
  }

  const { banner_data } = data.data;
  const services = data?.data?.services || [];
  const projects = data?.data?.projects || [];
  const bannerTitle = banner_data?.main_banner_name || "";

  // Manual redirect logic based on ID (Removed 'services' from path)
  const handleManualRedirect = (id) => {
    let targetPath = "";

    switch (id) {
      case 1:
        targetPath = "renovation";
        break;
      case 2:
        targetPath = "planning";
        break;
      case 3:
        targetPath = "demolition";
        break;
      default:
        targetPath = ""; 
    }

    if (targetPath) {
      // URL will now be: /en/renovation
      router.push(`/${locale}/${targetPath}`);
    }
  };

  return (
    <section className="overflow-hidden">
      {/* Banner section start */}
      <div
        className="relative w-full min-h-[50vh] h-[100vh]"
        data-aos="zoom-out"
      >
        <Image
          src={`${DOMAIN}${banner_data.main_banner_image}`}
          alt="image"
          fill
          className="object-cover"
          priority
        />

        <div
          className="absolute inset-0 bg-[#000000]/60 z-10"
          aria-hidden="true"
        />

        <div
          className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 px-4"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-[80px] font-[400] leading-tight text-center">
            {bannerTitle
              .split(" ")
              .slice(0, Math.ceil(bannerTitle.split(" ").length / 2))
              .join(" ")}
          </h1>

          <h1 className="text-3xl sm:text-5xl lg:text-[80px] font-[400] text-[#F3C76C] leading-tight text-center">
            {bannerTitle
              .split(" ")
              .slice(Math.ceil(bannerTitle.split(" ").length / 2))
              .join(" ")}
          </h1>
        </div>
      </div>
      {/* Banner section End */}

      {/* We are ArtConstruction Start */}
      <div className="w-full px-4 md:py-10 py-5 bg-white">
        <div className="max-w-9xl mx-auto grid grid-cols-12 gap-6 items-center">
          <div
            className="col-span-12 md:col-span-8 md:col-start-3 text-center"
            data-aos="fade-up"
          >
            <h1 className="text-[28px] sm:text-[36px] lg:text-[50px] heading_text font-[400] mb-4">
              {banner_data.banner_section_short_description || "Heading"}
            </h1>

            <p className="secondary_text mb-6 ff_poppins text-sm sm:text-base lg:text-lg">
              {banner_data.banner_section_description || "Description"}
            </p>

            <div
              className="relative w-full max-w-[1524px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded overflow-hidden mx-auto"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <Image
                src={`${DOMAIN}${banner_data.banner_description_section_image}`}
                alt="Project"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
      {/* We are ArtConstruction End */}

      {/* Divider section start */}
      <div className="w-full my-5 px-8">
        <hr className="border-t-2 border-[#DFDFDF]" />
      </div>
      {/* Divider section end */}

      {/* Services section start */}
      <div className="w-full px-4 sm:px-6 lg:px-8 lg:py-10 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-12 items-center gap-4 mb-10">
          <h2
            className="sm:col-span-6 text-3xl sm:text-5xl lg:text-[60px] heading_text text-center sm:text-left"
            data-aos="fade-right"
          >
            SERVICES
          </h2>
          <p
            className="sm:col-span-5 ff_poppins main_text text-center sm:text-right text-sm sm:text-base lg:text-[16px] tracking-wide"
            data-aos="fade-left"
          >
            We Design Spaces That Inspire And Endure.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {services.map((service, index) => (
            <div
              key={service.service_id}
              className={`flex flex-col 
          ${
            index === services.length - 1 && services.length % 2 !== 0
              ? "md:col-span-2 md:items-center"
              : ""
          }
          ${index === 1 ? "md:items-end md:mt-10 mt-6" : "items-start"}
      `}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* MANUAL REDIRECT TRIGGER (NO SERVICES WORD) */}
              <div
                onClick={() => handleManualRedirect(service.service_id)}
                className="w-full max-w-[550px] cursor-pointer"
              >
                <div className="overflow-hidden group w-full relative aspect-[4/3] rounded-sm">
                  <Image
                    src={`${DOMAIN}${service.service_home_page_image}`}
                    alt={service.service_title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <p className="mt-2 py-4 text-sm sm:text-base lg:text-[16px] ff_poppins main_text text-center sm:text-left">
                {service.service_title}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* Services section end */}

      {/* Projects section Start */}
      <div className="w-full px-4 sm:px-6 lg:px-8 py-10 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h2
            className="text-3xl sm:text-5xl lg:text-[60px] heading_text"
            data-aos="fade-right"
          >
            Projects
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {projects.map((service, index) => (
            <div
              key={service.home_page_project_title}
              className={`flex flex-col 
          ${
            index === projects.length - 1 && projects.length % 2 !== 0
              ? "md:col-span-2 md:items-center"
              : ""
          }
          ${index === 1 ? "md:items-end md:mt-10" : ""}
        `}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {index === 1 && (
                <p className="mb-4 py-4 text-base sm:text-lg main_text ff_poppins w-full max-w-[500px]">
                  {service.home_page_project_short_description}
                </p>
              )}

              <div className="group w-full max-w-[500px] cursor-pointer">
                {index !== 1 && (
                  <div className="my-4 w-full relative overflow-hidden">
                    <p className="text-lg main_text ff_poppins z-10 relative transition-all duration-500 ease-in-out">
                      {service.home_page_project_title}
                    </p>
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-end items-center">
                      <Image
                        src="/assets/images/arrow_icon.png"
                        alt="arrow"
                        width={34}
                        height={34}
                        className="transition-transform duration-500 ease-in-out group-hover:-translate-x-[150px] mr-10"
                      />
                    </div>
                  </div>
                )}

                <Link
                  href={`/${locale}/projects/${service.home_page_project_slug}`}
                >
                  <div className="relative w-full overflow-hidden">
                    <Image
                      src={`${DOMAIN}${service.home_page_project_image}`}
                      alt={service.home_page_project_image_alt_text}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-[#ebebebeb] flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-all duration-500">
                      <div className="flex flex-col items-center justify-center space-y-2">
                        <Image
                          src="/assets/images/arrow_icon.png"
                          alt="arrow"
                          width={40}
                          height={40}
                        />
                        <p className="text-black text-lg sm:text-xl text-center px-4 mt-4">
                          ({service.home_page_project_title})
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>

                {index === 1 && (
                  <div className="mt-4 w-full relative overflow-hidden">
                    <p className="text-lg main_text ff_poppins z-10 relative transition-all duration-500 ease-in-out">
                      {service.home_page_project_title}
                    </p>
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-end items-center">
                      <Image
                        src="/assets/images/arrow_icon.png"
                        alt="arrow"
                        width={34}
                        height={34}
                        className="transition-transform duration-500 ease-in-out group-hover:-translate-x-[150px] mr-10"
                      />
                    </div>
                  </div>
                )}
              </div>

              {index !== 1 && (
                <p className="mt-2 py-4 text-base sm:text-lg main_text ff_poppins w-full max-w-[500px]">
                  {service.home_page_project_short_description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}