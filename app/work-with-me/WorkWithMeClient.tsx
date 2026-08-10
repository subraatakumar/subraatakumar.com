"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { workWithMeContent } from "@/content/work-with-me";
import styles from "./work-with-me.module.css";

export default function WorkWithMeClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className={styles.faqList}>
      {workWithMeContent.faqs.map((faq, index) => {
        const open = openFaq === index;
        return (
          <div className={styles.faqItem} key={faq.question}>
            <button
              type="button"
              className={styles.faqButton}
              aria-expanded={open}
              aria-controls={`faq-answer-${index}`}
              onClick={() => setOpenFaq(open ? null : index)}
            >
              <span>{faq.question}</span>
              <ChevronDown aria-hidden="true" className={open ? styles.faqIconOpen : styles.faqIcon} size={20} />
            </button>
            <div id={`faq-answer-${index}`} className={open ? styles.faqAnswerOpen : styles.faqAnswer}>
              <p>{faq.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
