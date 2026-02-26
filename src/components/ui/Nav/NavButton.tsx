"use client";
import React from "react";
import { MouseEventHandler } from "react";

interface NavButtonProps {
    onClickAction: MouseEventHandler;
    isOpen?: boolean;
}

const NavButton: React.FC<NavButtonProps> = ({ onClickAction, isOpen }) => {
    return (
        <button
            onClick={onClickAction}
            type="button"
            aria-controls="navbar"
            aria-expanded={isOpen}
            className="group relative flex flex-col justify-center items-center w-8 h-8 gap-1.5 transition-all duration-200">
            <span className="sr-only">Toggle menu</span>
            {/* Three lines that animate to X when open */}
            <span
                className="block h-px w-5 transition-all duration-300 origin-center"
                style={{
                    backgroundColor: isOpen ? "#4ade80" : "#4ade8099",
                    transform: isOpen ? "translateY(4px) rotate(45deg)" : "none",
                }}
            />
            <span
                className="block h-px transition-all duration-300"
                style={{
                    backgroundColor: isOpen ? "#4ade80" : "#4ade8099",
                    width: isOpen ? "0px" : "14px",
                    opacity: isOpen ? 0 : 1,
                }}
            />
            <span
                className="block h-px w-5 transition-all duration-300 origin-center"
                style={{
                    backgroundColor: isOpen ? "#4ade80" : "#4ade8099",
                    transform: isOpen ? "translateY(-4px) rotate(-45deg)" : "none",
                }}
            />
        </button>
    );
};

export default NavButton;
