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




// Стиль питания 
document.addEventListener('DOMContentLoaded', function () {

    const items = document.querySelectorAll('.tabheader__item');
    const tabContent = document.querySelectorAll('.tabcontent');

    function showTab(tabIndex) {
        tabContent.forEach((content, index) => {
            if (index === tabIndex) {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        });
    }
    showTab(0);

    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            
            showTab(index)
           
            items.forEach(item => {
                item.classList.remove('tabheader__item_active');
            });
            item.classList.add('tabheader__item_active');
        })
    })
})



// Carusel
const slides = document.querySelectorAll('.offer__slide')
const prev_next_btns = document.querySelectorAll("[data-group]")
let slideIndex = 0


showSlides(slideIndex)
function showSlides(n) {

    if (n >= slides.length - 1) {
        slideIndex = 0
    }

    if (n < 0) {
        slideIndex = slides.length - 1
    }


    slides.forEach(slide => slide.classList.add('hide'))
    slides[slideIndex].classList.remove('hide')

}


prev_next_btns.forEach(btn => {
    btn.onclick = () => {
        const act = btn.getAttribute('data-group')

        if (act === "prev") {
            slideIndex--
            showSlides(slideIndex)
        } else {
            slideIndex++
            showSlides(slideIndex)
        }

    }
})



// Sale
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
