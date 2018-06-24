"use strict";

import React from 'react';
import {Route, Link, withRouter} from 'react-router-dom';
import {FontIcon, ListItem, NavigationDrawer, Button, Avatar, IconSeparator, Autocomplete, TextField} from 'react-md';
import KebabMenu from './KebabMenu';
import imgURL from '../images/didoo.png';
import NavigationMenuStyle from '../css/NavigationMenuStyle.css';//required
import CartPopUp from './ShoppingCart/CartPopUp';


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
        label: 'Manage Attractions',
        to: '/admin',
        icon: 'view_list',
    }, {
        label: 'Approve Attractions',
        to: '/admin/approveta',
        icon: 'verified_user',
    }, {
        label: 'Manage Visitor',
        to: '/admin/managevisitor',
        icon: 'people',
    }, {
        label: 'Sales Report',
        to: '/admin/report',
        icon: 'show_chart',
    }
];

const taNavItems = [
    {
        exact: true,
        label: 'Manage Attractions',
        to: '/ta',
        icon: 'view_list',
    }, {
        label: 'Manage Inventory',
        to: '/ta/inventory',
        icon: 'storage',
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
            searchValue: []
        };
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
                            <Autocomplete style={{margin: "auto", width: "30%", left: "-30px", height: "35px", background: "white", color: 'black'}}
                                          data={['Hutongs', 'Forbidden City', 'Great Wall', 'Olympic Sites', 'Ming Tombs']}
                                          filter={Autocomplete.caseInsensitiveFilter}
                                          onAutocomplete={(value) => this.setState({ searchValue: value })}
                                          onChange={(value) => this.setState({ searchValue: value })}
                            />
                            <Button style={{margin: "auto", width: "10%", left: "-30px"}} onClick={() => this.props.history.push(`/searchresult?query=${this.state.searchValue}`)} flat iconBefore={true} iconChildren={"search"}/>

                    </Item>}
                    toolbarActions={<KebabMenu id="toolbar-colored-kebab-menu" />}
                    /*toolbarChildren={<Button style={{width: "15"}} flat iconChildren="shopping_cart"></Button>}*/
                    /*toolbarChildren={<Button style={{marginTop: "12px", marginRight: "5px"}} onClick={() => this.props.history.push('/mycart')} icon>shopping_cart</Button>}*/
                    toolbarChildren={<CartPopUp id="toolbar-cart-overlay" />}
                    navItems={this.state.navItems.map(props => <NavLink {...props} key={props.to} />)}
                >
                </NavigationDrawer>
            </div>
        );
    }
};

export default withRouter(NavigationMenu);