import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";

interface ActionButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "gold" | "dark";
  target?: "_self" | "_blank" | "_parent" | "_top";
  rel?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const commonClasses =
  "inline-flex min-h-11 items-center justify-center rounded-full px-7 py-3 text-sm font-semibold tracking-wide leading-none whitespace-nowrap transition-colors transition-shadow duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)] active:scale-95";

const variantClasses = {
  gold: "border border-gold-600 bg-gold-500 text-black hover:bg-gold-400 hover:shadow-[0_8px_20px_rgba(0,0,0,0.12)] focus-visible:ring-gold-500/60",
  dark: "border border-gold-500/35 bg-budokai-dark text-gold-500 hover:bg-budokai-dark/90 hover:border-gold-500/55 hover:text-gold-400 shadow-md shadow-budokai-dark/15 focus-visible:ring-gold-500/60",
} as const;

export default function ActionButton({
  href,
  children,
  className = "",
  variant = "gold",
  target,
  rel,
  onClick,
}: ActionButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      className={`${commonClasses} ${variantClasses[variant]} ${className}`.trim()}
    >
      {children}
    </Link>
  );
}
