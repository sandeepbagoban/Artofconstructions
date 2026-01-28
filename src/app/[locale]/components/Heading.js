const Heading = ({ title, description }) => {
    return (
        <div className="text-center px-4" data-aos="fade-up">
            {/* Title with lines */}
            <div className="flex items-center justify-center gap-4 sm:gap-8 lg:gap-10 mb-3 sm:mb-4">
                <div className="h-[2px] w-6 sm:w-8 lg:w-10 bg-[#004d40]" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-medium italic heading_text tracking-wider">
                    {title}
                </h2>
                <div className="h-[2px] w-6 sm:w-8 lg:w-10 bg-[#004d40]" />
            </div>

            {/* Description */}
            {description && (
                <div className="flex justify-center">
                    <p className="text-sm sm:text-base md:text-lg lg:text-[16px] main_text ff_fira w-full sm:w-[80%] md:w-[70%] lg:w-[60%] capitalize">
                        {description}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Heading;
