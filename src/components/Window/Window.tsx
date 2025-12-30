import { useState, type ReactNode } from "react";
import WindowHeader from "../../components/WindowHeader/WindowHeader";
import { useNavigate } from "react-router-dom";
import "./Window.css";

interface Props {
  title: string;
  mode?: "light" | "dark";
  children?: ReactNode;
}

const Window = ({ children, title, mode = "light" }: Props) => {
  const [isOpen, setOpen] = useState(true);
  const navigate = useNavigate();

  function handleAnimationEnd() {
    if (!isOpen) navigate("/");
  }

  function onClose() {
    setOpen(false);
  }

  return (
    <div
      className={`window ${isOpen ? "" : "scale-down-exit"} window-${mode}`}
      onAnimationEnd={handleAnimationEnd}
    >
      <WindowHeader onClose={onClose} title={title} />
      {children}
    </div>
  );
};

export default Window;
