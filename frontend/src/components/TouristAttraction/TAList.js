import React, { Component } from 'react';
import TACard from './TACard';
import Page from "../Page";

export class TAList extends Component {
    constructor(props) {
        super(props);
        this.TACards = Array.from(Array(8)).map((_, i) => TACard(i));
    }

    render() {
        return (
            <Page>
                <div >
                    <div style={{
                        position:'relative',
                    }}>
                        {this.TACards}
                    </div>
                </div>
            </Page>
        );
    }
}