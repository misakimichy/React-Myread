import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class SearchWindow extends Component {
    state = {
        query: '',
        showBooks: [],
    };

    handleQueryUpdate = query => {
        BooksAPI.search(query)
        .then(books => books ? 
        this.setState({ books })
        : []);
    }

    render() {
        const { query, showBooks } = this.state;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link
                        to='/' 
                        className='close-search'
                    >Close
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid"></ol>
                </div>
            </div>
        );
    }
}

export default SearchWindow;
