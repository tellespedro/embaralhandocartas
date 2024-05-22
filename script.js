const cards = document.querySelectorAll('.card');
const shuffleButton = document.getElementById('shuffle');
const drawButton = document.getElementById('draw');

// Função para embaralhar as cartas
function shuffleCards() {
    cards.forEach(card => {
        const randomIndex = Math.floor(Math.random() * cards.length);
        card.style.order = randomIndex;
    });
}

// Função para desenhar cartas
function drawCard() {
    const cards = document.querySelectorAll('.card');
const shuffleButton = document.getElementById('shuffle');
const drawButton = document.getElementById('draw');

// Baralho de cartas (52 cartas)
const deck = [
    { suit: '♠', value: 'A' },
    { suit: '♠', value: '2' },
    { suit: '♠', value: '3' },
    { suit: '♠', value: '4' },
    { suit: '♠', value: '5' },
    { suit: '♠', value: '6' },
    { suit: '♠', value: '7' },
    { suit: '♠', value: '8' },
    { suit: '♠', value: '9' },
    { suit: '♠', value: '10' },
    { suit: '♠', value: 'J' },
    { suit: '♠', value: 'Q' },
    { suit: '♠', value: 'K' },
    { suit: '♥', value: 'A' },
    { suit: '♥', value: '2' },
    { suit: '♥', value: '3' },
    { suit: '♥', value: '4' },
    { suit: '♥', value: '5' },
    { suit: '♥', value: '6' },
    { suit: '♥', value: '7' },
    { suit: '♥', value: '8' },
    { suit: '♥', value: '9' },
    { suit: '♥', value: '10' },
    { suit: '♥', value: 'J' },
    { suit: '♥', value: 'Q' },
    { suit: '♥', value: 'K' },
    { suit: '♦', value: 'A' },
    { suit: '♦', value: '2' },
    { suit: '♦', value: '3' },
    { suit: '♦', value: '4' },
    { suit: '♦', value: '5' },
    { suit: '♦', value: '6' },
    { suit: '♦', value: '7' },
    { suit: '♦', value: '8' },
    { suit: '♦', value: '9' },
    { suit: '♦', value: '10' },
    { suit: '♦', value: 'J' },
    { suit: '♦', value: 'Q' },
    { suit: '♦', value: 'K' },
    { suit: '♣', value: 'A' },
    { suit: '♣', value: '2' },
    { suit: '♣', value: '3' },
    { suit: '♣', value: '4' },
    { suit: '♣', value: '5' },
    { suit: '♣', value: '6' },
    { suit: '♣', value: '7' },
    { suit: '♣', value: '8' },
    { suit: '♣', value: '9' },
    { suit: '♣', value: '10' },
    { suit: '♣', value: 'J' },
    { suit: '♣', value: 'Q' },
    { suit: '♣', value: 'K' },
];

let drawnCards = []; // Array para armazenar as cartas desenhadas

// Função para embaralhar as cartas
function shuffleCards() {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]]; // Troca as cartas
    }
    drawnCards = []; // Limpa as cartas desenhadas
}

// Função para desenhar cartas
function drawCard() {
    if (drawnCards.length < 5) { // Limite de 5 cartas
        const cardIndex = Math.floor(Math.random() * deck.length);
        const drawnCard = deck.splice(cardIndex, 1)[0]; // Remove a carta do baralho
        drawnCards.push(drawnCard); // Adiciona a carta desenhada ao array

        // Exibe a carta na tela
        const cardElement = cards[drawnCards.length - 1];
        cardElement.innerHTML = `
            <div class="suit">${drawnCard.suit}</div>
            <div class="value">${drawnCard.value}</div>
        `;
    } else {
        alert('Você já desenhou 5 cartas!');
    }
}

// Eventos dos botões
shuffleButton.addEventListener('click', shuffleCards);
drawButton.addEventListener('click', drawCard);
}

// Eventos dos botões
shuffleButton.addEventListener('click', shuffleCards);
drawButton.addEventListener('click', drawCard);
