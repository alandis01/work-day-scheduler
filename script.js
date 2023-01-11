var today = now();

$(document).ready(function () {
  $("#currentDay").text(today().format("dddd, MMM Do"));
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
    var currentHour = now().hour();

    $('.time-block').each(function() {
      var idTime = parseInt($(this).attr("id"));
      if (idTime < currentHour) {
        $(this).addClass("past");
      } else if (idTime === currentHour) {
        $(this).addClass("present");
        $(this).addClass("past");
      } else {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
      }
    })
}

changeTime()
var timeInterval = setInterval(timeChange, 1000);

});


var current_hour = dayjs().get("hour");


  // $('.btn').on('click', function(){
  //  var key = $(this).parent().attr('id')
  //  var textData = $(this).siblings('textarea').val()
  //  localStorage.setItem(key, textData)
  // });


  var currentTime = function() {
    var currentHour = moment().hour()
    for (var i=8; i<18; i++)
    if(currentHour>i){
      $
    }

  }

  $('#currentDay').text(dayjs().format("DD/MM/YYYY"))

// document.getElementById('hour-12').classList.add('') // do things with this
// wrap in a function
var timeValue = dayjs
$('.description').each(function(){
  if (timeValue < 'hour-11') { // use the parent and/or siblings methods from jQuery
    // execute this code block
  }
})

// $();
function rowTimeBlock (){
  if (rowTimeBlock = true); 
  display 
  // changing the colors of my scheduler past present and future

}
