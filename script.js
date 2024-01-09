document.addEventListener('DOMContentLoaded', function()){
    fetch(' http://localhost:3000/films/1')
    .then(response => response.json)
    .then(data => showMovieDetails(data[0]));
}
function showMovieDetails(movie){
    
}