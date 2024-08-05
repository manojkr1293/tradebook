const InputJournal = ({ type, label, id, value, onChange, onBlur, error }) => {
  return (
    <>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          rows="3"
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md mt-2 p-2 shadow-sm focus:outline-none focus:border-orange-600 focus:ring-orange-600 focus:ring-1 sm:text-sm"
        ></textarea>
      ) : (
        <input
          id={id}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md mt-2 p-2 shadow-sm focus:outline-none focus:border-orange-600 focus:ring-orange-600 focus:ring-1 sm:text-sm"
        ></input>
      )}
      {error && <span className="text-red-600 font-medium">{error}</span>}
    </>
  );
};

export default InputJournal;
