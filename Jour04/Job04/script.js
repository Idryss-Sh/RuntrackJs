function verifierConnexionInscription() {
    document.getElementById('connexion').addEventListener('submit', function(event) {
        event.preventDefault();

        // Form Connexion
        const email = document.querySelector('#email').value;
        const mdp = document.querySelector('#mdp').value;

        // Form Inscription
        const prenom = document.querySelector('#prenom').value;
        const nom = document.querySelector('#nom').value;
        
        // Erreur Email
        const requiredEmail = document.getElementById('requiredEmail');
        const emailAlert = document.getElementById('emailAlert');

        // Erreur MDP
        const requiredMdp = document.getElementById('requiredMdp');
        const length = document.getElementById('length');
        const charAlert = document.getElementById('char');
        const upper = document.getElementById('upper');

        // Erreur Prenom / Nom
        const requiredPrenom = document.getElementById('requiredPrenom');
        const requiredNom = document.getElementById('requiredNom');
        const lengthPrenom = document.getElementById('lengthPrenom');
        const lengthNom = document.getElementById('lengthNom');

        console.log(email);
        console.log(mdp);

        // Fonction pour afficher/masquer des alertes
        function toggleAlert(alertElement, condition) {
            alertElement.style.display = condition ? 'block' : 'none';
        }

        toggleAlert(requiredEmail, email.trim() === "");

        // Vérification Email
        if (email.trim() !== ""){
            toggleAlert(emailAlert, !(email.includes('@') && email.includes('.')));
        }else{
            toggleAlert(requiredMdp, false)
        }

        // Vérification MDP
        toggleAlert(requiredMdp, mdp.trim() === "");

        if (mdp.trim() !== "") {
            toggleAlert(length, mdp.length <= 5);
            toggleAlert(charAlert, !(mdp.includes('!') || mdp.includes('@') || mdp.includes('?')));
            toggleAlert(upper, !/[A-Z]/.test(mdp));
        } else {
            toggleAlert(length, false);
            toggleAlert(charAlert, false);
            toggleAlert(upper, false);
        }


        // Verification Prenom / Nom
        toggleAlert(requiredPrenom, prenom.trim() == "");

        if(prenom.trim( ) !== ""){
            toggleAlert(lengthPrenom, prenom.length <= 5)
        }

        if(nom.trim( ) !== ""){
            toggleAlert(lengthNom, nom.length <= 5)
        }

        toggleAlert(requiredNom, nom.trim() == "");
    });
}

verifierConnexionInscription();