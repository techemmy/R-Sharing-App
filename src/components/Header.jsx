import { Link, useNavigation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Logo from "./Logo";
import ButtonAndLinkLoader from "./ButtonAndLinkLoader";
import { Button } from "./ui/button";
import { SquareArrowOutUpRightIcon } from "lucide-react";

export default function Header() {
  const { user, logout } = useAuth();
  const navigation = useNavigation();

  return (
    <header className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <Logo />
            <p className="mt-1.5 text-lg text-gray-500">
              Welcome, {user.username}! 🎉
            </p>
          </div>

          <div className="mt-4 flex gap-4 sm:mt-0 flex-row justify-center sm:items-center">
            <Button
              className="rounded-lg border border-gray-200 bg-white px-5 py-3 text-gray-500 transition hover:text-gray-700 focus:outline-none focus:ring"
              type="button"
              variant="outline"
              onClick={logout}
            >
              <span className="text-sm font-medium">Log out</span>
            </Button>

            <Link
              to={"/create-resource"}
              className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
              type="button"
            >
              {navigation.state === "loading" ? (
                <ButtonAndLinkLoader />
              ) : (
                "Create Resource"
              )}
            </Link>

            <Link
              to={"/profile"}
              className="flex items-center gap-x-1 rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
              type="button"
            >
              {navigation.state === "loading" ? (
                <ButtonAndLinkLoader />
              ) : (
                "View Profile"
              )}
              <SquareArrowOutUpRightIcon size={15} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
