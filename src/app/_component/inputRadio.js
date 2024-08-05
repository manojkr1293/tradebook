const InputRadio = ({ type, label, checked, id, value, onChange }) => {
  return (
    <>
      <input
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        checked={checked}
        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
      ></input>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
    </>
  );
};

export default InputRadio;
