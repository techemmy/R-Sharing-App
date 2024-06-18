import { RESOURCE_TYPE } from '../constants'
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ handleFilterChange }) => {
  return (
    <nav className="bg-gray-50 p-4 md:p-6 flex flex-col gap-4 h-max">
      <div className="flex items-center gap-2">
        <h2 className="text-lg font-semibold">Resources</h2>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-sm font-medium text-gray-500 ">Filter</h3>
        <div className="flex flex-col gap-1">
          {Object.keys(RESOURCE_TYPE).map(type => {
            return (<NavLink
              key={`${type}-${RESOURCE_TYPE[type]}`}
              href="#"
              className="text-base font-medium hover:text-gray-900 "
              onClick={() => handleFilterChange(RESOURCE_TYPE[type])}
            >
              {type}
            </NavLink>)
          })}
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
