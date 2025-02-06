 let hue = 0;
function animateRainbow() {
    hue = (hue + 1) % 360; // Keep hue rotating
    document.getElementById("rgbLogo").style.filter = `hue-rotate(${hue}deg)`;
}
setInterval(animateRainbow, 30); // Adjust speed here
