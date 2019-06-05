import React from 'react';
import PropTypes from 'prop-types';
import BookListDetail from './BookListDetail';

const BookShelf = ({ title, books, updateBookShelf }) => {
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <BookListDetail
                        books={books}
                        updateBookShelf={updateBookShelf}
                    />
                </ol>
            </div>
        </div>
    );
};

// Add prop-types
BookShelf.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
};

export default BookShelf;
