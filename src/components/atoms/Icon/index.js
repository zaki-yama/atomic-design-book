import React from "react";
import styles from "./styles.css";
import { defaultProps } from "recompose";

export const TrashCanIconPresenter = ({
  height = 20,
  width = 20,
  ...props
}) => (
  <img
    src="/icons/trash-can.svg"
    alt=""
    height={height}
    width={width}
    {...props}
  />
);

export const IconContainer = ({
  presenter,
  onClick,
  className = "",
  ...props
}) => {
  if (onClick) className += ` ${styles.clickable}`;
  return presenter({ onClick, className, ...props });
};

export const TrashCanIcon = props => {
  return (
    <IconContainer
      presenter={presenterProps => (
        <TrashCanIconPresenter {...presenterProps} />
      )}
      {...props}
    />
  );
};
