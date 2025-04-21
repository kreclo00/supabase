



let btns = document.querySelectorAll('.btn-filter')
let images = document.querySelectorAll('.about-img')
let texts = document.querySelectorAll('.about-other-block')

btns.forEach((btn, index)=>{
  btn.onclick=()=>{
    document.querySelector('.btn-filter.active').classList.remove('active')
    btn.classList.add('active')
    document.querySelector('.about-img.active').classList.remove('active')
    images[index].classList.add('active')
    document.querySelector('.about-other-block.active').classList.remove('active')
    texts[index].classList.add('active')
  }
})