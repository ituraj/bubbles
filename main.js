"use strict";

const divs = document.querySelectorAll("#app div");

divs.forEach(function(div){
    div.style.transform = translate(50vw, 50vh);
})