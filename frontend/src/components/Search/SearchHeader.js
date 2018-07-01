"use strict";

import React from 'react';
import {Toolbar, Button} from 'react-md';
import {withRouter} from 'react-router-dom'
import KebabMenu from '../KebabMenu';
import searchtoolbar from '../../css/searchtoolbar.css';
import CartPopUp from '../ShoppingCart/CartPopUp';
import UserService from "../../services/UserService";

class SearchHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            user: UserService.getCurrentUser(),
        }
    }

    render() {
        return (
            <Toolbar className={searchtoolbar}
                     actions={
                         [this.state.user.status == 'visitor' &&
                         <CartPopUp id="toolbar-cart-overlay"/>,
                             <KebabMenu id="toolbar-colored-kebab-menu"/>
                         ]
                     }>

            </Toolbar>

        );
    }
};

export default withRouter(SearchHeader);