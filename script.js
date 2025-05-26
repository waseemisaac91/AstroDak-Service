// DOM Elements
const header = document.getElementById("mainHeader");
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");
const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");
const yearSpan = document.getElementById("year");
const contactForm = document.getElementById("contactForm");

// Set current year in footer
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Header scroll effect
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

  // Highlight active section
  let current = "";
  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Mobile menu toggle
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
  overlay.classList.toggle("active");

  // Toggle hamburger to X
  if (hamburger.classList.contains("active")) {
    hamburger.children[0].style.transform = "rotate(45deg) translate(5px, 6px)";
    hamburger.children[1].style.opacity = "0";
    hamburger.children[2].style.transform =
      "rotate(-45deg) translate(5px, -6px)";
  } else {
    hamburger.children[0].style.transform = "none";
    hamburger.children[1].style.opacity = "1";
    hamburger.children[2].style.transform = "none";
  }
});

// Mobile menu close when clicking any link
document.querySelectorAll(".mobile-nav-link, .mobile-cta").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    hamburger.children[0].style.transform = "none";
    hamburger.children[1].style.opacity = "1";
    hamburger.children[2].style.transform = "none";
  });
});

// Smooth scrolling for all links
document
  .querySelectorAll(".nav-link, .mobile-nav-link, .mobile-cta, .btn")
  .forEach((link) => {
    link.addEventListener("click", (e) => {
      const href = link.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();

        // Get target section
        const targetId = href;
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
          // Scroll to target
          targetSection.scrollIntoView({
            behavior: "smooth",
          });

          // Close mobile menu if open
          if (mobileMenu.classList.contains("active")) {
            hamburger.classList.remove("active");
            mobileMenu.classList.remove("active");
            overlay.classList.remove("active");
            hamburger.children[0].style.transform = "none";
            hamburger.children[1].style.opacity = "1";
            hamburger.children[2].style.transform = "none";
          }
        }
      }
    });
  });

// EmailJS initialization and form submission
(function () {
  emailjs.init("AqhrHKUKmy5-ZUk5u");
})();

// Contact form submission
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const form = e.target;

    // Show loading state
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = "Verzenden...";
    submitBtn.disabled = true;

    emailjs
      .sendForm("service_sckkimu", "template_4l9fb46", form)
      .then(() => {
        alert("Bericht succesvol verzonden!");
        form.reset();
      })
      .catch((err) => {
        console.error("Error:", err);
        alert("Fout bij verzenden: " + err);
      })
      .finally(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      });
  });
}

// Project data
const projectsData = [
  {
    id: 1,
    title: "Dakisolatie platdaken",
    description: "Bitumen platdak isolatie",
    category: "dakisolatie",
    image: "img/Bitumen platdak isolatie1.jpg",
  },
  {
    id: 2,
    title: "Dakisolatie platdaken",
    description: "Bitumen platdak isolatie",
    category: "dakisolatie",
    image: "img/Bitumen platdak isolatie2.jpg",
  },
  {
    id: 3,
    title: "Hellede Daken",
    description: "Dakpannen",
    category: "hellededaken",
    image: "img/Dakpannen1.jpg",
  },
  {
    id: 4,
    title: "Hellede Daken",
    description: "Dakpannen",
    category: "hellededaken",
    image: "img/Dakpannen2.jpg",
  },
  {
    id: 5,
    title: "Hellede Daken",
    description: "Dakpannen",
    category: "hellededaken",
    image: "img/Dakpannen3.jpg",
  },
  {
    id: 6,
    title: "Dakisolatie platdaken",
    description: "lichtKoepel",
    category: "dakisolatie",
    image: "img/lichtKoepel1.jpg",
  },
  {
    id: 7,
    title: "Dakisolatie platdaken",
    description: "lichtKoepel",
    category: "dakisolatie",
    image: "img/lichtKoepel2.jpg",
  },
  {
    id: 8,
    title: "Schoorsteen Reparatie",
    description: "Schoorsteen",
    category: "schoorsteen",
    image: "img/schoorsteen1.jpg",
  },
  {
    id: 9,
    title: "Schoorsteen Reparatie",
    description: "Schoorsteen",
    category: "schoorsteen",
    image: "img/schoorsteen2.jpg",
  },
  {
    id: 10,
    title: "Dakisolatie platdaken",
    description: "Bitumen platdak isolatie",
    category: "dakisolatie",
    image: "img/Bitumen platdak isolatie3.jpg",
  },
  {
    id: 11,
    title: "Dakisolatie platdaken",
    description: "Bitumen platdak isolatie",
    category: "dakisolatie",
    image: "img/Bitumen platdak isolatie4.jpg",
  },
  {
    id: 12,
    title: "Hellede Daken",
    description: "Dakraam",
    category: "hellededaken",
    image: "img/Dakraam vervangen1.jpg",
  },
  {
    id: 13,
    title: "Zink werk",
    description: "Dakgoot",
    category: "zinkwerk",
    image: "img/Zinkwerk-Dakgootset.jpg",
  },
  {
    id: 14,
    title: "Zink werk",
    description: "Dakgoot",
    category: "zinkwerk",
    image: "img/Zinkwerk-Dakgootset2.jpg",
  },
  {
    id: 15,
    title: "Zink werk",
    description: "Dakgoot",
    category: "zinkwerk",
    image: "img/Zinkwerk-Dakgootset3.jpg",
  },
 
  {
    id: 16,
    title: "Zink werk",
    description: "Kilgoot",
    category: "zinkwerk",
    image: "img/kilgoot.jpg",
  },
];

