import "./EventButton.css";

type EventButtonType = {
  label: string;
  kind?: "primary" | "secondary";
  onClick: () => void;
};

function EventButton({ label, kind, onClick }: EventButtonType) {
  return (
    <button className={`btn btn--${kind}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default EventButton;
