import { Camera } from "lucide-react";

export default function ProfileImage() {
  return (
    <div className="group relative w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-500 sm:w-20 sm:h-20">
      <input
        type="file"
        id="profile-image"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
      />
      <img
        src="/Folder.png"
        alt="User Avatar"
        className="w-full h-full object-cover rounded-full"
      />
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-full opacity-0 transition-opacity cursor-pointer group-hover:opacity-100">
        <Camera className="text-white" />
        <span className="sr-only">Upload Image</span>
      </div>
    </div>
  );
}
