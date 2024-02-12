let open_buttons = document.querySelectorAll('[data-modal]')
let close_buttons = document.querySelectorAll('[data-close]')
let modal = document.querySelector('.modal')

function open_close_modal(arr, open) {
    arr.forEach(button => {
        button.onclick = () => {
            modal.classList[open ? "add" : "remove"]('show', 'fade')
            document.body.style.overflow = open ? "hidden" : "scroll"
        }
    });
}

open_close_modal(open_buttons, true)
open_close_modal(close_buttons, false)



const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')

setInterval(() => {
    seconds.innerHTML--

    if (seconds.innerHTML <= -1) {
        seconds.innerHTML = 59
        minutes.innerHTML--
    }

    if (seconds.innerHTML < 10) {
        seconds.innerHTML = `0${seconds.innerHTML}`
    }

}, 1000)







const slides = document.querySelectorAll('.offer__slide');
let slideIndex = 0;
let current = document.querySelector('#current')
let total = document.querySelector('#total')
const prev_btn = document.querySelector('.offer__slider-prev');
const next_btn = document.querySelector('.offer__slider-next');


slides.forEach(slide => slide.classList.add('hide', 'fade'));
slides[slideIndex].classList.remove('hide');


function slidesshow(i) {
    slides.forEach(slide => {
        slide.classList.add('hide', 'fade')
    })
    
    slideIndex = (slides.length + slideIndex + i) % slides.length;

    slides[slideIndex].classList.remove('hide');
}

prev_btn.onclick = () => {
    slidesshow(-1);
    current.innerText = "0" + slideIndex

}

next_btn.onclick = () => {
    slidesshow(1);
    current.innerText = "0" + slideIndex
}



