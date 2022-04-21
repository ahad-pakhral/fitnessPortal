
const colorVar1 = '--color-1'
const colorVar2 = '--color-2'


const colorDefault = document.getElementById("color-1")
colorDefault.addEventListener('click', _ => {
    document.documentElement.style.setProperty(colorVar1, '#4A171E')
    document.documentElement.style.setProperty(colorVar2, '#E2B143')
})

const colorTwo = document.getElementById("color-2")
colorTwo.addEventListener('click', _ => {
    document.documentElement.style.setProperty(colorVar1, '#921416')
    document.documentElement.style.setProperty(colorVar2, '#4B878B')
})

const colorThree = document.getElementById("color-3")
colorThree.addEventListener('click', _ => {
    document.documentElement.style.setProperty(colorVar1, '#58127F')
    document.documentElement.style.setProperty(colorVar2, '#820F81')
})

const colorDark = document.getElementById("color-dark")
colorDark.addEventListener('click', _ => {
    document.documentElement.style.setProperty(colorVar1, 'rgba(0,0,0,1)')
    document.documentElement.style.setProperty(colorVar2, 'rgba(0,0,0,0.7)')
})