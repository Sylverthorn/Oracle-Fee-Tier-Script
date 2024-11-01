// Fonction pour gérer le clic sur "Créer" et "Continuer à travailler"
function automateButtons() {
    // Vérifie si le bouton "Continuer à travailler" est présent
    var continueButton = Array.from(document.querySelectorAll('button')).find(button => button.textContent.trim() === 'Continuer à travailler');
    
    if (continueButton) {
        continueButton.click();
        console.log("Bouton 'Continuer à travailler' cliqué");
    } else {
        // Si le bouton "Continuer à travailler" n'est pas présent, clique sur "Créer"
        var createButton = Array.from(document.querySelectorAll('button')).find(button => button.textContent.trim() === 'Créer');
        if (createButton) {
            createButton.click();
            console.log("Bouton 'Créer' cliqué");
        }
    }
}

// Exécuter la fonction toutes les 30 secondes (30 000 millisecondes)
setInterval(automateButtons, 30000);
