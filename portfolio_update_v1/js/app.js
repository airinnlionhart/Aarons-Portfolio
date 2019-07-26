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
	}
});




correctPassword.addEventListener('click', () => { correctPassword.value = "" });
user.addEventListener('click', () => { user.value = "" });
