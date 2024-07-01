$(document).ready(function () {
    $('.dropdown-btn').on('click', function () {
        $('.dropdown-menu').slideToggle('fast').toggleClass('hidden');
    })
    $('html').click(function (e) {
        $('.dropdown-menu').hide();
    });

    $('.dropdown-btn').click(function (e) {
        e.stopPropagation();
    });
});