let mainImage =  document.getElementById("main");
let smallImage = document.getElementsByClassName("small");

smallImage[0].onclick = function(){
    mainImage.src = smallImage[0].src;
}
smallImage[1].onclick = function(){
    mainImage.src = smallImage[1].src;
}
smallImage[2].onclick = function(){
    mainImage.src = smallImage[2].src;
}
smallImage[3].onclick = function(){
    mainImage.src = smallImage[3].src;
}
