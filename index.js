document.getElementById("search").addEventListener("click", function() {
    const movieName = document.getElementById("movieName").value;
    fetch(`http://www.omdbapi.com/?apikey=2e7b72aa&t=${movieName}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        document.getElementById("result").innerHTML = `
        <a href="https://www.imdb.com/title/${data.imdbID}" target="_blank">
        <img src="${data.Poster}" alt="Movie Poster">
      </a>
      <div class='titleDiv'><h2>${data.Title}</h2> <a><i class="fa-solid fa-star"></i></a></div>
        
          <p>imdbRating:${data.imdbRating}</p>
          <p>${data.Plot}</p>
          <p>Genre:${data.Genre}</p>
          <p>Stars: ${data.Actors}</p>
          <p>Creators: ${data.Director}</p>
        
        `;
        

      })
      .catch(error => {
        document.getElementById("result").innerHTML = "No data found.";
      });
  });
  
