import Card from "./Card";


export default function LoadingResourceCards() {
  const resources = [];
  for (let i = 0; i < Array(2).length; i++) {
    resources.push({
      _id: `loading-${i}`,
      images: ["../assets/Folder.png"],
      resourceType: "Loading...",
      resourceYear: 0,
      courseName: "Loading...",
      courseCode: "Loading...",
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
