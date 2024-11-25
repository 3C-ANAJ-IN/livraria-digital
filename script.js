//ANA JÚLIA RIBEIRO FERREIRA - 2C 25.11.24


// PROXIMA PÁGINA

document.querySelectorAll('.btn-proximo').forEach(button => {
    button.addEventListener('click', function () {
        const nextStep = this.getAttribute('data-proximo');
        showStep(nextStep);
    });
});
function showStep(step) {
    const allSteps = document.querySelectorAll('.passo');
    allSteps.forEach(passo => passo.classList.remove('ativo'));
    const currentPasso = document.getElementById('passo-' + step);
    currentPasso.classList.add('ativo');
}



// CONFIG MENU
document.getElementById('botao').
    addEventListener('click',
        function () {
            var menu = document.getElementById
                ('menu')
            if (menu.style.display === 'block') {
                menu.style.display = 'none';
            }
            else {
                menu.style.display = 'block'

            }
        });



document.querySelector('.exit').addEventListener('click', function () {
    var menu = document.getElementById('menu');
    menu.style.display = 'none';
});



window.addEventListener('click', function
    (event) {

    var menu = document.getElementById
        ('menu');
    var button = document.getElementById
        ('botao');
    if (!menu.contains(event.target) && event.target
        !== button) {
        menu.style.display = 'none';
    }
})



// Função para abrir o popup
function openPopup(popupId) {
    const popup = document.getElementById(popupId);
    const pageContent = document.getElementById('page-content');
    
    popup.style.display = 'block';
    pageContent.classList.add('blur');  // Adiciona o desfoque ao conteúdo

    // Fechar o popup clicando fora dele
    window.onclick = function (event) {
        if (event.target == popup) {
            closePopup(popupId);
        }
    }
}

// Função para fechar o popup
function closePopup(popupId) {
    const popup = document.getElementById(popupId);
    const pageContent = document.getElementById('page-content');
    
    popup.style.display = 'none';
    pageContent.classList.remove('blur');  // Remove o desfoque do conteúdo
}








const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        // Fecha todos os outros itens
        faqItems.forEach(otherItem => {
            if (item !== otherItem) {
                otherItem.querySelector('.faq-answer').style.display = 'none';
            }
        });

        // Abre ou fecha o item clicado
        answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
    });
});