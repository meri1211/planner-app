// Displaying current date using moment()
// Setting the text of the paragraph with #currentDay" to be the current date.
let currentDate = $("#currentDay");
let today = moment();
$("#currentDay").text("Today's date is: " + today.format('YYYY-MM-DD'));

// We need to grab the div with the #container and inside it, create the list items, set their text and append them.
let containerEl = $(".container");
let timeBlock = $("<li>");
timeBlock.text("9 AM");
containerEl.append(timeBlock);