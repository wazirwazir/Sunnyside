const tab = document.querySelector('button')
const ulink = document.querySelector('#ulinks')

function tat() {
    ulink.classList.toggle('hide')
}
tab.addEventListener('click', tat)