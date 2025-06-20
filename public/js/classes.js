document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-hobby");
  const cardsContainer = document.getElementById("cards-container");

  function getCards() {
    return cardsContainer.querySelectorAll(".card:not(.request-card)");
  }

  function createRequestCard(searchTerm) {
    const requestCard = document.createElement("article");
    requestCard.className = "card request-card";
    requestCard.innerHTML = `
      <div class="request-card-content">
        <div class="request-icon">
          <i class="fas fa-plus-circle"></i>
        </div>
        <div class="card-content">
          <h3 class="card-title">Can't find "${searchTerm}"?</h3>
          <p class="request-text">Request this hobby and we'll add it to our collection!</p>
          <button class="join-btn request-btn" onclick="requestHobby('${searchTerm}')">Request Hobby</button>
        </div>
      </div>
    `;
    return requestCard;
  }

  function filterCards() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    const cards = getCards();
    let visibleCount = 0;

    // Remove any existing request cards
    const existingRequestCards = cardsContainer.querySelectorAll(".request-card");
    existingRequestCards.forEach(card => card.remove());

    cards.forEach((card) => {
      const titleElement = card.querySelector(".card-title");
      if (!titleElement) return;

      const title = titleElement.textContent.toLowerCase();
      const matchesSearch = title.includes(searchTerm);

      card.style.display = matchesSearch ? "block" : "none";
      if (matchesSearch) visibleCount++;
    });

    // Add request card if no results found and search term exists
    if (visibleCount === 0 && searchTerm.length > 0) {
      const requestCard = createRequestCard(searchTerm);
      cardsContainer.appendChild(requestCard);
    }
  }

  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func.apply(this, args), delay);
    };
  }

  const debouncedFilter = debounce(filterCards, 300);

  if (searchInput) {
    searchInput.addEventListener("input", debouncedFilter);
  }
});

// Global function for requesting hobby
function requestHobby(hobbyName) {
  // You can customize this function based on your needs
  // For example: show a modal, redirect to a form, or make an API call
  alert(`Thank you for your interest in "${hobbyName}"! We'll consider adding it to our hobby collection.`);
  
  // Example: You could redirect to a request form
  // window.location.href = `/request-hobby?name=${encodeURIComponent(hobbyName)}`;
  
  // Or show a modal, make an API call, etc.
}

