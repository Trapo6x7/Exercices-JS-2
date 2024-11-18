const img = document.querySelector("#image1")

img.addEventListener("mouseover", handleImageChange);
img.addEventListener("mouseout", handleImageChange2);

function handleImageChange(){
    img.src="./images/image1_2.jpg"
}

function handleImageChange2(){
    img.src="./images/image1.jpg"
}