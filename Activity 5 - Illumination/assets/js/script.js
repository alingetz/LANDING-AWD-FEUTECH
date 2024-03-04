var mousemovement = document.documentElement;

  mousemovement.addEventListener("mousemove", (e) => {
  mousemovement.style.setProperty("--x", e.clientX + "px");
  mousemovement.style.setProperty("--y", e.clientY + "px");
});