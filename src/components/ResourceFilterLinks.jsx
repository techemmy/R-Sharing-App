import { Link } from 'react-router-dom';
import { badgeVariants } from "@/components/ui/badge";

export default function ResourceFilterLinks({ onClick, selected, resourceFilters }) {

  const filterLinks = Object.keys(resourceFilters).map(type => {
    return (<Link
      key={`${type}-${resourceFilters[type]}`}
      href="#"
      className={`${badgeVariants({
        variant: `${selected === resourceFilters[type] ? 'default' : 'secondary'}`
      })} mr-2 mb-2`}
      onClick={() => onClick(resourceFilters[type])}
    >
      {type}
    </Link>)
  })

  return (
    <div className="flex flex-row justify-between md:justify-start">
      {filterLinks}
    </div>
  )
}
