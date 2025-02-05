function colorImage(r, g, b) {
    const img = document.getElementById("rgbLogo");
    const canvas = document.getElementById("rgbCanvas");
    const ctx = canvas.getContext("2d");

    // Set canvas size to match the image
    canvas.width = img.width;
    canvas.height = img.height;

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

colorImage(1, 0, 0); // Set to red (100,50,0)
