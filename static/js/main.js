document.addEventListener("DOMContentLoaded", () => {

    const nav = document.getElementById("nav");
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    // Nav scroll
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // Mobile menu
    if (toggle && links) {
        toggle.addEventListener("click", () => {
            toggle.classList.toggle("open");
            links.classList.toggle("mobile-open");
        });
        links.querySelectorAll("a").forEach(a =>
            a.addEventListener("click", () => {
                toggle.classList.remove("open");
                links.classList.remove("mobile-open");
            })
        );
    }

    // Active nav highlight
    function updateNav() {
        const y = window.scrollY + 100;
        let current = "";
        sections.forEach(s => { if (y >= s.offsetTop) current = s.id; });
        navLinks.forEach(l =>
            l.classList.toggle("active", l.getAttribute("href") === "#" + current)
        );
    }
    window.addEventListener("scroll", updateNav, { passive: true });
    updateNav();

    // Scroll reveal
    const observer = new IntersectionObserver(
        entries => entries.forEach(entry => {
            if (entry.isIntersecting) {
                const d = entry.target.dataset.delay || 0;
                entry.target.style.transitionDelay = d * 60 + "ms";
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        }),
        { threshold: 0.06, rootMargin: "0px 0px -20px 0px" }
    );
    document.querySelectorAll(".anim").forEach(el => observer.observe(el));

    // Code syntax coloring
    const code = document.querySelector(".card-code code");
    if (code) {
        let h = esc(code.textContent);
        h = h.replace(/(#.*)/g, '<span style="color:#6a9955">$1</span>');
        h = h.replace(/("(?:[^"\\]|\\.)*")/g, '<span style="color:#ce9178">$1</span>');
        h = h.replace(/\b(developer)\b/g, '<span style="color:#9cdcfe">$1</span>');
        h = h.replace(/(\{|\}|\[|\])/g, '<span style="color:#d4d4d4">$1</span>');
        code.innerHTML = h;
    }

    function esc(t) {
        const d = document.createElement("div");
        d.appendChild(document.createTextNode(t));
        return d.innerHTML;
    }

    // Back to top
    const top = document.getElementById("backToTop");
    if (top) top.addEventListener("click", () =>
        window.scrollTo({ top: 0, behavior: "smooth" })
    );
});
