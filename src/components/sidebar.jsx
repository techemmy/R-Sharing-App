import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="bg-gray-50 p-4 md:p-6 flex flex-col gap-4 h-max">
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-semibold">Resources</h2>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-gray-500 ">Filter</h3>
        <div className="flex flex-col gap-1">
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-gray-500 ">Coming Soon</h3>
        <div className="flex flex-col gap-1">
          <Link
            href="#"
            className="text-base font-medium hover:text-gray-900"
          >
            Paid Notes
          </Link>
          <Link
            href="#"
            className="text-base font-medium hover:text-gray-900"
          >
            PDFs
          </Link>
          <Link
            href="#"
            className="text-base font-medium hover:text-gray-900"
          >
            More...
          </Link>
        </div>
      </div>
    </nav>
  )
};

export default Sidebar;
