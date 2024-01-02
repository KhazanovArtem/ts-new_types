import Cart from '../Cart';
import Movie from '../Movie';

test('test add movie', () => {
  const cart = new Cart();
  const movie = new Movie(112, 'Мстители The Avengers', 1000, 2012, 'США', 'Avengers Assemble!', 'фантастика, боевик, фэнтези, приключения',137);
  cart.add(movie);
  expect(cart).toEqual({"_items":
    [
        {"country": "США", 
        "genre": "фантастика, боевик, фэнтези, приключения", 
        "id": 112, 
        "name": "Мстители The Avengers", 
        "price": 1000, "slogan": "Avengers Assemble!", 
        "time": 137, 
        "year": 2012}
    ]});
});