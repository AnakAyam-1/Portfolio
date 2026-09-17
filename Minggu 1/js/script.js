// ==========================
// CONTACT FORM
// ==========================

emailjs.init("yKVAarBSY65nZSm8K");

document
.getElementById("contact-form")
.addEventListener("submit", function(event) {

    event.preventDefault();


    let params = {

        name: document.getElementById("name").value,

        email: document.getElementById("email").value,

        message: document.getElementById("message").value

    };

    emailjs.send(

        "service_n5ky8fj",

        "template_1cvsnfc",

        params

    )


    .then(function(response) {

        alert("Message sent successfully!");

        document
        .getElementById("contact-form")
        .reset();


    })


    .catch(function(error) {

        alert("Failed to send message.");

        console.log(error);

    });


});