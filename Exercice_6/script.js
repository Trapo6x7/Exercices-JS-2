const images = document.querySelectorAll("img");
let image;

for (let image of images) {
  image.addEventListener("mouseenter", handleMouseEnterChangeImage);
  image.addEventListener("mouseleave", handleMouseLeaveChangeImage);
}

function handleMouseEnterChangeImage(event) {
   event.target.src = event.target.src.replace(".jpg","_2.jpg");
}

function handleMouseLeaveChangeImage(event) {
    event.target.src = event.target.src.replace("_2.jpg",".jpg");
}