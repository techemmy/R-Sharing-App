import images from "../assets/assets";
import Card from "./Card";


export default function LoadingResourceCards() {
  const resources = [];
  for (let i = 0; i < Array(2).length; i++) {
    resources.push({
      _id: `loading-${i}`,
      images: [images.Search],
      resourceType: "<i>Loading...</i>",
      resourceYear: 0,
      courseName: "<i>Loading...</i>",
      courseCode: "<i>Loading...</i>",
      school: {
        name: "...",
        acronym: "..."
      },
      creator: {
        username: "..."
      },
      stars: []
    })
  }
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
