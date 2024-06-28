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
        <circle cx="70.2" cy="73.2" r="41.3" />
        <rect x="129.9" y="29.5" width="125.5" height="17" />
        <rect x="129.9" y="64.7" width="296" height="17" />
        <rect x="129.9" y="97.8" width="253.5" height="17" />
        <rect x="129.9" y="132.3" width="212.5" height="17" />
      </ContentLoader>
    )
  })
  return resourceCards
}
