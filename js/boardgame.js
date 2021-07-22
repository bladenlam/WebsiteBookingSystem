let stars = document.getElementById("imgStars");
let mountains_behind = document.getElementById("imgMountains_Behind");

let text = document.getElementById('text');
let btn = document.getElementById('btn');
let header = document.querySelector("header");

let dice = document.getElementById("dice");
let foreground = document.getElementById("foreground");


document.querySelector("#fourcrowd").addEventListener("click", OnClickFourCrowd);
document.querySelector("#themarathon").addEventListener("click", OnClickTheMarathon);
document.querySelector("#wargame").addEventListener("click", OnClickWargame);

window.addEventListener('scroll', OnScroll);

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




function OnClickWargame()
{  
    //Defaults package value in case another value is already stored in local storage
    const Package = "Wargame";
    localStorage.setItem("Package", Package);
}


function OnClickFourCrowd()
{
    const Package = "FourCrowd";
    localStorage.setItem("Package", Package);
}

function OnClickTheMarathon()
{
    const Package = "TheMarathon";
    localStorage.setItem("Package", Package);
    console.log(Package);
}



