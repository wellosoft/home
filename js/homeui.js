/* Graphics */
var graphics = {
    images: [{
        image: "//res.cloudinary.com/wellosoft/image/upload/expertise/interactive-tothehighestplace.jpg",
        title: "To the Highest Place",
        desc: "Rule #1 is Move Higher",
        url: "//willnode.itch.io/tthp"
    }, {
        image: "//res.cloudinary.com/wellosoft/image/upload/expertise/library-simpleproceduralskybox.jpg",
        title: "Simple Procedural Skybox",
        desc: "Procedural Skybox with features",
        url: '//u3d.as/fCV'
    }, {
        image: "//res.cloudinary.com/wellosoft/image/upload/expertise/library-texdraw.jpg",
        title: "TEXDraw",
        desc: "Expressing math syntax made easy",
        url: '//u3d.as/mFe'
    }, {
        image: "//res.cloudinary.com/wellosoft/image/upload/expertise/library-engine4.png",
        title: "Engine4",
        desc: "Turn the game to one dimension higher",
        url: "//u3d.as/fdm"
    }],
    bg: (() => document.getElementById('graphics'))(),
    idx: 0,
    setg: function (delta) {
        const length = graphics.images.length;

        var g = graphics.bg;
        var idx = graphics.idx;
        g.style.filter = 'brightness(0)';

        idx += delta;
        if (idx >= length)
            idx = 0;
        else if (idx < 0)
            idx = length - 1;

        setTimeout(() => {
            g.style.filter = ''; var i = graphics.images[graphics.idx = idx];
            g.style.backgroundImage = 'url(' + i.image + ')';
            document.getElementById('graphics-link').setAttribute('href', i.url);
            document.getElementById('graphics-link').textContent = i.title + "  ↗";
            document.getElementById('graphics-desc').textContent = i.desc;
        }, 500);
    }
}

if (graphics.bg)
    graphics.setg(0);

/* Repos */
(function () {
    getForeground = function (bgColor) {
        /* //stackoverflow.com/a/41491220/3908409 */
        var color = (bgColor.charAt(0) === '#') ? bgColor.substring(1, 7) : bgColor;
        var r = parseInt(color.substring(0, 2), 16);
        var g = parseInt(color.substring(2, 4), 16);
        var b = parseInt(color.substring(4, 6), 16);
        return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ?
            '#000' : '#fff';
    };
    setMessage = function (txt) {
        document.getElementById('repos-stat').textContent = txt;
    };
    setMessage('Be patient. Our 🐒 still scraping the web for you...');
    var repos = [];
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://gh-latest-repos-mboegechzb.now.sh", true);
    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                repos = JSON.parse(xhr.responseText);
                repos.reverse();
                setMessage(repos.length === 0 ? 'Whoops. Nothing here. But we still 💖 U' : '');
                if (repos.length > 0) {
                    var result = '';
                    repos.forEach(r => {
                        result += `
<li>
    <a href='${r.url}'>
        <span class="repo">
            <span class="name">${r.name}</span>${
                !r.primaryLanguage ? "" :
                `<span class="lang" style="background-color: ${r.primaryLanguage.color}; color:${getForeground(r.primaryLanguage.color)}">${r.primaryLanguage.name}</span>`
                    }
        </span><br>
    </a>
    <a href='${r.url}'>
        <span class="desc">${r.description}</span>
    </a>
    <div>${r.stargazers ? ('⭐ ' + r.stargazers) : ''}</div>
</li>`;
                    });
                    document.getElementById('repos').innerHTML = result;
                }
            } else if (xhr.status === 202) {
                console.warn("REPOS: Resend after found 202");
                setTimeout(() => {
                    xhr.send();
                }, 1000);
            } else {
                setMessage(xhr.status + ": Sorry our monkeys have failed load your request 🤔");
            }
        }
    }
    xhr.send();
})();

/* Tracking */

function track(str) {
    galite('send', 'event', 'Link', str);
}

particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

