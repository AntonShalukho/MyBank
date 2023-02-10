import React from "react";

import "./PageSectionStyles.css";

interface PageSectionProps {
  title: string | JSX.Element;
  className:
    | "cards-section"
    | "history-section"
    | "exchange-rates-section"
    | "featured-services-section"
    | "bot-section"
    | "loan-product-small-card"
    | "loan-product-big-card";
  children: React.ReactNode;
  titleClassName?: string;
}

export const PageSection = ({
  title,
  className,
  children,
  titleClassName,
  ...props
}: PageSectionProps) => (
  <section className={`page-section-wrapper ${className}`} {...props}>
    <h2 className={`page-section-title ${titleClassName}`}>{title}</h2>
    {children}
  </section>
);
