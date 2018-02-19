gotoEmail = function () {
    if (!document.getElementById('email').checked)
        document.getElementById('email-window').scrollIntoView({
            behavior: 'smooth'
        });
}

goTop = function () {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
}
