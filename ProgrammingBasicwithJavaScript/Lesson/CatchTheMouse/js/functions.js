function chaseMouse() {
    let img = document.getElementById("image");
    img.style.position = "absolute";
    img.style.left = (Math.random() * 500) + "px";
    img.style.top = (Math.random() * 500) + "px";
}

function catchMouse() {
    alert("Congratulations, You Win!")
}
