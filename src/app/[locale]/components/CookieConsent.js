"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";

export default function CookieConsent() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const consent = Cookies.get("cookie_consent");
        if (!consent) {
            setShow(true);
            document.body.style.overflow = "hidden"; // disable scroll
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto"; // cleanup
        };
    }, []);

    const handleAccept = () => {
        Cookies.set("cookie_consent", "true", { expires: 365 });
        setShow(false);
        document.body.style.overflow = "auto"; // enable scroll
    };

    if (!show) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Background blur */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

            {/* Popup box */}
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md w-[90%] text-center z-10">
                <h2 className="text-2xl sm:text-3xl heading_text font-[400] mb-4">
                    🍪 Cookie Consent
                </h2>
                <p className="text-sm sm:text-base main_text ff_fira mb-6">
                    We use cookies to improve your experience. By continuing, you agree
                    to our use of cookies.
                </p>
                <button
                    onClick={handleAccept}
                    className="px-6 py-3 bg-[#F3C76C] text-black font-medium rounded-xl hover:opacity-90 transition"
                >
                    Accept
                </button>
            </div>
        </div>
    );
}
