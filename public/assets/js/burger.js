const devourButtons = document.querySelectorAll(".devourButton");

// give each button click listener 
devourButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    devourClick(button);
  });
})

// retrieve data-burgerid from devourButton that was clicked
function devourClick(elem) {
  const id = elem.dataset.burgerid; // retrieves data-burgerid
  const devoured = elem.dataset.devoured; // retrieves data-
  console.log(id);
  console.log(devoured);

  const data = { }

  // fetch(`/api/devour/${id}`, {
  //   method: "PUT",
  //   headers: {'Content-Type': 'application/json'},
  //   body: JSON.stringify(data)

  // })
}




