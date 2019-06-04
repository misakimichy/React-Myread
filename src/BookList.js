import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class BookList extends Component {
    state = {
        currentlyReading: [],
        wantToRead: [],
        read: [],
    };

    render() {
        const {currentlyReading, wantToRead, read } = this.state;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {/* Pass three state
                        {}
                        {}
                        {} */}
                    </div>
                </div>
            </div>
        );
    }
}

export default BookList;
