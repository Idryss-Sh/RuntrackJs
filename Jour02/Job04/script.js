const text = document.getElementById('keylogger');
const textarea = document.getElementById('textarea');

function keyboard(event) {
    
    const touches = event.key;

    // Vérifie si la touche pressée est une lettre (A-Z ou a-z)
    const lettres = /^[A-Za-z]$/.test(touches);

    if (lettres) {
        // Si le focus est sur le textarea ajoute la touche deux fois
        if (document.activeElement === textarea) {
            text.value += touches + touches;
        } else {
            // Si le focus est ailleurs ajoute la touche une seule fois
            text.value += touches;
        }
    }
}


document.addEventListener('keydown', keyboard);