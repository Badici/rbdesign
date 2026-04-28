import Link from "next/link";
import { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
};

export const ButtonLink = ({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) => {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-500 ease-out will-change-transform hover:scale-[1.03]";
  const theme =
    variant === "primary"
      ? "bg-accent text-white shadow-[0_12px_30px_rgba(139,92,246,0.35)] hover:bg-accent-strong"
      : "border border-stroke bg-transparent text-foreground hover:border-accent hover:bg-surface-soft";

  return (
    <Link href={href} className={`${base} ${theme} ${className}`.trim()}>
      {children}
    </Link>
  );
};
