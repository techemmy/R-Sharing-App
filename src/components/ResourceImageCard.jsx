import { CarouselItem } from "@/components/ui/carousel";
import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "./ui/button";

async function downloadImage(imageSrc, imageName) {
  const image = await fetch(imageSrc);
  const imageBlog = await image.blob();
  const imageURL = URL.createObjectURL(imageBlog);

  const link = document.createElement("a");
  link.href = imageURL;
  link.download = imageName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export default function ResourceImageCard({ image, resourceInfo }) {
  return (
    <CarouselItem className="relative">
      <AspectRatio ratio={4 / 3} className="bg-muted">
        <img
          src={image.url}
          alt={`${resourceInfo} page - ${image.pageNo}`}
          className="object-cover w-full h-auto rounded-lg"
        />
      </AspectRatio>
      <Button
        onClick={() => {
          downloadImage(image.url, `${resourceInfo}-${image.pageNo}`);
        }}
        className="absolute bottom-2 right-2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
        <span className="sr-only">Download</span>
      </Button>
    </CarouselItem>
  );
}
