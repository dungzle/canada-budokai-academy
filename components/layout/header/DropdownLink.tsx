import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface DropdownLinkProps {
  title: string;
  items: { label: string; id: string; href?: string }[];
  scrolled: boolean;
  onClick: (id: string) => void;
}

export default function DropdownLink({
  title,
  items,
  scrolled,
  onClick,
}: DropdownLinkProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center gap-1 uppercase transition-colors text-white hover:text-gold-600">
        {title}{" "}
        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`absolute left-0 top-full pt-4 transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"}`}
      >
        <div className="bg-budokai-dark border border-gold-600/20 shadow-2xl rounded-lg py-4 min-w-60">
          {items.map((item) =>
            item.href ? (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block w-full text-left px-6 py-2.5 text-[10px] font-bold tracking-[0.2em] text-stone-300 hover:text-gold-600 hover:bg-white/5 transition-all uppercase"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.id}
                onClick={() => {
                  onClick(item.id);
                  setIsOpen(false);
                }}
                className="w-full text-left px-6 py-2.5 text-[10px] font-bold tracking-[0.2em] text-stone-300 hover:text-gold-600 hover:bg-white/5 transition-all uppercase"
              >
                {item.label}
              </button>
            ),
          )}
        </div>
      </div>
    </div>
  );
}
