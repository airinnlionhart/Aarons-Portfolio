const correctPassword = document.getElementById('password');
const user = document.getElementById('user');
const clickButton = document.getElementById('myButton');
var password = "";
const enterpassword = document.getElementById('createpassword');
const hidden = document.getElementById("login")
hidden.style.display = 'none';
const show = document.getElementById("createuser");
const clickEnter = document.getElementById('myEnter');

clickButton.addEventListener('click', () => {
	show.style.display = 'none'
	hidden.style.display = 'block';
	password = enterpassword.value;

});


clickEnter.addEventListener('click', () => {

if (correctPassword.value == password) {
		clickEnter.href = "sample.html";
	}
	else{
		correctPassword.style.border = "thick solid red";
		correctPassword.value = "Opps thats not it try again"
		var obj = document.getElementById('password');
		obj.type = "text";
	}
});




correctPassword.addEventListener('click', () => { correctPassword.value = "" });
user.addEventListener('click', () => { user.value = "" });




function mouseoverPass(obj) {
  var objFirst = document.getElementById('createpassword');
  objFirst.type = "text";
	var obj = document.getElementById('password');
  obj.type = "text";
}
function mouseoutPass(obj) {
  var objFirst = document.getElementById('createpassword');
  objFirst.type = "password";
	var obj = document.getElementById('password');
  obj.type = "password";
}
