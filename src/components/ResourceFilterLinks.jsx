import { RESOURCE_TYPE } from '@/constants';
import { Link } from 'react-router-dom';
import { badgeVariants } from "@/components/ui/badge";

export default function ResourceFilterLinks({ onClick, selected }) {

  const filterLinks = Object.keys(RESOURCE_TYPE).map(type => {
    return (<Link
      key={`${type}-${RESOURCE_TYPE[type]}`}
      href="#"
      className={`${badgeVariants({
        variant: `${selected === RESOURCE_TYPE[type] ? 'default' : 'secondary'}`
      })} mr-2 mb-2`}
      onClick={() => onClick(RESOURCE_TYPE[type])}
    >
      {type}
    </Link>)
  })

  return (
    <div className="flex flex row">
      {filterLinks}
    </div>
  )
}
