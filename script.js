//your JS code here. If required.
function removeSelectedOption() {
	const colorSelect = document.getElementById("colorSelect");

	if(colorSelect.SelectedIndex !== -1){
		colorSelect.options[colorSelect.SelectedIndex].remove();
	}
	
}
