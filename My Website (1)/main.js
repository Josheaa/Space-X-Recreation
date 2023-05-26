// Data AOS

AOS.init();

// Alert


// Card Popup

// Content 1 popup
document.getElementById("opnbtn1").addEventListener("click", function () {
    document.getElementById("popupyt1").style.display = "block";
    document.getElementById("blurbackgroundc1").style.display = "block";
});

document.getElementById("clsbtn1").addEventListener("click", function () {
    document.getElementById("popupyt1").style.display = "none";
    document.getElementById("blurbackgroundc1").style.display = "none";
});

// Content 2 popup
document.getElementById("opnbtn2").addEventListener("click", function () {
    document.getElementById("popupyt2").style.display = "block";
    document.getElementById("blurbackgroundc2").style.display = "block";
});

document.getElementById("clsbtn2").addEventListener("click", function () {
    document.getElementById("popupyt2").style.display = "none";
    document.getElementById("blurbackgroundc2").style.display = "none";
});

// Content 3 popup
document.getElementById("opnbtn3").addEventListener("click", function () {
    document.getElementById("popupyt3").style.display = "block";
    document.getElementById("blurbackgroundc3").style.display = "block";
});

document.getElementById("clsbtn3").addEventListener("click", function () {
    document.getElementById("popupyt3").style.display = "none";
    document.getElementById("blurbackgroundc3").style.display = "none";
});

// Content 5 popup
document.getElementById("opnbtn5").addEventListener("click", function () {
    document.getElementById("popupyt5").style.display = "block";
    document.getElementById("blurbackgroundc5").style.display = "block";
});

document.getElementById("clsbtn5").addEventListener("click", function () {
    document.getElementById("popupyt5").style.display = "none";
    document.getElementById("blurbackgroundc5").style.display = "none";
});

// JS untuk hamburger

const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    document.body.classList.toggle('stop-scrolling');
    menu.classList.toggle('show-menu');
}