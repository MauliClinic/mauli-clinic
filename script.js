const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const form = document.querySelector(".appointment-form");
const statusText = document.querySelector(".form-status");

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

nav?.addEventListener("click", (event) => {
  if (event.target instanceof HTMLAnchorElement) {
    nav.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Open navigation");
  }
});

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = String(formData.get("name") || "").trim();
  statusText.textContent = `Thank you${name ? `, ${name}` : ""}. The clinic team will contact you to confirm your appointment.`;
  form.reset();
});
