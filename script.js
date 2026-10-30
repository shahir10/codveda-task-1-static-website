// This is a front-end demonstration only.
// It does not send the form data to an email address or server.
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    if (form && status) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();
            status.textContent = "Thank you! This demo form is not connected to a server, so your message was not sent.";
            form.reset();
        });
    }
});
