var todayDate = dayjs();
var hour = todayDate.hour();

$('#currentDay').text(todayDate.format('MMM D, YYYY'));

console.log(todayDate.hour());

$(function () {
  var hour = todayDate.hour();

  for (var i = 9; i <= 17; i++) {
    var row = $('#hour-' + i);

    if (hour < i && hour >= 0) {
      row.addClass("future");
    } else if (hour >= i + 1 && hour < 24) {
      row.addClass("past");
    } else {
      row.addClass("present");
    }
  }
});

$('button').on('click', function() {
  const textValue = $('textarea').val();
  localStorage.setItem('To Do List', textValue);
  console.log('Saved:', textValue);
});


// const savedText = localStorage.getItem('event');



  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
