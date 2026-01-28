"use client";

import { useEffect, useState } from 'react';
import Heading from './Heading';
import Image from 'next/image';
import { submitContactForm } from '../../utils/axios';

const ContactForm = ({ image }) => {
    const [isClient, setIsClient] = useState(false);
    const [formData, setFormData] = useState({
        your_name: '',
        email_id: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        your_name: '',
        email_id: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const validateForm = () => {
        let isValid = true;
        const newErrors = {
            your_name: '',
            email_id: '',
            subject: '',
            message: ''
        };

        // Name validation
        if (!formData.your_name.trim()) {
            newErrors.your_name = 'Name is required';
            isValid = false;
        }

        // Email validation
        if (!formData.email_id.trim()) {
            newErrors.email_id = 'Email is required';
            isValid = false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email_id)) {
            newErrors.email_id = 'Please enter a valid email';
            isValid = false;
        }

        // Subject validation
        if (!formData.subject.trim()) {
            newErrors.subject = 'Subject is required';
            isValid = false;
        }

        // Message validation
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message should be at least 10 characters';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            await submitContactForm(formData);
            setSubmitStatus('success');
            setShowSuccessPopup(true);
            setFormData({
                your_name: '',
                email_id: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            setSubmitStatus('error');
            console.error('Submission error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isClient) {
        return (
            <div className="w-full px-4 py-16 bg-white">
                <div className="max-w-7xl mx-auto text-center">
                    <p>Loading contact form...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full mb-10 relative">
            {/* Success Popup */}
            {showSuccessPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
                    <div className="bg-white p-6 sm:p-8 rounded-lg max-w-md w-full mx-4 shadow-amber-600 shadow">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    className="w-8 h-8 text-green-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">Success!</h3>
                            <p className="text-gray-600 mb-6 text-sm sm:text-base">
                                Your message has been sent successfully.
                            </p>
                            <button
                                onClick={() => setShowSuccessPopup(false)}
                                className="bg-[#F3C76C] hover:bg-[#e2b84f] px-5 py-2 sm:px-6 sm:py-2 rounded-md text-black cursor-pointer"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Banner Image */}
            <div className="relative w-full my-8 sm:my-12" data-aos="fade-up">
                <Image
                    src={image}
                    alt="Banner"
                    width={1920}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority
                />
            </div>

            {/* Form */}
            <div className="max-w-7xl mx-auto text-center px-4 sm:px-6">
                <Heading title={'Connect With Us'} />

                {submitStatus === 'error' && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 text-sm sm:text-base">
                        There was an error submitting your message. Please try again.
                    </div>
                )}

                <form className="space-y-6 ff_fira mt-8 sm:mt-10" onSubmit={handleSubmit}>
                    {/* Row 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        <div>
                            <input
                                type="text"
                                name="your_name"
                                placeholder="Your Name"
                                value={formData.your_name}
                                onChange={handleChange}
                                className={`border-b ${errors.your_name ? 'border-red-500' : 'border-[#DDDDDD]'} outline-none py-2 px-1 w-full text-base sm:text-lg text-[#333] placeholder:text-[#888888]`}
                            />
                            {errors.your_name && <p className="text-red-500 text-xs sm:text-sm text-left mt-1">{errors.your_name}</p>}
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email_id"
                                placeholder="Email Address"
                                value={formData.email_id}
                                onChange={handleChange}
                                className={`border-b ${errors.email_id ? 'border-red-500' : 'border-[#DDDDDD]'} outline-none py-2 px-1 w-full text-base sm:text-lg text-[#333] placeholder:text-[#888888]`}
                            />
                            {errors.email_id && <p className="text-red-500 text-xs sm:text-sm text-left mt-1">{errors.email_id}</p>}
                        </div>
                    </div>

                    {/* Subject */}
                    <div>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            className={`border-b ${errors.subject ? 'border-red-500' : 'border-[#DDDDDD]'} outline-none py-2 px-1 w-full text-base sm:text-lg text-[#333] placeholder:text-[#888888]`}
                        />
                        {errors.subject && <p className="text-red-500 text-xs sm:text-sm text-left mt-1">{errors.subject}</p>}
                    </div>

                    {/* Message */}
                    <div>
                        <textarea
                            rows="4"
                            name="message"
                            placeholder="Type Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            className={`border-b ${errors.message ? 'border-red-500' : 'border-[#DDDDDD]'} outline-none py-2 px-1 w-full text-base sm:text-lg text-[#333] placeholder:text-[#888888] resize-none`}
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-xs sm:text-sm text-left mt-1">{errors.message}</p>}
                    </div>

                    {/* Submit Button */}
                    <div className="text-center pt-4">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`bg-[#F3C76C] hover:bg-[#e2b84f] cursor-pointer transition-colors px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-md text-black tracking-wide flex items-center gap-2 mx-auto ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? 'Sending...' : 'Contact Us'}
                            {!isSubmitting && (
                                <Image
                                    src="/assets/images/arrow_icon.png"
                                    alt="arrow"
                                    width={24}
                                    height={24}
                                    className="ml-3 sm:ml-5"
                                />
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default ContactForm;