import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class SearchWindow extends Component {
    state = {
        query: '',
        books: [],
    };

    // Update query
    handleQueryUpdate = query => {
        BooksAPI.search(query)
            .then(books => books ?
                this.setState({ books })
                : []);
                this.setState({ query });
    }

    // Show message when the book is successfully added to the shelf.
    // 'None' should be selected if a book has not been assigned to a shelf.
    handleBookShelf(book, shelf) {
        BooksAPI.update(book, shelf)
            .then(() => shelf !== 'none' ? alert(`We added ${book.title} to your bookshelf.`) : '')
            .catch(() => alert('Please try again!'));
    }

    render() {
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
                            value={this.state.query}
                            onChange={this.handleQueryUpdate}
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

SearchWindow.propTypes = {
    books: PropTypes.array.isRequired,
    searchBook: PropTypes.func.isRequired,
    updateBookShelf: PropTypes.func.isRequired,
    clearSearchWindow: PropTypes.func.isRequired
};

export default SearchWindow;
