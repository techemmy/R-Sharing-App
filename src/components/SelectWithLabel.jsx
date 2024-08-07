export default function SelectWithLabel({
  name,
  label,
  value,
  options,
  error,
  ...props
}) {
  return (
    <div className="relative">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 "
      >
        {label}
      </label>
      <div className="mt-2">
        <div className="relative">
          <select
            id={name}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm py-2 px-3"
            name={name}
            value={value}
            {...props}
          >
            <option value="">Select one</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p className="absolute top-0 right-0 text-red-500 text-sm">{error}</p>
    </div>
  );
}
