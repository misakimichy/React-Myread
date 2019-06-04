import React, { Component} from 'react';

class RenderShelf extends Component => {
    const { handleShelf } = this.props;
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book, index) =>
                        <BooksListDetail
                            key={index}
                            book={book}
                            handleShelf={this.handleShelf.bind(this)}
                        />)}
                </ol>
            </div>
        </div>
    );

}

export default RenderShelf;