/* Home page slideshow*/
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



/* Hamburger menu */
const bar = document.getElementById("mobile");
const hamburgerMenu = document.getElementById("navbar");
const hide = document.getElementById('close');

if(bar){
    bar.addEventListener('click', () => {
        hamburgerMenu.classList.add('active');
    })
}

if(hide){
    hide.addEventListener('click', () => {
        hamburgerMenu.classList.remove('active');
    })
}