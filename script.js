const toggle = document.getElementById("themeToggle");
const saved = localStorage.getItem("concrete-theme");
if(saved === "dark"){ document.body.classList.add("dark"); toggle.textContent = "☾"; }
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const dark = document.body.classList.contains("dark");
  localStorage.setItem("concrete-theme", dark ? "dark" : "light");
  toggle.textContent = dark ? "☾" : "☼";
});

const cards = document.querySelectorAll(".concept-card,.flow-step,.security-grid article,.blog-card");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.animate(
        [{opacity:0, transform:"translateY(18px)"},{opacity:1, transform:"translateY(0)"}],
        {duration:550, easing:"cubic-bezier(.2,.7,.2,1)", fill:"forwards"}
      );
      observer.unobserve(entry.target);
    }
  });
},{threshold:.08});
cards.forEach(card => observer.observe(card));
