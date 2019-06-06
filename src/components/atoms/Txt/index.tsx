import React, { ReactHTML } from "react";
import styles from "./styles.css";

type Props = {
  tag: keyof ReactHTML;
  size: string;
  className: string;
  [tag: string]: any;
};

// FIXME Bad types
const txtFactory: (role: any) => any = role => ({
  tag: Tag = "p",
  size = "m",
  className,
  ...props
}) => (
  <Tag
    className={[styles[role], styles[size], className].join(" ")}
    {...props}
  />
);

const Txt = txtFactory("default");
export default Txt;

export const InfoTxt = txtFactory("info");
export const WarningTxt = txtFactory("warning");
