const name = document.querySelector("#lastname");
const firstname = document.querySelector("#firstname");
const city= document.querySelector("#city");
let raz = document.querySelector("#raz");

raz.addEventListener("click", handleRemoveValues);

function handleRemoveValues(){
    name.value = "";
    firstname.value = "";
    city.value = "";
};