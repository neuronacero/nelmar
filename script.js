document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.getElementById("imageGallery");
    const logo = document.getElementById("logo");
    const header = document.querySelector("header");
    const logoContainer = document.querySelector(".logo-container");

    const imgFolder = "img/";
    const numImages = 3;
    const imageNames = ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg", "imagen4.jpg", "imagen5.jpg", "imagen6.jpg"];

    let currentIndex = 0;

    function loadAndRotateImages() {
        galleryContainer.innerHTML = "";

        for (let i = currentIndex; i < currentIndex + numImages; i++) {
            const imageDiv = document.createElement("div");
            imageDiv.className = "image";

            const img = document.createElement("img");
            img.src = imgFolder + imageNames[i % imageNames.length];
            img.alt = "Reparación de elevadores " + ((i % imageNames.length) + 1);

            const overlay = document.createElement("div");
            overlay.className = "overlay";

            imageDiv.appendChild(img);
            imageDiv.appendChild(overlay);

            galleryContainer.appendChild(imageDiv);
        }

        currentIndex = (currentIndex + numImages) % imageNames.length;
    }

    function updateLogoOpacity() {
        const scrollPosition = window.scrollY;
        const opacity = 1 - scrollPosition / (logo.clientHeight * 0.5);

        logo.style.opacity = opacity;
        logoContainer.style.opacity = opacity;
        header.style.marginTop = logo.clientHeight + "px";
    }

    loadAndRotateImages();
    updateLogoOpacity();

    setInterval(function () {
        loadAndRotateImages();
    }, 2000);

    window.addEventListener("scroll", updateLogoOpacity);
});
