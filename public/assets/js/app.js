const devourButtons = document.querySelectorAll(".devourButton");
const burgerForm = document.querySelector("#burger-form");
const burgerInput = document.querySelector("#burger-name");
const deleteButton = document.querySelectorAll(".deleteButton"); // array of elements

// create event listeners for all elements with class .deleteButton
deleteButton.forEach(button => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    deleteBurger(button);
  })
})

// function that runs when delete button clicked
function deleteBurger(element) {
  const id = element.dataset.burgerid;
  fetch(`/api/devour/${id}`, {
    method: "DELETE",
  }).then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
    location.reload();
  }).catch(err => {
    console.log(err);
  });
}


// give each devour button click listener 
devourButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    devourClick(button);
  });
})

// retrieve data-burgerid from devourButton that was clicked
function devourClick(elem) {
  const id = elem.dataset.burgerid; // retrieves data-burgerid
  const devoured = elem.dataset.devoured; // retrieves data-devoured (returns "1" or "0")
  console.log(id);
  
  // if devoured == "1" then it has been eaten
  // if devoured == "0" then it hasn't been eaten
  if (parseInt(devoured)) {
    console.log("already been eaten");
    return;
  }

  // we set devoured to true since the burger has now been devoured
  const data = {devoured: true};

  // ajax to update burger from devoured: false -> devoured:true
  fetch(`/api/devour/${id}`, {
    method: "PUT",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  }).then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
    
    location.reload(); // reload the page 
  }).catch(err => {
    console.log(err);
  });
}


// 
burgerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const burgerName = burgerInput.value;
  if (burgerName.length <= 0) return;
  
  const data = {burger_name: burgerName}; // devoured is false by default in database (what we want)}

  // insert burger into database
  fetch("/api/create", {
    method: "POST",
    headers: {'Content-Type' : 'application/json'},
    body: JSON.stringify(data)
  }).then(response => {
    return response.json();
  }).then(data => {
    console.log(data);
    location.reload();
  }).catch(err => {
    console.log(err);
  });
})

