// Create an overlay div
const overlay = document.createElement('div');
overlay.style.position = 'fixed';
overlay.style.top = '0';
overlay.style.left = '0';
overlay.style.width = '100%';
overlay.style.height = '100%';
overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
overlay.style.color = 'white';
overlay.style.display = 'flex';
overlay.style.justifyContent = 'center';
overlay.style.alignItems = 'center';
overlay.style.fontSize = '2em';
overlay.style.zIndex = '1000';
document.body.appendChild(overlay);

// Function to update the overlay with the current window size
function updateOverlay() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  overlay.textContent = `Width: ${width}px, Height: ${height}px`;
}

// Initial update
updateOverlay();

// Update the overlay whenever the window is resized
window.addEventListener('resize', updateOverlay);
