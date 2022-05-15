import { useState, useEffect } from 'react';
import * as api from '../../utils/api';
import ErrorMessage from '../../components/ErrorMessage';
import BookList from '../../components/BookList/BookList';
import BookEditor from '../../components/BookEditor/BookEditor';
import './MainPage.css';

const MainPage = () => {
  const [books, setBooks] = useState();
  const [error, setError] = useState();
  const [activeBook, setActiveBook] = useState({
    title: '',
    author: '',
    description: '',
  });

  const changeActiveBook = (id) => {
    const newActive = books.find((book) => book.id === id);
    setActiveBook(newActive);
  };

  const getBooks = async () => {
    try {
      const response = await api.getRequest('book/all');
      setBooks(response.data);
    } catch (err) {
      setError('Error: There was a problem fetching the books');
    }
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div>
      <h1>Fullstack task</h1>
      {error && <ErrorMessage message={error} />}
      <div className="container">
        <div className="content-half">
          <BookEditor
            book={activeBook}
            refreshBooks={getBooks}
            handleError={setError}
          />
        </div>
        <div className="content-half">
          {books?.length > 0 && <BookList books={books} clickHandler={changeActiveBook} />}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
