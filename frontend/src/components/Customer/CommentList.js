"use strict";

import React, {Component} from 'react';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn, Button } from 'react-md';
import Page from '../Page'
import {Autocomplete} from "react-md/es/index";
import CommentRow from "../Customer/CommentRow";


const testCard = (key, commentId, context, attraction,onDelete) => <CommentRow
    key={key}
    commentId = {commentId}
    context = {context}
    attraction={attraction}
    onDelete={onDelete}
/>;


class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testCard: []/*新建一个字符串*/
        }

    }
    componentWillReceiveProps(props){
        console.log(props.data);
        const testCards = props.data.map( (data, i)=>testCard(i, data._id, data.context, data.attraction,props.onDelete));
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
                    {this.state.testCards}
                </div>
            </div>
        </Page>
        );
    }
}

export default CommentList;

