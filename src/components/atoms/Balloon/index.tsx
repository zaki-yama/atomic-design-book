import React, { ReactHTMLElement, HTMLAttributes } from "react";
import styles from "./styles.css";

type BalloonProps = {
  className?: string;
};

const Balloon: React.FC<BalloonProps & HTMLAttributes<HTMLSpanElement>> = ({
  children,
  className,
  ...props
}) => (
  <span className={[styles.balloon, className].join(" ")} {...props}>
    {children}
  </span>
);

export default Balloon;
