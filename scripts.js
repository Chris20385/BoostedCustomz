function joinMailingList() {
  const email = document.getElementById("emailJoin").value;

  if (email.trim() === "") {
    alert("Please enter an email before submitting.");
  } else {
    alert("Thanks for joining our mailing list!");
  }
}
