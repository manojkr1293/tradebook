import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const DatePickerUi = ({ id, value, onChange, error }) => {
  
  const [startDate, setStartDate] = useState(null);
  const getYear = (date) => date.getFullYear();
  const getMonth = (date) => date.getMonth();
  const currentYear = getYear(new Date());
  const years = range(1990, currentYear + 1, 1);
  const handleDateChange = (date) => {
    onChange({ target: { id, value: date } });
  };
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <>
      <DatePicker
        dateFormat="dd-MM-yyyy"
        showIcon
        toggleCalendarOnIconClick
        placeholderText="DD-MM-YYYY"
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div className="m-2 flex justify-center">
            <button
              onClick={decreaseMonth}
              disabled={prevMonthButtonDisabled}
              className="text-xl bg-gray-700 text-gray-100 px-2"
            >
              {"<"}
            </button>
            <select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
              className="border-2 border-gray-700 px-2 py-1"
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
              className="border-2 border-gray-700 px-2 py-1"
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button
              onClick={increaseMonth}
              disabled={nextMonthButtonDisabled}
              className="text-xl bg-gray-700 text-gray-100 px-2"
            >
              {">"}
            </button>
          </div>
        )}
        selected={value}
        value={value}
        onChange={handleDateChange}
        icon={
          <span className="absolute inset-y-2 left-0  items-center pl-3 mr-3 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 48 48"
            >
              <mask id="ipSApplication0">
                <g
                  fill="none"
                  stroke="#fff"
                  strokeLinejoin="round"
                  strokeWidth="4"
                >
                  <path strokeLinecap="round" d="M40.04 22v20h-32V22"></path>
                  <path
                    fill="#fff"
                    d="M5.842 13.777C4.312 17.737 7.263 22 11.51 22c3.314 0 6.019-2.686 6.019-6a6 6 0 0 0 6 6h1.018a6 6 0 0 0 6-6c0 3.314 2.706 6 6.02 6c4.248 0 7.201-4.265 5.67-8.228L39.234 6H8.845l-3.003 7.777Z"
                  ></path>
                </g>
              </mask>
              <path
                fill="currentColor"
                d="M0 0h48v48H0z"
                mask="url(#ipSApplication0)"
              ></path>
            </svg>
          </span>
        }
        className="placeholder:italic w-full placeholder:text-slate-400 block bg-white border border-slate-300 rounded-md mt-2 py-2 shadow-sm focus:outline-none focus:border-orange-600 focus:ring-orange-600 focus:ring-1 sm:text-sm"
      />
      {error && <span className="text-red-600 font-medium">{error}</span>}
    </>
  );
};

function range(start, end, step = 1) {
  const length = Math.floor((end - start) / step) + 1;
  return Array.from({ length }, (_, index) => start + index * step);
}

export default DatePickerUi;
