import propTypes from 'prop-types';
import BookItem from '../BookItem/BookItem';
import './BookList.css';

const BookList = ({ books, clickHandler }) => (
  <div className="book-list">
    {books.map((book) => (
      <BookItem key={book.id} book={book} clickHandler={clickHandler} />
    ))}
  </div>
);

BookList.propTypes = {
  books: propTypes.arrayOf(
    propTypes.shape({
      title: propTypes.string,
      author: propTypes.string,
      description: propTypes.string,
      id: propTypes.number,
    }),
  ).isRequired,
  clickHandler: propTypes.func.isRequired,
};

export default BookList;
