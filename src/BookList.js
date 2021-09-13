import React, {useState} from 'react';

const BookList = () => {
    const [books, setBook] = useState(['book 1', 'book2', 'book 3']);

    return (
        <div className="container">
            <div className="row">
                {books.map((book, index) =>
                <div>{index} - {book}</div>
            )}
            </div>
        </div>
    );
};

export default BookList;