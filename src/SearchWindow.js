import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

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
