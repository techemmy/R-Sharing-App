import images from "../assets/assets";

export default function Card({ resource }) {
  return (
    <div
      key={resource._id}
      className="bg-white dark:bg-gray-950 rounded-lg shadow-sm flex items-start gap-4 p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer"
    >
      <img src={resource.images[0] ? resource.images[0]?.url : images.Folder} alt={resource.courseName} className="rounded-lg w-20 h-20 object-cover" />
      <div className="flex-1 space-y-2 h-full flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">{resource.courseName}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">{resource.courseCode}</p>
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 fill-primary"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm font-medium">{resource.stars.length}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
            />
          </svg>
          <span>{resource.creator.username}</span>
          <span>·</span>
          <span>{resource.resourceType}</span>
          <span>·</span>
          <span>{resource.school.acronym}</span>
        </div>
      </div>
    </div>
  );
};

