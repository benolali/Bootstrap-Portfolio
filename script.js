let nameEl = document.getElementById('name'); 
const emailEl = document.getElementById('email'); 
const messageEl = document.getElementById('message'); 

const formEl = document.querySelector('form');


function submitForm(event) {
    event.preventDefault();
  const name = nameEl.value;
  const email = emailEl.value;
  const message = messageEl.value;
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
