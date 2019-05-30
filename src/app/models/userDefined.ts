import * as books from '../data/books.json';
import * as movies from '../data/movies.json';

export function getUserDefinedTypes() {

  type Book = {
    id: string,
    title: string,
    author: string
  };

  type Bookstore = {
    ids: string[],
    // An object with key-value pairs where the key is a string and the value is of type Book
    entities: { [key: string]: Book }
  };

  let myBooks = books.default as Book[];

  // Entity State format: map of entities (ease of lookup) combined with an array of ids (order)
  // Acts as an in-memory client-side database and components use selectors to query this database
  let bookstore: Bookstore = {
    ids: myBooks.map(b => b.id),
    entities: Object.assign({}, ...myBooks.map(b => ({ [b.id]: b })))
  };

  // const entities = myBooks.reduce((acc, b) => {
  //   acc[b.id] = b;
  //   return acc;
  // }, {});
  // const bookstore2 = { ids: Object.keys(entities), entities };

  type Movie = {
    id: string,
    title: string,
    directors: string[],
    writers: string[]
  };

  type Moviestore = {
    ids: string[],
    entities: { [key: string]: Movie }
  };

  let myMovies = movies.default as Movie[];

  let moviestore: Moviestore = {
    ids: myMovies.map(b => b.id),
    entities: Object.assign({}, ...myMovies.map(b => ({ [b.id]: b })))
  };

  // let combinedstore = {
  //   'books': bookstore,
  //   'movies': moviestore
  // };

  return [
    myBooks[2].author,
    myBooks.filter(b => b.id === '978-1-60699-959-2')[0].title,
    bookstore.entities['978-1-60699-959-2'].title,
    bookstore.entities[bookstore.ids[1]].author,
    // Selector used to query the state database
    ...getBooksByAuthor('David Mitchell').map(i => i.title)
  ];

  function getBooksByAuthor(name: string): Book[] {
    // Stackblitz Angular projects can't target ECMAScript 2017 yet so Object.values isn't known...
    return Object.values(bookstore.entities).filter(b => b.author === name, []);
  }
}

