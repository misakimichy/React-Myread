import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookListDetail from './BookListDetail';

class SearchWindow extends Component {
    state = {
        query: '',
    };

    // Update query
    handleQueryUpdate = query => {
        this.setState({ query: query });
        this.props.searchBook(query);
    }

    componentWillMount() {
        this.props.clearSearchWindow();
    }

    renderSearchResult() {
        const { query } = this.state;
        const { books, updateBookShelf } = this.props;
        if(query) {
            return books.error ?
                <div>No results found.</div>
                : books.map((book, index) => {
                    return (
                        <BookListDetail
                            key={index}
                            book={book}
                            updateBookShelf={updateBookShelf}
                        />
                    );
                });
            }
    }

    render() {
        const { query } = this.state;
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
                            value={query}
                            onChange={event => this.handleQueryUpdate(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {this.renderSearchResult()}
                    </ol>
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
