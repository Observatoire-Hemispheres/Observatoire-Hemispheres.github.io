const scriptURL = "https://script.google.com/macros/s/AKfycbz_rSMM4txNiH53qir3K4m1WBwc8Gier4RzZTHne5Bo9nlZU0t7GoVUqM5EOuiYsgsb/exec";
const form = document.getElementById("contactForm");
const status = document.getElementById("status");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: JSON.stringify({
        "name": form.name.value,
        "email": form.email.value,
        "message": form.message.value
    })
})
.then(response => {
    status.innerHTML = `<div class="alart alert-success"> "Merci ! Votre message a bien été envoyé." </div>`;
    form.reset();
})
.catch(error => {
    console.error("Erreur :", error);
    status.innerHTML = `<div class="alert alert-danger"> "Désolé, une erreur s'est produite. Veuillez réessayer plus tard." </div>`;
});
});