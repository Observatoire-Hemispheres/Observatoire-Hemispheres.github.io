// Fonction pour afficher la date et l'heure en temps réel
function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const datetimeString = now.toLocaleDateString('fr-FR', options);
    document.getElementById('datetime').textContent = datetimeString;
}

// Mise à jour immédiate et toutes les secondes
updateDateTime();
setInterval(updateDateTime, 1000);
