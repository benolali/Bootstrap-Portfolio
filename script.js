var nameEl = document.getElementById('name'); 
var emailEl = document.getElementById('email'); 
var messageEl = document.getElementById('message'); 

var formEl = document.querySelector('form');


function submitForm(event) {
    event.preventDefault();
  var name = nameEl.value;
  var email = emailEl.value;
  var message = messageEl.value;
  alert(name + " " + email + " " + message);
}

fetch ("mailto:benolali@gmail.com", {
	method: "POST",
    headers: {
      "Content-Type": "application/json",
      }, 
      body: "Hello"
})
.then(x => x.text())
.then(y => console.log(y) )
