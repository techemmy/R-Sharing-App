import Card from "./Card";

export default function ResourceCards({ resources }) {
  const resourceCards = resources.map((resource) => {
    return (
      <Card
        key={`${resource._id}-${resource.courseName}`}
        resource={resource}
      />
    )
  })
  return resourceCards
};
