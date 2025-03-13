// Cookie Consent
document.addEventListener("DOMContentLoaded", () => {
    const cookieConsent = document.getElementById("cookieConsent")
    const cookieAccept = document.getElementById("cookieAccept")

    // Check if user has already accepted cookies
    if (!localStorage.getItem("cookieConsent")) {
        cookieConsent.style.display = "block"
    }

    cookieAccept.addEventListener("click", () => {
        localStorage.setItem("cookieConsent", "true")
        cookieConsent.style.display = "none"
    })

})