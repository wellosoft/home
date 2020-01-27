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

/* Tracking */

function track(str) {
    galite('send', 'event', 'Link', str);
}

particlesJS.load('particles-js', 'js/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });

