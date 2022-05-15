import propTypes from 'prop-types';
import { useEffect, useState } from 'react';
import './BookEditor.css';
import * as api from '../../utils/api';

const BookEditor = ({
  book, refreshBooks, handleError,
}) => {
  const clearBook = {
    title: '',
    author: '',
    description: '',
  };

  const [editableBook, setEditableBook] = useState(clearBook);

  //  When the prop book data changes from props we update the state
  useEffect(() => {
    setEditableBook(book);
  }, [book]);

  const clear = () => {
    setEditableBook(clearBook);
  };

  const addBook = async () => {
    const body = {
      title: editableBook.title,
      author: editableBook.author,
      description: editableBook.description,
    };
    try {
      await api.postRequest('book', body);
      refreshBooks();
    } catch (err) {
      handleError('Error: There was a problem with adding a new book');
    }
  };

  const removeBook = async () => {
    try {
      await api.deleteRequest(`book/${editableBook.id}`);
      refreshBooks();
      clear();
    } catch (err) {
      handleError('Error: There was a problem deleting a book');
    }
  };

  const updateBook = async () => {
    const body = {
      title: editableBook.title,
      author: editableBook.author,
      description: editableBook.description,
    };
    try {
      await api.putRequest(`book/${editableBook.id}`, body);
      refreshBooks();
    } catch (err) {
      handleError('Error: There was a problem updating the book');
    }
  };

  // There probably is easier way to determine if the book is valid but this works for now.
  const isValid = (
    !!(editableBook?.title.length > 0
    && editableBook?.author.length > 0
    && editableBook?.description.length > 0)
  );

  return (
    <div className="book-editor">
      <div>
        <form>
          <p><label htmlFor="title">Title:</label></p>
          <input id="title" value={editableBook.title} type="text" onChange={(e) => setEditableBook({ ...editableBook, title: e.target.value })} />
          <p><label htmlFor="author">Author:</label></p>
          <input id="author" value={editableBook.author} type="text" onChange={(e) => setEditableBook({ ...editableBook, author: e.target.value })} />
          <p><label htmlFor="description">Description:</label></p>
          <div className="textarea-box">
            <textarea id="description" type="textarea" value={editableBook.description} onChange={(e) => setEditableBook({ ...editableBook, description: e.target.value })} />
          </div>
        </form>
      </div>
      <div>
        <button type="button" onClick={() => addBook()} disabled={!isValid}>Save new</button>
        <button type="button" onClick={() => updateBook()} disabled={!editableBook.id || !isValid}>Save</button>
        <button type="button" onClick={() => removeBook()} disabled={!editableBook.id}>Delete</button>
        <button type="button" onClick={() => clear()}>Clear</button>
      </div>
    </div>
  );
};

BookEditor.propTypes = {
  book: propTypes.shape({
    title: propTypes.string,
    author: propTypes.string,
    description: propTypes.string,
    id: propTypes.number,
  }),
  handleError: propTypes.func.isRequired,
  refreshBooks: propTypes.func.isRequired,
};

BookEditor.defaultProps = {
  book: {
    title: '',
    author: '',
    description: '',
  },
};

export default BookEditor;
