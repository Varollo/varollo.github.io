import "./DateTime.css";

function DateTime() {
  const now = new Date();

  const date = now.toLocaleDateString(undefined, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const time = now.toLocaleTimeString(undefined, {
    hour: "2-digit",
    minute: "2-digit",
  });

  const dateTime = {
    date: date,
    time: time,
  };

  return (
    <div className="date-time">
      <p>{dateTime.time}</p>
      <p>{dateTime.date}</p>
    </div>
  );
}

export default DateTime;
