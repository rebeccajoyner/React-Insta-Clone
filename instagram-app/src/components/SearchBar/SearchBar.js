import React from 'react'



class SearchBar extends React.Component {


    render() {
        return (
            <input
                type="text"
                onChange={this.props.changeHandler}
                name="search"
                value="search"
                placeholder="Search.." />
        );
    };
}

export default SearchBar;