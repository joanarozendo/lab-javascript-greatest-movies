/* eslint no-restricted-globals: 'off' */

// ITERATION 1

const calculateAverageMovieRate = arr => {
  const sumMovies = arr.reduce((accumulator, value) => {
  return (accumulator + value.rate);
  }, 0);
  return (sumMovies/arr.length);
}

console.log(calculateAverageMovieRate(MOVIES));


// ITERATION 2

function calculateAverageDramaRate(arr) {
  const dramaMovies = arr.filter((value) => {
    return value.genre.includes('Drama')
  });
  if (dramaMovies.length === 0) {
    return 0;
  } else {
    return calculateAverageMovieRate(dramaMovies);
  }
}

console.log(calculateAverageDramaRate(MOVIES));


// ITERATION 3

function orderByYear (arr) {
  arr.sort((a, b) => a.year > b.year ? 1 : -1);
  return arr;
}

console.log(orderByYear(MOVIES));


// ITERATION 4

/* function countSpielbergDramaMovies(arr) {
  const dramaMovies = arr.filter((value) => {
    return value.genre.includes('Drama')
  });
  if (dramaMovies.director.includes('Steven Spielberg')) {
    return dramaMovies;
    } else {
    return 0;
  }
} */


// ITERATION 5

function orderAlphabetically(arr) {
  let sorted20s = [...arr];
  let finalList = [];
  sorted20s = sorted20s.sort((a,b) => {
  if (a.title > b.title) return 1
  if (a.title < b.title) return -1 } );
  sorted20s = sorted20s.slice(0,20);
  for (let key in sorted20s) {
      finalList.push(sorted20s[key].title);
  }
  return finalList.slice(0,20);
}

console.log(orderAlphabetically(MOVIES));



// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

/* function turnHoursToMinutes (arr) {
  const durationInMinutes = arr.map((value) => {
    return value transformed to minutes, who knows how
  });
} */

// MAP

/* const mappedArray = sampleArray.map((value, index, originalArray) => {
  return value * 2;
});

console.log(sampleArray, mappedArray); */

// no filter



// BONUS Iteration: Best yearly rate average - Best yearly rate average

/* function bestYearAvg (arr) {

} */

//