const slider = document.getElementById('slider');
let sliderSections = document.querySelectorAll('.slider-section')
let sliderSectionLast = sliderSections[sliderSections.length - 1];

const btnRigth = document.getElementById('sliderRigth');
const btnLeft = document.getElementById('sliderLeft');

slider.insertAdjacentElement('afterbegin', sliderSectionLast)

btnLeft.addEventListener('click', () => {
    let sliderSections = document.querySelectorAll('.slider-section')
    let sliderSectionLast = sliderSections[sliderSections.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast)
        slider.style.marginLeft = "-100%"
    }, 500)
})

btnRigth.addEventListener('click', () => {
    const sliderSectionFirst = document.querySelectorAll('.slider-section')[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(() => {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst)
        slider.style.marginLeft = "-100%"
    }, 500)
})

