// app.js
$(document).ready(function() {
    $('.shopping-list').on('click', 'li', function() {
        // console.log('mousedown li')
        $(this).toggleClass('checked');
    });
    // append user input as new item in list
    $('#add-list-item').keyup(function(event) {
        // console.log('keypress: ' + event.which);
        if ($('#add-list-item').val() != '') {
            if (event.which == 13) {
                $('.shopping-list').append('<li>' + $('#add-list-item').val() + '</li>');
                $('#add-list-item').val('');
            }
        } else {
            alert('Please enter a value before trying to add an item.');
        }
    });
    // allow user to remove and item from the list
});