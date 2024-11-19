const monFocus = document.querySelector("#lastname");

monFocus.addEventListener("blur", handleAlertBlur);

function handleAlertBlur(){
    alert("Merci de votre participation!");
};