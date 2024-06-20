import { Link } from "react-router-dom"

export default function ErrorPage({ error, resetErrorBoundary }) {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md space-y-4 text-center">
        <TriangleAlertIcon className="mx-auto h-12 w-12 text-red-500" />
        <h1 className="text-2xl font-bold text-gray-900">Oops, something went wrong!</h1>
        <p className="text-gray-600">
          We're sorry, but an unexpected error has occurred. Please try again later or contact support if the problem
          persists.
        </p>
        <Link
          to={'/home'}
          className="w-full inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}

function TriangleAlertIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}
