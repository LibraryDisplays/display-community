const carousels = document.querySelectorAll(".carousel-wrapper");


carousels.forEach(carousel => {


const container = carousel.querySelector(".display-carousel");

const leftButton = carousel.querySelector(".left");

const rightButton = carousel.querySelector(".right");



leftButton.addEventListener("click", () => {

    container.scrollLeft -= 400;

});



rightButton.addEventListener("click", () => {

    container.scrollLeft += 400;

});


});
