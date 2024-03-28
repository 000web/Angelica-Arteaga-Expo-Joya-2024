// s2 But -----------------------------------------------------------------
const b1 = document.querySelector("#plus_info");
b1.addEventListener("click", ()=>{
    window.location.href = "https://storage.googleapis.com/msgsndr/qZlkbRPAHsqyXi4QjSN5/media/6601b231a79bbe188cb8c540.pdf";
});
// s2 But -----------------------------------------------------------------

// s5 But -----------------------------------------------------------------
const b2 = document.querySelector("#buy_info");
b2.addEventListener("click", ()=>{
    window.location.href = "https://angelicaarteagajoyeria.com/tienda/mayoreo/en-stock";
});
// s5 But -----------------------------------------------------------------

// s7 But -----------------------------------------------------------------
const w1 = document.querySelector("#offwebsite");
w1.addEventListener("click", ()=>{
    window.location.href = "https://angelicaarteagajoyeria.com/inicio";
});

const f1 = document.querySelector("#fredy");
f1.addEventListener("click", ()=>{
    window.location.href = "https://api.whatsapp.com/send?phone=+525548427028&text=Me interesa su trabajo en desarrollo web. Discutamos una posible colaboración.";
});
// s7 But -----------------------------------------------------------------

// SLIDER -----------------------------------------------------------------
let currentIndex = 0;
const slides = document.querySelectorAll('.slider-image');
const totalSlides = slides.length;
const sliderImages = document.querySelector('.slider-images');
const leftBtn = document.querySelector('.slider-btn-left');
const rightBtn = document.querySelector('.slider-btn-right');
function moveSlide(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    const offset = -currentIndex * 100;
    sliderImages.style.transform = `translateX(${offset}%)`;
}
leftBtn.addEventListener('click', function() {
    moveSlide(-1);
});
rightBtn.addEventListener('click', function() {
    moveSlide(1);
});
// SLIDER -----------------------------------------------------------------