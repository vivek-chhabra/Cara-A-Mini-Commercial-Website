const menu = document.querySelector('#menu')
const navLink = document.querySelector('.nav-links')
const cross = document.querySelector('.cross')
const mainImg = document.querySelector(".main-image");
const otherImg = document.querySelectorAll(".other-img img");
const products = document.querySelectorAll(".products .p-items");
// const products = document.querySelectorAll(".single-p .products .p-items");

// when other images are clicked
otherImg.forEach((ele) => {
    ele.addEventListener("click", () => {
        mainImg.src = ele.src;
    });
});

// menu button
menu.addEventListener('click', () => {
    navLink.style = `right: 0px`
})
cross.addEventListener('click', () => {
    navLink.style = `right: -300px`
})

products.forEach(ele => {
    ele.addEventListener('click', () => {
        document.location = 'http://127.0.0.1:5500/single-product.html'
    })
})