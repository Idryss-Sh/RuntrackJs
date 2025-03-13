function afficherMasquerTexte() {
    const afficher = $('#afficher');
    const masquer = $('#masquer');
    const texte = $('#texte');

    texte.hide();

    afficher.on("click", function() {
        texte.show();
        afficher.hide();
        masquer.show();
    });

    masquer.on("click", function() {
        texte.hide();
        masquer.hide();
        afficher.show();
    });
}

$(document).ready(function() {
    afficherMasquerTexte();
});
