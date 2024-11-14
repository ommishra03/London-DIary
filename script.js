// Show "scroll to top" button after user scrolls a bit
window.onscroll = function() {
  var button = document.getElementById("scrollToTopButton");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};

// Scroll to the top when the button is clicked
function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Add interactive popup when reaching the end of the story
let storySections = document.querySelectorAll('section');
let lastSection = storySections[storySections.length - 1];

lastSection.addEventListener('animationend', () => {
  alert("You’ve reached the end! But remember, Rishi never stops...and neither do I!");
});

// Add event listener for the button
let button = document.createElement("button");
button.id = "scrollToTopButton";
button.innerText = "Scroll to Top";
button.onclick = scrollToTop;
document.body.appendChild(button);
