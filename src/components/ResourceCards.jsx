import Card from "./Card";

export default function ResourceCards({ resources }) {
  const resourceCards = resources.map((resource) => {
    return <Card key={`${resource.name}-${resource.code}`} resource={resource} />
  })
  return resourceCards
};
