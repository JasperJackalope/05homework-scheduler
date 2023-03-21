var todayDate = dayjs();
var hour = todayDate.hour();

$('#currentDay').text(todayDate.format('MMM D, YYYY'));

console.log(todayDate.hour());

$(function () {
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
  console.log("Dancy Party!");
  $('textarea[id^="TA"]').filter(function() {
    var idNum = parseInt($(this).attr('id').substring(2));
    return idNum >= 9 && idNum <= 17;
  }).each(function() {
    var textValue = $(this).val();
    var key = 'To Do List ' + $(this).attr('id');
    localStorage.setItem(key, textValue);
    console.log('Saved:', textValue, 'with key:', key);
  });
});

$(document).ready(function() {
  $('textarea[id^="TA"]').filter(function() {
    var idNum = parseInt($(this).attr('id').substring(2));
    return idNum >= 9 && idNum <= 17;
  }).each(function() {
    var key = 'To Do List ' + $(this).attr('id');
    var textValue = localStorage.getItem(key);
    if (textValue !== null) {
      $(this).val(textValue);
      console.log('Loaded:', textValue, 'with key:', key);
    }
  });
});