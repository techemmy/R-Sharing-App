import ResourceCards from "../components/resourceCards";
import SchoolBlock from "../components/schoolBlock";
import Sidebar from "../components/sidebar";

const HomePage = () => {
  return (
    <div className="flex justify-between">
      <Sidebar />

      <div className="pt-2 gap-2 flex basis-full px-30 flex-col">
        <SchoolBlock />
        <ResourceCards />
      </div>

      <Sidebar layout={"right"} />
    </div>
  );
};

export default HomePage;
