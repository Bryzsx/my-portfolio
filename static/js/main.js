document.addEventListener("DOMContentLoaded", () => {

  const nav = document.getElementById("nav");
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  const scrollTop = document.getElementById("backToTop");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  const lightboxClose = document.getElementById("lightboxClose");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  // Mobile menu
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      toggle.classList.toggle("open");
      links.classList.toggle("open");
    });
    links.querySelectorAll("a").forEach(a =>
      a.addEventListener("click", () => {
        toggle.classList.remove("open");
        links.classList.remove("open");
      })
    );
  }

  // Nav scroll + active section + scroll-top visibility
  function onScroll() {
    const y = window.scrollY;
    if (nav) nav.classList.toggle("scrolled", y > 50);
    if (scrollTop) scrollTop.classList.toggle("visible", y > 500);

    let current = "";
    sections.forEach(s => {
      if (y >= s.offsetTop - 200) current = s.id;
    });
    navLinks.forEach(l => {
      const href = l.getAttribute("href") || "";
      l.classList.toggle("active", href === "#" + current);
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Scroll to top
  if (scrollTop) scrollTop.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" })
  );

  // Scroll reveal
  const observer = new IntersectionObserver(
    entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        const d = entry.target.dataset.delay || 0;
        entry.target.style.transitionDelay = d * 80 + "ms";
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }),
    { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
  );
  document.querySelectorAll(".anim, .reveal").forEach(el => observer.observe(el));

  // Lightbox
  if (lightbox && lightboxImg && lightboxClose) {
    document.addEventListener("click", e => {
      const img = e.target.closest(".ach-thumb img, .proj-thumb img, .cert-img");
      if (img) {
        e.preventDefault();
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add("active");
      }
    });

    lightboxClose.addEventListener("click", () => lightbox.classList.remove("active"));
    lightbox.addEventListener("click", e => {
      if (e.target === lightbox) lightbox.classList.remove("active");
    });
    document.addEventListener("keydown", e => {
      if (e.key === "Escape") lightbox.classList.remove("active");
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", e => {
      const target = document.querySelector(anchor.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
});
