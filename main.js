 let hue = 0;
 function animateRainbow() {
        hue = (hue + 1) % 360; // Increment hue (loops 0-360)
        document.getElementById("rainbowImage").style.filter = `hue-rotate(${hue}deg)`;
        requestAnimationFrame(animateRainbow); // Smooth animation
 }

animateRainbow(); // Start the effect
