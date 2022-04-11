const btncheck2 = document.getElementById('btncheck2');
const btncheck3 = document.getElementById('btncheck3');
const body =document.querySelector('.body');

btncheck2.addEventListener('click', e => {
    body.classList.toggle('tema2');
})



btncheck3.addEventListener('click', e => {
    body.classList.toggle('tema3');
})