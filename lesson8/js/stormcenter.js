function toggleRating(rating) {
    document.getElementById("value").innerHTML = rating;
}

function selectResponse() {
	const selected = document.querySelector('#selected');
	const region = document.querySelector('#storm-region');
	selected.style.display = "block";
	selected.textContent = region.value;
}