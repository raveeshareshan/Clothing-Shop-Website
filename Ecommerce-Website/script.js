/* Home page */
let index =0;
displayImage();
function displayImage(){
    const images = document.getElementsByClassName("image");
    for(i = 0; i < images.length; i++){
        images[i].style.display = "none";
    }
    index++;
    if(index > images.length){
        index = 1;
    }
    images[index - 1].style.display = "block";
    setTimeout(displayImage, 2000);
}