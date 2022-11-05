
const containerQuestion = document.querySelector('.main__faq');
containerQuestion.addEventListener('click', (e)=>{
    if(e.target.tagName === 'IMG'){
        let parrafo = e.target.previousElementSibling.children[1];
        e.target.classList.toggle('main__icon--toggle')
        parrafo.classList.toggle('no-height');
        parrafo.classList.toggle('height');
    }
})
