const sections = document.querySelectorAll(".section");
const body = document.querySelector("body");
const modal2 = document.querySelector(".modal2");
const resumeButton = document.querySelector(".resume2");
const navbar = document.querySelector(".navbar");
const close = document.querySelector(".close");
let selected;

// Mark active page in pagination when page loads
for (var i=0; i < sections.length; i++) {
  const bounding = sections[i].getBoundingClientRect();
  const middle = bounding.top + (bounding.height/2);
  if (
    middle >= 0 &&
    middle <= (2*window.innerHeight)/3 &&
    selected != sections[i]
  ) {
    selected = sections[i];

    // Change color of background
    body.style.backgroundColor = sections[i].dataset.color;
    navbar.style.backgroundColor = sections[i].dataset.color;
  }
}

// On click handler for resume button
resumeButton.onclick = function() {
  modal2.style.display = "block";
}

// Click out of modals to close them
window.onclick = function(event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }

  if (event.target == chatmodal || event.target == close) {
    chatmodal.style.display = "none";
  }
}

// On scroll handler for background colors & pagination
document.addEventListener('scroll', function() {
  // Loop through the sections on the page
  for (var i=0; i < sections.length; i++) {
    const bounding = sections[i].getBoundingClientRect();
    const middle = bounding.top + (bounding.height/2);

    // Don't update more than necessary
    if (
      middle >= 0 &&
      middle <= (2*window.innerHeight)/3 &&
      selected != sections[i]
    ) {
      // Set the current section
      selected = sections[i];

      // Change color of background
      body.style.backgroundColor = sections[i].dataset.color
      navbar.style.backgroundColor = sections[i].dataset.color;
    }
  }
})
