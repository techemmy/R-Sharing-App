import { useNavigate, Link, useNavigation } from "react-router-dom";
import { HEADER_VIEWS } from "../constants";
import useAuth from "../hooks/useAuth"
import Logo from './Logo'

export default function Header({ view = HEADER_VIEWS.Home }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const navigation = useNavigation();

  const homeBtnView = (
    <>
      <button
        className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring cursor-not-allowed"
        type="button"
        disabled
      >
        <span className="text-sm font-medium"> View Profile </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </button>

      <Link
        to={'/create-resource'}
        className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
        type="button"
      >
        {navigation.state === "loading" ? "Loading..." : "Create Resource"}
      </Link>
    </>
  )

  const createResourceBtnView = (
    <Link
      className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
      type="button"
      onClick={() => {
        return navigate(-1)
      }}
    >
      <span className="text-sm font-medium">Go Back</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
        />
      </svg>
    </Link>
  );

  let buttonsToShow;
  switch (view) {
    case HEADER_VIEWS.Home:
      buttonsToShow = homeBtnView;
      break;

    case HEADER_VIEWS.CreateResource:
      buttonsToShow = createResourceBtnView;
      break

    default:
      buttonsToShow = homeBtnView;
      break;
  }
  return (
    <header className="bg-gray-50" >
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <Logo />
            <p className="mt-1.5 text-lg text-gray-500">Welcome, {user.username}! 🎉</p>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            {buttonsToShow}
          </div>
        </div>
      </div>
    </header >
  )
}
