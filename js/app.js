let proximo = document.getElementById('proximo');
let anterior = document.getElementById('anterior');
let carrossel = document.querySelector('.carrossel');
let items = document.querySelectorAll('.carrossel .item');
let countItem = items.length;
let ativado = 1;
let outro_1 = null;
let outro_2 = null;
proximo.onclick = () => {
    carrossel.classList.remove('anterior');
    carrossel.classList.add('proximo');
    ativado =ativado + 1 >= countItem ? 0 : ativado + 1;
    outro_1 =ativado - 1 < 0 ? countItem -1 : ativado - 1;
    outro_2 = ativado + 1 >= countItem ? 0 : ativado + 1;

    mudarSlide();
}

const mudarSlide = () => {
    let antigoItemAtivado = document.querySelector('.carrossel .item.ativado');
    if(antigoItemAtivado) antigoItemAtivado.classList.remove('ativado');

    let antigoOutro_1 = document.querySelector('.carrossel .item.outro_1');
    if(antigoOutro_1) antigoOutro_1.classList.remove('outro_1');

    let antigoOutro_2 = document.querySelector('.carrossel .item.outro_2');
    if(antigoOutro_2) antigoOutro_2.classList.remove('outro_2');

    items.forEach(e => {
        e.querySelector('.image img').style.animation = 'none';
        e.querySelector('.image figcaption').style.animation = 'none';
        void e.offsetWidth;
        e.querySelector('.image img').style.animation = '';
        e.querySelector('.image figcaption').style.animation = '';
    })


    items[ativado].classList.add('ativado');
    items[outro_1].classList.add('outro_1');
    items[outro_2].classList.add('outro_2');
}   
