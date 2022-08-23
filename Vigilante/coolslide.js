movelink1 = document.getElementById("link1");
movelink2 = document.getElementById("link2");
movelink3 = document.getElementById("link3");
movelink4 = document.getElementById("link4");
movelink5 = document.getElementById("link5");

window.onload = function(){
    movelink1.style.right = "2280px";
    movelink1.style.transition = "right 1s ease-out";
    movelink1.style.right = 0;//((window.innerWidth / 2)) -593 + "px";
    movelink2.style.left = "2280px";
    movelink2.style.transition = "left 1s ease-out";
    movelink2.style.left = 0;   
    movelink3.style.right = "2280px";
    movelink3.style.transition = "right 1s ease-out";
    movelink3.style.right = 0;
    movelink4.style.left = "2280px";
    movelink4.style.transition = "left 1s ease-out";
    movelink4.style.left = 0;
    movelink5.style.right = "2280px";
    movelink5.style.transition = "right 1s ease-out";
    movelink5.style.right = 0;
    console.log(window.innerWidth/2);
}
