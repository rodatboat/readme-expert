import React, { useEffect } from "react";
import imgUrl from './logo-no-background.svg'

export default function NavBar({ preview = null, togglePreview = () => { }, downloadFile = () => { } }) {
    const OpenIcon = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" onClick={togglePreview} className="icon icon-tabler icon-tabler-focus transition-all hover:bg-primary-light rounded-full p-1 border border-2 border-primary-light" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r=".5" fill="currentColor" />
                <circle cx="12" cy="12" r="9" />
            </svg>
        );
    }

    const CloseIcon = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" onClick={togglePreview} className="icon icon-tabler icon-tabler-target transition-all hover:bg-primary-light rounded-full p-1 border border-2 border-primary-light" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="12" r="1" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="12" cy="12" r="9" />
            </svg>
        );
    }

    const EditorIcon = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tools transition-all hover:bg-primary-light rounded-full p-1 border border-2 border-primary-light" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21h4l13 -13a1.5 1.5 0 0 0 -4 -4l-13 13v4" />
                <line x1="14.5" y1="5.5" x2="18.5" y2="9.5" />
                <polyline points="12 8 7 3 3 7 8 12" />
                <line x1="7" y1="8" x2="5.5" y2="9.5" />
                <polyline points="16 12 21 17 17 21 12 16" />
                <line x1="16" y1="17" x2="14.5" y2="18.5" />
            </svg>
        );
    }

    const SnippetIcon = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code transition-all hover:bg-primary-light rounded-full p-1 border border-2 border-primary-light" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="7 8 3 12 7 16" />
                <polyline points="17 8 21 12 17 16" />
                <line x1="14" y1="4" x2="10" y2="20" />
            </svg>
        );
    }

    const DLIcon = () => {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" onClick={downloadFile} className="icon icon-tabler icon-tabler-download transition-all hover:bg-primary-light rounded-full p-1 border border-2 border-primary-light" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#fff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                <polyline points="7 11 12 16 17 11" />
                <line x1="12" y1="4" x2="12" y2="16" />
            </svg>
        );
    }
    useEffect(() => {
        console.log(window.location)
    }, [])
    return (
        <nav className="h-full w-full">
            <div className="flex flex-row sticky top-0 items-center justify-between h-full p-2 bg-primary">
                <div className="flex items-center">
                    <a href="/"><img src={imgUrl} className="max-h-24" width="auto" height="96" alt="readme.expert logo" /></a>
                </div>
                <div className="flex flex-row gap-2">
                    <div className={`${window.location.href.endsWith("/e") ? "block" : "hidden"} md:hidden`}>
                        {preview ? <OpenIcon /> : <CloseIcon />}
                    </div>
                    <div className="">
                        {window ? window.location.href.endsWith("/e") ? <a href="/s"><SnippetIcon /></a> : <a href="/e"><EditorIcon /></a> : null}
                    </div>
                    <div className="">
                        <DLIcon />
                    </div>
                </div>
            </div>
        </nav >
    );
}
