const title = document.getElementById("title");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const colors = ["tomato", "orange", "green", "dodgerblue", "purple"];
  const random = colors[Math.floor(Math.random() * colors.length)];
  title.style.color = random;
});