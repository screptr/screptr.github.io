function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
const img = document.getElementById("rgbLogo");
const canvas = document.getElementById("rgbCanvas");
const ctx = canvas.getContext("2d");

    // Set canvas size to match the image
canvas.width = img.width;
canvas.height = img.height;

function colorImage(r, g, b) {
   

    // Draw the image on the canvas
    ctx.drawImage(img, 0, 0);

    // Get image data
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let data = imageData.data;

    // Convert 0-1 range to 0-255
    let red = Math.round(r);
    let green = Math.round(g);
    let blue = Math.round(b);

    // Apply custom RGB color to entire image
    for (let i = 0; i < data.length; i += 4) {
        data[i] = red;   // Red
        data[i + 1] = green; // Green
        data[i + 2] = blue;  // Blue
        // Alpha (data[i + 3]) remains unchanged
    }

    // Put modified data back onto the canvas
    ctx.putImageData(imageData, 0, 0);
}

let red = 255;   // Start with full red
    let green = 0;   // Start with no green
    let blue = 0;    // Start with no blue

    let phase = 0; // Control which part of the rainbow we are in

    // Set the speed of transition
    const speed = 1; // Increase for faster transition

    setInterval(function() {
        switch(phase) {
            case 0: // Red -> Yellow
                red -= speed;
                green += speed;
                if (red <= 0) phase = 1;
                break;
            case 1: // Yellow -> Green
                green += speed;
                if (green >= 255) phase = 2;
                break;
            case 2: // Green -> Cyan
                green -= speed;
                blue += speed;
                if (green <= 0) phase = 3;
                break;
            case 3: // Cyan -> Blue
                blue += speed;
                if (blue >= 255) phase = 4;
                break;
            case 4: // Blue -> Violet
                blue -= speed;
                red += speed;
                if (blue <= 0) phase = 5;
                break;
            case 5: // Violet -> Red
                red += speed;
                if (red >= 255) phase = 0;
                break;
        }
        
        // Update the image with the new color values
        colorImage(red, green, blue);
    }, 10);
