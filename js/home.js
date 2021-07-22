let stars = document.getElementById("imgStars");
let mountains_behind = document.getElementById("imgMountains_Behind");

let text = document.getElementById('text');
let btn = document.getElementById('btn');
let header = document.querySelector("header");

let dice = document.getElementById("dice");
let foreground = document.getElementById("foreground");


function OnScroll ()
{    
    let value = window.scrollY;

    stars.style.left = value * 0.25 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';

    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';

    dice.style.top = value * 1.05 + 'px';
    foreground.style.top= value * 0.5 + 'px';
}
window.addEventListener('scroll', OnScroll);

