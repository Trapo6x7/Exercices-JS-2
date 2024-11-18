const img1 = document.querySelector("#image1");
const img2 = document.querySelector("#image2");
const img3 = document.querySelector("#image3");
const img4 = document.querySelector("#image4");
const img5 = document.querySelector("#image5");

img1.addEventListener("mouseenter", handleImageChange);
img2.addEventListener("mouseenter", handleImageChange2);
img3.addEventListener("mouseenter", handleImageChange3);
img4.addEventListener("mouseenter", handleImageChange4);
img5.addEventListener("mouseenter", handleImageChange5);

function handleImageChange() {
  img1.src = "./images/image1_2.jpg";
}
function handleImageChange2() {
  img2.src = "./images/image2_2.jpg";
}
function handleImageChange3() {
  img3.src = "./images/image3_2.jpg";
}
function handleImageChange4() {
  img4.src = "./images/image4_2.jpg";
}
function handleImageChange5() {
  img5.src = "./images/image5_2.jpg";
}
