function jourTravaille(date) {
    // Liste des jours fériés en 2024
    const joursFeries = [
        new Date('2024-01-01'),
        new Date('2024-04-01'),
        new Date('2024-05-01'),
        new Date('2024-05-08'),
        new Date('2024-05-20'),
        new Date('2024-07-14'),
        new Date('2024-08-15'),
        new Date('2024-11-01'),
        new Date('2024-11-11'),
        new Date('2024-12-25') 
    ];

    // Fonction pour comparer les dates (jour, mois et année uniquement)
    const estJourFerie = joursFeries.some(jourFerie => 
        jourFerie.getDate() === date.getDate() &&
        jourFerie.getMonth() === date.getMonth() &&
        jourFerie.getFullYear() === date.getFullYear()
    );

    // Extraction du jour, mois et année pour l'affichage
    const jour = date.getDate();
    const mois = date.getMonth() + 1;
    const annee = date.getFullYear();


    const estWeekend = date.getDay() === 0 || date.getDay() === 6; // 0 = dimanche, 6 = samedi

    // Affichage du résultat
    if (estJourFerie) {
        console.log(`Le ${jour} ${mois} ${annee} est un jour férié.`);
    } else if (estWeekend) {
        console.log(`Non, le ${jour} ${mois} ${annee} est un week-end.`);
    } else {
        console.log(`Oui, le ${jour} ${mois} ${annee} est un jour travaillé.`);
    }
}

jourTravaille(new Date('2024-05-01'));  // Jour férié (1er mai)
jourTravaille(new Date('2024-05-04'));  // Week-end (samedi)
jourTravaille(new Date('2024-05-06'));  // Jour travaillé