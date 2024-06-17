import Card from "./card";

const ResourceCards = ({ resources }) => {
  return (
    <div className="flex flex-col gap-4">
      {resources.map((item) => (
        <Card
          image={item.imageURL}
          label={item.courseName}
          key={item.courseCode}
          id={item.courseCode}
        />
      ))}
    </div>
  );
};

export default ResourceCards;
