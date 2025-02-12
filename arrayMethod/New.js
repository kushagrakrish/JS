const num = [1, 2, 4, undefined, 5, 6, 7, 899];

const filteredNums = num?.filter((item) => item > 4);
//
const books = [
  {
    title: "The Great Gatsby",
    genre: "Fiction",
    published: 1925,
    edition: 1,
  },
  {
    title: "To Kill a Mockingbird",
    genre: "Classic",
    published: 1960,
    edition: 3,
  },
  {
    title: "The Lean Startup",
    genre: "Business",
    published: 2011,
    edition: 2,
  },
  {
    title: "Clean Code",
    genre: "Programming",
    published: 2008,
    edition: 1,
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    genre: "Fantasy",
    published: 1997,
    edition: 1,
  },
  {
    title: "1984",
    genre: "Dystopian",
    published: 1949,
    edition: 10,
  },
  {
    title: "Pride and Prejudice",
    genre: "Romance",
    published: 1813,
    edition: 20,
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    genre: "Science Fiction",
    published: 1979,
    edition: 15,
  },
  {
    title: "The Lord of the Rings",
    genre: "Fantasy",
    published: 1954,
    edition: 25,
  },
  {
    title: "War and Peace",
    genre: "Historical Fiction",
    published: 1869,
    edition: 30,
  },
  {
    title: "War and Roses",
    genre: "Fiction",
    published: 1869,
    edition: 30,
  },
];

//  Filter all the books og genere fiction

const filterGenreBook = books?.filter((book) => {
  return book?.genre === "Fiction";
});

// console.log(filterGenreBook);

// Filter all the books og genere fiction and published after 2000

const filteredPublishedBook = books?.filter((book) => {
  return book?.published >= 1900 && book?.genre === "Classic";
});

console.log(filteredPublishedBook);
