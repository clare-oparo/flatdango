let moviesData = [];

document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/films')
        .then(response => response.json())
        .then(data => {
            moviesData = data;
            displayMovieList(moviesData);
            displayMovieDetails(moviesData[0]);
        });
});

function displayMovieList(movies) {
    const filims = document.getElementById('films');
    filims.innerHTML = '';
    movies.forEach(movie => {
        const li = document.createElement('li');
        li.textContent = movie.title;
        li.addEventListener('click', () => displayMovieDetails(movie));
        filims.appendChild(li);
    });
}

function displayMovieDetails(movie) {
    const movieDeets = document.getElementById('movieDetails');
    const availableTickets = movie.capacity - movie.tickets_sold;
    const buyButton = document.getElementById('buyButton');
    const soldOutMessage = document.getElementById('soldOutMessage');

    movieDeets.innerHTML = `
        <h2>${movie.title}</h2>
        <img src="${movie.poster}" alt="${movie.title}">
        <p>Runtime: ${movie.runtime} minutes</p>
        <p>Showtime: ${movie.showtime}</p>
        <p>Available Tickets: ${availableTickets} ONLY!</p>
    `;

    movieDeets.appendChild(buyButton);
    movieDeets.appendChild(soldOutMessage);

    if (availableTickets > 0) {
        buyButton.disabled = false;
        buyButton.style.display = 'block';
        soldOutMessage.style.display = 'none';
        buyButton.onclick = () => buyTicket(movie);
    } else {
        buyButton.disabled = true;
        soldOutMessage.style.display = 'block';
    }
   
}

function buyTicket(movie) {
    if ((movie.capacity - movie.tickets_sold) > 0) {
        movie.tickets_sold++;
        displayMovieDetails(movie);
    }
}
