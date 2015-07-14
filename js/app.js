// app.js
$(document).ready(function() {
    $('.shopping-list li').mousedown(function() {
        // console.log('mousedown li')
        $(this).toggleClass('checked');
    });
});