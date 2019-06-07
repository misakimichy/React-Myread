import React from 'react';
import PropTypes from 'prop-types';

const BookListDetail = ({ book, updateBookShelf }) => {
    
    // Book-cover background image
    const imageThumb = (book.imageLinks && book.imageLinks.smallThumbnail) || '';

    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${imageThumb})`
                        }}
                    >
                    </div>
                    {/* Chore: Should I make another component? */}
                    <div className="book-shelf-changer">
                        <select
                            value={book.shelf}
                            onChange={event => updateBookShelf(book, event.target.value)}
                        >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
        </li>
    );
};

// Add prop-types
BookListDetail.propTypes = {
    book: PropTypes.object.isRequired,
    updateBookShelf: PropTypes.func.isRequired
};

export default BookListDetail;
