// Variables de jeu
let grid = [
    "img/logo1.PNG", "img/logo2.PNG", "img/logo3.PNG",
    "img/logo4.PNG", "img/logo5.PNG", "img/logo6.PNG",
    "img/logo7.PNG", "logo8.PNG", null
];

let emptySpot = 8; // La position de la case vide

// Initialisation du jeu
function initGame() {
    shuffle(grid); // Mélange les images
    createGrid(); // Crée la grille HTML
}

// Mélanger les images
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Échange les éléments
    }
}

// Créer la grille HTML
function createGrid() {
    const gridContainer = document.querySelector('.grid');
    const tiles = gridContainer.querySelectorAll('.tile');
    
    tiles.forEach((tile, index) => {
        const imgElement = tile.querySelector('img');
        if (grid[index]) {
            imgElement.src = grid[index];
            tile.classList.remove('empty');
        } else {
            tile.classList.add('empty');
        }
    });
}

// Déplacer une case
function movePiece(index) {
    if (isAdjacent(index, emptySpot)) {
        // Échange les cases
        [grid[index], grid[emptySpot]] = [grid[emptySpot], grid[index]];
        emptySpot = index; // Met à jour la position de la case vide
        createGrid(); // Met à jour la grille
    }
}

// Vérifie si une case est adjacente à la case vide
function isAdjacent(index, emptySpot) {
    const possibleMoves = [
        -1, 1, -3, 3 // Vérifie à gauche, à droite, en haut, en bas
    ];
    return possibleMoves.some(move => index + move === emptySpot);
}

// Ajouter des événements de clic aux cases
document.querySelectorAll('.tile').forEach(tile => {
    tile.addEventListener('click', () => {
        const index = parseInt(tile.dataset.index);
        movePiece(index);
    });
});

// Réinitialiser le jeu
document.getElementById('resetBtn').addEventListener('click', initGame);

// Initialiser le jeu au démarrage
initGame();
