import React from "react";

import { Accordion } from "@/components/ui/Accordion/Accordion";
import { AccordionItemType } from "@/types/accordionItem";
import { FrequentlyAskedQuestionType } from "@/types/frequentlyAskedQuestion";
import { frequentlyAskedQuestions } from "@/assets/frequentlyAskedQuestions";

const faqToAccordionItem = (faq: FrequentlyAskedQuestionType): AccordionItemType => ({
    title: faq.question,
    content: faq.answer,
});

export const FrequentlyAskedQuestions: React.FC = () => {
    const accordionItems: AccordionItemType[] = frequentlyAskedQuestions.map(faqToAccordionItem);

    return <Accordion items={accordionItems} />;
};
