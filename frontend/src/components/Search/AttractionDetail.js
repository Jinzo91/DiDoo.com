"use strict";

import React from 'react';
import {Card, CardTitle, TextField, CardText, Media, MediaOverlay, Grid, Cell, Button, FontIcon} from 'react-md';
import Page from '../Page'
import { withRouter } from 'react-router-dom'
import DatePicker from 'react-datepicker';
import StarRatingComponent from 'react-star-rating-component';
import moment from 'moment';
import ShoppingService from '../../services/ShoppingService';
import UserService from '../../services/UserService';
const style = {maxWidth: 500};

class AttractionDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            quantity: 1,
            date: moment(),
            cartstatus:'ADD TO CART'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClickAddToCart = this.handleClickAddToCart.bind(this);
    }
    handleChange(date) {
        this.setState({
            date: date.hours(0).minutes(0).seconds(0).milliseconds(0)
        });
    }

    handleClickAddToCart() {
        const userId = UserService.getCurrentUser().id;
        ShoppingService.addToCart(userId, this.props.attraction._id, this.state.quantity,this.state.date);
        this.setState({
            cartstatus: 'IS IN CART'
        });
    }

    render() {
        return !this.props.loading ? (
            <Page>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr'
                }}>
                    <div style={{
                        padding: '0 100px'
                    }}>
                        <Media aspectRatio="1-1">
                            <img src={this.props.attraction.posters.detailed} alt="Something from unsplash.it"/>
                        </Media>
                    </div>
                    <div>
                        <div>
                            <h1>{this.props.attraction.title}</h1>
                            <h2>{this.props.attraction.type}</h2>
                            <StarRatingComponent
                                name="rate2"
                                editing={false}
                                starCount={5}
                                value={this.props.attraction.rating}
                            />
                            <p>{this.props.attraction.introduction}</p>
                        </div>
                        <div>
                            <h2>Quatity:</h2>
                        </div>
                        <div style={{width: '300px'}}><TextField
                            id='quantity'
                            className='quantity-input'
                            type='number'
                            value={this.state.quantity}
                            onChange={(value)=>{this.setState({quantity: value})}}
                            defaultValue={1}
                            step={1}
                            min={1}/>
                        </div>
                        <div>
                            <h2>Date:</h2>
                        </div>
                        <div style={{width: '300px'}}><DatePicker
                            selected={this.state.date}
                            onChange={this.handleChange}
                        ></DatePicker>
                        </div>
                        <div>
                            <Button style={{
                                background:'green',
                                color:'white',
                                fontSize:'50px',
                                marginTop:'100px',
                            }}  onClick={() => this.handleClickAddToCart()}>{this.state.cartstatus}</Button>
                        </div>
                        <div><Button style={{
                            background:'green',
                            color:'white',
                            fontSize:'50px',
                            marginTop:'100px',
                        }}  onClick={() => this.props.history.push('/mycart')}>Buy now</Button></div>

                    </div>
                </div>
            </Page>
        ) : <div></div>;
    }
}
export default withRouter(AttractionDetail);
