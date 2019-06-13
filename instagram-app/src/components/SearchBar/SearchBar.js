import React from 'react'



class SearchBar extends React.Component {


    render() {
        return (
            <input
                type="text"
                onChange={this.props.changeHandler}
                onSubmit={this.props.searchFilter}
                name="search"
                value={this.props.newSearch}
                placeholder="Search.." />
        );
    };
}

export default SearchBar;