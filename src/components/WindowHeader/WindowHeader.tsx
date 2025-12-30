import "./WindowHeader.css";

interface Props {
  title: string;
  onClose: () => void;
}

const WindowHeader = (props: Props) => {
  return (
    <header>
      <p>
        <strong>{props.title}</strong>
      </p>
      <button onClick={props.onClose} />
    </header>
  );
};

export default WindowHeader;
