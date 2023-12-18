$(document).ready(function () {
    var clickTimeout;
    var isDoubleClick = false;

    $('p').click(function () {
        clickTimeout = setTimeout(function () {
            if (!isDoubleClick) {
                $('body').append('<p>This is a click Event</p>');
            }
            isDoubleClick = false;
        }, 250);

    }).dblclick(function () {
        clearTimeout(clickTimeout);
        $('body').append('<p>This is a double-click Event</p>');
        isDoubleClick = true;
    });
});
