function sommeNombresPremiers(nombre1, nombre2) {

    const estPremier = (num) => {
        if (num <= 1) return false; // Les nombres <= 1 ne sont pas premiers
        for (let i = 2; i <= Math.sqrt(num); i++) {
            // console.log(i);
            if (num % i === 0) {
                return false; // Si num est divisible par i, ce n'est pas un nombre premier
            }
        }
        return true;
    };

    // Vérifie si les deux nombres sont premiers
    if (estPremier(nombre1) && estPremier(nombre2)) {
        console.log("La somme des deux nombres premiers est : " + (nombre1 + nombre2));
    } else {
        console.log("Un des deux nombres ou les deux nombres ne sont pas premiers");
    }
}

// Affichage des résultats
sommeNombresPremiers(100, 5);
sommeNombresPremiers(3, 5);