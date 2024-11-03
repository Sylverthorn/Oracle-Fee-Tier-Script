function automateButtons() {
    var continueButton = Array.from(document.querySelectorAll('button')).find(button => button.textContent.trim() === 'Continuer à travailler');
    
    if (continueButton) {
        continueButton.click();
        console.log("Bouton 'Continuer à travailler' cliqué");
    } else {
        var createButton = Array.from(document.querySelectorAll('button')).find(button => button.textContent.trim() === 'Créer');
        if (createButton) {
            createButton.click();
            console.log("Bouton 'Créer' cliqué");
        }
    }
}


setInterval(automateButtons, 30000);
