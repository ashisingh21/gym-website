// When the user scrolls the page, execute myFunction
window.onscroll = function () { onMyScroll() };

function onMyScroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}


var openNav = document.getElementById("openNav");
var closenav = document.getElementById("closebtn");

openNav.addEventListener('click', showNav = () => {
    document.getElementById("navbar-links").style.width = "100%"
    openNav.style.display = "none";
    closenav.style.display = "block";
})

closenav.addEventListener('click', hideNav = () => {
    document.getElementById("navbar-links").style.width = "0%"
    openNav.style.display = "block";
    closenav.style.display = "none";
})


