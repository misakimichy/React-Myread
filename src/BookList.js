import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

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
            let currentlyReading = books ? books.filter(book => currentlyReadingBook.test(book, shelf)) : null;

            const wantToReadBook = new RegExp(escapeRegExp('wantToRead'));
            let wantToRead = books ? books.filter(book => wantToReadBook.test(book, shelf)) : null;

            const ReadBook = new RegExp(escapeRegExp('read'));
            let read = books ? books.filter(book => ReadBook.test(book, shelf)) : null;

            this.setState({currentlyReading, wantToRead, read});
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
                    <RenderShelf
                        currentlyReading={currentlyReading}
                        wantToRead={wantToRead}
                        read={read}
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
