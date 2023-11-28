import React, { FC , JSX , ReactNode } from "react";

interface ButtonProps {
  text: string;
  icon: ReactNode;
}

const Button:FC<ButtonProps> = ({ text , icon}):JSX.Element => {
  return (
    <>
      <button type="button">
        {icon}
        <h3>{text}</h3>
      </button>
    </>
  );
};

export default Button;
