const allNodes = document.querySelectorAll(".pagination-circle");
const sections = document.querySelectorAll(".section");
const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const chatmodal = document.querySelector(".chatmodal");
const bottomButton = document.querySelector(".plant");
const resumeButton = document.querySelector(".resume");
const navbar = document.querySelector(".navbar");
const close = document.querySelector(".close");
let selected;

// On click handler for circles to remove active pages
allNodes.forEach(circle => {
  circle.addEventListener("click", function(e) {
    if (!circle.classList.contains("active-page")) {
      for (var i=0; i < allNodes.length; i++) {
        allNodes[i].classList.remove("active-page")
      }
    }
  })
})

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

    // Remove all active pages
    for (var j=0; j < allNodes.length; j++) {
      allNodes[j].classList.remove("active-page");
    }

    // Add active page
    allNodes[i].classList.add("active-page");
  }
}

// On click handler for resume button
resumeButton.onclick = function() {
  modal.style.display = "block";
}

// Click out of modals to close them
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }

  if (event.target == chatmodal || event.target == close) {
    chatmodal.style.display = "none";
  }
}

// Open the about me modal
function opendialogue() {
  chatmodal.style.display = "block";
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

      // Remove all active pages
      for (var j=0; j < allNodes.length; j++) {
        allNodes[j].classList.remove("active-page");
      }

      // Add active page
      allNodes[i].classList.add("active-page");
    }
  }
})
