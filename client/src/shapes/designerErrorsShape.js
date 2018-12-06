import { shape, string } from 'prop-types';

export default shape({
  email: string,
  name: string,
  brandName: string,
  depositAccount: string,
  password: string,
  street: string,
  exterior: string,
  city: string,
  postalCode: string
});
