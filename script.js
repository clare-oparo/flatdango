document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/films')
    .then(response => response.json())
    .then(data => showMovieDetails(data[0]));
})

function showMovieDetails(movie){
    const availableTickets = movie.capacity-movie.tickets_sold;
    const movieDeets = document.getElementById('movieDetails');
    movieDeets.innerHTML = 
    `<h1>${movie.title}</h1>
    <img src = ${movie.poster}>
    <p>Runtime: ${movie.runtime} minutes</p>
    <p>Showtime: ${movie.showtime}</p>
    <p>Available Tickets: ${availableTickets} ONLY!</p>`;
}
