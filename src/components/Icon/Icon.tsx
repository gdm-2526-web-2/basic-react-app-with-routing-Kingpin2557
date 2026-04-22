import React from "react";

type IconProps = {
  children: React.ReactElement;
  className?: string;
  size: "small" | "medium" | "large";
};

const Icon = ({ children, className, size }: IconProps) => {
  return (
    <span className={`icon icon--${size} ${className}`} aria-hidden="true">
      {children}
    </span>
  );
};

export default Icon;
