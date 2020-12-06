const header = document.querySelector(".sticky");
const headerContent = document.querySelector(".sticky .header");

const handleHeaderSticky = () => {
  if (header.offsetTop !== 0) {
    header.style.background = "linear-gradient(#2A3443,#252E3B,#1B222C)";
  } else {
    header.style.background = "#202833";
  }
};

window.addEventListener("scroll", handleHeaderSticky);
