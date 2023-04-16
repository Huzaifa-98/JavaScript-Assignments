(async function (){
    const response = await fetch("./data.json");
    const movies = await response.json();

    const Genre = document.getElementById("genre");
    const Year = document.getElementById("year");
    const Language = document.getElementById("lang");
    const Rating = document.getElementById("rating");
    const btnSearch = document.getElementById("searchBtn");

    function valCheck(value){
        if(value === 'All'){return true}
        return false;
    }

    function toHoursAndMinutes(totalMinutes) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return { hours, minutes };
      }

    function search(){
        let genreQuery = Genre.value.toLowerCase();
        let yearQuery = Year.value.toLowerCase();
        let languageQuery = Language.value.toLowerCase();
        let ratingQuery = Rating.value.toLowerCase();

        const results = movies.filter(function(movie){
            const date = movie.release_date.split("-");
            const year = date[0];

            if ((!valCheck(languageQuery)) && (!valCheck(ratingQuery) && (!valCheck(yearQuery) && (!valCheck(genreQuery))))){
                return(
                  movie.original_language.toLowerCase().includes(languageQuery) && movie.vote_average >= ratingQuery && movie.genres.toString(" ").toLowerCase().includes(genreQuery) && year == yearQuery
                )
              }
              else if ((valCheck(languageQuery)) && (!valCheck(ratingQuery) && (!valCheck(yearQuery) && (!valCheck(genreQuery))))){
                  return(
                      movie.vote_average >= ratingQuery && movie.genres.toString(" ").toLowerCase().includes(genreQuery) && year == yearQuery
                  )
              }
              else if ((!valCheck(languageQuery)) && (valCheck(ratingQuery) && (!valCheck(yearQuery) && (!valCheck(genreQuery))))){
                  return( 
                      movie.original_language.toLowerCase().includes(languageQuery) && movie.genres.toString(" ").toLowerCase().includes(genreQuery) 
                      && year == yearQuery ) 
              }
              else if ((!valCheck(languageQuery)) && (!valCheck(ratingQuery) && (valCheck(yearQuery) && (!valCheck(genreQuery))))){
                  return( 
                      movie.original_language.toLowerCase().includes(languageQuery) &&
                      movie.vote_average >= ratingQuery && movie.genres.toString(" ").toLowerCase().includes(genreQuery) 
                      ) 
              }
              else if((!valCheck(languageQuery)) && (!valCheck(ratingQuery) && (!valCheck(yearQuery) && (valCheck(genreQuery))))){
                  return( 
                      movie.original_language.toLowerCase().includes(languageQuery) &&
                      movie.vote_average >= ratingQuery && year == yearQuery ) 
                  }
              else{
              return false;
              }
        });

        displaySearchResult(results);
    }

    function displaySearchResult(results){
        const tblElem = document.getElementById("tblElem")
        tblElem.innerHTML = "";
        results.forEach(function(movie) {
            let date =movie.release_date.split("-");
            let year = date[0];
            let time = toHoursAndMinutes(movie.runtime);
            let hr = time.hours;
            let min = time.minutes;

            tblElem.innerHTML += `
            <tr class="bg-white border-b dark:bg-white-200 text-gray-900 dark:border-gray-700">
            <td class="px-6 py-3 text-center">${movie.id}</td>
            <td class="px-6 py-3 flex"> 
                <div></div>
                <div class="flex flex-row">
                    <div class="w-1/2"><img class="px-2 inline-block" src="${'https://image.tmdb.org/t/p/w45' + movie.poster_path}" /></div>
                    <div class="w-1/2">
                    <h1>${movie.title}</h1>
                    <p><button class="bg-gray-100 border-black-500 border-2 text-blackfont-bold text-center p-[1px] mr-2 rounded">${movie.certification}</button> ${movie.genres.toString(" , ")} • ${hr}h ${min}m</p>
                    </div>
                </div>
                <div>
                    <div class="font-semibold text-xl text-blue-500 pb-2"></div>
                    
                </div>
            </td>
            <td class="px-6 py-3">${year}</td>
            </tr>
            `;
        });
    }

    btnSearch.addEventListener("click", search);

})();
