import { arrayOf, oneOfType, shape, string } from 'prop-types';

const itemsShape = arrayOf(
  shape({
    text: string,
    url: string
  })
);

const categoryDataShape = shape({
  title: string,
  items: itemsShape
})

export default oneOfType([
  itemsShape,
  categoryDataShape
])
