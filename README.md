# 05 Third-Party APIs: Work Day Scheduler

I Created a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

I completed the task based on the following criteria:

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist


By adding additional Div's I generated all neccessary input boxes for times during normal business hours. the change color function works by comparing the current hour of the day and assigns classes to the appropriate div so the colors render to illustrate where the user should be viewing their current time slot.

All boxes will save the information typed into the respective box to local storage, and with the function of "updateTasks", this will allow new information passed into the browser and saved, will render on page reload.


