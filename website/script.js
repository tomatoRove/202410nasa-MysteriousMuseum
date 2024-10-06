// Add event listeners to buttons
document.querySelectorAll('.add-to-gallery').forEach(button => {
    button.addEventListener('click', () => {
        const imageItem = button.parentElement;
        const imageSrc = imageItem.querySelector('img').src;
        const imageTitle = imageItem.querySelector('.image-title').value || "Untitled";

        // Create gallery item
        const gallery = document.getElementById('gallery');
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        const slideshow = document.createElement('div');
        slideshow.classList.add('slideshow');

        const imgElement = document.createElement('img');
        imgElement.src = imageSrc;

        const titleElement = document.createElement('div');
        titleElement.classList.add('gallery-title');
        titleElement.textContent = imageTitle;

        // Create an additional image for slideshow
        const additionalImgElement = document.createElement('img');
        additionalImgElement.src = imageSrc; // For demonstration, you can replace with another image

        // Append images to slideshow
        slideshow.appendChild(imgElement);
        slideshow.appendChild(additionalImgElement); // Add the additional image for slideshow

        // Append slideshow and title to gallery item
        galleryItem.appendChild(slideshow);
        galleryItem.appendChild(titleElement);

        // Add to gallery
        gallery.appendChild(galleryItem);

        // Start slideshow for the new gallery item
        startSlideshow(slideshow);
    });
});

// Function to start slideshow
function startSlideshow(slideshow) {
    const images = slideshow.getElementsByTagName('img');
    let currentIndex = 0;

    // Show the first image
    images[currentIndex].classList.add('active');

    // Change images every 2 seconds
    setInterval(() => {
        images[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % images.length; // Loop back to the first image
        images[currentIndex].classList.add('active');
    }, 2000); // Change image every 2 seconds
}
