const omniboxLibraryLocale = {
    "welcome": [
        "Hi there!", "Konnichiwa", "Bonjour", "Good morning", "Good evening", "Good night"
    ],
    "thoughts": [
        "This website uses web session storage so I don't spell boring words.",
        "Why I end up being a software engineer? Because I love games (solving problems/puzzle games), and I am a lazy person.",
        "I write code to feed my left-brain, I write blogs to feed my right-brain.",
        "I love playing games and watching movies that primilary focus on character development.",
        "I particularly active in Twitter, and also LinkedIn. I open Instagram only for the memes.",
        "For unknown reasons, I like salty food. Maybe I consume salts more than the average.",
        "UX is an underrated concept. I know you will be mad if you can't skip waiting for next thought by clicking this balloon.",
        "I often forget or lazy to do workout in the morning. My future life will be mad at me.",
        "I won't change my profile picture until I graduated from college.",
        "There's 1% chance that this page will redirects to [some surpise] page if you hit the refresh button."
    ],
}

let welcomeTimer = null;
let visited = sessionStorage.getItem('visited');

function updateOmnibox(page) {
    var callout = document.getElementById('callout');
    callout.innerText = omniboxLibraryLocale[page][visited ? Math.floor(Math.random() * omniboxLibraryLocale[page].length) : 0];
}

function rollThough() {
    if (welcomeTimer) {
        clearTimeout(welcomeTimer);
    }
    welcomeTimer = setTimeout(function () {
        welcomeTimer = null;
        updateOmnibox('thoughts');
        if (!visited) {
            sessionStorage.setItem('visited', '1');
            visited = true;
        }
        rollThough();
    }, 10000);

}

window.addEventListener('DOMContentLoaded', (event) => {
    console.log("Trust me you wouldn't want to open this website source");
    window.setTimeout(() => {
        updateOmnibox('welcome');
        rollThough();
    }, 3000);
});