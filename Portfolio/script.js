// JavaScript to add and remove glow effect
const glowingTile = document.getElementById('glowing-tile');

function addGlow() {
    glowingTile.classList.add('glow');
}

function removeGlow() {
    glowingTile.classList.remove('glow');
}

// Add glow when mouse hovers over the tile
glowingTile.addEventListener('mouseenter', addGlow);

// Remove glow when mouse leaves the tile
glowingTile.addEventListener('mouseleave', removeGlow);
