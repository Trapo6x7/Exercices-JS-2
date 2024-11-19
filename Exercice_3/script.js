let champs= document.querySelector("#lastname");

champs.addEventListener("input", returnValue);

function returnValue(){
    alert(champs.value);
};