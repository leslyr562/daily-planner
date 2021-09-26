$(document).ready(function () {

    var today = moment().format("dddd MMM D YYYY");
    var dateEl = document.getElementById('currentDay');
    console.log("today", today);
    dateEl.innerHTML = today;
    var currentHour = moment().format("HH");

    $(".time-div").each(function () {
        var hour = $(this).attr("id").split("-")[1];

        if (currentHour === hour) {
            $(this).addClass("present"); {
                $(this).addClass("present");
                $(this).children(".description").addClass("white-text");
            }
        } else if (currentHour < hour) {
            $(this).removeClass("present");
            $(this).addClass("future");
        } else if (currentHour > hour) {
            $(this).removeClass("future");
            $(this).addClass("past");
        }
    })
});




