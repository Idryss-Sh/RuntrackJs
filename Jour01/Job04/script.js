function bisextile(annee){

    // Si l'année est divisible par 4 et non divisible par 100 ou divisible par 400
    if(annee % 4 == 0 && annee % 100!= 0 || annee % 400 == 0){
        return "L'année est bisextile";
    }else{
        return "L'année n'est pas bisextile";
    }
}

// Affichage des résultats
console.log(bisextile(2020));
console.log(bisextile(2025));