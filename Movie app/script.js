function searchMovie() {
    const movieInput = document.getElementById("movie-input").value;
    const apiKey = "aed2cec2";
    const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieInput}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => displayMovie(data))
      .catch(error => console.error("Error fetching data:", error));
  }
  
  function displayMovie(data) {
    const movieDetails = document.getElementById("movie-details");
  
    if (data.Response === "False") {
      movieDetails.innerHTML = `<p>Movie not found!</p>`;
      return;
    }
  
    movieDetails.innerHTML = `
      <h2>${data.Title}</h2>
      <p><strong>Year:</strong> ${data.Year}</p>
      <p><strong>Genre:</strong> ${data.Genre}</p>
      <p><strong>Director:</strong> ${data.Director}</p>
      <p><strong>Plot:</strong> ${data.Plot}</p>
      <img class="movie-poster" src="${data.Poster}" alt="${data.Title}">
    `;
  }
  