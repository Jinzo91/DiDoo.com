"use strict";

import React from 'react';
import Page from '../Page'
import OrderRow from "../Customer/OrderRow";

const testCard = (key, quantity, ticketId,createdAt,ticket,date,attractionId,attraction) => <OrderRow
    key={key}
    quantity = {quantity}
    ticketId = {ticketId}
    createdAt = {createdAt}
    ticket = {ticket}
    date = {date}
    attractionId = {attractionId}
    attraction = {attraction}
/>;


class OrderList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testCard: []/*新建一个字符串*/
        }

    }
    componentWillReceiveProps(props){
        console.log(this.props);
        const testCards = props.data.map( (data, i)=>testCard(i, data.quantity, data.ticketId, data.createdAt, data.ticket, data.date, data.attractionId, data.attraction));
        /*赋予上一个view的，用数据库的名字*/
        this.setState({testCards});
    }

    render() {
        return (
            <Page>
                    <div style={{
                        position:'relative',
                    }}>
                        {this.props.data.map((data, i) => <OrderRow key={i} {...data}/>)}
                    </div>

            </Page>
        );
    }
}

export default OrderList;

