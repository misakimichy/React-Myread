import React from 'react';
import BookListDetail from './BookListDetail';

const BookShelf = ({title, books, handleShelf}) => {
    return(
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book, index) =>
                        <BookListDetail
                            key={index}
                            book={book}
                            handleShelf={handleShelf}
                        />
                    )}
                </ol>
            </div>
        </div>
    );

};

export default BookShelf;
