var i =0 ;  //start of the game
var iamges=[];
var time=3000;
//images list
images[0]='img4.jpg';
images[1]='img5.jpg';
images[2]='img7.jpg';
//fuction for changing the image
function changeImg(){
    document.slide.scr=images[i];
    if(i < images.length -1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("changeImg()",time);
}
window.onload=changeImg;