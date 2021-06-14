const slides = document.querySelectorAll('.slide')

slides.forEach(slide => {
    slide.addEventListener('click', () => {
        clearClassActive()
        slide.classList.add('active');
    })
})

function clearClassActive () {
    slides.forEach(slide => {
        slide.classList.remove('active');
    })
}