//classes card data
const classData = [
  {
    title: "Abacus",
    image: "/images/class1.jpg",
    genre: "Mind Games",
    category: "Mind Games",
    duration: "60 min",
    age: "3 - 15 years",
    mode: "Online/Offline",
  },
  {
    title: "Beatboxing",
    image: "/images/class2.png",
    genre: "Singing",
    category: "Musical Instruments",
    duration: "60 min",
    age: "10 - 100 years",
    mode: "Online/Offline",
  },
  {
    title: "Chess",
    image: "/images/class3.jpg",
    genre: "Mind Games",
    category: "Mind Games",
    duration: "45 min",
    age: "5 - 15 years",
    mode: "Online/Offline",
  },
  {
    title: "Crayon Art",
    image: "/images/class4.png",
    genre: "Art & Craft",
    category: "Art & Craft",
    duration: "60 min",
    age: "3 - 15 years",
    mode: "Online/Offline",
  },
  {
    title: "Dance",
    image: "/images/class5.png",
    genre: "Dance",
    category: "Dance",
    duration: "60 min",
    age: "5 - 15 years",
    mode: "Online/Offline",
  },
  {
    title: "Embroidery",
    image: "/images/class6.jpg",
    genre: "Embroidery",
    category: "Embroidery",
    duration: "60 min",
    age: "5 - 15 years",
    mode: "Online/Offline",
  },
  {
    title: "Faux Calligraphy",
    image: "/images/class7.jpg",
    genre: "Art & Craft",
    category: "Art & Craft",
    duration: "60 min",
    age: "5 - 15 years",
    mode: "Online/Offline",
  },
  {
    title: "Fitness",
    image: "/images/class8.jpg",
    genre: "Fitness",
    category: "Fitness",
    duration: "60 min",
    age: "5 - 15 years",
    mode: "Online/Offline",
  },
  {
    title: "Fork Art",
    image: "/images/class9.png",
    genre: "Art & Craft",
    category: "Art & Craft",
    duration: "60 min",
    age: "5 - 15 years",
    mode: "Online/Offline",
  },
  {
    title: "French",
    image: "/images/class10.png",
    genre: "Language",
    category: "Language",
    duration: "60 min",
    age: "5 - 15 years",
    mode: "Online/Offline",
  },
  {
    title: "Guitar",
    image: "/images/class11.jpg",
    genre: "Musical Instruments",
    category: "Musical Instruments",
    duration: "60 min",
    age: "8 - 60 years",
    mode: "Online/Offline",
  },
  {
    title: "Hindi",
    image: "/images/class12.png",
    genre: "Language",
    category: "Language",
    duration: "60 min",
    age: "8 - 60 years",
    mode: "Online/Offline",
  },
  {
    title: "Hindiustani Classical",
    image: "/images/class13.png",
    genre: "Singing",
    category: "Singing",
    duration: "60 min",
    age: "8 - 60 years",
    mode: "Online/Offline",
  },
  {
    title: "Keyboard",
    image: "/images/class14.jpg",
    genre: "Musical Instruments",
    category: "Musical Instruments",
    duration: "60 min",
    age: "8 - 60 years",
    mode: "Online/Offline",
  },
  {
    title: "Paper Art and Craft",
    image: "/images/class15.png",
    genre: "Art & Craft",
    category: "Art & Craft",
    duration: "60 min",
    age: "8 - 60 years",
    mode: "Online/Offline",
  },
  {
    title: "Pencil Shading",
    image: "/images/class16.jpg",
    genre: "Art & Craft",
    category: "Art & Craft",
    duration: "60 min",
    age: "8 - 60 years",
    mode: "Online/Offline",
  },
  {
    title: "Photography",
    image: "/images/class17.jpg",
    genre: "Photography",
    category: "Photography",
    duration: "60 min",
    age: "8 - 60 years",
    mode: "Online/Offline",
  },
  {
    title: "Photoshop",
    image: "/images/class18.jpg",
    genre: "Photography",
    category: "Photography",
    duration: "60 min",
    age: "8 - 60 years",
    mode: "Online/Offline",
  },
  {
    title: "Spanish",
    image: "/images/class19.png",
    genre: "Language",
    category: "Language",
    duration: "60 min",
    age: "8 - 60 years",
    mode: "Online/Offline",
  },
  {
    title: "Story Telling",
    image: "/images/class20.png",
    genre: "Creative Writing",
    category: "Creative Writing",
    duration: "60 min",
    age: "8 - 60 years",
    mode: "Online/Offline",
  },
  {
    title: "Water Colour Art",
    image: "/images/class21.png",
    genre: "Art & Craft",
    category: "Art & Craft",
    duration: "60 min",
    age: "8 - 60 years",
    mode: "Online/Offline",
  },
  {
    title: "Western Vocals",
    image: "/images/class22.png",
    genre: "Singing",
    category: "Musical Instruments",
    duration: "60 min",
    age: "8 - 60 years",
    mode: "Online/Offline",
  },
];

const container = document.getElementById("cards-container");

function renderCards(data) {
  container.innerHTML = "";
  data.forEach((cls) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
  <img src="${cls.image}" alt="${cls.title}" />
<div class="card-content">
  <h3 class="card-title">${cls.title}</h3>
  <div class="card-info">
    <span>👥 ${cls.mode}</span>
  </div>
  <button class="join-btn" onclick="goToInterestPage('${cls.title}')">Interested</button>
</div>
`;
    container.appendChild(card);
  });
}

function goToInterestPage(courseTitle) {
    window.location.href = `/interest?title=${encodeURIComponent(courseTitle)}`;
  }

function setupGenreFilter() {
  const genres = [...new Set(classData.map((c) => c.genre))];
  const sidebar = document.getElementById("sidebar-genres");

  genres.forEach((g) => {
    const label = document.createElement("label");
    label.className = "category-item";
    label.innerHTML = `
          <input type="checkbox" name="genre" value="${g}">
          ${g}
        `;
    sidebar.appendChild(label);
  });

  document.querySelectorAll('input[name="genre"]').forEach((input) => {
    input.addEventListener("change", () => {
      const selected = Array.from(
        document.querySelectorAll('input[name="genre"]:checked')
      ).map((i) => i.value);
      const filtered =
        selected.length === 0
          ? classData
          : classData.filter((c) => selected.includes(c.genre));
      renderCards(filtered);
    });
  });
}

// Init
renderCards(classData);
setupGenreFilter();


  const words = ["Time.", "Place.", "Price."];
  let currentWordIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  const typewriter = document.getElementById("typewriter-word");

  function typeEffect() {
    const currentWord = words[currentWordIndex];
    const visibleText = currentWord.slice(0, currentCharIndex);

    typewriter.textContent = visibleText;

    if (!isDeleting && currentCharIndex < currentWord.length) {
      currentCharIndex++;
      setTimeout(typeEffect, 150);
    } else if (isDeleting && currentCharIndex > 0) {
      currentCharIndex--;
      setTimeout(typeEffect, 100);
    } else {
      if (!isDeleting) {
        isDeleting = true;
        setTimeout(typeEffect, 1000); // Pause before deleting
      } else {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        setTimeout(typeEffect, 300); // Pause before next word
      }
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
  });