// Get the gallery container
const gallery = document.querySelector('.gallery');

// Array of card data
const cardData = [
    {
        image: '../img/1.jpeg',
        title: 'FENNEC FOX',
        location: 'India'
    },
    {
        image: '../img/2.jpeg',
        title: 'HUMPBACK WHALE',
        location: 'South Africa'
    },
    {
        image: '../img/3.jpeg',
        title: 'COMMON BROWN BABOON',
        location: 'South Africa'
    },
    {
        image: '../img/4.jpeg',
        title: 'SPOTTED DEER',
        location: 'Amazon'
    }
];

// Function to create a card element
function createCard(data) {
    const card = document.createElement('div');
    card.classList.add('card');

    const cardImage = document.createElement('div');
    cardImage.classList.add('card-image');

    const img = document.createElement('img');
    img.src = data.image;
    img.alt = data.title;

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const title = document.createElement('h1');
    title.textContent = data.title;

    const location = document.createElement('p');
    location.textContent = data.location;

    const readMore = document.createElement('div');
    readMore.classList.add('read-more');
    readMore.textContent = 'Read More';

    cardContent.appendChild(title);
    cardContent.appendChild(location);
    cardContent.appendChild(readMore);

    cardImage.appendChild(img);
    cardImage.appendChild(cardContent);

    card.appendChild(cardImage);

    return card;
}

// Loop through the card data and create cards
for (const cardInfo of cardData) {
    const card = createCard(cardInfo);
    gallery.appendChild(card);
}

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