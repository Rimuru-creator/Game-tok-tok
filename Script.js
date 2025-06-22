// Sample anime data
const animeData = [
    {
        title: "Attack on Titan: Final Season",
        image: "https://via.placeholder.com/300x450",
        episode: "Episode 24",
        rating: "9.5"
    },
    {
        title: "Demon Slayer: Entertainment District Arc",
        image: "https://via.placeholder.com/300x450",
        episode: "Episode 11",
        rating: "9.3"
    },
    {
        title: "Jujutsu Kaisen",
        image: "https://via.placeholder.com/300x450",
        episode: "Episode 24",
        rating: "9.0"
    },
    {
        title: "My Hero Academia Season 6",
        image: "https://via.placeholder.com/300x450",
        episode: "Episode 25",
        rating: "8.8"
    },
    {
        title: "Spy x Family",
        image: "https://via.placeholder.com/300x450",
        episode: "Episode 12",
        rating: "9.2"
    },
    {
        title: "Chainsaw Man",
        image: "https://via.placeholder.com/300x450",
        episode: "Episode 12",
        rating: "9.1"
    },
    {
        title: "One Piece: Wano Country Arc",
        image: "https://via.placeholder.com/300x450",
        episode: "Episode 1015",
        rating: "9.4"
    },
    {
        title: "Blue Lock",
        image: "https://via.placeholder.com/300x450",
        episode: "Episode 24",
        rating: "8.7"
    }
];

// Function to generate anime cards
function generateAnimeCards() {
    const animeGrid = document.querySelector('.anime-grid');
    
    animeData.forEach(anime => {
        const animeCard = document.createElement('div');
        animeCard.className = 'anime-card';
        
        animeCard.innerHTML = `
            <img src="${anime.image}" alt="${anime.title}">
            <div class="anime-info">
                <h3>${anime.title}</h3>
                <p>${anime.episode} • ⭐ ${anime.rating}</p>
            </div>
        `;
        
        animeGrid.appendChild(animeCard);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    generateAnimeCards();
    
    // Add click event to anime cards (example)
    const animeCards = document.querySelectorAll('.anime-card');
    animeCards.forEach(card => {
        card.addEventListener('click', () => {
            alert('Anime player would open here in a real implementation');
        });
    });
})
