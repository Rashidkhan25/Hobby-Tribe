
// GSAP and ScrollTrigger Animations
gsap.registerPlugin(ScrollTrigger);

// The app where happiness is restored section
function animateHappinessSection() {
  gsap.fromTo(
    ".happiness-heading h1",
    { y: 100, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power4.out",
    }
  );

  gsap.fromTo(
    ".card",
    { y: 80, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1.3,
      stagger: 0.2,
      ease: "back.out(1.7)",
    }
  );
}

ScrollTrigger.create({
  trigger: "#happiness-section",
  start: "top 80%",
  onEnter: animateHappinessSection,
  onEnterBack: animateHappinessSection,
  onLeave: () =>
    gsap.set([".card", ".happiness-heading h1"], { opacity: 0, y: 80 }),
  onLeaveBack: () =>
    gsap.set([".card", ".happiness-heading h1"], { opacity: 0, y: 80 }),
});

// Quote Section
gsap.from(".quote-header h1", {
  scrollTrigger: {
    trigger: ".quote-section",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".quote-card", {
  scrollTrigger: {
    trigger: ".quote-cards",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out",
  stagger: 0.3,
});

// Join Tribe Content
gsap.from(".join-tribe-content h3, .join-tribe-content h1", {
  scrollTrigger: {
    trigger: ".join-tribe-section",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
  },
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  stagger: 0.2,
});

gsap.from(".qr-code1 img", {
  scrollTrigger: {
    trigger: ".tribe-icons",
    start: "top 85%",
    toggleActions: "play reverse play reverse",
  },
  y: 30,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.1,
});

gsap.from(".tribe-icons img", {
  scrollTrigger: {
    trigger: ".tribe-icons",
    start: "top 85%",
    toggleActions: "play reverse play reverse",
  },
  y: 30,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.1,
});

// Corporates love using Hobby Tribe Section
gsap.from(".corporate-section .content h1, .corporate-section .content p", {
  scrollTrigger: {
    trigger: ".corporate-section",
    start: "top 80%",
    toggleActions: "play reverse play reverse",
  },
  x: -50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2,
});

gsap.from(".corporate-section .buttons a", {
  scrollTrigger: {
    trigger: ".corporate-section .buttons",
    start: "top 90%",
    toggleActions: "play reverse play reverse",
  },
  opacity: 1,
  duration: 0.8,
  ease: "back.out(1.7)",
  stagger: 0.2,
});

gsap.from(".corporate-section .image-container img", {
  scrollTrigger: {
    trigger: ".corporate-section .image-container",
    start: "top 90%",
    toggleActions: "play reverse play reverse",
  },
  x: 50,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
});

// Interested in hobby classes Section
gsap.from(".hobby-img", {
  scrollTrigger: {
    trigger: ".hobby-images",
    start: "top 85%",
    toggleActions: "play reverse play reverse",
  },
  scale: 0.9,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  stagger: 0.3,
});

gsap.from(".hobby-text h2, .hobby-text p", {
  scrollTrigger: {
    trigger: ".hobby-text",
    start: "top 85%",
    toggleActions: "play reverse play reverse",
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2,
});

gsap.from(".hobby-button a", {
  scrollTrigger: {
    trigger: ".hobby-button",
    start: "top 90%",
    toggleActions: "play reverse play reverse",
  },
  scale: 0.8,
  opacity: 0,
  duration: 0.8,
  ease: "back.out(1.7)",
});