"use strict";

import React from 'react';
import {Route, Link, withRouter} from 'react-router-dom';
import {FontIcon, ListItem, NavigationDrawer, Button, Avatar, IconSeparator, Autocomplete} from 'react-md';
import KebabMenu from '../KebabMenu';

import imgURL from '../../images/didoo.png';

import NavigationMenuStyle from '../../css/NavigationMenuStyle.css';//required


const Item = ({label, children}) => (
    <IconSeparator label={label} iconBefore component="li" className="md-cell md-cell--12">
        {children}
    </IconSeparator>
);

const NavLink = ({label, to, exact, icon}) => (
    <Route path={to} exact={exact}>
        {({match}) => {
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

const navItems = [{
    exact: true,
    label: 'View Attractions',
    to: '/admin',
    icon: 'view_list',
}, {
    label: 'Manage Attractions',
    to: '/admin/manageta',
    icon: 'verified_user',
}, {
    label: 'Manage Visitor',
    to: '/admin/managevisitor',
    icon: 'people',
}, {
    label: 'Sales Report',
    to: '/admin/report',
    icon: 'show_chart',
}];

class NavigationMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
        };
    }

    render() {
        return (
            <div className={this.props.className}>
                <NavigationDrawer
                    style={NavigationMenuStyle}
                    desktopDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
                    className="NavigationMenuStyle"
                    drawerTitle="Administrator"
                    toolbarTitle={<Item label="DiDoo.com">
                        <Button onClick={() => this.props.history.push('/')}><Avatar src={imgURL} role="presentation"
                                                                                     suffix="green-300"/></Button>
                    </Item>}
                    toolbarTitleMenu={<Item>
                        <Autocomplete style={{left: "-100px", width: "200px", height: "30px", background: "white"}}
                                      data={['abc','bcd']}
                                      filter={Autocomplete.caseInsensitiveFilter}
                        ></Autocomplete>
                        <Button style={{left: "-110px"}} onClick={() => this.props.history.push('/')} flat
                                iconBefore={true} iconChildren={"search"}></Button>
                    </Item>}
                    toolbarActions={<KebabMenu id="toolbar-colored-kebab-menu"/>}
                    /*toolbarChildren={<Button flat iconChildren="chat_bubble_outline">Chat</Button>}*/
                    navItems={navItems.map(props => <NavLink {...props} key={props.to}/>)}
                >
                </NavigationDrawer>
            </div>
        );
    }
};

export default withRouter(NavigationMenu);