// Reviews data
const reviewsData = [
  {
    id: 1,
    name: "Mark van Dijk",
    location: "'s-Hertogenbosch",
    rating: 5,
    text: "AstroDak heeft ons platdak perfect geïsoleerd. Het team was professioneel, netjes en heeft alles volgens afspraak opgeleverd. De isolatie werkt uitstekend - we merken direct het verschil in temperatuur en geluidsisolatie.",
    date: "15 mei 2024",
  },
  {
    id: 2,
    name: "Eva Janssen",
    location: "Eindhoven",
    rating: 4,
    text: "Zeer tevreden over de zinkwerkzaamheden aan onze dakgoten. Snel geregeld en goede communicatie. Alleen het schoonmaken achteraf had wat beter gekund, maar verder prima ervaring.",
    date: "2 april 2024",
  },
  {
    id: 3,
    name: "Peter de Vries",
    location: "Breda",
    rating: 5,
    text: "Fantastisch werk geleverd aan ons hellend dak. De dakpannen zijn perfect vervangen en de isolatie is onberispelijk uitgevoerd. Prijs-kwaliteitverhouding is uitstekend. Zeker een aanrader!",
    date: "22 maart 2024",
  },
];

// Function to render reviews
function renderReviews() {
  const reviewsContainer = document.querySelector(".reviews-container");
  if (!reviewsContainer) return;

  reviewsContainer.innerHTML = "";

  reviewsData.forEach((review) => {
    const reviewCard = document.createElement("div");
    reviewCard.className = "review-card";

    // Get initials for avatar
    const initials = review.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();

    // Create stars HTML
    let starsHtml = "";
    for (let i = 1; i <= 5; i++) {
      if (i <= review.rating) {
        starsHtml += '<i class="fas fa-star"></i>';
      } else {
        starsHtml += '<i class="far fa-star"></i>';
      }
    }

    reviewCard.innerHTML = `
      <div class="review-header">
        <div class="review-avatar">${initials}</div>
        <div class="review-info">
          <h4>${review.name}</h4>
          <p>${review.location}</p>
        </div>
      </div>
      <div class="review-stars">
        ${starsHtml}
      </div>
      <div class="review-text">
        ${review.text}
      </div>
      <span class="review-date">${review.date}</span>
    `;

    reviewsContainer.appendChild(reviewCard);
  });
}

// Review modal functionality - FIXED
let reviewModal,
  openReviewModalBtn,
  closeReviewModalBtn,
  reviewForm,
  stars,
  ratingText;

// Rating text phrases
const ratingPhrases = [
  "Selecteer uw beoordeling",
  "Slecht - Niet tevreden",
  "Matig - Kon beter",
  "Gemiddeld - Acceptabel",
  "Goed - Tevreden",
  "Uitstekend - Fantastisch",
];

