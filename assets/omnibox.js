const omniboxLibraryLocale = {
    "welcome1": [
        "Hi there!", "Konnichiwa", "Bonjour", "Good morning", "Good evening", "Good night"
    ],
    "welcome2": [
        "This website uses web session storage so I don't spell boring words (try to refresh and i'll say something different)",
        "This website uses web session storage so I don't spell boring words (try to refresh and i'll say different)",
    ],
}

let welcomeTimer = null;
let visited = sessionStorage.getItem('visited');
function updateOmnibox(page) {
    var callout = document.getElementById('callout');
    callout.innerText = omniboxLibraryLocale[page][Math.floor(Math.random() * omniboxLibraryLocale[page].length)];
}

window.addEventListener('DOMContentLoaded', (event) => {
    console.log("Trust me you wouldn't want to open this website source");

    sessionStorage.setItem('visited', '1');
    window.setTimeout(() => {
        updateOmnibox('welcome1');
        welcomeTimer = window.setInterval(() => {
            updateOmnibox('welcome2');
        }, 7000);
    }, 3000);
});