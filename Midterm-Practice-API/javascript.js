function processResponse(response) {
  movies = response.data.movies;
  for (movie of response.data.movies) {
    $("#movie-container").append(
      `
        <div class="flex flex-col p-5 h-[450px] w-[275px] border-1 justify-between items-center hover:shadow-2xl">
            <img src="${movie.medium_cover_image}" class="object-cover w-[200px]" alt="">
            <div class="text-center">
                <h2 class="font-bold">${movie.title}</h2>
                <p>${movie.rating}</p>
                <p>${movie.year}</p>
            </div>
        </div>
        `,
    );
  }
}

function setup() {
  $.ajax({
    method: "GET",
    // append ? after the absolute link to add attributes
    // attributes are in the format attr=value
    // concatenate multiple attributes with &
    url: "https://yts.bz/api/v2/list_movies.json?genre=animation&sort_by=rating&limit=20",
    // sort_by = values can be name, rating, or any attribute
    // limit = value is the amount of objects to return
    success: processResponse,
    complete: $("#spinner").toggle()
  });
}

$(document).ready(setup);
