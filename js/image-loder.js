// Define image data
const imageData = [];

for (let i = 1; i <= 30; i++) {
    const number = i //< 10 ? `0${i}` : i; // Format numbers with leading zero for single-digit numbers
    imageData.push({
        src: `js/images/image (${number}).JPG`, // Obfuscated image URL
        alt: `Image ${i}`,
        title: `Image ${i}`
    });
}

function loadImages() {
    const gallery = document.getElementById('gallery');

    imageData.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;

        const overlay = document.createElement('div');
        overlay.className = 'overlay';
        overlay.innerHTML = `<span>${image.title}</span>`;

        galleryItem.appendChild(img);
        galleryItem.appendChild(overlay);
        gallery.appendChild(galleryItem);
    });
}

// Handle obfuscation of image URL
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('img').forEach(img => {
        const urlParams = new URLSearchParams(img.src);
        const number = urlParams.get('number');
        img.src = `js/images/image (${number}).JPG`; // Actual image URL
    });
});
