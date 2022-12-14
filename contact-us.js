function validateForm() {
  let x = document.forms["service"]["Name"].value;

  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

const email = document.getElementById("Email");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Please enter a proper email address!");
    email.reportValidity();
  } else {
    email.setCustomValidity("");
  }
});

const comment = document.getElementById("Comment");

comment.addEventListener("input", (event) => {
  if (comment.validity.typeMismatch) {
    comment.setCustomValidity("Please enter a comment");
    comment.reportValidity();
  } else {
    comment.setCustomValidity("");
  }
});
