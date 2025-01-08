const learnMoreLink = document.getElementById("learn-more-link");
const aboutDetails = document.getElementById("about-details");

// Add event listener to show the #about-details div when the link is clicked
learnMoreLink.addEventListener("click", (event) => {
  event.preventDefault();
  aboutDetails.classList.toggle("visible");
});

function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
}