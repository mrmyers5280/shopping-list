// The MIT License (MIT)

// Copyright (c) 2015 Mike Myers

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
// app.js
$(document).ready(function() {
	var shoppingList = $('.shopping-list');
	var lines = $('.lines');
	shoppingList.on('click', 'li', function() {
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
				shoppingList.append('<li>' + $('#add-list-item').val() + '<span></span></li>');
				$('#add-list-item').val('');
				lines.css('height', addHeight());
			}
		} else {
			alert('Please enter a value before trying to add an item.');
		}
	});
	// allow user to remove an item from the list
	shoppingList.on('click', 'li span', function() {
		//console.log(this.closest('li'));
		$(this).closest('li').remove();
		lines.css('height', removeHeight());
	});
	// Allow user to drag items to re-order them
	shoppingList.sortable();
	shoppingList.disableSelection();

	var addHeight = function() {
		var x = lines.css('height');
		var y = parseInt(x) + 43;
		x = y + "px";
		return x;
	};
	var removeHeight = function() {
		var x = lines.css('height');
		var y = parseInt(x) - 43;
		x = y + "px";
		return x;
	};
});
