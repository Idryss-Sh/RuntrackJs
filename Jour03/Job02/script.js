const imagesOrder = [1, 2, 3, 4, 5, 6];
let currentOrder = [...imagesOrder];
let playerOrder = [];

function createImages() {
    const shuffledContainer = document.getElementById("shuffled-container");
    const playerContainer = document.getElementById("player-container");
    shuffledContainer.innerHTML = "";
    playerContainer.innerHTML = "";

    currentOrder.forEach(num => {
        const img = document.createElement("img");
        img.src = `img/arc${num}.png`;
        img.className = "image";
        img.dataset.index = num;
        img.addEventListener("click", moveToPlayer);
        shuffledContainer.appendChild(img);
    });
}

function shuffleImages() {
    currentOrder.sort(() => Math.random() - 0.5);
    playerOrder = [];
    createImages();
}

function moveToPlayer(event) {
    const img = event.target;
    const playerContainer = document.getElementById("player-container");

    if (!playerOrder.includes(Number(img.dataset.index))) {
        playerOrder.push(Number(img.dataset.index));
        playerContainer.appendChild(img);
        checkWin();
    }
}

function checkWin() {
    const message = document.getElementById("message");
    if (playerOrder.length === imagesOrder.length) {
        if (JSON.stringify(playerOrder) === JSON.stringify(imagesOrder)) {
            message.textContent = "Vous avez gagné";
            message.style.color = "green";
        } else {
            message.textContent = "Vous avez perdu";
            message.style.color = "red";
        }
    } else {
        message.textContent = "";
    }
}

createImages();
