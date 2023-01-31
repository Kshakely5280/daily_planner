let container = $('.container-lg');
let timeSlots = container.children('div');

function saveInfo(event) {

let text = event.target.previousElementSibling.value;
 localStorage.setItem(event.target.parentElement.id, text)
 console.log(event.target.parentElement)

}



const date = new Date();
let hour = date.getHours();
let day = date.getDate();
let month = date.getMonth() + 1;;
let year = date.getFullYear();
let currentDate = `${month}-${day}-${year}`;
$('#currentDay').text(currentDate);

function updateTasks() {
  $('#hour-9 .description').val(localStorage.getItem('hour-9'))
  $('#hour-10 .description').val(localStorage.getItem('hour-10'))
  $('#hour-11 .description').val(localStorage.getItem('hour-11'))
  $('#hour-12 .description').val(localStorage.getItem('hour-12'))
  $('#hour-13 .description').val(localStorage.getItem('hour-13'))
  $('#hour-14 .description').val(localStorage.getItem('hour-14'))
  $('#hour-15 .description').val(localStorage.getItem('hour-15'))
  $('#hour-16 .description').val(localStorage.getItem('hour-16'))
  $('#hour-17 .description').val(localStorage.getItem('hour-17'))
}


function changeColor() {
  for (let index = 0; index < timeSlots.length; index++) {
    let currentDiv = $(timeSlots.get(index));
    let currentDivClass = currentDiv.attr('id').slice(5);
    if (currentDivClass == hour) {
      currentDiv.addClass('present');
    } else if (currentDivClass < hour) {
      currentDiv.addClass('past');
    } else if (currentDivClass > hour) {
      currentDiv.addClass('future');
    }
  }
}

function init() {
  changeColor();
  updateTasks();
}
init();








