function updateLogoOpacity() {
    const logo = document.getElementById("logo");

    if (logo) {
        const scrollPosition = window.scrollY;
        const opacity = 1 - scrollPosition / (logo.clientHeight * 0.5);

        logo.style.opacity = opacity;
        logoContainer.style.opacity = opacity;
        header.style.marginTop = logo.clientHeight + "px";
    }
}

// ...

window.addEventListener("scroll", updateLogoOpacity);
