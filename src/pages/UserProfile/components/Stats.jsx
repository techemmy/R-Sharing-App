import StatCard from "./StatCard";

export default function Stats() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8 mt-14"> Stats 📊 </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <StatCard
          name="Uploads"
          description="Slides, Past Questions, Notes"
          number={24}
        />
        <StatCard name="Downloads" description="By other users" number={1234} />
        <StatCard
          name="Upvotes"
          description="Slides, Past Questions, Notes"
          number={789}
        />
      </div>
    </div>
  );
}
