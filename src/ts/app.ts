import Cart from './Cart';
import Movie from './Movie';

const cart = new Cart();
const movie = new Movie(105, 'Мстители The Avengers', 1000, 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения',137);

cart.add(movie);
console.log(cart);
