let currentImageIndex = 0;

// Array of image sources
const images = [
    "images/img 1.jpg",
    "images/img 2.jpg",
    "images/img 3.jpg",
    "images/img 4.jpg",
    "images/img 5.jpg",
    "images/img 6.jpg",
    "images/img 7.jpg",
    "images/img 8.jpg",
    "images/img 9.jpg",
    "images/img 10.jpg",
    "images/img 11.jpg",
    "images/img 12.jpg",
    "images/img 13.jpg",
    "images/img 14.jpg"
];

// Function to open image in modal
function openImage(index) {
    currentImageIndex = index; // Set the current image index
    const modal = document.getElementById("imageModal");
    const enlargedImage = document.getElementById("enlargedImage");
    enlargedImage.src = images[currentImageIndex]; // Set image source
    modal.style.display = "flex"; // Display modal
}

// Function to close modal
function closeImage() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Hide modal
}

// Function to change image in modal
function changeImage(direction) {
    currentImageIndex += direction; // Update index
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1; // Loop to last image
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0; // Loop to first image
    }
    const enlargedImage = document.getElementById("enlargedImage");
    enlargedImage.src = images[currentImageIndex]; // Update image source
}
