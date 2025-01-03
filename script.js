//your JS code here. If required.
document.querySelector('input[type="button"]').addEventListener('click',()=>{
	const colorSelect = document.getElementById("colorSelect");
	const selectedIndex = colorSelect.selectedIndex;

	if(selectedIndex !==-1){
		colorSelect.options[selectedIndex].remove();
	}
})