import React from "react";
import styles from "./styles.css";
import { TrashCanIcon } from "../../atoms/Icon/index";
import Balloon from "../../atoms/Balloon/index";

type DeleteButtonProps = {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const DeleteButton: React.FC<DeleteButtonProps> = ({
  className,
  onClick,
  ...props
}) => (
  <span className={[styles.root, className].join(" ")} {...props}>
    <TrashCanIcon onClick={onClick} />
    <Balloon>削除する</Balloon>
  </span>
);

export default DeleteButton;
