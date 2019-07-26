// for(i = 4; i <= 100; i++){
// 	const aItems = document.getElementsByTagName("a")[i];
// 	aItems.addEventListener('mouseover', () => { aItems.className += " active" });
// 	aItems.addEventListener('mouseout', () => { aItems.className = "nav-link" });
// }



const FN = document.getElementById("FN");
const LN = document.getElementById("LN");
const EM = document.getElementById("EM");
const firstname = document.getElementById('firstname');
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const buttonClick = document.getElementById("addInfo");
var next = 0 ;




buttonClick.addEventListener('click', () => {

    if (next <= 0) {
	var textnode = document.createTextNode(firstname.value);
	var textnodeLN = document.createTextNode(lastname.value);
	var textnodeEM = document.createTextNode(email.value);




  	firstname.value= "";
  	lastname.value= " ";
  	email.value="";
  	var text = [textnode, textnodeLN, textnodeEM]
  	next += 1;



	for(i=0; i <= text.length; i++){
	var cell = document.createElement("td");
	cell.appendChild(text[i]);
	FN.appendChild(cell);
	}

	}

	else if (next == 1) {
	var textnode = document.createTextNode(firstname.value);
	var textnodeLN = document.createTextNode(lastname.value);
	var textnodeEM = document.createTextNode(email.value);



	firstname.value= "";
  	lastname.value= " ";
  	email.value="";
    	var text = [textnode, textnodeLN, textnodeEM]
  	next += 1;

	for(i=0; i <= text.length; i++){
	var cell0 = document.createElement("td");
	cell0.appendChild(text[i]);
	LN.appendChild(cell0);

	}

	}

	else {

	var textnode = document.createTextNode(firstname.value);
	var textnodeLN = document.createTextNode(lastname.value);
	var textnodeEM = document.createTextNode(email.value);

	

	firstname.value= "";
  	lastname.value= " ";
  	email.value="";
  	var text = [textnode, textnodeLN, textnodeEM]
  	next += 1;

	for(i=0; i <= text.length; i++){
	var cell1 = document.createElement("td");
	cell1.appendChild(text[i]);
	EM.appendChild(cell1);
	}
	}



});
