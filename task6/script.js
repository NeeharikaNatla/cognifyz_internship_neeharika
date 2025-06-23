function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMsg = document.getElementById("formMessage");

  if (!name || !email || !message) {
    formMsg.style.color = "red";
    formMsg.innerText = "⚠️ Please fill in all fields.";
    return false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    formMsg.style.color = "red";
    formMsg.innerText = "⚠️ Please enter a valid email address.";
    return false;
  }

  formMsg.style.color = "green";
  formMsg.innerText = "✅ Your message has been sent successfully! Thank you!";
  
  // Optional: Clear form after 1 second
  setTimeout(() => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    formMsg.innerText = "";
  }, 2000);

  return false; // prevent actual form submission (for now)
}
