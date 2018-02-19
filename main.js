gotoEmail = function () {
    if (!document.getElementById('email').checked)
        document.getElementById('email-window').scrollIntoView({
            behavior: 'smooth'
        });
}