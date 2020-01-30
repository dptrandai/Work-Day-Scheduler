$(document).ready(function () {
    //vars
    var color;
    var currentHour = moment().hours();
    var hour = 9
    // Creates the for loop for 9 time block, from 9am-5pm
    for (let index = 0; index < 9; index++) {
        // To change the color of the blocks, used if else statement 
        if (hour < currentHour) {
            color = "grey"
        } else if (hour === currentHour) {
            color = "green"
        } else {
            color = "red"
        }

        // Creates new form tag with the attributes
        var form = $("<form>")
        form.attr("style", "background-color: " + color)

        //Inside the form tag we need to create a new div thats a row
        var row = $("<div>")
        row.attr("class", "row")

        // The hour column will take up 1 of 3 columns
        var hourColumn = $("<div>")
        hourColumn.attr("class", "col-sm-2")

        // The input column will be the Second of the 3 columns
        var inputColumn = $("<div>")
        inputColumn.attr("class", "col-sm-8")
        // Creates the input text area
        var input = $('<input>')
        input.attr({
            type: 'text',
            class: 'form-control',
            placeholder: 'add job task'
        })

        // The button column will be the last of the 3 columns
        var buttonColumn = $("<div>")
        buttonColumn.attr("class", "col-sm-2")
        var button = $("<button>")
        button.attr({
            type:'button',
            class:'saveBtn'
        })

        // After creating the button div, we need to append the button to the new div
        buttonColumn.append(button)
        // After creating the input div, we need to append the input to the new div
        inputColumn.append(input)
        // If time is greater than 12 then add PM, else add AM
        if (hour >= 12) {
            if (hour == 13) {
                hour = 1
            }
            hourColumn.text(hour + ":00PM")
        } else {
            hourColumn.text(hour + ":00AM")
        }
        hour++

        // Main container
        var container = $(".container")
        // Appends the row to the form
        form.append(row)
        // Column will be appended to the row that is inside the form
        row.append(hourColumn, inputColumn, buttonColumn)
        // Inside the main container we need to append the form that holds the columns and rows
        container.append(form)
    }
    // Saves what the user input was to local storage
    var inputValue = localStorage.getItem("name of key")
    var inputEl = $("#in-9")
    inputEl.attr('value', inputValue)
    // Add a click event listener for the save button 
    $('.saveBtn').on('click', function () {
        var inputText = $('#in-9').val()
        localStorage.setItem('name of key', inputText)
    })
    //for loop {} ends
})

// Adds content to the header of the page
var headDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$('#currentDay').text(headDate)

