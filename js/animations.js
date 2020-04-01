var progress_95 = document.getElementsByClassName('progress')[0]
var progress_80 = document.getElementsByClassName('progress')[1]
var progress_100 = document.getElementsByClassName('progress')[2]
var progress_90 = document.getElementsByClassName('progress')[3]

document.addEventListener('scroll', function() {
    if (progress_95.getBoundingClientRect().top > -10 && progress_95.getBoundingClientRect().top < 550) {
        progress_95.classList.add("animate-95")
    }
    if (progress_80.getBoundingClientRect().top > -10 && progress_80.getBoundingClientRect().top < 550) {
        progress_80.classList.add("animate-80")
    }
    if (progress_100.getBoundingClientRect().top > -10 && progress_100.getBoundingClientRect().top < 550) {
        progress_100.classList.add("animate-100")
    }
    if (progress_90.getBoundingClientRect().top > -10 && progress_90.getBoundingClientRect().top < 550) {
        progress_90.classList.add("animate-90")
    }
})
