// Sample data structure - in real implementation this would be loaded from JSON files
const siteData = {
  reviews: [
    {
      id: 1,
      author: "Sarah Johnson",
      text: "This marble spiral game is absolutely addictive! The strategic color matching mechanics are so satisfying. I love how every shot requires careful planning and the chain reactions are incredibly rewarding. Perfect for quick gaming sessions!",
      rating: 5,
    },
    {
      id: 2,
      author: "Michael Chen",
      text: "As someone who loves puzzle games, Marble Spiral hits all the right notes. The precision aiming combined with strategic thinking makes every level a new challenge. The graphics are smooth and the gameplay is incredibly engaging!",
      rating: 5,
    },
    {
      id: 3,
      author: "Emma Rodriguez",
      text: "My kids and I play this together and we're all hooked! The color matching is easy to understand but the strategy keeps us coming back. It's the perfect balance of simple mechanics and complex strategy.",
      rating: 5,
    },
    {
      id: 4,
      author: "David Thompson",
      text: "Perfect for commuting! I play it on the train every morning and it helps me wake up my brain. The progressive difficulty keeps it challenging and the scoring system is really motivating.",
      rating: 5,
    },
    {
      id: 5,
      author: "Lisa Park",
      text: "I'm not usually into puzzle games, but Marble Spiral is so intuitive and satisfying! The marble physics feel realistic and the chain reactions are incredibly satisfying. Highly recommend!",
      rating: 5,
    },
    {
      id: 6,
      author: "Robert Wilson",
      text: "This is the best strategic puzzle game I've played in years. The color matching mechanics are genius and the difficulty progression is perfectly balanced. It's become my go-to game for quick brain training.",
      rating: 5,
    },
  ],

  news: [
    {
      id: 1,
      title: "New Level Pack Released",
      category: "Game Updates",
      date: "April 15, 2025",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2"/>
        <circle cx="12" cy="12" r="6" stroke="currentColor" stroke-width="2"/>
        <circle cx="12" cy="12" r="2" fill="currentColor"/>
      </svg>`,
      excerpt:
        "We've added 20 new challenging levels with unique marble arrangements and strategic puzzles. Test your skills with our latest level pack featuring advanced color matching challenges.",
      fullText:
        "We're excited to announce our biggest update yet! We've added 20 new challenging levels with unique marble arrangements and strategic puzzles. These new levels feature advanced color matching challenges that will test even the most experienced players. The new levels introduce innovative marble patterns and require strategic thinking to master. Each level has been carefully designed to provide a perfect balance of challenge and satisfaction. We've also improved the scoring system to reward creative solutions and chain reactions. All existing progress will be preserved, and you can start playing the new levels immediately. Stay tuned for more updates coming soon!<br><br><img src='./depictions/card1.jpg' alt='New Level Pack' style='width: 100%; max-width: 500px; border-radius: 8px; margin: 20px 0;'>",
    },
    {
      id: 2,
      title: "Player Spotlight: Strategic Masters",
      category: "Community",
      date: "April 22, 2025",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" stroke-width="2"/>
        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      excerpt:
        "Discover amazing strategies and high scores achieved by our community members. From perfect chain reactions to record-breaking scores, see how players are mastering Marble Spiral.",
      fullText:
        "We're absolutely blown away by the incredible strategies our community has been developing! This month, we're featuring some of the most impressive gameplay achievements shared by our players. From perfect chain reactions that clear entire levels in seconds, to record-breaking scores that seem impossible to beat, our community continues to amaze us with their strategic thinking. We've seen everything from innovative aiming techniques to creative use of chain reactions, proving that Marble Spiral is truly a platform for strategic mastery. Many players have shared that the game has helped them develop better problem-solving skills, with some even using their gaming strategies as inspiration for real-life decision making. We love seeing how each person approaches the same challenges differently, creating completely unique and beautiful solutions.",
    },
    {
      id: 3,
      title: "Performance Improvements & Bug Fixes",
      category: "Game Updates",
      date: "May 8, 2025",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      excerpt:
        "We've optimized the game for smoother performance and fixed several minor bugs. Your marble shooting experience should now be even more fluid and responsive.",
      fullText:
        "We're constantly working to improve your Marble Spiral experience, and this update brings significant performance improvements and bug fixes. We've optimized the marble physics engine to provide smoother shooting animations, especially on older devices. The aiming system is now more responsive, and we've reduced loading times between different levels. We've also fixed several minor bugs that were affecting the user experience, including issues with marble collision detection and chain reaction calculations. The game should now run more smoothly across all devices, providing an even more enjoyable strategic puzzle experience. We've also improved the auto-save feature to ensure your progress is always protected. These updates are part of our ongoing commitment to providing the best possible marble shooting experience.",
    },
    {
      id: 4,
      title: "Advanced Strategy Guide Released",
      category: "Game Updates",
      date: "May 20, 2025",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 3H6A2 2 0 0 1 8 1H16A2 2 0 0 1 18 3H22A2 2 0 0 1 24 5V19A2 2 0 0 1 22 21H2A2 2 0 0 1 0 19V5A2 2 0 0 1 2 3Z" stroke="currentColor" stroke-width="2"/>
        <path d="M8 1V5" stroke="currentColor" stroke-width="2"/>
        <path d="M16 1V5" stroke="currentColor" stroke-width="2"/>
        <line x1="6" y1="10" x2="18" y2="10" stroke="currentColor" stroke-width="2"/>
        <line x1="6" y1="14" x2="18" y2="14" stroke="currentColor" stroke-width="2"/>
        <line x1="6" y1="18" x2="14" y2="18" stroke="currentColor" stroke-width="2"/>
      </svg>`,
      excerpt:
        "Introducing our comprehensive strategy guide with tips, tricks, and advanced techniques for mastering Marble Spiral. Learn from the best players and improve your skills!",
      fullText:
        "We're thrilled to introduce our comprehensive strategy guide! This special release features detailed tips, tricks, and advanced techniques for mastering Marble Spiral. The guide covers everything from basic color matching principles to advanced chain reaction strategies. Each section has been carefully crafted with input from our top players, providing insights that will help you improve your gameplay significantly. The guide includes visual examples and step-by-step instructions for mastering difficult levels. Many of our players have found that following the guide has helped them achieve higher scores and unlock new achievements. The strategies are designed to be accessible to beginners while providing valuable insights for advanced players. We've also included special challenge sections that test your understanding of the techniques. This guide represents our commitment to helping players master the strategic depth of Marble Spiral.<br><br><img src='./depictions/card2.jpg' alt='Strategy Guide' style='width: 100%; max-width: 500px; border-radius: 8px; margin: 20px 0;'>",
    },
    {
      id: 5,
      title: "Player Story: From Beginner to Master",
      category: "Community",
      date: "June 5, 2025",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      excerpt:
        "Read the inspiring story of Alex, a casual gamer who discovered the strategic depth of Marble Spiral and became one of our top players.",
      fullText:
        "Today we want to share the inspiring story of Alex, a casual gamer who discovered the strategic depth of Marble Spiral. Alex started playing during a particularly stressful period at work and found that the strategic thinking required by the game helped him develop better problem-solving skills. 'I started playing during my lunch breaks,' Alex shares. 'Even just 10 minutes of strategic marble shooting helped me feel more focused and ready to tackle work challenges.' Alex's story is just one example of how our game is helping people develop strategic thinking skills in their daily lives. He has since completed all levels and has even started a small gaming group with his colleagues. 'It's amazing how something so simple can have such a profound impact on your cognitive skills,' he says. Stories like Alex's remind us why we created this game and inspire us to continue improving the strategic experience for all our players.",
    },
    {
      id: 6,
      title: "New Power-Ups Released",
      category: "Game Updates",
      date: "June 18, 2025",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="currentColor"/>
        <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`,
      excerpt:
        "New power-ups including multi-shot, color bomb, and time freeze are now available for premium users. Transform your gameplay with these strategic enhancements.",
      fullText:
        "We're excited to announce the release of new power-ups for premium users! This major update introduces strategic enhancements that will take your gameplay to the next level. The multi-shot power-up allows you to fire multiple marbles simultaneously, while the color bomb creates explosive chain reactions that clear large areas. The time freeze feature gives you precious seconds to plan your next move during intense moments. We've also added a marble preview feature that shows you the next few marbles in the queue, helping you plan your strategy better. The power-ups are designed to be strategic while providing powerful gameplay options. Early feedback from our beta testers has been overwhelmingly positive, with many users reporting that these new features have inspired them to develop new strategies and achieve higher scores. The new power-ups are available immediately for all premium subscribers, and we're offering a special discount for new users who want to try these features.",
    },
  ],

  contact: {
    email: "connection@getgamng.com",
    phone: "+1 (403) 333-4545",
    address: "101 9 Ave SW, Calgary, Alberta T2P 1J9, Canada",
    mapLocation: "101 9 Ave SW, Calgary, Alberta T2P 1J9, Canada",
  },
};

// Load reviews
function loadReviews() {
  const reviewsContainer = document.getElementById("reviews-container");
  if (!reviewsContainer) return;

  siteData.reviews.forEach((review) => {
    const reviewCard = document.createElement("div");
    reviewCard.className = "review-card";

    const stars = "★".repeat(review.rating);

    reviewCard.innerHTML = `
            <div class="review-rating">
                <span class="star">${stars}</span>
            </div>
            <p class="review-text">"${review.text}"</p>
            <div class="review-author">${review.author}</div>
        `;

    reviewsContainer.appendChild(reviewCard);
  });
}

// Load news (for news page)
function loadNews() {
  const newsContainer = document.getElementById("news-container");
  if (!newsContainer) return;

  // Group articles by category
  const gameUpdates = siteData.news.filter(
    (article) => article.category === "Game Updates"
  );
  const community = siteData.news.filter(
    (article) => article.category === "Community"
  );

  // Create Game Updates section
  const updatesSection = document.createElement("div");
  updatesSection.className = "news-section-category";
  updatesSection.innerHTML = `
    <h2 class="category-title">Game Updates</h2>
    <div class="news-grid-category">
      ${gameUpdates
        .map(
          (article) => `
        <div class="news-card">
          <div class="news-icon-container">
            <div class="news-icon">${article.icon}</div>
          </div>
          <div class="news-content">
            <div class="news-category">${article.category}</div>
            <h3 class="news-title">${article.title}</h3>
            <div class="news-date">${article.date}</div>
            <p class="news-excerpt">${article.excerpt}</p>
            <button class="btn btn-secondary read-more-btn" data-article-id="${article.id}">Read More</button>
            <div class="news-full-text" id="full-text-${article.id}" style="display: none;">
              <p>${article.fullText}</p>
            </div>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
  newsContainer.appendChild(updatesSection);

  // Create Community section
  const communitySection = document.createElement("div");
  communitySection.className = "news-section-category";
  communitySection.innerHTML = `
    <h2 class="category-title">Community</h2>
    <div class="news-grid-category">
      ${community
        .map(
          (article) => `
        <div class="news-card">
          <div class="news-icon-container">
            <div class="news-icon">${article.icon}</div>
          </div>
          <div class="news-content">
            <div class="news-category">${article.category}</div>
            <h3 class="news-title">${article.title}</h3>
            <div class="news-date">${article.date}</div>
            <p class="news-excerpt">${article.excerpt}</p>
            <button class="btn btn-secondary read-more-btn" data-article-id="${article.id}">Read More</button>
            <div class="news-full-text" id="full-text-${article.id}" style="display: none;">
              <p>${article.fullText}</p>
            </div>
          </div>
        </div>
      `
        )
        .join("")}
    </div>
  `;
  newsContainer.appendChild(communitySection);

  // Add event listeners for read more buttons
  const readMoreBtns = document.querySelectorAll(".read-more-btn");
  readMoreBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const articleId = this.getAttribute("data-article-id");
      const fullText = document.getElementById(`full-text-${articleId}`);
      const btnText = this.textContent;

      if (fullText.style.display === "none") {
        fullText.style.display = "block";
        this.textContent = "Read Less";
        this.classList.add("active");
      } else {
        fullText.style.display = "none";
        this.textContent = "Read More";
        this.classList.remove("active");
      }
    });
  });
}

// Initialize data loading when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  loadReviews();
  loadNews();
});
