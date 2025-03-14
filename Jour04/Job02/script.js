const fs = require('fs');

// Lire le fichier JSON
const jsonString = fs.readFileSync('parametre.json', 'utf-8');

// Fonction pour obtenir la valeur par clé
function jsonValueKey(jsonString, key) {
    try {
        let jsonObject = JSON.parse(jsonString);
        return jsonObject[key];
    } catch (e) {
        console.error("Invalid JSON string");
        return null;
    }
}

// Exemple d'utilisation
let clé = "name";
console.log(jsonValueKey(jsonString, clé)); 

clé = "adress";
console.log(jsonValueKey(jsonString, clé)); 

clé = "city";
console.log(jsonValueKey(jsonString, clé));