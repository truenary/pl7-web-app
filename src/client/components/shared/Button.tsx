import React from "react";
// TODO: Move types to global "types.d.ts" file in data folder
interface ButtonProps {
  label: string;
  style: string;
  action?: () => void;
  type?: "submit" | "reset" | "button";
}

const Button: React.FC<ButtonProps> = ({ label, style, action, type }) => {
  return (
    <button className={style} onClick={action} type={type}>
      {label}
    </button>
  );
};

export default Button;
