import Card from "./card";

const ResourceCards = ({ resources }) => {
  const resourcesCard = resources.map((item) => (
    <Card
      image={item.imageURL}
      label={item.courseName}
      key={item.courseCode}
      id={item.courseCode}
    />
  ))
  return (
    <div className="flex flex-col gap-4">
      {resourcesCard.length > 0 ? resourcesCard : 'No Resource Found'}
    </div>
  );
};

export default ResourceCards;
