var progress = document.getElementsByClassName('progress')[0]

document.addEventListener('scroll', function() {
    if (progress.getBoundingClientRect().top > -10 && progress.getBoundingClientRect().top < 550) {
        progress.classList.add("animate")
    }
})
