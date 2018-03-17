function setImg(name, delta) {
    const length = window[name + '_imgs'].length;

    var g = document.getElementById(name);
    var idx = window[name + '_i'] || 0;
    g.style.filter = 'brightness(0)';

    idx += delta;
    if (idx >= length)
        idx = 0;
    else if (idx < 0)
        idx = length - 1;

    setTimeout(() => {
        g.style.filter = ''; var i = window[name + '_imgs'][window[name + '_i'] = idx];
        g.style.backgroundImage = 'url(' + i.image + ')';
        document.getElementById(name + '-link').setAttribute('href', i.url);
        document.getElementById(name + '-link').textContent = i.title + "  ↗";
        document.getElementById(name + '-desc').textContent = i.desc;
    }, 500);
}
