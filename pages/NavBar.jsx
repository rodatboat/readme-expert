import React, { useEffect } from "react";

export default function NavBar({preview, togglePreview}) {
    const OpenIcon = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" onClick={togglePreview} className="icon icon-tabler icon-tabler-focus hover:bg-primary-light rounded-full p-1 border border-2 border-primary-light" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <circle cx="12" cy="12" r=".5" fill="currentColor" />
    <circle cx="12" cy="12" r="9" />
            </svg>
        );
    }
    useEffect(()=>{},[])
    return (
        <nav className="h-full w-full">
            <div className="sticky top-0 flex items-center justify-center h-full p-2 bg-primary">
                <div className="md:hidden"><OpenIcon /></div>
            </div>
        </nav>
    );
}
