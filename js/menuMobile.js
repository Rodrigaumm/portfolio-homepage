const menuMobileOpenIcon = document.querySelector(
  ".header-nav .menu-mobile [data-open] svg"
);
const menuMobileCloseIcon = document.querySelector(
  ".header-nav .menu-mobile [data-close] svg"
);
const menuMobileOpen = document.querySelector(
  ".header-nav .menu-mobile div[data-open]"
);
const menuMobileClose = document.querySelector(
  ".header-nav .menu-mobile div[data-close]"
);
const linksList = document.querySelector(".header-nav ul");
const handleMenuClick = ({ currentTarget }) => {
  if (currentTarget.parentElement.dataset.open) {
    linksList.classList.add("ativo");
    menuMobileOpen.style.display = "none";
    menuMobileClose.style.display = "block";
  } else {
    if (linksList.classList.contains("ativo")) {
      linksList.classList.remove("ativo");
    }
    menuMobileClose.style.display = "none";
    menuMobileOpen.style.display = "block";
  }
};
menuMobileOpenIcon.addEventListener("click", handleMenuClick);
menuMobileCloseIcon.addEventListener("click", handleMenuClick);
