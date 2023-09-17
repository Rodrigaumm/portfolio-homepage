const handleHeaderSticky = () => {
  const header = document.querySelector(".sticky");
  const root = document.querySelector(":root");
  const rootComputedStyle = getComputedStyle(root);

  if (header.offsetTop !== 0) {
    root.style.setProperty("--header-bg", rootComputedStyle.getPropertyValue("--header-off-bg"));
  } else {
    root.style.setProperty("--header-bg", "");
  }
};

window.addEventListener("scroll", handleHeaderSticky);
