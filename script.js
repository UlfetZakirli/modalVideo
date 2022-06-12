let btn = document.getElementById('btn-id')
let clip = document.querySelector('.clip')
let close = document.querySelector('.close')
let iframe = document.querySelector('iframe')


btn.onclick = function () {
    btn.classList.add('active')
    clip.classList.add('active')
    iframe.currentTime = 0
    iframe.play()
}
close.onclick = function () {
        btn.classList.remove('active')
        clip.classList.remove('active')
        iframe.pause()
    }



// https://youtu.be/4ryaF96Lh4s
// https://www.youtube.com/watch?v=4ryaF96Lh4s