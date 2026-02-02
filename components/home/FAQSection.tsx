"use client";

import { useState } from "react";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQItemProps {
  item: FAQItem;
}

const FAQ_DATA: FAQItem[] = [
  {
    id: "experience",
    question: "Do I need previous experience?",
    answer:
      "No, our classes are designed for all skill levels. We have dedicated programs for absolute beginners where we focus on fundamental movements and basic etiquette.",
  },
  {
    id: "age",
    question: "What is the minimum age for children?",
    answer:
      "We generally accept children starting from age 6. Our youth division focuses on coordination, discipline, and respect in a safe, fun environment.",
  },
  {
    id: "clothing",
    question: "What should I wear for my first class?",
    answer:
      "For your trial class, comfortable athletic clothing (like a t-shirt and track pants) is perfect. We train barefoot on tatami mats.",
  },
  {
    id: "frequency",
    question: "How often should I train?",
    answer:
      "Consistency is key. We recommend attending at least two classes per week to see steady progress in your physical and mental development.",
  },
  {
    id: "grading",
    question: "Are there grading and exams?",
    answer:
      "Yes, we follow a traditional kyu/dan ranking system. Grading takes place periodically and is based on a combination of technical proficiency, spirit, and attendance.",
  },
];

function FAQItemComponent({ item }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <div className="border-b border-stone-200 last:border-0">
      <button
        onClick={toggleOpen}
        className="w-full py-6 flex justify-between items-center text-left hover:text-gold-600 transition-colors group"
        aria-expanded={isOpen}
      >
        <span className="font-serif text-lg md:text-xl font-medium">
          {item.question}
        </span>
        {isOpen ? (
          <Minus size={20} className="text-gold-600" />
        ) : (
          <Plus
            size={20}
            className="text-stone-400 group-hover:text-gold-600 transition-colors"
          />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-stone-600 leading-relaxed text-sm md:text-base">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-[#F9F8F4]">
      <div className="container mx-auto px-6 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 text-xs font-bold tracking-widest text-gold-600 uppercase">
            Questions
          </div>
          <h2 className="font-serif text-4xl md:text-6xl text-budokai-dark mb-6 italic">
            Common Inquiries
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQ_DATA.map((item) => (
            <FAQItemComponent key={item.id} item={item} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link
            href="/faq"
            className="inline-flex items-center justify-center px-10 py-4 bg-budokai-dark text-gold-600 rounded-full hover:bg-gold-600 hover:text-white transition-all font-bold tracking-widest text-sm uppercase border border-gold-600/30 shadow-xl shadow-budokai-dark/10"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
