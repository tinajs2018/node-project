var mainLIstDiv=document.getElementById("mainListDiv");
var mediaButton=document.getElementById("mediaButton");
mediaButton.onclick=function(){
    "use strict"
    mainLIstDiv.classList.toggle('show-list');
    mediaButton.classList.toggle("active");
};