document.addEventListener('DOMContentLoaded',()=>{
    
        fetch('http://localhost:3000/movies')
        .then(r => r.json())
        .then(movies =>{
            let movieData = movies
            movieData.forEach(movies => populateMovie(movies))
            showDetail(movieData[0])
        })
        

    //populating the top of the site with movies from the json

    function populateMovie(movies){
        //getting html elements for movie list

        const movieList = document.querySelector('#movie-list')
        const preview = document.createElement('img')
        preview.src = movies.image
        movieList.appendChild(preview)

        preview.addEventListener('click',()=> {showDetail(movies)})
    }

    function showDetail(movies){
        // getting html elements for the movie info
        currentMovie = movies

        const title = document.querySelector('#title')
        const releaseYear = document.querySelector('#year-released')
        const movieDescription = document.querySelector('#description')
        const movieImg = document.querySelector('#detail-image')
        
        title.textContent = movies.title
        releaseYear.textContent = movies.release_year
        movieDescription.textContent = movies.description
        movieImg.src = movies.image


    }










})
