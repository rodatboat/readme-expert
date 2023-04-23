import React from "react";
import NavBar from "./NavBar"

export default function NavWrapper(props) {
    return (
        <div className="flex flex-col max-h-screen h-screen max-w-screen w-screen overflow-hidden">
            <div className="flex-none min-h-16 h-16 md:min-h-12 md:h-12">
                <NavBar {...props} />
            </div>
            <div className="flex flex-initial mx-auto px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-6 overflow-hidden">
            {props.children}
            </div>
        </div>
    );
}