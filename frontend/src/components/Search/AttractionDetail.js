"use strict";

import React from 'react';
import {Card, CardTitle, TextField, CardText, Media, MediaOverlay, Grid, Cell, Button, FontIcon} from 'react-md';
import Page from '../Page'
import {withRouter} from 'react-router-dom'
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
            cartstatus: 'ADD TO CART'
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClickAddToCart = this.handleClickAddToCart.bind(this);
    }

    handleChange(date) {
        this.setState({
            date: date.hours(0).minutes(0).seconds(0).milliseconds(0)
        });
    }

    incrementQuantity = () => {
        this.setState({
            quantity: this.state.quantity + 1
        })
    }

    decrementQuantity = () => {
        this.setState({
            quantity: this.state.quantity - 1
        })
    }

    handleClickAddToCart() {
        const userId = UserService.getCurrentUser().id;
        ShoppingService.addToCart(userId, this.props.attraction._id, this.state.quantity, this.state.date);
        this.setState({
            cartstatus: 'IS IN CART'
        });
        window.location.reload()
    }

    render() {
        return !this.props.loading ? (
            <Page>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr'
                }}>
                    <div style={{
                        padding: '0 100px',
                    }}>
                        <div style={{
                            borderStyle: 'solid',
                            borderColor: 'green',
                            borderWidth: '5px',
                            padding: '2px'
                        }}>
                            <Media aspectRatio="1-1">
                                <img src={this.props.attraction.posters.detailed} alt="Something from unsplash.it"/>
                            </Media></div>
                    </div>
                    <div>
                        <div>
                            <h1 style={{
                                fontSize:'50px',
                                fontWeight:'bolder',
                                fontFamily:'Calisto MT'
                            }}>{this.props.attraction.title}</h1>
                            <h2 style={{
                                marginTop:'20px'
                            }}>{this.props.attraction.type}</h2>
                            <StarRatingComponent
                                name="rate2"
                                editing={false}
                                starCount={5}
                                value={this.props.attraction.rating}
                            />
                            <p style={{width: '80%',marginTop:'30px'}}>{this.props.attraction.introduction}</p>
                        </div>
                        <div style={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'row',
                            marginTop:'50px',
                            justifyContent: 'space-between',
                        }}>
                            <div>
                                <h2>Quatity:</h2>
                                <div style={{
                                    width: '300px',
                                    display: 'flex',
                                    flexDirection: 'row;'
                                }}>
                                    <Button icon
                                            disabled={this.state.quantity < 2}
                                            onClick={this.decrementQuantity}
                                    >arrow_left</Button>
                                    <TextField  style={{
                                        width: '50%',
                                        textAlign: 'center'
                                    }}
                                        id='quantity'
                                        className='quantity-input'
                                        type='number'
                                        value={this.state.quantity}
                                        onChange={(value) => {
                                            this.setState({quantity: value})
                                        }}
                                        defaultValue={1}
                                        step={1}
                                        min={1}/>
                                    <Button icon
                                            onClick={this.incrementQuantity}
                                    >arrow_right</Button>
                                </div>
                            </div>
                            <div>
                                <h2>Date:</h2>
                                <div style={{
                                    width: '300px',
                                    marginTop: '25px'
                                }}><DatePicker
                                    selected={this.state.date}
                                    onChange={this.handleChange}
                                ></DatePicker>
                                </div>
                            </div>
                        </div>
                        <div style={{
                            width: '80%',
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                            <div>
                                <Button style={{
                                    background: 'green',
                                    color: 'white',
                                    fontSize: '35px',
                                    paddingLeft: '15px',
                                    paddingRight: '15px',
                                    paddingTop: '7px',
                                    paddingBottom: '7px',
                                    borderRadius: '10px',
                                    marginTop: '100px',
                                }} onClick={() => this.handleClickAddToCart()}>{this.state.cartstatus}</Button>
                            </div>
                            <div>
                                <Button style={{
                                    background: 'green',
                                    color: 'white',
                                    fontSize: '35px',
                                    paddingLeft: '15px',
                                    paddingRight: '15px',
                                    paddingTop: '7px',
                                    paddingBottom: '7px',
                                    borderRadius: '10px',
                                    marginTop: '100px',
                                }} onClick={() => this.props.history.push('/mycart')}>BUY NOW</Button>
                            </div>
                        </div>

                    </div>
                </div>

            </Page>
        ) : <div></div>;
    }
}

export default withRouter(AttractionDetail);
