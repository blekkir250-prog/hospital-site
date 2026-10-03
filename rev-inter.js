const stars = document.querySelectorAll('.star');
const ratingInput = document.getElementById('rating-value');
const form = document.getElementById('review-form');
let currentRating = 0;

stars.forEach(star => {
    
    star.addEventListener('click', () => {
        currentRating = parseInt(star.getAttribute('data-value'));
        ratingInput.value = currentRating; 
        
        updateStars();
        
        console.log(`Выбрано звезд: ${currentRating}`);
    });
});

function updateStars() {
    
    stars.forEach(star => {
        const starValue = parseInt(star.getAttribute('data-value'));
        
        if (starValue <= currentRating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

form.addEventListener('submit', (event) => {
    if (currentRating === 0) {
        
        event.preventDefault(); 
        alert('Пожалуйста, выберите количество звезд!');
    }
});


