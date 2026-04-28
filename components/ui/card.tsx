import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export const Card = ({ children, className = "" }: CardProps) => {
  return (
    <article
      className={`glass-panel rounded-2xl border border-stroke/80 p-6 transition-all duration-500 ease-out hover:scale-[1.03] hover:shadow-[0_26px_70px_rgba(0,0,0,0.35)] ${className}`.trim()}
    >
      {children}
    </article>
  );
};
