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

// Creating textarea element and button element. 
// Gave the button the class that was targeted in css.
let textareaEl = $('<textarea>');
textareaEl.addClass('col-8');
rowDiv.append(textareaEl);

let saveBtn = $('<button>');
rowDiv.append(saveBtn);
saveBtn.text('save');
saveBtn.addClass('saveBtn');

// Adding an event listener to the save button and saving the input to the local storage.
let userImput = localStorage.getItem("col-8");
saveBtn.on("click", function (event) {
  event.preventDefault();
  localStorage.setItem("input", userImput);
});