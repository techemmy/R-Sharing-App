import Card from "./Card";

export default function ResourceCards({ resources }) {
  const resourceCards = resources.map((resource) => {
    return (
      <Card
        key={`${resource.courseName}-${resource.courseCode}-${resource.creator.name}-${resource.school.name}`}
        resource={resource}
      />
    )
  })
  return resourceCards
};
