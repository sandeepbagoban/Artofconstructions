(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/utils/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ABOUTUS",
    ()=>ABOUTUS,
    "BASEURL",
    ()=>BASEURL,
    "CONTACTUS",
    ()=>CONTACTUS,
    "DEMOLITION",
    ()=>DEMOLITION,
    "DOMAIN",
    ()=>DOMAIN,
    "HOMEPAGE",
    ()=>HOMEPAGE,
    "PLANNING",
    ()=>PLANNING,
    "PROJECTDETAIL",
    ()=>PROJECTDETAIL,
    "PROJECTS",
    ()=>PROJECTS,
    "RENOVATION",
    ()=>RENOVATION
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const DOMAIN = "https://www.cms.artconstruction.be/";
const BASEURL = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: DOMAIN + "api/"
});
const HOMEPAGE = "home-page";
const ABOUTUS = "about-us";
const CONTACTUS = "contact-us";
const RENOVATION = "service-details/renovation";
const PLANNING = "service-details/planning";
const DEMOLITION = "service-details/demolition";
const PROJECTS = "project-details";
const PROJECTDETAIL = "project-image-gallery";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/[locale]/home/ClientHome.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientHome
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/aos/dist/aos.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/utils/api.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
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
;
;
;
;
;
;
;
function ClientHome({ data }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"])();
    const locale = params.locale;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientHome.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].init({
                once: false,
                duration: 1200,
                easing: "ease-in-out"
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$aos$2f$dist$2f$aos$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].refresh();
        }
    }["ClientHome.useEffect"], []);
    // If data is loading or not available yet
    if (!data || !data.data || !data.data.banner_data) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-8",
            children: "Loading..."
        }, void 0, false, {
            fileName: "[project]/src/app/[locale]/home/ClientHome.js",
            lineNumber: 329,
            columnNumber: 12
        }, this);
    }
    const { banner_data } = data.data;
    const services = data?.data?.services || [];
    const projects = data?.data?.projects || [];
    const bannerTitle = banner_data?.main_banner_name || "";
    // Manual redirect logic based on ID (Removed 'services' from path)
    const handleManualRedirect = (id)=>{
        let targetPath = "";
        switch(id){
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full min-h-[50vh] h-[100vh]",
                "data-aos": "zoom-out",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMAIN"]}${banner_data.main_banner_image}`,
                        alt: "image",
                        fill: true,
                        className: "object-cover",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                        lineNumber: 368,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-[#000000]/60 z-10",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                        lineNumber: 376,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex flex-col justify-center items-center text-white z-20 px-4",
                        "data-aos": "fade-up",
                        "data-aos-delay": "400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl sm:text-5xl lg:text-[80px] font-[400] leading-tight text-center",
                                children: bannerTitle.split(" ").slice(0, Math.ceil(bannerTitle.split(" ").length / 2)).join(" ")
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                lineNumber: 386,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl sm:text-5xl lg:text-[80px] font-[400] text-[#F3C76C] leading-tight text-center",
                                children: bannerTitle.split(" ").slice(Math.ceil(bannerTitle.split(" ").length / 2)).join(" ")
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                lineNumber: 393,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                        lineNumber: 381,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                lineNumber: 364,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full px-4 md:py-10 py-5 bg-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-9xl mx-auto grid grid-cols-12 gap-6 items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "col-span-12 md:col-span-8 md:col-start-3 text-center",
                        "data-aos": "fade-up",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-[28px] sm:text-[36px] lg:text-[50px] heading_text font-[400] mb-4",
                                children: banner_data.banner_section_short_description || "Heading"
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                lineNumber: 410,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "secondary_text mb-6 ff_poppins text-sm sm:text-base lg:text-lg",
                                children: banner_data.banner_section_description || "Description"
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                lineNumber: 414,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative w-full max-w-[1524px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded overflow-hidden mx-auto",
                                "data-aos": "fade-up",
                                "data-aos-delay": "300",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMAIN"]}${banner_data.banner_description_section_image}`,
                                    alt: "Project",
                                    fill: true,
                                    className: "object-cover",
                                    priority: true,
                                    sizes: "(max-width: 768px) 100vw, 50vw"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                    lineNumber: 423,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                lineNumber: 418,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                        lineNumber: 406,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                    lineNumber: 405,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                lineNumber: 404,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full my-5 px-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                    className: "border-t-2 border-[#DFDFDF]"
                }, void 0, false, {
                    fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                    lineNumber: 439,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                lineNumber: 438,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full px-4 sm:px-6 lg:px-8 lg:py-10 bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-12 items-center gap-4 mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "sm:col-span-6 text-3xl sm:text-5xl lg:text-[60px] heading_text text-center sm:text-left",
                                "data-aos": "fade-right",
                                children: "SERVICES"
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                lineNumber: 446,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "sm:col-span-5 ff_poppins main_text text-center sm:text-right text-sm sm:text-base lg:text-[16px] tracking-wide",
                                "data-aos": "fade-left",
                                children: "We Design Spaces That Inspire And Endure."
                            }, void 0, false, {
                                fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                lineNumber: 452,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                        lineNumber: 445,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12",
                        children: services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex flex-col 
          ${index === services.length - 1 && services.length % 2 !== 0 ? "md:col-span-2 md:items-center" : ""}
          ${index === 1 ? "md:items-end md:mt-10 mt-6" : "items-start"}
      `,
                                "data-aos": "fade-up",
                                "data-aos-delay": index * 200,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        onClick: ()=>handleManualRedirect(service.service_id),
                                        className: "w-full max-w-[550px] cursor-pointer",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "overflow-hidden group w-full relative aspect-[4/3] rounded-sm",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMAIN"]}${service.service_home_page_image}`,
                                                alt: service.service_title,
                                                fill: true,
                                                sizes: "(max-width: 768px) 100vw, 33vw",
                                                className: "w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                                lineNumber: 481,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                            lineNumber: 480,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                        lineNumber: 476,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 py-4 text-sm sm:text-base lg:text-[16px] ff_poppins main_text text-center sm:text-left",
                                        children: service.service_title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                        lineNumber: 490,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, service.service_id, true, {
                                fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                lineNumber: 462,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                        lineNumber: 460,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                lineNumber: 444,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full px-4 sm:px-6 lg:px-8 py-10 bg-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto text-center mb-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl sm:text-5xl lg:text-[60px] heading_text",
                            "data-aos": "fade-right",
                            children: "Projects"
                        }, void 0, false, {
                            fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                            lineNumber: 502,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                        lineNumber: 501,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12",
                        children: projects.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `flex flex-col 
          ${index === projects.length - 1 && projects.length % 2 !== 0 ? "md:col-span-2 md:items-center" : ""}
          ${index === 1 ? "md:items-end md:mt-10" : ""}
        `,
                                "data-aos": "fade-up",
                                "data-aos-delay": index * 200,
                                children: [
                                    index === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-4 py-4 text-base sm:text-lg main_text ff_poppins w-full max-w-[500px]",
                                        children: service.home_page_project_short_description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                        lineNumber: 526,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group w-full max-w-[500px] cursor-pointer",
                                        children: [
                                            index !== 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "my-4 w-full relative overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg main_text ff_poppins z-10 relative transition-all duration-500 ease-in-out",
                                                        children: service.home_page_project_title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                                        lineNumber: 534,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-end items-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/assets/images/arrow_icon.png",
                                                            alt: "arrow",
                                                            width: 34,
                                                            height: 34,
                                                            className: "transition-transform duration-500 ease-in-out group-hover:-translate-x-[150px] mr-10"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                                            lineNumber: 538,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                                        lineNumber: 537,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                                lineNumber: 533,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: `/${locale}/projects/${service.home_page_project_slug}`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative w-full overflow-hidden",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$utils$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DOMAIN"]}${service.home_page_project_image}`,
                                                            alt: service.home_page_project_image_alt_text,
                                                            width: 0,
                                                            height: 0,
                                                            sizes: "100vw",
                                                            className: "w-full h-auto object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                                            lineNumber: 553,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "absolute inset-0 bg-[#ebebebeb] flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-all duration-500",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex flex-col items-center justify-center space-y-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        src: "/assets/images/arrow_icon.png",
                                                                        alt: "arrow",
                                                                        width: 40,
                                                                        height: 40
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                                                        lineNumber: 563,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-black text-lg sm:text-xl text-center px-4 mt-4",
                                                                        children: [
                                                                            "(",
                                                                            service.home_page_project_title,
                                                                            ")"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                                                        lineNumber: 569,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                                                lineNumber: 562,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                                            lineNumber: 561,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                                    lineNumber: 552,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                                lineNumber: 549,
                                                columnNumber: 17
                                            }, this),
                                            index === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-4 w-full relative overflow-hidden",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg main_text ff_poppins z-10 relative transition-all duration-500 ease-in-out",
                                                        children: service.home_page_project_title
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                                        lineNumber: 579,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-end items-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            src: "/assets/images/arrow_icon.png",
                                                            alt: "arrow",
                                                            width: 34,
                                                            height: 34,
                                                            className: "transition-transform duration-500 ease-in-out group-hover:-translate-x-[150px] mr-10"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                                            lineNumber: 583,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                                        lineNumber: 582,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                                lineNumber: 578,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                        lineNumber: 531,
                                        columnNumber: 15
                                    }, this),
                                    index !== 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 py-4 text-base sm:text-lg main_text ff_poppins w-full max-w-[500px]",
                                        children: service.home_page_project_short_description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                        lineNumber: 596,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, service.home_page_project_title, true, {
                                fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                                lineNumber: 512,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                        lineNumber: 510,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[locale]/home/ClientHome.js",
                lineNumber: 500,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[locale]/home/ClientHome.js",
        lineNumber: 362,
        columnNumber: 5
    }, this);
}
_s(ClientHome, "rkKh1kRMPpT/uk4+GTWYvyiRs7c=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useParams"]
    ];
});
_c = ClientHome;
var _c;
__turbopack_context__.k.register(_c, "ClientHome");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_7109824d._.js.map