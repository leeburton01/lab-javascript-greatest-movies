// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let directors = moviesArray.map(function (movie) {
    return movie.director;
  });
  return directors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  let spielbergDramas = moviesArray.filter(function (movie) {
    return (
      movie.director === "Steven Spielberg" &&
      movie.genre.some((genre) => genre.toLowerCase() === "drama")
    );
  });

  return spielbergDramas.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) {
    return 0;
  }

  let totalScore = moviesArray.reduce(function (total, movie) {
    return total + (movie.score || 0);
  }, 0);

  let averageScore = totalScore / moviesArray.length;

  return Number(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let dramaMovies = moviesArray.filter(function (movie) {
    return movie.genre.includes("Drama");
  });

  if (dramaMovies.length === 0) {
    return 0;
  }

  // Use reduce to sum up the scores of drama movies
  let totalScore = dramaMovies.reduce(function (total, movie) {
    return total + (movie.score || 0);
  }, 0);

  let averageScore = totalScore / dramaMovies.length;

  return Number(averageScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  let newMoviesArray = [...moviesArray];

  newMoviesArray.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }

    return a.year - b.year;
  });

  return newMoviesArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let newMoviesArray2 = [...moviesArray];

  newMoviesArray2.sort((a, b) => {
    return a.title.localeCompare(b.title);
  });

  let movieTitles = newMoviesArray2.map((movie) => {
    return movie.title;
  });

  if (movieTitles.length > 20) {
    return movieTitles.slice(0, 20);
  }

  return movieTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
