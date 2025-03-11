function addOne(){

    const button = document.getElementById('button');
    const compteur = document.getElementById('compteur');

    button.addEventListener("click", function() {

        // On récupère la valeur du compteur
        let valeur = parseInt(compteur.innerText);

        // On ajoute 1 à la valeur
        valeur++;

        // On affiche la nouvelle valeur
        compteur.innerText = valeur;

    });
}

addOne();