// Select color input
// Select size input

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


