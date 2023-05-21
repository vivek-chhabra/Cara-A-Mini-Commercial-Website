const menu = document.querySelector('#menu')
const navLink = document.querySelector('.nav-links')
const cross = document.querySelector('.cross')

menu.addEventListener('click', () => {
    navLink.style = `right: 0px`
})

cross.addEventListener('click', () => {
    navLink.style = `right: -300px`
})


