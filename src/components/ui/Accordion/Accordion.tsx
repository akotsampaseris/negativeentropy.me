"use client";

import React from "react";

import styles from './Accordion.module.css'
import { AccordionItemType } from "@/src/types/accordionItem";

interface AccordionProps {
  items: AccordionItemType[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {

  const toggleAccordionItem = (e: React.SyntheticEvent<EventTarget>) => {
    if (!(e.target instanceof HTMLButtonElement)){
        return ;
    }
    
    const accordionItemIndex = e.target.dataset['accordionIndex']
    const accordionItemTitle = document.getElementById(`#accordion-title-${accordionItemIndex}`)
    const accordionItemButtonIcon = document.getElementById(`#accordion-button-icon-${accordionItemIndex}`) 
    const accordionItemBody = document.getElementById(`#accordion-content-${accordionItemIndex}`)

    if (accordionItemTitle?.classList.contains(styles.active)){
        accordionItemTitle?.classList.remove(styles.active);
        accordionItemButtonIcon?.classList.add('rotate-180');
        accordionItemBody?.classList.add('hidden');
    } else {
        accordionItemTitle?.classList.add(styles.active);
        accordionItemButtonIcon?.classList.remove('rotate-180');
        accordionItemBody?.classList.remove('hidden');
    }
  };

  return (
    <div id="accordion-flush" data-accordion="collapse">
      {items.map((item, index) => (
        <div key={`accordion-item-${index}`}>
            <button
                type="button"
                onClick={toggleAccordionItem}
                id={`#accordion-title-${index}`}
                className="w-full py-5 rtl:text-right border-b border-gray-700"
                data-accordion-index={index}
                aria-expanded="true"
                aria-controls={`#accordion-content-${index}`}
            >
              <div className="flex items-center justify-between gap-4 pointer-events-none">
                <div className="flex gap-2">
                {item.icon ? <item.icon /> : ""}
                <span>{item.title}</span>
                </div>
                <svg
                id={`#accordion-button-icon-${index}`}
                data-accordion-icon
                className="w-3 h-3 rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
                >
                <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5 5 1 1 5"
                />
                </svg>
              </div>
            </button>
          <div
            id={`#accordion-content-${index}`}
            className="hidden"
            aria-labelledby={`#accordion-title-${index}`}
          >
            <div className="p-6 border-b border-gray-700 bg-[#2223]">
              <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
