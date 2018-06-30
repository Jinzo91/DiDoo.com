"use strict";

import React from 'react';
import {Route, Link, withRouter} from 'react-router-dom';
import {FontIcon, ListItem, NavigationDrawer, Button, Avatar, IconSeparator, Autocomplete, TextField} from 'react-md';
import KebabMenu from './KebabMenu';
import imgURL from '../images/didoo.png';
import NavigationMenuStyle from '../css/NavigationMenuStyle.css';
import CartPopUp from './ShoppingCart/CartPopUp';
import AttractionService from '../services/AttractionService';
import UserService from "../services/UserService";
import MovieService from "../services/MovieService";
import CommentService from "../services/CommentService";


const Item = ({ label, children }) => (
    <IconSeparator label={label} iconBefore component="li" className="md-cell md-cell--12">
        {children}
    </IconSeparator>
);

const NavLink = ({ label, to, exact, icon }) => (
    <Route path={to} exact={exact}>
        {({ match }) => {
            let leftIcon;
            if (icon) {
                leftIcon = <FontIcon>{icon}</FontIcon>;
            }

            return (
                <ListItem
                    component={Link}
                    active={!!match}
                    to={to}
                    primaryText={label}
                    leftIcon={leftIcon}
                />
            );
        }}
    </Route>
);

const defaultNavItems = [{
    exact: true,
    label: 'Home',
    to: '/',
    icon: 'home',
}, {
    label: 'My Order',
    to: '/myorder',
    icon: 'bookmark',
}, {
    label: 'My Comments',
    to: '/mycomments',
    icon: 'favorite',
}, {
    label: 'My Cart',
    to: '/mycart',
    icon: 'shopping_cart',
}];

const adminNavItems = [
    {
        exact: true,
        label: 'Manage approved Attractions',
        to: '/admin',
        icon: 'playlist_add_check',
    }, /*{
        label: 'Manage unapproved Attractions',
        to: '/admin/unapproved',
        icon: 'playlist_play',
    }, */{
        label: 'Create new Attraction',
        to: '/add',
        icon: 'playlist_add',
    }, {
        label: 'Inventory',
        to: '/admin/inventory',
        icon: 'store',
    }
];

const taNavItems = [
    {
        label: 'Approve Attractions',
        to: '/admin/approveta',
        icon: 'verified_user',
    }, {
        label: 'Sales Report',
        to: '/admin/report',
        icon: 'show_chart',
    }
];


class NavigationMenu extends React.Component {

    constructor(props) {
        super(props);
        const navMap = {
            admin: adminNavItems,
            ta: taNavItems,

        }
        this.state = {
            loading: false,
            data: [],
            navItems: navMap[this.props.userRole] ? navMap[this.props.userRole] : defaultNavItems,
            searchValue: [],
            attractions: [],
            titles: [],
        };
    }

    componentWillMount(){
        AttractionService.getAttractions().then((data) => {
            this.setState({
                attractions: [...data],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    newSearch() {
        window.location.reload();
        this.props.history.push(`/searchresult?query=${this.state.searchValue}`);

    }

    render() {
        return (
            <div className={this.props.className}>
                <NavigationDrawer
                    style={NavigationMenuStyle}
                    desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
                    className="NavigationMenuStyle"
                    drawerTitle="My Menu"
                    toolbarTitle={<Item label="DiDoo.com">
                        <Button onClick={() => this.props.history.push('/')}><Avatar src={imgURL} role="presentation" suffix="green-300" /></Button>
                    </Item>}
                    toolbarTitleMenu={this.props.userRole !== 'admin' && <Item>
                            <Autocomplete style={{marginLeft: "-50px", width: "30%", height: "35px", background: "white", color: 'black'}}
                                          data={this.state.titles = this.state.attractions.map(attractions => attractions.title)}
                                          filter={Autocomplete.caseInsensitiveFilter}
                                          onAutocomplete={(value) => this.setState({ searchValue: value })}
                                          onChange={(value) => this.setState({ searchValue: value })}
                            />
                            <Button style={{marginLeft: "auto", width: "10%"}} onClick={() => this.newSearch()} flat iconBefore={true} iconChildren={"search"}/>

                    </Item>}
                    toolbarActions={<KebabMenu id="toolbar-colored-kebab-menu" />}
                    /*toolbarChildren={<Button style={{width: "15"}} flat iconChildren="shopping_cart"></Button>}*/
                    /*toolbarChildren={<Button style={{marginTop: "12px", marginRight: "5px"}} onClick={() => this.props.history.push('/mycart')} icon>shopping_cart</Button>}*/
                    toolbarChildren={this.props.userRole === 'visitor' && <CartPopUp id="toolbar-cart-overlay" />}
                    navItems={this.state.navItems.map(props => <NavLink {...props} key={props.to} />)}
                >
                </NavigationDrawer>
            </div>
        );
    }
};

export default withRouter(NavigationMenu);