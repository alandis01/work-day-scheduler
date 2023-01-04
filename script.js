// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


var current_hour = dayjs().get("hour")
console.log (current_hour)
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM 
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  $('.btn').on('click', function(){
   var key = $(this).parent().attr('id')
   var textData = $(this).siblings('textarea').val()

   localStorage.setItem(key, textData)
  })
    
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
  $('#currentDay').text(dayjs().format("DD/MM/YYYY"))

// document.getElementById('hour-12').classList.add('') // do things with this
// // wrap in a function
// // var timeValue = dayjs current hour
// $('.description').each(function(){
//   if (timeValue < 'hour-11') { // use the parent and/or siblings methods from jQuery
//     // execute this code block
//   }
// })

// // $();
// function rowTimeBlock (){
//   if (rowTimeBlock = true); 
//   display 
//   // changing the colors of my scheduler past present and future

  
// }
// // need to grab the hour and the input 
// // when grabbing from HTML have to use DOM traversal jqery 

// // localStorage.setItem 
// // localStorage.getItem




