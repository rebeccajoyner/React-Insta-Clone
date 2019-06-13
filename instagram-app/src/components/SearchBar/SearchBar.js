import React from 'react';



class SearchBar extends React.Component {


    render() {
        return (
            <input
            type="text"
            value="search"
            placeholder="search"
            name="search" />
        );
    };
}

export default SearchBar;
