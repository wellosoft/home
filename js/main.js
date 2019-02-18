gotoEmail = function () {
    $('.master-slick').slick('slickGoTo', 2);
    $('#nav-check').prop('checked', false);
}

goTop = function () {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
}
