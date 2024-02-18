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
// document.addEventListener('DOMContentLoaded', function () {

//     const items = document.querySelectorAll('.tabheader__item');
//     const tabContent = document.querySelectorAll('.tabcontent');

//     function showTab(tabIndex) {
//         tabContent.forEach((content, index) => {
//             if (index === tabIndex) {
//                 content.style.display = 'block';
//             } else {
//                 content.style.display = 'none';
//             }
//         });
//     }
//     showTab(0);

//     items.forEach((item, index) => {
//         item.addEventListener('click', () => {

//             showTab(index)

//             items.forEach(item => {
//                 item.classList.remove('tabheader__item_active');
//             });
//             item.classList.add('tabheader__item_active');
//         })
//     })
// })


const tab_btns = document.querySelectorAll('.tabheader__item')
const tabcontent = document.querySelectorAll('.tabcontent')


function showTabs(idx) {
    tabcontent.forEach(slide => slide.classList.add('hide', 'fade'))
    tabcontent[idx].classList.remove('hide')
}
showTabs(0)

tab_btns.forEach((btn, idx) => {
    btn.onclick = () => {
        tab_btns.forEach(el => el.classList.remove('tabheader__item_active'))
        btn.classList.add('tabheader__item_active')
        showTabs(idx)
    }
})





// Carusel
const slides = document.querySelectorAll('.offer__slide')
const prev_btn = document.querySelector('.offer__slider-prev')
const next_btn = document.querySelector('.offer__slider-next')
const current = document.querySelector('#current')
const total = document.querySelector('#total')

let slideIndex = 0
total.innerHTML = slides.length < 10 ? `0${slides.length}` : slides.length


showSlides()

function showSlides(n) {

    if (n >= slides.length) {
        slideIndex = 0
    }

    if (n < 0) {
        slideIndex = slides.length - 1
    }

    slides.forEach(slide => slide.classList.add('hide', 'fade'))
    slides[slideIndex].classList.remove('hide')


    current.innerHTML = slideIndex + 1 < 10 ? `0${slideIndex + 1}` : slideIndex + 1
}


next_btn.onclick = () => {
    slideIndex++
    showSlides(slideIndex)
    console.log('ffff');
}

prev_btn.onclick = () => {
    slideIndex--
    showSlides(slideIndex)
}







// let user = {
//     gender: 'woman'
// }

// const gender_btns = document.querySelectorAll('#gender div')




// TIMER
const deadline = "2024-02-19 01:00"

function getRemainingTime(endTime) {
    const t = Date.parse(endTime) - Date.parse(new Date())
    const days = Math.floor((t / 1000) / 60 / 60 / 24)
    const hours = Math.floor((t / 1000) / 60 / 60 % 24)
    const minutes = Math.floor((t / 1000) / 60 % 60)
    const seconds = Math.floor((t / 1000) % 60)

    return {
        t,
        days,
        hours,
        minutes,
        seconds
    }
}

function setTimer(endTime, selector) {
    const t = document.querySelector(selector)
    const days = t.querySelector('#days')
    const hours = t.querySelector('#hours')
    const minutes = t.querySelector('#minutes')
    const seconds = t.querySelector('#seconds')
    const interval = setInterval(updateTimer, 1000)


    function updateTimer() {
        const t = getRemainingTime(endTime)

        if (t.t <= 0) {
            clearInterval(interval)
            return
        }

        days.innerHTML = setNulls(t.days)
        hours.innerHTML = setNulls(t.hours)
        minutes.innerHTML = setNulls(t.minutes)
        seconds.innerHTML = setNulls(t.seconds)


        function setNulls(num) {
            return num < 10 ? `0${num}` : num
        }
    }
}

setTimer(deadline, '.timer')
  