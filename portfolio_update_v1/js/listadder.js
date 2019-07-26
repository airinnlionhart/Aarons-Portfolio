const buttonClick = document.getElementById("addInfo");
const firstname = document.getElementById('firstname');
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");

buttonClick.addEventListener('click', () => {

 var textnode = document.createTextNode(firstname.value);
 var textnodeLN = document.createTextNode(lastname.value);
 var textnodeEM = document.createTextNode(email.value);



 firstname.value= "";
 lastname.value= " ";
 email.value="";
 var text = [textnode, textnodeLN, textnodeEM]
 var inter = 1;

  	for(i=0; i <= text.length; i++){
  	
	var cell = document.createElement("td");	
	cell.appendChild(text[i]);
	FN.appendChild(cell);
	}  



});