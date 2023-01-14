$(document).ready(function () {
  $("#currentDay").text(moment().format("dddd, MMM Do"));
  $(".saveBtn").on("click", function () {
    var scriptText = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, scriptText);
  });

  $("#hour9 .description").val(localStorage.getItem("9"));
  $("#hour10 .description").val(localStorage.getItem("10"));
  $("#hour11 .description").val(localStorage.getItem("11"));
  $("#hour12 .description").val(localStorage.getItem("12"));
  $("#hour13 .description").val(localStorage.getItem("13"));
  $("#hour14 .description").val(localStorage.getItem("14"));
  $("#hour15 .description").val(localStorage.getItem("15"));
  $("#hour16 .description").val(localStorage.getItem("16"));
  $("#hour17 .description").val(localStorage.getItem("17"));

  function changeTime() {
    var currentHour = moment().hour();

    $('.time-block').each(function () {
      var idTime = parseInt(this.id.split("-")[1]);
      console.log(this.id.split("-")[1])
      if (idTime < currentHour) {
        $(this).addClass("past");
      } else if (idTime === currentHour) {
        $(this).addClass("present");
        $(this).removeClass("past");
      } else {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
      }
    })
  }
  changeTime()
});

var currentTime = function () {
  var currentHour = moment().hour()
  for (var i = 8; i < 18; i++)
    if (currentHour > i) {
      $
    }

};

$('#currentDay').text(moment().format("DD/MM/YYYY"));
$('.description').each(function () {});

function rowTimeBlock() {
  if (rowTimeBlock = true);
  display
}
