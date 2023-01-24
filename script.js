// Displaying current date using moment()
// Setting the text of the paragraph with #currentDay" to be the current date.
let currentDate = $("#currentDay");
let today = moment();
$("#currentDay").text("Today's date is: " + today.format('YYYY-MM-DD'));