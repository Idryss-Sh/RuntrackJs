function tri(order ,numbers){

    // Condition tri dans l'ordre croissant
    if(order == "asc"){
        // sort() compare tous les éléments en esseyant de les soustraire
        // Si a-b est négatif, a est avant b
        console.log(numbers.sort(function(a, b){return a-b}));

    // Condition tri dans l'ordre déc
    }else if(order == "desc"){
        console.log(numbers.sort(function(a, b){return b-a}));
    }

}

// Affichage des résultats
tri("desc", [99, 100, 101, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);