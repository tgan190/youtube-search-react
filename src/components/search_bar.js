import React, {Component}  from 'react';

/*const SearchBar = () => {
    return <input />
};
    */

class SearchBar extends Component {

    constructor (props) {
        super(props);

        this.state = {term : ''};

    }

   /* render() {
        return <input onChange={this.onInputChange} />;
    }*/

       /* onInputChange(event) {
            console.log(event.target.value);
            console.log(event);

    }*/

     render() {
        return (
            <div className="search-bar">
                <input
                  value = {this.state.term}
                  placeholder = "Search"
                  onChange={event => {this.setState({term: event.target.value});this.props.onSearchTermChange (this.state.term);
                    console.log('All good!')}} />

            </div>
        );

    }

    onInputChange(term) {
         this.setState({term});
        this.props.onSearchTermChange (term);
    }
}


export default SearchBar;
