"use strict";

import React, {Component} from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn, Button } from 'react-md';
import Page from '../Page'
import {ShoppingCartRow} from "./ShoppingCartRow";


const testCard = (key, title, image) => <ShoppingCartRow
    key={key}
    image={image}
    title={title}
    comment = 'hh'

/>;


class ShoppingCartList extends Component {
    constructor(props) {
        super(props);
        this.testCards = props.data.map((data, i)=>testCard(i, data.title, data.posters.thumbnail));
    }

    render() {
        return (
            <Page>
                <div >
                    <div style={{
                        position:'relative',
                    }}>
                        {this.testCards}
                    </div>
                </div>
            </Page>
        );
    }
}

export default ShoppingCartList;