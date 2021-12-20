function sendMail() {

    var body = document.getElementById("myTextarea").value;
    window.location.href = "mailto:fenharel55@bk?subject=From Site &body="+body;
}
