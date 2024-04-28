const myObserver = new IntersectionObserver( (sections) => {
    sections.forEach((section) => {
        if (section.isIntersecting){
            section.target.classList.add('show')
        } else{
            section.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hidden')
const logo = document.querySelectorAll('.divhidden')
const slogan = document.querySelectorAll('.slogan')

elements.forEach( (element) => myObserver.observe(element))
logo.forEach( (imagem) => myObserver.observe(imagem))
slogan.forEach( (texto) => myObserver.observe(texto))
