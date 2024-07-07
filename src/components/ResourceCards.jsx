import { Link } from "react-router-dom";
import Card from "./Card";

export default function ResourceCards({ resources }) {
  const resourceCards = resources.map((resource) => {
    return (
      <Link to={`/view-course/${resource._id}`} key={`${resource._id}-${resource.courseName}`}>
        <Card resource={resource} />
      </Link >
    )
  })
  return resourceCards
};
