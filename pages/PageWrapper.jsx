import React from "react";

export default function PageLayout({ children, pageContext }) {
    return (
        <div className="bg-white text-dark h-full w-full h-screen">
            <div className="max-w-full mx-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8 md:py-10 h-full">
                {children}
            </div>
        </div>
    );
}
