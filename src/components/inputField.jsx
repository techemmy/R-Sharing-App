import React from "react";

const InputComponent = ({
  id,
  label,
  type,
  placeholder,
  name,
  className,
  compRef,
}) => {
  return (
    <div className="flex flex-col gap-0.5">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        className={`w-40 p-1 h-3 border-0.1 active:border-black rounded-lg border-gray-300 `}
        type={type}
        placeholder={placeholder}
        ref={compRef}
      />
    </div>
  );
};

export default InputComponent;
