// The MIT License (MIT)

// Copyright (c) [year] [fullname]

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
// app.js
$(document).ready(function() {
    $('.shopping-list').on('click', 'li', function() {
        // console.log('mousedown li')
        if ($(this).attr('aria-checked') === '') {
            //uncheck
            $(this).removeAttr('aria-checked');
        } else {
            //check the box
            $(this).attr('aria-checked', '');
        }
    });
    // append user input as new item in list
    $('#add-list-item').keyup(function(event) {
        // console.log('keypress: ' + event.which);
        if ($('#add-list-item').val() != '') {
            if (event.which == 13) {
                $('.shopping-list').append('<li>' + $('#add-list-item').val() + '<span></span></li>');
                $('#add-list-item').val('');
            }
        } else {
            alert('Please enter a value before trying to add an item.');
        }
    });
    // allow user to remove an item from the list
    $('.shopping-list').on('click', 'li span', function() {
        //console.log(this.closest('li'));
        $(this).closest('li').remove();
    });
    // Allow user to drag items to re-order them
    $('.shopping-list').sortable();
    $('.shopping-list').disableSelection();
});