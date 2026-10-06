function filterMovie(genres) {
  let movies = [
    ['Drama', 'Boyhood', 'The Last of the Mohicans', 'The Goldfinch'],
    ['Action', 'Mad Max', 'The Batman', 'Josh Wick'],
    ['Fantasy', 'The Fall', 'The Forbidden Kingdom', 'Ladyhawke', 'Sea Beast'],
    ['Comedy', 'Safety Last', 'The Trip'],
  ];
  // write your code here

  const moviesMap = {};

  for (const movie of movies) {
    moviesMap[movie[0]] = movie;
  }

  const result = [];
  for (const genre of genres) {
    if (moviesMap[genre]) {
      result.push(moviesMap[genre]);
    }
  }

  return result;
}

// function filterMovie(genres) {
//   let movies = [
//     ['Drama', 'Boyhood', 'The Last of the Mohicans', 'The Goldfinch'],
//     ['Action', 'Mad Max', 'The Batman', 'Josh Wick'],
//     ['Fantasy', 'The Fall', 'The Forbidden Kingdom', 'Ladyhawke', 'Sea Beast'],
//     ['Comedy', 'Safety Last', 'The Trip'],
//   ];
//   // write your code here

//   const filteredMovies = [];

//   for (const genre of genres) {
//     for (const movie of movies) {
//       if (movie[0] === genre) {
//         filteredMovies.push(movie);
//         break;
//       }
//     }
//   }

//   return filteredMovies;
// }

function usersCanWatch(users) {
  if (!users) return 'Invalid Data!';

  const { menu } = users;

  // const genres = menu.split(';');
  const genres = [];

  let genre = '';
  for (const char of menu) {
    if (char === ';') {
      genres.push(genre);
      genre = '';
      continue;
    }
    genre += char;
  }

  if (genre) {
    genres.push(genre);
  }

  let result = filterMovie(genres);

  return result.length ? result : 'Movie not found';
}

// 10:13 - 10:25

// function filterMovie(genres) {
// 	let movies = [
// 			["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
// 			["Action", "Mad Max", "The Batman", "Josh Wick"],
// 			["Fantasy", "The Fall", "The Forbidden Kingdom", "Ladyhawke", "Sea Beast"],
// 			["Comedy", "Safety Last", "The Trip"]
// 	];
// 	// write your code here

// 	const result = [];

// 	for (let i = 0; i < movies.length; i++) {
// 		for (let j = 0; j < genres.length; j++) {
// 			if (movies[i][0] === genres[j]) {
// 				result.push(movies[i]);
// 			}
// 		}
// 	}

// 	if (result.length === 0) return 'Movie not found';

// 	return result;
// }

// function usersCanWatch(users) {
// 	// write your code here

// 	if (users === undefined) return 'Invalid Data!';

// 	const genres = [];

// 	const menuStr = users['menu'];
// 	let tempStr = '';
// 	for (let i = 0; i < menuStr.length + 1; i++) {
// 		if (menuStr[i] === ';' || menuStr[i] === undefined) {
// 			genres.push(tempStr);
// 			tempStr = '';
// 		} else {
// 			tempStr += menuStr[i];
// 		}
// 	}

// 	return filterMovie(genres);
// }

// TEST CASE
const user1 = {
  name: 'Bari',
  cinema: 'XIV',
  menu: 'Action;Drama;Comedy',
};
console.log(usersCanWatch(user1));
/*
[
  ["Action", "Mad Max", "The Batman", "Josh Wick"],
  ["Drama", "Boyhood", "The Last of the Mohicans", "The Goldfinch"],
  ["Comedy", "Safety Last", "The Trip"]
]
*/

const user2 = {
  name: 'Tole',
  cinema: 'XIIX',
  menu: 'Fantasy;Adventure;Comedy',
};
console.log(usersCanWatch(user2));
/*
[
  ["Fantasy", "The Fall", "The Forbidden Kingdom", "Ladyhawke", "Sea Beast"],
  ["Comedy", "Safety Last", "The Trip"]
]
*/

const user3 = {
  name: 'Rizky',
  cinema: 'Cinepolos',
  menu: 'Scifi;Musical',
};
console.log(usersCanWatch(user3));
// "Movie not found"

console.log(usersCanWatch());
// "Invalid Data!"
