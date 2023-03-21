var todayDate = dayjs();

$('#currentDay').text(todayDate.format('MMM D, YYYY'));

console.log(todayDate.hour());

$(function () {
  var hour = todayDate.hour();
  var h9Row = $('#hour-9');
  if (hour < 9 && hour >= 0) {
    h9Row.addClass("future");
  } else if (hour >= 10 && hour < 24) {
    h9Row.addClass("past");
  } else {
    h9Row.addClass("present");
}});

$(function () {
  var hour = todayDate.hour();
  var h10Row = $('#hour-10');
  if (hour < 10 && hour >= 0) {
    h10Row.addClass("future");
  } else if (hour >= 11 && hour < 24) {
    h10Row.addClass("past");
  } else {
    h10Row.addClass("present");
}});

$(function () {
  var hour = todayDate.hour();
  var h11Row = $('#hour-11');
  if (hour < 11 && hour >= 0) {
    h11Row.addClass("future");
  } else if (hour >= 12 && hour < 24) {
    h11Row.addClass("past");
  } else {
    h11Row.addClass("present");
}});

$(function () {
  var hour = todayDate.hour();
  var h12Row = $('#hour-12');
  if (hour < 12 && hour >= 0) {
    h12Row.addClass("future");
  } else if (hour >= 13 && hour < 24) {
    h12Row.addClass("past");
  } else {
    h12Row.addClass("present");
}});

$(function () {
  var hour = todayDate.hour();
  var h13Row = $('#hour-13');
  if (hour < 13 && hour >= 0) {
    h13Row.addClass("future");
  } else if (hour >= 14 && hour < 24) {
    h13Row.addClass("past");
  } else {
    h13Row.addClass("present");
}});

$(function () {
    var hour = todayDate.hour();
    var h14Row = $('#hour-14');
    if (hour < 14 && hour >= 0) {
      h14Row.addClass("future");
    } else if (hour >= 15 && hour < 24) {
      h14Row.addClass("past");
    } else {
      h14Row.addClass("present");
}});

$(function () {
    var hour = todayDate.hour();
    var h15Row = $('#hour-15');
    if (hour < 15 && hour >= 0) {
      h15Row.addClass("future");
    } else if (hour >= 16 && hour < 24) {
      h15Row.addClass("past");
    } else {
      h15Row.addClass("present");
  }});

$(function () {
    var hour = todayDate.hour();
    var h16Row = $('#hour-16');
    if (hour < 16 && hour >= 0) {
      h16Row.addClass("future");
    } else if (hour >= 17 && hour < 24) {
      h16Row.addClass("past");
    } else {
      h16Row.addClass("present");
}});

$(function () {
    var hour = todayDate.hour();
    var h17Row = $('#hour-17');
    if (hour < 17 && hour >= 0) {
      h17Row.addClass("future");
    } else if (hour >= 18 && hour < 24) {
      h17Row.addClass("past");
    } else {
      h17Row.addClass("present");
  }});


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
