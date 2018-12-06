import { arrayOf, number, shape, string } from 'prop-types';

export default shape({
  name: string,
  images: arrayOf(string),
  info: string,
  price: number,
  weight: number
});
