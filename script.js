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
  const phone = String(formData.get("phone") || "").trim();
  const date = String(formData.get("date") || "").trim();
  const time = String(formData.get("time") || "").trim();
  const message = String(formData.get("message") || "").trim();
  const request = [
    "Appointment request for Mauli Clinic",
    `Name: ${name}`,
    `Phone: ${phone}`,
    `Preferred date: ${date}`,
    `Preferred time: ${time}`,
    message ? `Reason: ${message}` : "",
  ]
    .filter(Boolean)
    .join("\n");
  const whatsappUrl = `https://wa.me/919820829796?text=${encodeURIComponent(request)}`;

  statusText.textContent = `Thank you${name ? `, ${name}` : ""}. WhatsApp will open with your appointment request.`;
  window.open(whatsappUrl, "_blank", "noopener");
  form.reset();
});
