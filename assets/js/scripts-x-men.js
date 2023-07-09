const personagens = document.querySelectorAll('.personagem');


function alterarImagemPersonagemGrande(personagem) {
    const imagemPersongaemGrande = document.querySelector('.personagem-grande');
    const idPersonagem = personagem.attributes.id.value;
    imagemPersongaemGrande.src = `./assets/imagens/card-${idPersonagem}.png`;
}


function alterarNomeDescricaoPersonagem(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function retiraBordaPersonagemSelecionado() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {
        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        retiraBordaPersonagemSelecionado();
        personagem.classList.add('selecionado');
        alterarImagemPersonagemGrande(personagem);
        alterarNomeDescricaoPersonagem(personagem);
    })
});