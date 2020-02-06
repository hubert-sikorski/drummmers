import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };
    }

    search = () => {
        if (this.state.term) {
            this.props.onSearch(this.state.term);
        }
    };

    handleTermChange = event => {
        this.setState({
            term: event.target.value
        });
    };

    handleEnterClick = event => {
        if (event.key === 'Enter') {
            this.search();
        }
    };

    render() {
        return (
            <div className="SearchBar">
                <input
                    onChange={this.handleTermChange}
                    placeholder="Enter A Song, Album, or Artist"
                    onKeyPress={this.handleEnterClick}
                />
                <button onClick={this.search} className="SearchButton">
                    SEARCH
                </button>
            </div>
        );
    }
}

export default SearchBar;
