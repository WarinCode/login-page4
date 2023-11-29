import React, {
  JSX,
  useState,
  useEffect,
  MouseEvent,
  FormEvent,
  KeyboardEvent,
} from "react";
import Button from "./Button";
import InputField from "./InputField";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { AiOutlineLock, AiOutlineUnlock } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface UserData {
  email: string;
  password: string;
  time: number;
}

const Form = (): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);
  const [data, setData] = useState<UserData[]>([]);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  useEffect((): void => {
    console.log("login สำเร็จ");
    console.log(data);
    setIsSubmit(true);
  }, [data]);

  const getUser = (): UserData => {
    return {
      email: email,
      password: password,
      time: new Date().getTime(),
    };
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const user: UserData = getUser();

    if (data.some((item: UserData): boolean => item.email === user.email)) {
      toast.error("ไม่สามารถ login ได้!", {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      setData((prev: UserData[]): UserData[] => [...prev, user]);
    }
  };

  return (
    <>
      <form
        onSubmit={(
          e: FormEvent<HTMLFormElement> | KeyboardEvent<HTMLFormElement>
        ): void => handleSubmit(e)}
      >
        <header>Create your account</header>
        <span className="btn-group">
          <Button text="use google" icon={<FcGoogle className="btn-icon" />} />
          <Button text="use apple" icon={<FaApple className="btn-icon" />} />
        </span>
        <div className="lines">
          <div className="line"></div>
          <p>Or</p>
          <div className="line"></div>
        </div>
        <div className="input-group">
          <InputField
            type="email"
            labelName="Email:"
            placeholder="your email"
            state={email}
            setState={setEmail}
            isSubmit={isSubmit}
            setIsSubmit={setIsSubmit}
            icon={<MdAlternateEmail className="input-icon" />}
          />
          <InputField
            type={open ? "text" : "password"}
            labelName="Password:"
            placeholder="your password"
            state={password}
            setState={setPassword}
            isSubmit={isSubmit}
            setIsSubmit={setIsSubmit}
            icon={
              open ? (
                <AiOutlineUnlock
                  className="input-icon"
                  onClick={(e: MouseEvent<SVGAElement>): void => setOpen(!open)}
                />
              ) : (
                <AiOutlineLock
                  className="input-icon"
                  onClick={(e: MouseEvent<SVGAElement>): void => setOpen(!open)}
                />
              )
            }
          />
        </div>
        <button type="submit">Login</button>
        <span className="bottom">
          <a href="#" target="_blank">
            Reset Password
          </a>
          <a href="#" target="_blank">
            Already have an account?
          </a>
        </span>
      </form>
      <ToastContainer />
    </>
  );
};

export default Form;
