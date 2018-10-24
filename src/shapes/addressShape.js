import { shape, string } from 'prop-types';

export default shape({
  state: string,
  street: string,
  exterior: string,
  interior: string,
  postalCode: string,
  city: string
});
