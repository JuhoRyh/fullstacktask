import propTypes from 'prop-types';
import './BookItem.css';

const BookItem = ({ book, clickHandler }) => (
  // Using Button here since clickable div is not accessible by tab
  <button className="list-item-button" type="button" onClick={() => clickHandler(book.id)}>
    <h2>{book.title}</h2>
    <h4>{book.author}</h4>
  </button>
);

BookItem.propTypes = {
  book: propTypes.shape({
    id: propTypes.number,
    title: propTypes.string,
    author: propTypes.string,
    description: propTypes.string,
  }).isRequired,
  clickHandler: propTypes.func.isRequired,
};

export default BookItem;
