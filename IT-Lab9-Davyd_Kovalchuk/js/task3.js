$(document).ready(function () {
    $('body').on('click', '*', function () {
        alert(`Clicked on ${$(this)[0].tagName}`);
    });
});