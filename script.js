//your JS code here. If required.
function removeSelectedOption() {
	let colorSelect = document.getElementById("colorSelect");

	if(colorSelect.SelectedIndex !== -1){
		colorSelect.remove(colorSelect.SelectedIndex);
	}
	
}
