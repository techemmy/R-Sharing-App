import { Link } from "react-router-dom";
import ResourceCard from "./ResourceCard";

export default function ResourceCards({ resources }) {
  const resourceCards = resources.map((resource) => {
    return (
      <Link to={`/view-resource/${resource._id}`} key={`${resource._id}-${resource.courseName}`}>
        <ResourceCard resource={resource} />
      </Link >
    )
  })
  return resourceCards
};
