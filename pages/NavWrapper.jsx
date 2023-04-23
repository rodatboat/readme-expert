import React from "react";
import NavBar from "./NavBar"

export default function NavWrapper(props) {
    return (
        <div className="flex flex-col max-h-screen h-screen max-w-screen w-screen overflow-auto">
                <NavBar {...props} />
            </div>
            {props.children}
        </div>
    );
}
