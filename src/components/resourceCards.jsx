import jsonData from "../apiResources/dummy-1.json";
import Card from "./card";

const ResourceCards = () => {
  return (
    <div className="flex flex-col gap-4">
      {jsonData.map((item) => (
        <Card
          image={item.imageURL}
          label={item.course_name}
          key={item.course_code}
          id={item.course_code}
        />
      ))}
    </div>
  );
};

export default ResourceCards;
