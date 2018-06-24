"use strict";

import React from 'react';
import { Card, Button, FontIcon, TextField } from 'react-md';
import { withRouter } from 'react-router-dom'

import { AlertMessage } from './AlertMessage';
import Page from './Page';


const style = { maxWidth: 500 };


class AttractionForm extends React.Component {

    constructor(props) {
        super(props);

        if(this.props.data != undefined) {
            this.state = {
                title : props.data.title,
                type : props.data.type,
                address : props.data.address,
                rating : props.data.rating,
                introduction: props.data.introduction,
                district : props.data.district,
                price : props.data.price,
                openTime : props.data.openTime
            };
        } else {
            this.state ={
                title : '',
                type : '',
                address : '',
                rating : '',
                introduction: '',
                district : '',
                price : '',
                openTime : ''
            };
        }
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeType = this.handleChangeType.bind(this);
        this.handleChangeAddress = this.handleChangeAddress.bind(this);
        this.handleChangeRating = this.handleChangeRating.bind(this);
        this.handleChangeIntroduction = this.handleChangeIntroduction.bind(this);
        this.handleChangeDistrict = this.handleChangeDistrict.bind(this);
        this.handleChangePrice = this.handleChangePrice.bind(this);
        this.handleChangeOpenTime = this.handleChangeOpenTime.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeTitle(value) {
        this.setState(Object.assign({}, this.state, {title: value}));
    }

    handleChangeType(value) {
        this.setState(Object.assign({}, this.state, {type: value}));
    }

    handleChangeAddress(value) {
        this.setState(Object.assign({}, this.state, {address: value}));
    }

    handleChangeRating(value) {
        this.setState(Object.assign({}, this.state, {rating: value}));
    }

    handleChangeIntroduction(value) {
        this.setState(Object.assign({}, this.state, {introduction: value}));
    }

    handleChangeDistrict(value) {
        this.setState(Object.assign({}, this.state, {district: value}));
    }

    handleChangePrice(value) {
        this.setState(Object.assign({}, this.state, {price: value}));
    }

    handleChangeOpenTime(value) {
        this.setState(Object.assign({}, this.state, {openTime: value}));
    }

    handleSubmit(event) {
        event.preventDefault();

        let data = this.props.data;
        if(data == undefined) {
            data = {};
        }

        data.title = this.state.title;
        data.type = this.state.type;
        data.address = this.state.address;
        data.rating = this.state.rating;
        data.introduction = this.state.introduction;
        data.district = this.state.district;
        data.price = this.state.price;
        data.openTime = this.state.openTime;


        this.props.onSubmit(data);
    }

    render() {
        return (
            <Page>
                <Card style={style} className="md-block-centered">
                    <form className="md-grid" onSubmit={this.handleSubmit} onReset={() => this.props.history.goBack()}>
                        <TextField
                            label="Title"
                            id="TitleField"
                            type="text"
                            className="md-row"
                            required={true}
                            value={this.state.title}
                            onChange={this.handleChangeTitle}
                            errorText="Title is required"/>
                        <TextField
                            label="Type"
                            id="TypeField"
                            type="text"
                            className="md-row"
                            required={false}
                            value={this.state.type}
                            onChange={this.handleChangeType}
                            errorText="Type is required"
                            />
                        <TextField
                            label="Address"
                            id="AddressField"
                            type="text"
                            className="md-row"
                            required={false}
                            value={this.state.address}
                            onChange={this.handleChangeAddress}
                            errorText="Address is required"
                        />
                        <TextField
                            label="Rating"
                            id="RatingField"
                            type="number"
                            className="md-row"
                            required={false}
                            value={this.state.rating}
                            onChange={this.handleChangeRating}/>
                        <TextField
                            label="Introduction"
                            id="IntroductionField"
                            type="text"
                            className="md-row"
                            required={false}
                            value={this.state.introduction}
                            onChange={this.handleChangeIntroduction}
                            errorText="Introduction is required"
                        />
                        <TextField
                            label="District"
                            id="DistrictField"
                            type="text"
                            className="md-row"
                            required={false}
                            value={this.state.district}
                            onChange={this.handleChangeDistrict}
                            errorText="District is required"
                        />
                        <TextField
                            label="Price"
                            id="PriceField"
                            type="number"
                            className="md-row"
                            required={false}
                            value={this.state.price}
                            onChange={this.handleChangePrice}
                            errorText="Price is required"
                        />
                        <TextField
                            label="Opentime"
                            id="OpenTimeField"
                            type="text"
                            className="md-row"
                            required={false}
                            value={this.state.openTime}
                            onChange={this.handleChangeOpenTime}
                            errorText="Opentime is required"/>

                        <Button id="submit" type="submit"
                                disabled={ this.state.title == undefined || this.state.title == ''
                                            /*|| this.state.type == undefined || this.state.type == ''
                                            || this.state.address == undefined || this.state.address == ''*/}
                                raised primary className="md-cell md-cell--2">Save</Button>
                        <Button id="reset" type="reset" raised secondary className="md-cell md-cell--2">Dismiss</Button>
                        <AlertMessage className="md-row md-full-width" >{this.props.error ? `${this.props.error}` : ''}</AlertMessage>
                    </form>
                </Card>
            </Page>
        );
    }
}

export default withRouter(AttractionForm);