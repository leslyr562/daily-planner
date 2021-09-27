$(document).ready(function () {

    var today = moment().format("dddd MMM D YYYY");
    var dateEl = document.getElementById('currentDay');
    dateEl.innerHTML = today;
    var currentHour = moment().format("HH");

    $(".saveBtn").click(function(){
        var siblings = $(this).siblings();
        var textarea = siblings[1];
        var parent = $(this).parent();
        var getId = parent[0];
       localStorage.setItem( getId.id , textarea.value)

    }) 
     

    $(".time-div").each(function () {
        console.log($(this).attr("id"));
        var hour = $(this).attr("id").split("-")[1];
        
        $("#hour-" + hour + " .time-block").val(localStorage.getItem("hour-" + hour));

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




