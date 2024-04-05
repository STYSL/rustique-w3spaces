document.addEventListener('DOMContentLoaded', function() {
    var images = ['rustavatar.png', 'stysl_logo_rope.png', 'stysl_logo_2024.png']; // Add the paths to your images here
    var currentImage = 0;
    var imgElement = document.getElementById('changing-image');

    if (imgElement) { // Check if the element exists
        setInterval(function() {
            imgElement.style.opacity = 0; // Fade out the image
            setTimeout(function() {
                imgElement.src = images[currentImage]; // Change the image
                imgElement.style.opacity = 2; // Fade in the image
            }, 1000); // Wait for the fade out transition to finish before changing the image

            currentImage = (currentImage + 1) % images.length; // Move to the next image
        }, 5000);
    } else {
        console.error('Element with id "changing-image" not found');
    }
});