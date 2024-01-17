import React from "react";
// TODO: Move types to global "types.d.ts" file in data folder
interface ButtonProps {
  label: string;
  style: string;
  action?: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, style, action }) => {
  return <button className={style} onClick={action}>{label}</button>;
};

export default Button;
