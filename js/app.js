// Get all the card elements
const cards = document.querySelectorAll('.card');

// Add event listener to each card
cards.forEach(card => {
    const cardImage = card.querySelector('.card-image');
    const readMore = card.querySelector('.read-more');

    // Show the "Read More" text on hover
    cardImage.addEventListener('mouseenter', () => {
        readMore.style.display = 'block';
    });

    // Hide the "Read More" text when cursor leaves the card
    cardImage.addEventListener('mouseleave', () => {
        readMore.style.display = 'none';
    });
});