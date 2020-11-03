var timeBlock = ['9:00 am', '10:00 am', '11:00 am', '12:00 pm', '13:00 pm', '14:00 pm', '15:00 pm', '16:00 pm', '17:00 pm', '18:00 pm']
$("#currentDay").text(moment().format("dddd, MMM Do YYYY"));
var currentHour = parseInt(moment().format("HH:mm"));
console.log(currentHour)
//loop through all the timeBlocks
for (let i = 0; i < timeBlock.length; i++) {
    //creating a new div class=row    
    var newRow = $("<div>")
    newRow.addClass("row time-block");
    //creating first column for hour
    var firstCol = $("<div>")
    firstCol.addClass("col-md-2 hour")
    firstCol.text(timeBlock[i])
    newRow.append(firstCol)
    //creating second column for hour
    var secondCol = $("<textarea>")
    secondCol.addClass("col-md-8 description")
    newRow.append(secondCol)
    //creating third column for hour
    var thirdCol = $("<button>")
    thirdCol.addClass("col-md-2 saveBtn")
    newRow.append(thirdCol)
    //adding the row to the container
    $(".container").append(newRow)

} 

// on.click event for saveBtn and set the values to local storage.
// combination of key 'timestamp' and value returned inside description field.
$(".saveBtn").on("click", function(){
    console.log("Click save button")
    var time = $(this).siblings(".hour").text();
    var des = $(this).siblings("textarea").val();
    localStorage.setItem(time, des);
})


 
$(".row").each(function () {
    console.log($(this).find(".hour").text()) 
    var time = ($(this).find(".hour").text())
    localStorage.getItem(time)
    $(this).find("textarea").val(localStorage.getItem(time));

})

// css present, past, and future classes based on current hour