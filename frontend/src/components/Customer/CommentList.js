"use strict";

import React, {Component} from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn, Button } from 'react-md';
import Page from '../Page'
import {Autocomplete} from "react-md/es/index";
import {CommentRow} from "./CommentRow";


const testCard = (key, attractionId, context, attraction) => <CommentRow
    key={key}
    attractionId = {attractionId}
    context = {context}
    attraction={attraction}
/>;


class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testCards: []/*新建一个字符串*/
        }

    }
    componentWillReceiveProps(props){
        console.log(this.props);
        const testCards = props.data.map( (data, i)=>testCard(i, data.attractionId, data.context, data.attraction));
        /*赋予上一个view的，用数据库的名字*/
        this.setState({testCards});
    }

    render() {
        return (
            <Page>
            <div >
                <div style={{
                    position:'relative',
                }}>
                    {this.props.data.map((data, i) => <CommentRow key={i} {...data} onDelete={(id) => this.props.onDelete(id)} />)}
                </div>
            </div>
        </Page>
        );
    }
}

export default CommentList;

