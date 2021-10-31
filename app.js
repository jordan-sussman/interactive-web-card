const card = document.querySelector(".card");
const container = document.querySelector(".container");
const airpods = document.querySelector(".airpods img");

// Animation Event Listener
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
});

// Hover Animation into Card
container.addEventListener("mouseenter", (e) => {
  card.style.transform = "scale(1.025)";
  // AirPods Popout Animation 
  airpods.style.transform = "translateZ(200px) rotateZ(-25deg) scale(1.65)";
});

// Hover Animation out of Card
container.addEventListener("mouseleave", (e) => {
  card.style.transform = "scale(1)";
  // AirPods Popback Animation
  airpods.style.transform = "translateZ(0px) rotateZ(0deg) scale(1)";
});
