export default function checkValidImages(images) {
  const nonImage = images.find((image) => {
    return !["png", "jpeg", "jpg"].includes(
      image.type.split("/")[1].toLowerCase(),
    );
  });
  return nonImage ? false : true;
}
