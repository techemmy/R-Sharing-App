import ContentLoader from "react-content-loader";
import Card from "./Card";

export default function LoadingResourceCards(props) {
  const resources = [];
  for (let i = 0; i < Array(4).length; i++) {
    resources.push({
      _id: `loading-${i}`,
      images: ["/Folder.png"],
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
      <ContentLoader key={`${resource._id}`} viewBox="0 0 300 150" height={150} width={300} {...props}>
        <rect x="20.2" y="40" width="100" height="80" />
        <rect x="130" y="40" width="300" height="10" />
        <rect x="130" y="55" width="150" height="10" />
        <rect x="130" y="70" width="100" height="10" />
        <rect x="130" y="105" width="300" height="10" />
      </ContentLoader>
    )
  })
  return resourceCards
}
