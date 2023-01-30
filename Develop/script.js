// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
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
});



// Psuedo code for week 3 challenge:


// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// -- refer to the docs
// -- we want to use DayJS to display current date
//    -- set the format HH:MM:SS etc
//    -- Make sure the DayJS CDN link exists in the HTML file
//        -- Creat a cariable to get the DayJS data
//    -- set the current time to an element in the HTML

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// -- complete the rest of the time blocks from 9am-5pm in HTML
//    -- remove past, present, and future classes "static"
//    -- find a way to add or remove the appropriate classes
//      -- NOTE: Colors need to shift at the START of a new hour, focus on hours not minutes or seconds

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// -- if time < current time apply past, if time = current time apply present, if time > current time apply future class


// WHEN I click into a timeblock
// THEN I can enter an event
// --grab text input (text areas)
//

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// --event listener on the save button
//    -- Create a variable, get the value
//    -- set variable to local storage
//    -- what will the data in local storage look like? [{}, {}]

// WHEN I refresh the page
// THEN the saved events persist (confirms data was entered into local storage)
// -- getting from local storage  
// -- parse data from local storage to turn it back into an object (if the data was stored as a JSON)  json or parse?
// -- have it display as a string it was entered as

//* refrence the mini project *//
//* note, activity 10, event delegation *//
//* note, activity 2 will be helpful *//
//* final 3 activities from web API's for local storage *//
//* stringify *//
//* activity 8, dom traversal *//