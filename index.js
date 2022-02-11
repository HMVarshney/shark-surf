const mobileNav = document.getElementById("nav-mobile");
let mobileNavOpen = false;

function handleMobileNavToggle() {
  mobileNav.style.display = mobileNavOpen ? "none" : "block";
  mobileNavOpen = !mobileNavOpen;
}
