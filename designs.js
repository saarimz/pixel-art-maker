
//defaults
const tBody = document.createElement("tbody");
document.getElementById("pixel_canvas").appendChild(tBody);
let color = document.getElementById("colorPicker").value;

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

//make color picker event listener
document.getElementById("colorPicker").addEventListener("change",function(e){
	color = document.getElementById("colorPicker").value;
});
//make the td cells selectable / colorable
document.getElementById("pixel_canvas").addEventListener("click",function(e){
	e.target.style.backgroundColor = color;
},false);


