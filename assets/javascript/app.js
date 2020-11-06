const image = document.getElementById("dogImg");

image.onclick = function () {

    if (image.src.match("dog2.jpg") != null) {
        image.src = "assets/img/dog.jpg";
    } else {
        image.src = "assets/img/dog2.jpg";
    }
}

image.onmouseover = function () {
    
    image.style.width = "40rem";

}

image.onmouseout = function () {

    image.style.width = "30rem";

}