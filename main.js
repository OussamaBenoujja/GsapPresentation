// Create a new timeline
const tl = gsap.timeline({ paused: true, repeat: -1, yoyo: true }); // Paused initially, repeat infinitely, yoyo effect

// Add animations to the timeline
tl.to("#box", { x: 300, duration: 1 })        // Move box to x=300 over 1 second
  .to("#box", { y: 200, duration: 1 })        // Move box to y=200 over 1 second
  .to("#box", { rotation: 360, duration: 1 })  // Rotate box 360 degrees over 1 second
  .to("#box", { opacity: 0, duration: 1 });    // Fade the box to opacity 0 over 1 second

// Button to start the timeline animation
document.getElementById("startBtn").addEventListener("click", function() {
    tl.play(); // Play the animation when the button is clicked
});
