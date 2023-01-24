// Displaying current date using moment()
// Setting the text of the paragraph with #currentDay" to be the current date.
let currentDate = $("#currentDay");
let today = moment();
$("#currentDay").text("Today's date is: " + today.format('YYYY-MM-DD'));

// Creating a new div element and giving it a class of row.  
// Have appended the new div to the container div.
let rowDiv = $('<div>');
rowDiv.addClass('row');

let containerEl = $('.container');
containerEl.append(rowDiv);