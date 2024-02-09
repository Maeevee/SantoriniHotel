import { useState } from "react";
import DatePicker from "react-datepicker";

export const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePicker selected={startDate} className="text-black" dateFormat="MMMM dd" onChange={(date: Date)  => setStartDate(date)} />
  );
};