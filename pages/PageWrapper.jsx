import React from "react";

export default function PageWrapper({ children, pageContext }) {
    return (
        <div className="bg-white text-dark w-full max-h-screen h-screen">
            <div className="mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 h-full">
                {children}
            </div>
        </div>
    );
}
