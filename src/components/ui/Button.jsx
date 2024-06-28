import ButtonLoader from "./ButtonLoader";

export default function Button({ children, isLoading, disabled, loaderColor, ...props }) {
  return (
    <button
      type="submit"
      disabled={disabled}
      className={`w-full rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer ${disabled && 'cursor-not-allowed'}`}
    >
      {isLoading ? <ButtonLoader color={loaderColor} /> : children}
    </button>
  )
}
