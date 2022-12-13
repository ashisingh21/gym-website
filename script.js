// When the user scrolls the page, execute myFunction
window.onscroll = function () { onMyScroll() };

function onMyScroll() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}


function showNav() {
    var navbarList = document.getElementsByClassName("navbar-links");
    navbarList.classList.add("show")
}
