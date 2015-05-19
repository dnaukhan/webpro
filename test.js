function generate_table() {
  	var body = document.getElementsByTagName("body")[0];
 	var r = document.getElementById("rows").value;
    var c = document.getElementById("cols").value;
  	var table     = document.createElement("table");
  	var tableBody = document.createElement("tbody");
 
	for (var i = 0; i < r; i++) {
	    	var row = document.createElement("tr");
	    for (var j = 0; j < c; j++) {
		    var cell = document.createElement("td");
		    var cellText = document.createTextNode("row "+i+" col "+j);
		    cell.appendChild(cellText);
		    row.appendChild(cell);
	    }
    	tableBody.appendChild(row);
 	 }

    table.appendChild(tableBody);
  	body.appendChild(table);
  	table.setAttribute("border", "2");
}