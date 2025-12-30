import { useState, type ReactNode } from "react";
import WindowHeader from "../../components/WindowHeader/WindowHeader";
import { useNavigate } from "react-router-dom";
import "./Window.css";

interface Props {
  title: string;
  children?: ReactNode;
}

const Window = ({children, title}: Props) => {
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
      className={isOpen ? "window" : "window scale-down-exit"}
      onAnimationEnd={handleAnimationEnd}
    >
      <WindowHeader onClose={onClose} title={title} />
      {children}
    </div>
  );
};

export default Window;
