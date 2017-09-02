// Select color input
// Select size input
/*
// When size is submitted by the user, call makeGrid()
$(document).ready(function(){

  	function makeGrid(height,width) {
	
	//clear grid
	$("tbody").empty();

	//function to create string to insert
	let stringToInsert = function(height,width) {
		let result = "";
		for (let i = 0; i < height; i++) {
	      result += "<tr>";
	      for (let j = 0; j < width; j++) {
	      	result += "<td></td>";
	      }
	      result += "</tr>";
		}
		return result;
	};
	//pass h x w to function to create string to append
	$("table#pixel_canvas > tbody:last-child").append(stringToInsert(height,width));
	}

	//when submit is pressed
    $("#submit").click(function(e){
    	//prevent page from refreshing
    	e.preventDefault();
    	//create the grid
    	let height = $("#input_height").val();
    	let width = $("#input_width").val();
    	makeGrid(height,width);

    	//create listener for when cell is clicked
    	$("td").click(function(){
	    	$(this).css("background-color",$("#colorPicker").val());  	
	    });
    });

});
*/

//defaults
const tBody = document.createElement("tbody");
document.getElementById("pixel_canvas").appendChild(tBody);


//makeGrid
function makeGrid(height,width){
	//clear table body
	document.getElementsByTagName("tbody")[0].innerHTML = "";
	//function to create cells to insert
  	let stringToInsert = function(height,width) {
		let result = "";
		for (let i = 0; i < height; i++) {
	      result += "<tr>";
	      for (let j = 0; j < width; j++) {
	      	result += "<td></td>";
	      }
	      result += "</tr>";
		}
		return result;
	};
	//make the actual grid
  	document.getElementsByTagName("tbody")[0].innerHTML = stringToInsert(height,width);
}

//submit button event listener
document.getElementsByTagName("input")[2].addEventListener("click",function(e){
	e.preventDefault();
	let inputHeight = document.getElementById('input_height').value;
	let inputWidth = document.getElementById('input_width').value;
	makeGrid(inputHeight,inputWidth);
});

//make cell event listener to change background color

//make color picker event listener
