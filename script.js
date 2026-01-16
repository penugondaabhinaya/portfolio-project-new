<script>
document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
        "YOUR_SERVICE_ID",      // replace
        "YOUR_TEMPLATE_ID",     // replace
        this
    )
    .then(function() {
        alert("Message sent successfully!");
        document.getElementById("contact-form").reset();
    }, function(error) {
        alert("Failed to send message. Try again!");
        console.log(error);
    });
});
</script>
