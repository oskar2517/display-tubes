document.addEventListener("DOMContentLoaded", () => {
    const element = document.querySelector("#lightgallery");

    console.log(element)
    
    lightGallery(element, {
        plugins: [],
        speed: 500,
    });
    
});