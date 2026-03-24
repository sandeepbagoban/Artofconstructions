import React from "react";
import ContactForm from "../components/ContactForm";
import { aboutPageData } from "../../utils/axios";
import { DOMAIN } from "@/app/utils/api";

export default async function Page({ params }) {
  const { locale } = await params;

  // Fetching About page data to get the specific footer image
  const res = await aboutPageData(locale);
  const data = res?.data || {};

  // Safely extract the image path
  const footerImage = data?.approach_details?.approach_section_footer_img;

  // Construct the full URL only if the image path exists
  const finalImage = footerImage ? `${DOMAIN}${footerImage}` : null;

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto" data-aos="fade-up">
        {/* Pass finalImage. If it's null, the Form safety check handles it */}
        <ContactForm image={finalImage} locale={locale} />
      </div>
    </div>
  );
}
