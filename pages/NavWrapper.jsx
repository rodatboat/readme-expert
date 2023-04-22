import React from "react";
import NavBar from "./NavBar"

export default function NavWrapper(props) {
    return (
        <div className="flex flex-col max-h-screen h-screen overflow-auto">
            <div className="flex-none min-h-16 h-16 md:min-h-12 md:h-12">
                <NavBar {...props} />
            </div>
            {props.children}
        </div>
    );
}
