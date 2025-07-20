// Header Builder
function buildHeader() {
  const headerPlaceholder = document.getElementById("header-placeholder");
  if (!headerPlaceholder) return;

  const header = document.createElement("header");
  header.className = "header";

  header.innerHTML = `
        <div class="header-content">
            <a href="./" class="logo">
                <div class="logo-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2"/>
                        <circle cx="8" cy="8" r="3" fill="currentColor"/>
                        <circle cx="16" cy="8" r="3" fill="currentColor"/>
                        <circle cx="8" cy="16" r="3" fill="currentColor"/>
                        <circle cx="16" cy="16" r="3" fill="currentColor"/>
                        <path d="M12 2L12 22" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        <path d="M2 12L22 12" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </div>
                Getgamng.com
            </a>
            
            <nav class="nav">
                <ul class="nav-list">
                    <li><a href="./" class="nav-link">Game</a></li>
                    <li><a href="./marble-spiral-news.html" class="nav-link">News</a></li>
                    <li><a href="./marble-spiral-contact.html" class="nav-link">Contact</a></li>
                    <li><a href="./marble-spiral-guide.html" class="nav-link">Guide</a></li>
                </ul>
            </nav>
            
            <button class="burger-menu" id="burger-menu">
                <span class="burger-line"></span>
                <span class="burger-line"></span>
                <span class="burger-line"></span>
            </button>
        </div>
        
        <div class="mobile-menu" id="mobile-menu">
            <ul class="mobile-nav-list">
                <li><a href="./" class="mobile-nav-link">Game</a></li>
                <li><a href="./marble-spiral-news.html" class="mobile-nav-link">News</a></li>
                <li><a href="./marble-spiral-contact.html" class="mobile-nav-link">Contact</a></li>
                <li><a href="./marble-spiral-guide.html" class="mobile-nav-link">Guide</a></li>
            </ul>
        </div>
    `;

  headerPlaceholder.appendChild(header);

  // Mobile menu functionality
  const burgerMenu = document.getElementById("burger-menu");
  const mobileMenu = document.getElementById("mobile-menu");

  if (burgerMenu && mobileMenu) {
    burgerMenu.addEventListener("click", () => {
      burgerMenu.classList.toggle("active");
      mobileMenu.classList.toggle("active");
      document.body.style.overflow = mobileMenu.classList.contains("active")
        ? "hidden"
        : "";
    });

    // Close mobile menu when clicking on links
    const mobileLinks = mobileMenu.querySelectorAll(".mobile-nav-link");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        burgerMenu.classList.remove("active");
        mobileMenu.classList.remove("active");
        document.body.style.overflow = "";
      });
    });
  }

  // Header scroll effect
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// Footer Builder
function buildFooter() {
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (!footerPlaceholder) return;

  const footer = document.createElement("footer");
  footer.className = "footer";

  const currentYear = new Date().getFullYear();

  footer.innerHTML = `
        <div class="footer-content">
            <div class="footer-grid">
                <div class="footer-section">
                    <h3>About Marble Spiral</h3>
                    <p>Master the art of strategic color matching in this thrilling puzzle game. Target and smash marbles of the same color to create explosive combinations and prevent the spiral from reaching the end!</p>
                </div>
                
                <div class="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="./">Game</a></li>
                        <li><a href="./marble-spiral-news.html">News</a></li>
                        <li><a href="./marble-spiral-contact.html">Contact</a></li>
                        <li><a href="./marble-spiral-guide.html">Guide</a></li>
                    </ul>
                </div>
                
                <div class="footer-section">
                    <h3>Contact Info</h3>
                    <div class="contact-info">
                        <div class="contact-item">
                            <span class="contact-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <polyline points="22,6 12,13 2,6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            <a href="mailto:connection@getgamng.com">connection@getgamng.com</a>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1469 21.5902 20.9048 21.7335 20.6407 21.8227C20.3766 21.9119 20.0966 21.9454 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77382 17.3146 6.72533 15.2661 5.18999 12.85C3.49997 10.2412 2.44824 7.27099 2.11999 4.18C2.09456 3.90347 2.12808 3.62343 2.21733 3.35933C2.30658 3.09523 2.44989 2.85317 2.63821 2.64799C2.82653 2.44281 3.05563 2.27924 3.31078 2.16765C3.56593 2.05605 3.84163 1.99905 4.11999 2H7.11999C7.59522 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04201 3.23945 9.11999 3.71C9.23662 4.68007 9.47144 5.62273 9.81999 6.52C9.94454 6.88792 9.9736 7.27675 9.90518 7.65449C9.83676 8.03223 9.67317 8.38628 9.42999 8.68L8.08999 10.02C9.51355 12.4084 11.6016 14.4965 13.99 15.92L15.33 14.58C15.6237 14.3368 15.9778 14.1732 16.3555 14.1048C16.7333 14.0364 17.1221 14.0654 17.49 14.19C18.3873 14.5386 19.3299 14.7734 20.3 14.89C20.7705 14.968 21.21 15.2083 21.5265 15.5763C21.8429 15.9442 22.0148 16.4148 22.01 16.89L22 16.92Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            <a href="tel:+1-403-333-4545">+1 (403) 333-4545</a>
                        </div>
                        <div class="contact-item">
                            <span class="contact-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 10C21 17 12 23 12 23S3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>
                            <span>101 9 Ave SW, Calgary, Alberta T2P 1J9, Canada</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; <span class="copyright-year">${currentYear}</span> Getgamng.com - All rights reserved</p>
                <div style="margin-top: var(--spacing-sm);">
                    <a href="./marble-spiral-cookies.html">Cookie Policy</a> | 
                    <a href="./marble-spiral-privacy.html">Privacy Policy</a>
                </div>
            </div>
        </div>
    `;

  footerPlaceholder.appendChild(footer);
}

// Initialize builders when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  buildHeader();
  buildFooter();
});
