document.addEventListener("DOMContentLoaded", () => {
    const lightbox = new PhotoSwipeLightbox({
        gallery: ".gallery",
        pswpModule: PhotoSwipe
    });
    lightbox.init();

    console.log("init")
});