let champs= document.querySelector("#lastname");

champs.addEventListener("keyup", returnValue);

function returnValue(){
    alert(champs.value);
}
