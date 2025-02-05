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

var im1 = false
var im2 = false
var im3 = false

var i1 = 1
var i2 = 2
var i3 = 3
rainbow = setInterval(function(){
    if (i1 > 254)
        im1 = true
    if (i1 < 1)
        im1 = false
    if (i2 > 254)
        im2 = true
    if (i2 < 1)
        im2 = false
    if (i3 > 254)
        im3 = true
    if (i3 < 1)
        im3 = false

    if (im1 == true)
        i1 -= 1
    if (im1 == false)
        i1 += 1
    if (im2 == true)
        i2 -= 1
    if (im2 == false)
        i2 += 1
    if (im3 == true)
        i3 -= 1
    if (im3 == false)
        i3 += 1
    
    
    colorImage(i1,i2,i3)
    console.log(i1,i2,i3)
},10)
