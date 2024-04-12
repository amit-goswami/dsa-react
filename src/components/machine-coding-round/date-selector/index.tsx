import React from "react";

const day = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const time = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
];

export const DateSelector = () => {
  const [selectedDay, setSelectedDay] = React.useState<string | null>(null);
  const [selectedTime, setSelectedTime] = React.useState<number | null>(null);
  const [selectedSlot, setSelectedSlot] = React.useState([
    {
      day: "Monday",
      time: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    },
  ]);

  const handleDayChange = (e: { target: { value: string } }) => {
    setSelectedTime(null);
    const day = e.target.value;
    const dayInSelectedSlot = selectedSlot.find((slot) => slot.day === day);
    if (dayInSelectedSlot) return alert("Day already selected");
    setSelectedSlot([...selectedSlot, { day, time: [] }]);
    setSelectedDay(day);
  };

  const handleTimeChange = (e: { target: { value: string } }) => {
    const time = parseInt(e.target.value);
    const timeInSelectedSlot = selectedSlot.find(
      (slot) => slot.day === selectedDay
    );
    if (!timeInSelectedSlot) return;
    if (timeInSelectedSlot.time.includes(time))
      return alert("Time already selected");
    timeInSelectedSlot.time.push(time);
    setSelectedSlot([...selectedSlot]);
    setSelectedTime(time);
  };

  const handleDelete = (day: string, time: number) => {
    const dayInSelectedSlot = selectedSlot.find((slot) => slot.day === day);
    if (!dayInSelectedSlot) return;
    dayInSelectedSlot.time = dayInSelectedSlot.time.filter((t) => t !== time);
    setSelectedSlot([...selectedSlot]);
  };

  return (
    <div>
      <div className="flex gap">
        <select
          onChange={(e) => handleDayChange(e)}
          value={selectedDay || "Selec Day"}
        >
          {day.map((day) => (
            <option key={day}>{day}</option>
          ))}
        </select>
        <select
          onChange={(e) => handleTimeChange(e)}
          value={selectedTime || "Select Time"}
        >
          {time.map((time) => (
            <option key={time}>
              {time} : {time + 1}
            </option>
          ))}
        </select>
      </div>
      {selectedSlot.map((slot) => (
        <div key={slot.day}>
          <h1>{slot.day}</h1>
          <p>
            {slot.time.map((time) => {
              return (
                <div>
                  {`${time} : ${time + 1}`}{" "}
                  <button
                    type="button"
                    onClick={() => handleDelete(slot.day, time)}
                  >
                    Delete
                  </button>
                </div>
              );
            })}
          </p>
        </div>
      ))}
    </div>
  );
};
