"use strict";

import React, {Component} from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn, Button } from 'react-md';
import Page from '../Page'
import {Autocomplete} from "react-md/es/index";
import {CommentRow} from "./CommentRow";


const testCard = (key, title, image) => <CommentRow
    key={key}
    // image='http://www.tourismmail.com/wp-content/uploads/2018/01/Palace-Museum.jpg'
    // title='sdf'
    image={image}
    title={title}
    comment = 'hh'

/>;


class CommentList extends Component {
    constructor(props) {
        super(props);
        // this.testCards = Array.from(Array(15)).map((_, i) => testCard(i));
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

export default CommentList;

