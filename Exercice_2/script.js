const monFocus = document.querySelector("#lastname");

monFocus.addEventListener("focusout", alertOutFocus);

function alertOutFocus(){
    alert("Bravo");
};