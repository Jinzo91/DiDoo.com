"use strict";

import React from 'react';
import PropTypes from 'prop-types';
import {MenuButton, ListItem, Avatar, FontIcon, Button, IconSeparator} from 'react-md';
import { withRouter } from 'react-router-dom'
import UserService from  '../services/UserService';


const Item = ({ label, children }) => (
    <IconSeparator labelStyle={{marginLeft: "-20px"}} label={label} iconBefore component="li" className="md-cell md-cell--12">
        {children}
    </IconSeparator>
);

class KebabMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined
        }
    }

    logout() {
        UserService.logout();
        this.state = {
            user: UserService.isAuthenticated() ? UserService.getCurrentUser() : undefined
        };
        if(this.props.location.pathname != '/') {
            this.props.history.push('/');
        }
        else {
            window.location.reload();
        }
    }

    render() {
        return (
            <MenuButton
                position={'br'}
                menuStyle={{marginTop: "3px"}}
                id={this.props.id}
                /*icon*/
                iconChildren={'account_circle'}
                className={this.props.className}
                menuItems={this.state.user ? [
                    <ListItem key={1} leftAvatar={<Avatar icon={<FontIcon>account_circle</FontIcon>}/>} primaryText={this.state.user.username}/>,
                    <ListItem key={3} leftAvatar={<Avatar icon={<FontIcon>phonelink_erase</FontIcon>}/>} primaryText="Logout" onClick={() => this.logout()}/>
                ]: [<ListItem key={1} leftAvatar={<Avatar icon={<FontIcon>how_to_reg</FontIcon>}/>} primaryText="Login" onClick={() => this.props.history.push('/login')}/>,
                    <ListItem key={2} leftAvatar={<Avatar icon={<FontIcon>person_add</FontIcon>}/>} primaryText="Register" onClick={() => this.props.history.push('/register')}/>]}
            >
                {/*Account*/}
                <Item label={this.state.user ? this.state.user.username : 'Account'}/>
            </MenuButton>
        );
    }
}

KebabMenu.propTypes = {
    id: PropTypes.string.isRequired,
    className: PropTypes.string,
    menuItems: PropTypes.array
};

export default withRouter(KebabMenu);