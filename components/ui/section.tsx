import { ReactNode } from "react";

import { Container } from "@/components/layout/container";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
};

export const Section = ({
  children,
  className = "",
  containerClassName = "",
  id,
}: SectionProps) => {
  return (
    <section id={id} className={`section-shell ${className}`.trim()}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
};
