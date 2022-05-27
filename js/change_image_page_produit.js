var choix_image = document.querySelectorAll(".choix-image");
var image_principale = document.getElementById("image-principale");
var image_selectionnee = choix_image[0];
image_selectionnee.classList.add("choix-image-active")

choix_image.forEach(element => {
    element.addEventListener("click", function () {
        image_selectionnee.classList.remove("choix-image-active")
        // image_selectionnee.style.outline = "";
        image_principale.src = element.src;
        image_principale.alt = element.alt;
        image_selectionnee = element;
        image_selectionnee.classList.add("choix-image-active")
        // image_selectionnee.style.outline = "solid 3px red";
    });
});