//ANA JÚLIA RIBEIRO FERREIRA - 2C


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
