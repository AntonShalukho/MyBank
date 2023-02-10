import React from "react";

import "./LoanSectionStyles.css";

interface LoanSectionProps {
  title: string;
  apr: string;
  className: "loan-product-small-card" | "loan-product-big-card";
  children: React.ReactNode;
}

export const LoanSection = ({
  title,
  apr,
  className,
  children,
}: LoanSectionProps) => (
  <section className={`loan-section-wrapper ${className}`}>
    <div className="loan-section-title-wrapper">
      <h4 className="loan-section-title">{title} </h4>
      <h4 className="loan-section-apr">{apr}%</h4>
    </div>

    {children}
  </section>
);
