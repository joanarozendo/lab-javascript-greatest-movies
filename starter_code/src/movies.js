/* eslint no-restricted-globals: 'off' */

// ITERATION 1

const calculateAverageMovieRate = array => {
  const sumMovies = array.reduce((accumulator, value) => {
  return (accumulator + value.rate);
  }, 0);
  return (sumMovies/array.length);
}

console.log(calculateAverageMovieRate(MOVIES));

// ITERATION 2

function calculateAverageDramaRate(array) {
  const dramaMovies = array.filter((value) => {
    return value.genre.includes('Drama')
  });
  if (dramaMovies === 0) {
    return 0;
  } else {
    return calculateAverageMovieRate(dramaMovies);
  }
}

// ITERATION 3

function orderByYear (array) {
  array.sort((a, b) => a.year > b.year ? 1 : -1);
  return array;
}

// Iteration 4: Steven Spielberg. The best? - How many movies did STEVEN SPIELBERG direct

/* function countSpielbergDramaMovies(array) {
  const spielbergMovies = array.filter((value) => {
    return value.director.includes('Steven Spielberg')
  });
  if (dramaMovies === 0) {
    return 0;
  } else {
    return ();
  }
} */

// Iteration 5: Alphabetic Order - Order by title and print the first 20 titles
 
function orderAlphabetically (array) {
  const newArray = [ ...array ].sort((a, b) => a.title > b.title ? 1 : -1);
  const list = newArray.map(value);
  return list.slice(0, 19);
}

console.log(orderAlphabetically(MOVIES));

//sort, ...,map, slice

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average