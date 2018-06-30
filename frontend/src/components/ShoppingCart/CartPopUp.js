"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import {MenuButton, ListItem, Avatar, FontIcon, Button, IconSeparator} from 'react-md';
import { withRouter } from 'react-router-dom'
import UserService from  '../../services/UserService';
import { MovieListRow } from '../MovieListRow';
import MovieService from "../../services/MovieService";
import ShoppingService from "../../services/ShoppingService";
import {CartListRow} from "./CartListRow";

const Item = ({ label, children }) => (
    <IconSeparator labelStyle={{color: 'white', marginLeft: "-20px"}} label={label} iconBefore component="li" className="md-cell md-cell--12">
        {children}
    </IconSeparator>
);
const CartList = ({data, onDelete}) => (
    <div>{data.map((cart, i) => <CartListRow key={i} cart={cart} onDelete={(id) => onDelete(id)} />)}</div>
);


class CartPopUp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined
        }
    }

    componentWillMount(){
        this.setState({
            loading: true
        });
        let userId = UserService.getCurrentUser().id;

        ShoppingService.listCart(userId).then((data) => {
            console.log(data)
            this.setState({
                data: [...data],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });

    }

    deleteCartItem(cartId) {
        this.setState({
            data: [...this.state.data],
            loading: true
        });
        MovieService.deleteMovie(id).then((message) => {

            let movieIndex = this.state.data.map(movie => movie['_id']).indexOf(id);
            let movies = this.state.data;
            movies.splice(movieIndex, 1);
            this.setState({
                data: [...movies],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    render() {
        return (
            <MenuButton
                position={'br'}
                menuStyle={{marginTop: "15px", marginRight: "5px"}}
                id={this.props.id}
                /*icon*/
                iconChildren={<icon style={{color:'white'}}>shopping_cart</icon>}
                className={this.props.className}
                menuItems={this.state.username !== 'admin' && this.state.user ? [
                    <CartList data={this.state.data} onDelete={(id) => this.deleteMovie(id)}/>]
                    : [<ListItem style={{minHeight: "50px"}} leftIcon={<img style={{marginRight:"-10px", marginTop: "-5px", height: "40px", width: "45px"}} src="https://res.cloudinary.com/sivadass/image/upload/v1495427934/icons/empty-cart.png"/>} key={1} primaryTextStyle={{marginTop: "10px", fontWeight: "bold"}} primaryText="Empty Cart" onClick={() => this.props.history.push('/mycart')}/>]}
            >
                {/*Account*/}
                <Item label={'My Cart'}/>
            </MenuButton>
        );
    }
}

CartPopUp.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    menuItems: PropTypes.array
};

export default withRouter(CartPopUp);