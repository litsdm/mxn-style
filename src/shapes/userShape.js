import { shape, string } from 'prop-types';

export const addressShape = shape({
  state: string,
  street: string,
  exterior: string,
  interior: string,
  postalCode: string,
  city: string
});

export const stylesheetShape = shape({
  bgImage: string,
  bgColor: string
})

export default shape({
  id: string,
  brandName: string,
  address: addressShape,
  stylesheet: stylesheetShape
});
