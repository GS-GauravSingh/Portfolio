import React, { useEffect, useRef } from "react";
import "../css/customCursor.css";

function CustomCursor() {
    const cursorDotRef = useRef(null);
    const cursorOutlineRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (event) => {
            const clientX = event.clientX;
            const clientY = event.clientY;

            if (cursorDotRef.current) {
                cursorDotRef.current.style.left = `${clientX}px`;
                cursorDotRef.current.style.top = `${clientY}px`;
            }

            if (cursorOutlineRef.current) {
                cursorOutlineRef.current.style.left = `${clientX}px`;
                cursorOutlineRef.current.style.top = `${clientY}px`;

                cursorOutlineRef.current.animate({
                    left: `${clientX}px`,
                    top: `${clientY}px`
                }, {
                    duration: 500, fill: "forwards"
                });
            }
        };
        window.addEventListener("mousemove", handleMouseMove);

        // Cleanup function to remove the event listner.
        // Executes when the components unmount.
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <>
            <div id="cursor-dot" ref={cursorDotRef}></div>
            <div id="cursor-outline" ref={cursorOutlineRef}></div>
        </>
    );
}

export default CustomCursor;
