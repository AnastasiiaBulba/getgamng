// Cookie Banner functionality
function initCookieBanner() {
  const cookieBanner = document.getElementById("cookie-banner");
  if (!cookieBanner) {
    console.log("Cookie banner element not found");
    return;
  }

  // Check if cookies were already accepted
  const cookiesAccepted = localStorage.getItem("marbleSpiralCookiesAccepted");
  console.log("Cookies accepted:", cookiesAccepted);

  if (!cookiesAccepted) {
    console.log("Showing cookie banner");
    // Show cookie banner after a short delay
    setTimeout(() => {
      cookieBanner.classList.add("show");
      console.log("Cookie banner should be visible now");
    }, 1000);
  } else {
    console.log("Cookies already accepted, banner hidden");
    // Hide banner completely if cookies already accepted
    cookieBanner.style.display = "none";
  }
}

// Accept cookies function
function acceptCookies() {
  const cookieBanner = document.getElementById("cookie-banner");

  // Store acceptance in localStorage
  localStorage.setItem("marbleSpiralCookiesAccepted", "true");
  console.log("Cookies accepted and saved to localStorage");

  // Hide banner with animation
  if (cookieBanner) {
    cookieBanner.style.transform = "translateY(100%)";
    setTimeout(() => {
      cookieBanner.style.display = "none";
      console.log("Cookie banner hidden permanently");
    }, 300);
  }
}

// Initialize cookie banner when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  initCookieBanner();
});

// Make acceptCookies function globally available
window.marbleSpiralAcceptCookies = acceptCookies;
