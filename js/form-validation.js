// Form functionality without validation
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    // Form submission
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simulate form submission
      showSuccessMessage();
      contactForm.reset();
    });
  }
});

// Show success message
function showSuccessMessage() {
  const form = document.getElementById("contact-form");
  if (form) {
    // Create success message
    const successDiv = document.createElement("div");
    successDiv.className = "success-message";
    successDiv.innerHTML = `
            <div class="success-content">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12L11 14L15 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
                </svg>
                <p>Thank you! Your message has been sent successfully.</p>
            </div>
        `;

    // Insert success message before the form
    form.parentNode.insertBefore(successDiv, form);

    // Hide form
    form.style.display = "none";

    // Remove success message after 5 seconds
    setTimeout(() => {
      successDiv.remove();
      form.style.display = "block";
    }, 5000);
  }
}
