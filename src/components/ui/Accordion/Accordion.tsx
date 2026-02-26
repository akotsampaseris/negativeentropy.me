"use client";
import React, { useState } from "react";
import { AccordionItemType } from "@/types/accordionItem";

interface AccordionProps {
    items: AccordionItemType[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-0">
            {items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                    <div key={index} className="group">
                        {/* Trigger */}
                        <button
                            type="button"
                            onClick={() => toggle(index)}
                            aria-expanded={isOpen}
                            className="w-full flex items-center justify-between gap-4 py-4 border-b text-left transition-colors duration-200"
                            style={{ borderColor: isOpen ? "#4ade8033" : "#ffffff0a" }}>
                            <div className="flex items-center gap-2">
                                {item.icon && <item.icon className="text-xs flex-shrink-0" style={{ color: "#4ade8066" }} />}
                                <span className="text-sm font-mono tracking-wide transition-colors duration-200" style={{ color: isOpen ? "#4ade80" : "#e5e7eb" }}>
                                    {item.title}
                                </span>
                            </div>

                            {/* Arrow */}
                            <span
                                className="flex-shrink-0 text-xs transition-all duration-300"
                                style={{
                                    color: "#4ade8055",
                                    transform: isOpen ? "rotate(90deg)" : "none",
                                }}>
                                ▶
                            </span>
                        </button>

                        {/* Body */}
                        <div className="overflow-hidden transition-all duration-300" style={{ maxHeight: isOpen ? "500px" : "0px" }}>
                            <div className="py-4 border-b" style={{ borderColor: "#4ade8011" }}>
                                <div
                                    className="text-sm leading-relaxed text-gray-400 pl-5 border-l"
                                    style={{ borderColor: "#4ade8033" }}
                                    dangerouslySetInnerHTML={{ __html: item.content }}
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
