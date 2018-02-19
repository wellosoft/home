gotoEmail = function () {
    if (!document.getElementById('email').checked)
        document.getElementById('email-window').scrollIntoView({
            behavior: 'smooth'
        });
}

// Google analytics
galite('create', 'UA-109180894-1', 'auto');
galite('send', 'pageview');
