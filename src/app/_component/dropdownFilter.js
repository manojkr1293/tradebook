import { useEffect, useRef, useState } from "react";

const DropdownFilter = ({
  id,
  value,
  options,
  label,
  CompanyName,
  onChange,
}) => {
  
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", toggle);
    return () => document.removeEventListener("click", toggle);
  }, []);

  const filteredOptions = options.filter((option) =>
    option[label].toLowerCase().includes(searchTerm.toLowerCase())
  );

  const selectOption = (selectedValue) => {
    setSearchTerm(selectedValue);
    //console.log(option[label]);
    setIsOpen((isOpen) => !isOpen);
    onChange({ target: { id, value: selectedValue } });
  };

  function toggle(e) {
    setIsOpen(e && e.target === inputRef.current);
  }

  return (
    <div className="dropdown block relative">
      <label
        htmlFor="stockname"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        Stock Name
      </label>
      <div className="control mt-2 relative">
        <div className="selected-value">
          <span className="absolute inset-y-1 left-0  items-center pl-2 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-slate-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-orange-600 focus:ring-orange-600 focus:ring-1 sm:text-sm"
            placeholder="Search for script..."
            ref={inputRef}
            type="text"
            id={id}
            value={searchTerm}
            name="searchTerm"
            onChange={(e) => setSearchTerm(e.target.value)}
            onClick={toggle}
          />
        </div>
        <div className={`arrow ${isOpen ? "open" : ""}`}></div>
      </div>
      {isOpen && (
        <>
          <div
            className={`absolute top-[19] w-full options border border-t-0 max-h-32 overflow-y-scroll bg-white z-10`}
          >
            {filteredOptions.map((option, index) => {
              return (
                <div
                  onClick={() => selectOption(option[label])}
                  className={`option p-2 border-y-1 border-slate-200 font-semibold text-orange-600 hover:bg-blue-600 hover:text-white ${
                    option[label] === value ? "selected" : ""
                  }`}
                  key={`${id}-${index}`}
                >
                  <h1>{option[label]}</h1>
                  <small>{option[CompanyName]}</small>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default DropdownFilter;
