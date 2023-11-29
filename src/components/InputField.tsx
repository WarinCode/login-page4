import React, {
  JSX,
  FC,
  useRef,
  useEffect,
  ReactNode,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  MutableRefObject
} from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface InputProps {
  labelName: string;
  placeholder: string;
  icon: ReactNode;
  type: "email" | "password" | "text";
  state: string;
  setState: Dispatch<SetStateAction<string>>;
  isSubmit: boolean;
  setIsSubmit: Dispatch<SetStateAction<boolean>>;
}

const InputField: FC<InputProps> = ({
  labelName,
  placeholder,
  icon,
  type,
  state,
  setState,
  isSubmit,
  setIsSubmit,
}): JSX.Element => {
  const clear = useRef() as MutableRefObject<HTMLInputElement>;
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setState(e.target.value);
  };

  useEffect((): void => {
    if (isSubmit) {
      clear.current.value = "";
      setIsSubmit(false);
      toast.success("login สำเร็จ", {
        position: "top-center",
        autoClose: 1800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }, [isSubmit]);

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
          minLength={8}
          ref={clear}
          required
        />
        {icon}
      </span>
    </>
  );
};

export default InputField;
