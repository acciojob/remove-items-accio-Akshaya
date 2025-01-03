//your JS code here. If required.
function removeSelectedOption() {
	let colorselect = document.getElementById("colorSelect");

	if(colorselect.Selectedindex !== -1){
		colorselect.remove(colorselect.Selectedindex);
	}
	
}
