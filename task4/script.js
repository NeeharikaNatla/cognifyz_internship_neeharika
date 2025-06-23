function changeBackground() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  
  // Apply background color
  document.body.style.backgroundColor = randomColor;

  // Update the text with the new color
  document.getElementById("colorCode").innerText = "Background color: " + randomColor;
}


