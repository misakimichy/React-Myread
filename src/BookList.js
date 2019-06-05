import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import escapeRegExp from 'escape-string-regexp';
import * as BooksAPI from './BooksAPI';
import BookListDetail from './BookListDetail';

class BookList extends Component {
    state = {
        currentlyReading: [],
        wantToRead: [],
        read: [],
    };

    componentDidMount() {
        this.matchBooks();
    }

    // Check the match and update state
    // Research https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
    matchBooks() {
        BooksAPI.getAll().then(books => {
            const currentlyReadingBook = new RegExp(escapeRegExp('currentlyReading'));
            const currentlyReading = books ? books.filter(book => currentlyReadingBook.test(book.shelf)) : null;

            const wantToReadBook = new RegExp(escapeRegExp('wantToRead'));
            const wantToRead = books ? books.filter(book => wantToReadBook.test(book.shelf)) : null;

            const ReadBook = new RegExp(escapeRegExp('read'));
            const read = books ? books.filter(book => ReadBook.test(book.shelf)) : null;

            this.setState({ currentlyReading, wantToRead, read });
        });
    }

    // handle the matchBooks
    handleShelf(book, shelf) {
        BooksAPI.update(book, shelf).then(() => this.getBooks());
    }

    renderShelf (books, title) {
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book, index) =>
                            <BookListDetail
                                key={index}
                                book={book}
                                handleShelf={this.handleShelf}
                            />
                        )}
                    </ol>
                </div>
            </div>
        );
    }
    
    render() {
        const {currentlyReading, wantToRead, read } = this.state;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <div className="list-books-content">
                    {/* Invoke three different shelf */}
                    {this.renderShelf(currentlyReading, 'Currently Reading')}
                    {this.renderShelf(wantToRead, 'Want To Read')}
                    {this.renderShelf(read, 'Read')}
                </div>
                <div className='open-search'>
                    <Link to ='/search'>Add book</Link>
                </div>
            </div>
        );
    }
}

export default BookList;
