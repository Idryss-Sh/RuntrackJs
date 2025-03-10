function flizzbuzz() {
    for (let i = 1; i <= 151; i++) {

        // On commence par vérifier FizzBuzz
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        // Ensuite, vérifier Fizz
        else if (i % 3 === 0) {
            console.log("Fizz");
        }
        // Puis vérifier Buzz
        else if (i % 5 === 0) {
            console.log("Buzz");
        }
        // Si aucune condition n'est remplie, afficher le numéro
        else {
            console.log(i);
        }
    }
}

// Affichage des résultats
flizzbuzz();