import React, { Component } from 'react';
import TACard from './TACard1';

class SearchResultPage extends Component {
    constructor(props) {
        super(props);
        this.TACards = Array.from(Array(8)).map((_, i) => TACard(i));
    }

    render() {
        return (
            <div >
                <div style={{
                    position:'relative',
                }}>
                    {this.TACards}
                </div>
            </div>
        );
    }
}

export default SearchResultPage;