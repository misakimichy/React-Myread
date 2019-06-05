import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import escapeRegExp from 'escape-string-regexp';
import * as BooksAPI from './BooksAPI';
import RenderShelf from './RenderShelf';

class BookList extends Component {
    state = {
        currentlyReading: [],
        wantToRead: [],
        read: [],
    };

    componentDidMount() {
        this.getBooks();
    }

    // Check the match and update state
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
    
    render() {
        const {currentlyReading, wantToRead, read } = this.state;

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>My Reads</h1>
                </div>
                <div className="list-books-content">
                    {/* Render three different shelf */}
                    <RenderShelf
                        currentlyReading={currentlyReading}
                        wantToRead={wantToRead}
                        read={read}
                        handleShelf={this.handleShelf}
                    />
                </div>
                <div className='open-search'>
                    <Link to ='/search'>Add book</Link>
                </div>
            </div>
        );
    }
}

export default BookList;
