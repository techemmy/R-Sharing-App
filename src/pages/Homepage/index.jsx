import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header"
import ResourcesView from "@/components/ResourcesView";

export default function HomePage() {
  return (
    <>
      <Header />
      <div className="grid grid-cols-1 max-w-screen-xl mx-auto md:grid-cols-[1fr_240px] gap-6 px-4 mb-4 md:px-6 md:mb-6">
        <ResourcesView />
        <Sidebar />
      </div>
    </>
  );
};
