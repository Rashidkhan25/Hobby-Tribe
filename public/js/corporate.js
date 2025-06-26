
// Hero Left
const fullText =
  "Increase offline engagement rates by 67%, Reduce engagement cost by 30%";
const target = document.getElementById("typewriter-text");

let index = 0;

function typeWriter() {
  if (!target || index >= fullText.length) return;

  if (index === 37) target.innerHTML += '<span id="highlight-purple">';
  if (index === 40) target.innerHTML += "</span>";
  if (index === 68) target.innerHTML += '<span id="highlight-purple">';
  if (index === 71) target.innerHTML += "</span>";

  target.innerHTML += fullText[index];

  index++;
  setTimeout(typeWriter, 40);
}

window.addEventListener("DOMContentLoaded", typeWriter);


// Hero Right
const imageSets = [
  [
    "/images/hobby1.png",
    "/images/hobby2.png",
    "/images/hobby3.jpg"
  ],
  [
    "/images/hobby4.jpg",
    "/images/hobby5.png",
    "/images/hobby6.png"
  ],
  [
    "/images/hobby7.png",
    "/images/hobby8.png",
    "/images/hobby9.png"
  ],
  [
    "/images/hobby10.png",
    "/images/hobby11.png",
    "/images/hobby12.png"
  ]
];

let currentSetIndex = 1;
const imgElements = document.querySelectorAll(".corporate-right img");

function changeImageSet() {
  // Start fade out transition for all images
  imgElements.forEach(img => {
    img.classList.add("fade-out");
    img.classList.remove("fade-in");
  });

  // Wait for half the transition duration, then change sources
  setTimeout(() => {
    const nextSet = imageSets[currentSetIndex];
    
    // Change image sources
    imgElements.forEach((img, i) => {
      img.src = nextSet[i];
    });

    // Small delay to ensure images are loaded, then fade in
    setTimeout(() => {
      imgElements.forEach(img => {
        img.classList.remove("fade-out");
        img.classList.add("fade-in");
      });
    }, 50); 

    // Move to next set
    currentSetIndex = (currentSetIndex + 1) % imageSets.length;
  }, 400); // Half of the 0.8s CSS transition duration
}

// Initialize with fade-in class for smooth start
document.addEventListener('DOMContentLoaded', () => {
  imgElements.forEach(img => {
    img.classList.add("fade-in");
  });
});

// Change image set every 5 seconds
setInterval(changeImageSet, 5000);

//What do we Offer
document.querySelectorAll(".unique-offer-header").forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    item.classList.toggle("active");
  });
});


//Why Choose Us Counter Animation
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".count");
  const speed = 800;

  const startCounting = () => {
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const stepTime = 10;
      const increment = Math.ceil(target / (speed / stepTime));

      const update = () => {
        if (count < target) {
          count += increment;
          if (count > target) count = target;
          counter.innerText = count;
          setTimeout(update, stepTime);
        } else {
          counter.innerText = target;
        }
      };

      update();
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounting();
          observer.unobserve(entry.target); 
        }
      });
    },
    {
      threshold: 0.8, 
    }
  );

  const chooseSection = document.querySelector(".choose-section");
  if (chooseSection) {
    observer.observe(chooseSection);
  }
});

//Testimonials Slider
const testimonials = [
    {
      text: "“The Hobby Tribe did an awesome job in helping out employees relax and de-stress. Everyone had a great time tapping into their inner child. We strongly suggest trying out The Hobby Tribe to enhance employee engagement. All in all, it was a really enjoyable experience.”",
      author: "HR at Klay Capital"
    },
    {
      text: "“Hobby Tribe’s innovative platform coupled with the offline sessions just make our employees very excited. Makes them super competitive to win the prizes every month. Some of them have even said that the platform reduces their stress. I’m very happy with Hobby Tribe.”",
      author: "HR at Manipal Hospitals"
    },
    {
      text: "“Hobby Tribe always delivers on engagement, thanks to them my employees are more engaged and look forward to the next offline sessions.”",
      author: "HR at Nobel Hygiene"
    },
  ];

  let currentIndex = 0;

  const textEl = document.getElementById("testimonial-text");
  const authorEl = document.getElementById("testimonial-author");

  function showTestimonial(index) {
    textEl.textContent = `“${testimonials[index].text}”`;
    authorEl.textContent = testimonials[index].author;
  }

  function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
  }

  function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
  }

  showTestimonial(currentIndex);
  setInterval(nextTestimonial, 5000);