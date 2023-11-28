import React, {
  JSX,
  FC,
  ReactNode,
  ChangeEvent,
  Dispatch,
  SetStateAction,
} from "react";

interface InputProps {
  labelName: string;
  placeholder: string;
  icon: ReactNode;
  type: "email" | "password" | "text";
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}

const InputField: FC<InputProps> = ({
  labelName,
  placeholder,
  icon,
  type,
  state,
  setState,
}): JSX.Element => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setState(e.target.value);
  };

  return (
    <>
      <label htmlFor={labelName}>{labelName}</label>
      <span>
        <input
          type={type}
          placeholder={placeholder}
          id={labelName}
          onChange={(e: ChangeEvent<HTMLInputElement>): void => handleChange(e)}
          autoComplete="false"
          autoSave="false"
          autoCorrect="false"
          spellCheck={false}
          maxLength={30}
          required
        />
        {icon}
      </span>
    </>
  );
};

export default InputField;
