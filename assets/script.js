$(document).ready(function() {

var today = moment().format("dddd MMM Mo YYYY");
var dateEl = document.getElementById('currentDay');
dateEl.innerHTML = today;
});



