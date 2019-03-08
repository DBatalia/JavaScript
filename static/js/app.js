// from data.js

// Assign the data from `data.js` to a descriptive variable

var tableData = data;

// render the table

var tbody = d3.select("tbody");
var city = d3.select("#city");

function renderTable(){

// clear previous data from data

tbody.selectAll('td').remove();

// weather report values (weekday, date, high, low)

tableData.forEach(function(rowone) {

   console.log(rowone);

   var row = tbody.append("tr");

   Object.entries(rowone).forEach(function([key, value]) {

     console.log(key, value);

     // Append a cell to the row for each value

     // in the weather report object

     var cell = tbody.append("td");

     cell.text(value);

   });

 });

}

// Select the submit button

var submit = d3.select("#filter-btn");

submit.on("click", function handleSubmit() {

 // Prevent the page from refreshing

 d3.event.preventDefault();

 // Select the input element and get the raw HTML node

 var inputElement = d3.select("#datetime");

 // Get the value property of the input element

 var inputValue = inputElement.property("value");

 //console.log(inputValue);

 //console.log(tableData);

 tableData = data.filter(row => row.datetime === inputValue && row.city === city.property("value"));

 renderTable();

});  // console.log(tableData);

renderTable();

