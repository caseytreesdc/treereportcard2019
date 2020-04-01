var progress_95 = document.getElementsByClassName('progress')[0]
var progress_80 = document.getElementsByClassName('progress')[1]

document.addEventListener('scroll', function() {
    if (progress_95.getBoundingClientRect().top > -10 && progress_95.getBoundingClientRect().top < 550) {
        progress_95.classList.add("animate-95")
    }
    if (progress_80.getBoundingClientRect().top > -10 && progress_80.getBoundingClientRect().top < 550) {
        progress_80.classList.add("animate-80")
    }
})
