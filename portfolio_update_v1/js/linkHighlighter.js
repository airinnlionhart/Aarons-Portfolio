
const aDiv = document.querySelector('.highlighter');

	aDiv.addEventListener('mouseover', (event) => { if(event.target.tagName == "A")
		{
			event.target.className += " active"
		}
	});
	aDiv.addEventListener('mouseout', (event) => {
		if(event.target.tagName == "A"){
			event.target.className = "nav-link"
		}
	});


	const alertButton = document.getElementById('alert');
	alertButton.addEventListener('click', () => {
	alert("const aDiv = document.querySelector('.highlighter'); aDiv.addEventListener('mouseover', (event) => { if(event.target.tagName == 'A'){event.target.className += 'active'}});aDiv.addEventListener('mouseout', (event) => {if(event.target.tagName == 'A'){event.target.className = 'nav-link'}});")
});
