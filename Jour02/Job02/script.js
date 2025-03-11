function citaction(){

    const button = document.getElementById('button');
    const citation = document.getElementById('citation');

    button.addEventListener("click", function() {

        if (citation.style.display === "none") {
            // Si l'élément est caché on l'affiche
            citation.style.display = "block";
        } else {
            // Si l'élément est visible on le cache
            citation.style.display = "none";
        }
    });

}

citaction();