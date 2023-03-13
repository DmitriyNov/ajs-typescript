import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Movie(1025, 'Донни Дарко', 'Donnie Darko', 99, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/4c2dd163-0681-48c9-97eb-1d4e6e41486a/300x450', 'HD', 2001, 'USA', '«Be Afraid of the Dark»', ['фантастика', 'триллер', 'драма', 'детектив'], 113));
  const result = cart.price();
  expect(result).toBe(2999);
});
