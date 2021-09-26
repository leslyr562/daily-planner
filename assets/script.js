$(document).ready(function () {

    var today = moment().format("dddd MMM D YYYY");
    var dateEl = document.getElementById('currentDay');
    dateEl.innerHTML = today;
    var currentHour = moment().format("HH");

    $(".saveBtn").click(function(){
        console.log("save button clicked");
        var siblings = $(this).siblings();
        var textarea = siblings[1];
        var parent = $(this).parent();
        var getId = parent[0];
       localStorage.setItem( getId.id , textarea.value)

    }) 
    localStorage.setItem('name','Jason');

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




