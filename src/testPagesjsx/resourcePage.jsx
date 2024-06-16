import Download from "../components/downloadFile";
import SchoolBlock from "../components/schoolBlock";
import Sidebar from "../components/viewResourceSidebar";
import ViewResourceMain from "../components/viewRourceaMain";

const ViewResourcePage = () => {
  return (
    <>
      <div className="pt-2 w-max border-0.1 flex px-30 flex-col gap-2 border-gray-400">
        <SchoolBlock />
        <div className="w-max z-[-999] border-0.1 flex flex-col p-3 gap-2 border-gray-400">
          <Download />
          <ViewResourceMain />
        </div>
      </div>
    </>
  );
};

export default ViewResourcePage;
