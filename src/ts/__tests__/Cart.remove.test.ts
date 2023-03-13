import Cart from '../service/Cart';
import Movie from '../domain/Movie';

test('new card should be empty', () => {
  const cart = new Cart();
  cart.add(new Movie(1025, 'Донни Дарко', 'Donnie Darko', 99, 'https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/4c2dd163-0681-48c9-97eb-1d4e6e41486a/300x450', 'HD', 2001, 'USA', '«Be Afraid of the Dark»', ['фантастика', 'триллер', 'драма', 'детектив'], 113));
  cart.remove(1025);
  expect(cart.items).toEqual([]);
});
