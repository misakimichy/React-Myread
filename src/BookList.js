import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';

const BookList = ({ bookshelf, updateBookShelf }) => {


    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>My Reads</h1>
            </div>
            <div className="list-books-content">
                <BookShelf
                    title={'Currently Reading'}
                    books={currentlyReading}
                />
                <BookShelf
                    title={'Want To Read'}
                    books={wantToRead}
                />
                <BookShelf
                    title={'Read'}
                    books={read}
                />
            </div>
            <div className='open-search'>
                <Link to ='/search'>Add book</Link>
            </div>
        </div>
    );
}

// Add prop-types
BookList.propTypes = {
    bookshelf: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
};

export default BookList;
