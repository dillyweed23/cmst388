// Declaring JavaScript Constants // 
const thumbnails = document.querySelectorAll('.thumbnail');
const largeImage = document.querySelector('#large-image');
const caption = document.querySelector('#caption');

// Removing Border to Previously Selected Thumbnails //
function selectThumbnail() {
    for (let i = 0; i < thumbnails.length; i++) {
        thumbnails[i].classList.remove('selected');
    }
    this.classList.add('selected');
    displayImage(this.src, this.alt);
}

// Displaying the larger image selected //
function displayImage(src, alt) {
    largeImage.src = src;
    largeImage.alt = alt;
    caption.textContent = `${alt}`;
}

// Showing Captions when Hovering Over with Mouse //
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', selectThumbnail);
    thumbnail.addEventListener('mouseover', function() {
        caption.textContent = `${this.alt}`;
    });

    // Hiding Captions when Mouse is Not Hovering over //
    thumbnail.addEventListener('mouseout', function() {
        caption.textContent = '';
    });
});