function citation(){

    // récupère le click du bouton
    const button = document.getElementById('button');
    const citation = document.getElementById('citation');

    button.addEventListener("click", function() {

        console.log(citation.innerText);

    });
}

citation();