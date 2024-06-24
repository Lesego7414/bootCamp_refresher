document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.querySelector('.game-board');
    const scoreDisplay = document.querySelector('.score');
    let score = 0;
    let flippedCards = [];
    let matchedCards = 0;

    // Fetch the card data
    fetch('./data/letters.json')
        .then(response => response.json())
        .then(data => {
            const cardsArray = [...data, ...data]; // duplicate the cards array for pairs
            cardsArray.sort(() => 0.5 - Math.random()); // shuffle the cards

            // Create card elements
            cardsArray.forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.classList.add('card');
                cardElement.dataset.name = card.name;

                const frontElement = document.createElement('div');
                frontElement.classList.add('front');

                const frontImage = document.createElement('img');
                frontImage.src = card.image;
                frontImage.alt = card.name;
                frontImage.classList.add('front-image');

                frontElement.appendChild(frontImage);

                const backElement = document.createElement('div');
                backElement.classList.add('back');

                cardElement.appendChild(frontElement);
                cardElement.appendChild(backElement);

                gridContainer.appendChild(cardElement);
            });

            // event listeners for card flipping
            document.querySelectorAll('.card').forEach(card => card.addEventListener('click', flipCard));
        });

    function flipCard() {
        if (this.classList.contains('flipped') || flippedCards.length === 2) return;

        this.classList.add('flipped');
        flippedCards.push(this);

        if (flippedCards.length === 2) {
            checkForMatch();
        }
    }

    function checkForMatch() {
        const [firstCard, secondCard] = flippedCards;
        if (firstCard.dataset.name === secondCard.dataset.name) {
            disableCards();
        } else {
            unflipCards();
        }
    }

    function disableCards() {
        flippedCards.forEach(card => card.removeEventListener('click', flipCard));
        resetBoard();
        matchedCards += 2;
        score++;
        scoreDisplay.textContent = score;

        if (matchedCards === document.querySelectorAll('.card').length) {
            setTimeout(() => alert('Congratulations! You have matched all cards.'), 500);
        }
    }

    function unflipCards() {
        setTimeout(() => {
            flippedCards.forEach(card => card.classList.remove('flipped'));
            resetBoard();
        }, 1000);
    }

    function resetBoard() {
        flippedCards = [];
    }

    window.restart = function() {
        gridContainer.innerHTML = '';
        score = 0;
        scoreDisplay.textContent = score;
        matchedCards = 0;
        flippedCards = [];
        
        fetch('./data/letters.json')
            .then(response => response.json())
            .then(data => {
                const cardsArray = [...data, ...data];
                cardsArray.sort(() => 0.5 - Math.random());

                cardsArray.forEach(card => {
                    const cardElement = document.createElement('div');
                    cardElement.classList.add('card');
                    cardElement.dataset.name = card.name;

                    const frontElement = document.createElement('div');
                    frontElement.classList.add('front');

                    const frontImage = document.createElement('img');
                    frontImage.src = card.image;
                    frontImage.alt = card.name;
                    frontImage.classList.add('front-image');

                    frontElement.appendChild(frontImage);
                    const backElement = document.createElement('div');
                    backElement.classList.add('back');

                    cardElement.appendChild(frontElement);
                    cardElement.appendChild(backElement);

                    gridContainer.appendChild(cardElement);
                });

                document.querySelectorAll('.card').forEach(card => card.addEventListener('click', flipCard));
            });
    };
});
