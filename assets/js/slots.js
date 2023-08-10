// Função para gerar um número aleatório entre 0 e 2 (índices dos emojis)
function getRandomEmojiIndex() {
    return Math.floor(Math.random() * 3);
}

// Função para obter um emoji aleatório de fruta
function getRandomFruitEmoji() {
    const emojis = ['🍒', '🍊', '🍇'];
    const randomIndex = getRandomEmojiIndex();
    return emojis[randomIndex];
}

// Função para remover a mensagem de vitória (caso exista)
function removeWinMessage(slotElement) {
    const winMessage = slotElement.querySelector('.win-message');
    if (winMessage) {
        winMessage.remove();
    }
}

// Função para rodar um slot e verificar a vitória
function playSlot(slotElement) {
    removeWinMessage(slotElement);

    const emojis = [];

    // Gira o slot três vezes
    for (let i = 0; i < 3; i++) {
        emojis.push(getRandomFruitEmoji());
    }

    // Exibe os emojis finais no resultado
    slotElement.textContent = emojis.join(' ');

    // Verifica se os emojis são iguais e exibe a mensagem de vitória se necessário
    if (emojis[0] === emojis[1] && emojis[1] === emojis[2]) {
        const winMessage = document.createElement('p');
        winMessage.classList.add('win-message');
        winMessage.style.color = 'red';
        winMessage.style.fontSize = '30px';
        winMessage.style.fontWeight = 'bold';
        winMessage.textContent = 'Parabéns, você ganhou!';
        slotElement.insertAdjacentElement('afterend', winMessage);
    }
}

// Evento de clique nos botões "Jogar"
const playButtons = document.querySelectorAll('.slot button');
playButtons.forEach(button => {
    button.addEventListener('click', () => {
        const slotElement = button.parentElement.querySelector('.emoji');
        playSlot(slotElement);
    });
});
