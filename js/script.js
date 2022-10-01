const slides = document.querySelectorAll(".slide")
const nextBtn = document.querySelector("#btn-next")
const prevBtn = document.querySelector("#btn-back")

slides.forEach(function(slide,index){
    slide.style.left = `${index*100}%`
})

let counter = 0;

nextBtn.addEventListener("click",function(){
    counter++;
    carousel()
})
prevBtn.addEventListener("click",function(){
    counter--;
    carousel()
})

function carousel(){

    if(counter === slides.length){
        counter =0;
    }
    if(counter < 0) {
        counter = slides.length -1;
    }

    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter*100}%)`;
    });
}