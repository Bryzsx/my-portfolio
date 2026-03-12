document.addEventListener("DOMContentLoaded", () => {

    const nav = document.getElementById("nav");
    const toggle = document.getElementById("navToggle");
    const links = document.getElementById("navLinks");
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    let lastScroll = 0;
    const onScroll = () => {
        const y = window.scrollY;
        nav.classList.toggle("scrolled", y > 12);
        lastScroll = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

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

    function updateNav() {
        const y = window.scrollY + 120;
        let current = "";
        sections.forEach(s => { if (y >= s.offsetTop) current = s.id; });
        navLinks.forEach(l =>
            l.classList.toggle("active", l.getAttribute("href") === "#" + current)
        );
    }
    window.addEventListener("scroll", updateNav, { passive: true });
    updateNav();

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
    document.querySelectorAll(".anim").forEach(el => observer.observe(el));

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

    const topBtn = document.getElementById("backToTop");
    if (topBtn) topBtn.addEventListener("click", () =>
        window.scrollTo({ top: 0, behavior: "smooth" })
    );

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
