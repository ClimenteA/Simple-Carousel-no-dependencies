


var carousels = document.getElementsByClassName("image-carousel");
var carousel = carousels[0];
var images = carousel.querySelectorAll("img");
var next = carousel.querySelector(".next");
var prev = carousel.querySelector(".previous");

images.forEach((img, idx) => {
    if (idx !== 0) {
        img.style.display = "none";
    }else {
        img.style.display = "block";
    }
})

next.addEventListener("click", _ => {

    // Make the current img invisible, store the index
    for (var i=0; i<images.length; i++) {
        if (images[i].style.display === "block"){
            images[i].style.display = "none";
            var idx = i;
            break;
        }
    }
    
    // Make img visible if current index is bigger than stored idx
    if (idx+1 === images.length){
        images[0].style.display = "block";
    } else {
        images[idx+1].style.display = "block";   
    }
    
}, false);


prev.addEventListener("click", _ => {

    // Make the current img invisible, store the index
    for (var i=0; i<images.length; i++) {
        if (images[i].style.display === "block"){
            images[i].style.display = "none";
            var idx = i;
            break;
        }
    }
    
    // Make img visible if current index is bigger than stored idx
    if (idx === 0){
        images[images.length-1].style.display = "block";
    } else {
        images[idx-1].style.display = "block";   
    }

}, false);