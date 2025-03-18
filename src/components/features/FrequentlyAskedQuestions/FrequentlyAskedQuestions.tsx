import React from "react";

import { Accordion } from "../../ui/Accordion/Accordion";
import { AccordionItemType } from "@/src/types/accordionItem";
import { FrequentlyAskedQuestionType } from "@/src/types/frequentlyAskedQuestion";
import { frequentlyAskedQuestions } from "@/src/data/frequentlyAskedQuestions";


const faqToAccordionItem = (faq: FrequentlyAskedQuestionType): AccordionItemType => ({
    title: faq.question,
    content: faq.answer,
})


export const FrequentlyAskedQuestions: React.FC = () => {
    const accordionItems: AccordionItemType[] = frequentlyAskedQuestions.map(faqToAccordionItem)  

    return (
        <Accordion items={accordionItems} />
    )
}