// Initialize review modal functionality
function initializeReviewModal() {
  reviewModal = document.getElementById("reviewModal");
  openReviewModalBtn = document.getElementById("openReviewModal");
  closeReviewModalBtn = document.querySelector(".close-modal");
  reviewForm = document.getElementById("reviewForm");
  stars = document.querySelectorAll(".star-rating i");
  ratingText = document.querySelector(".rating-text");

  if (!reviewModal || !openReviewModalBtn) {
    console.warn("Review modal elements not found");
    return;
  }

  // Open modal with smooth animation
  openReviewModalBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("Opening review modal");
    reviewModal.style.display = "block";
    document.body.style.overflow = "hidden";

    // Add fade-in animation
    setTimeout(() => {
      reviewModal.style.opacity = "1";
    }, 10);
  });

  // Close modal function
  function closeModal() {
    reviewModal.style.opacity = "0";
    setTimeout(() => {
      reviewModal.style.display = "none";
      document.body.style.overflow = "";
    }, 300);
  }

  // Close modal events
  if (closeReviewModalBtn) {
    closeReviewModalBtn.addEventListener("click", closeModal);
  }

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === reviewModal) {
      closeModal();
    }
  });

  // Star rating functionality
  if (stars && stars.length > 0) {
    stars.forEach((star) => {
      star.addEventListener("click", () => {
        const rating = parseInt(star.getAttribute("data-rating"));
        const ratingInput = document.getElementById("reviewRating");

        if (ratingInput) {
          ratingInput.value = rating;
        }

        if (ratingText) {
          ratingText.textContent = ratingPhrases[rating];
        }

        stars.forEach((s, index) => {
          if (index < rating) {
            s.classList.remove("far");
            s.classList.add("fas", "active");
          } else {
            s.classList.remove("fas", "active");
            s.classList.add("far");
          }
        });
      });

      // Hover effect for stars
      star.addEventListener("mouseover", () => {
        const hoverRating = parseInt(star.getAttribute("data-rating"));
        if (ratingText) {
          ratingText.textContent = ratingPhrases[hoverRating];
        }

        stars.forEach((s, index) => {
          if (index < hoverRating) {
            s.classList.add("hover");
          } else {
            s.classList.remove("hover");
          }
        });
      });

      star.addEventListener("mouseout", () => {
        const ratingInput = document.getElementById("reviewRating");
        const currentRating = ratingInput ? parseInt(ratingInput.value) : 0;

        if (ratingText) {
          ratingText.textContent =
            currentRating > 0 ? ratingPhrases[currentRating] : ratingPhrases[0];
        }

        stars.forEach((s) => {
          s.classList.remove("hover");
        });
      });
    });
  }

  // Form validation and submission
  if (reviewForm) {
    reviewForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("reviewName")?.value.trim();
      const location = document.getElementById("reviewLocation")?.value.trim();
      const rating = parseInt(
        document.getElementById("reviewRating")?.value || "0"
      );
      const text = document.getElementById("reviewText")?.value.trim();

      // Validate form
      if (!name) {
        alert("Vul alstublieft uw naam in");
        document.getElementById("reviewName")?.focus();
        return;
      }

      if (rating === 0) {
        alert("Selecteer alstublieft een beoordeling");
        return;
      }

      if (!text || text.length < 20) {
        alert("Uw review moet minimaal 20 karakters bevatten");
        document.getElementById("reviewText")?.focus();
        return;
      }

      // Create new review object
      const newReview = {
        id: reviewsData.length + 1,
        name: name,
        location: location || "Nederland",
        rating: rating,
        text: text,
        date: new Date().toLocaleDateString("nl-NL", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
      };

      // Add to beginning of reviews array
      reviewsData.unshift(newReview);

      // Re-render reviews
      renderReviews();

      // Reset form
      reviewForm.reset();
      if (stars) {
        stars.forEach((star) => {
          star.classList.remove("fas", "active", "hover");
          star.classList.add("far");
        });
      }

      const ratingInput = document.getElementById("reviewRating");
      if (ratingInput) {
        ratingInput.value = "0";
      }

      if (ratingText) {
        ratingText.textContent = ratingPhrases[0];
      }

      // Close modal
      closeModal();

      // Show success message
      showSuccessMessage("Bedankt voor uw review!");
    });
  }
}

// Function to show success message
function showSuccessMessage(message) {
  const successMsg = document.createElement("div");
  successMsg.className = "success-message";
  successMsg.innerHTML = `
    <i class="fas fa-check-circle"></i>
    <span>${message}</span>
  `;
  successMsg.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #28a745;
    color: white;
    padding: 15px 20px;
    border-radius: 5px;
    z-index: 10000;
    opacity: 0;
    transform: translateX(100%);
    transition: all 0.3s ease;
  `;

  document.body.appendChild(successMsg);

  // Show animation
  setTimeout(() => {
    successMsg.style.opacity = "1";
    successMsg.style.transform = "translateX(0)";
  }, 10);

  // Hide after 3 seconds
  setTimeout(() => {
    successMsg.style.opacity = "0";
    successMsg.style.transform = "translateX(100%)";
    setTimeout(() => {
      if (document.body.contains(successMsg)) {
        document.body.removeChild(successMsg);
      }
    }, 300);
  }, 3000);
}

// Function to render projects
function renderProjects(filter = "all") {
  const projectsGrid = document.querySelector(".projects-grid");
  if (!projectsGrid) return;

  projectsGrid.innerHTML = "";

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  filteredProjects.forEach((project) => {
    const projectCard = document.createElement("div");
    projectCard.className = "project-card";
    projectCard.dataset.category = project.category;

    projectCard.innerHTML = `
      <img src="${project.image}" alt="${project.title}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2Y4ZjlmYSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM2Yzc1N2QiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBub3QgZm91bmQ8L3RleHQ+PC9zdmc+'" />
      <div class="project-overlay">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </div>
    `;

    projectsGrid.appendChild(projectCard);
  });
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded, initializing...");

  // Render initial content
  renderReviews();
  renderProjects();

  // Initialize review modal after a small delay to ensure all elements are loaded
  setTimeout(() => {
    initializeReviewModal();
  }, 100);
});

// Filter projects when dropdown changes
document.addEventListener("DOMContentLoaded", () => {
  const projectFilter = document.getElementById("projectFilter");
  if (projectFilter) {
    projectFilter.addEventListener("change", function () {
      renderProjects(this.value);
    });
  }
});

// Escape key to close modal
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const modal = document.getElementById("reviewModal");
    if (modal && modal.style.display === "block") {
      modal.style.display = "none";
      document.body.style.overflow = "";
    }
  }
});

// Additional error handling for missing elements
window.addEventListener("error", (e) => {
  console.error("Script error:", e.error);
});

// Console log for debugging
console.log("Script loaded successfully");
