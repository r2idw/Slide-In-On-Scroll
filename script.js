// Getting slider images;
const sliderImgs = document.querySelectorAll('.slide-in'); 

// debounce function;
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
};

function checkSlides(e) {
    // console.count(e);
    sliderImgs.forEach((slideImg) => {
        const slideInAt = (window.scrollY + window.innerHeight) - slideImg.clientHeight / 2; 
        const slideBottom = (slideImg.offsetTop + slideImg.height);
        const isHalfShown = slideInAt > slideImg.offsetTop;
        const isNoScrolledPast = window.scrollY < slideBottom;
       
        if (isHalfShown && isNoScrolledPast) {
            slideImg.classList.add('active');
        } else {
            slideImg.classList.remove('active');
        }
        console.log();
              
    })
};

window.addEventListener('scroll', debounce(checkSlides, 20));


