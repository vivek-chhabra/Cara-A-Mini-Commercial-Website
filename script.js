const menu = document.querySelector('#menu')
const navLink = document.querySelector('.nav-links')
const cross = document.querySelector('.cross')
const mainImg = document.querySelector(".main-image");
const otherImg = document.querySelectorAll(".other-img img");
const products = document.querySelectorAll(".products .p-items");
const header = document.querySelector('header')
const headerImg = document.querySelector('header img')
const contactForm = document.querySelector('.contact-left form');
const submitBtn = document.querySelector('.contact-left button');


// adjusting header on the bases of scroll
window.addEventListener('scroll', () => {
    console.log(window.scrollY)
    if(window.scrollY > 460) {
        header.style = `padding-block: 10px`
        headerImg.style = `scale: .9`
    }else {
        header.style = ``
        headerImg.style = ``
    }
})


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
        document.location = 'https://vivek-chhabra.github.io/Cara-A-Mini-Commercial-Website/single-product.html'
    })
})

// disabling the default behavour of the form
submitBtn.addEventListener('click', (evt) => {
    evt.preventDefault()
})  
