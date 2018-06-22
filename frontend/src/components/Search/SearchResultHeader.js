"use strict";

import React from 'react';
import {Toolbar, Avatar,Button,FontIcon, ListItem, NavigationDrawer, IconSeparator, Autocomplete, TextField} from 'react-md';//从react-md里面要东西
import {withRouter} from 'react-router-dom'
import KebabMenu from '../KebabMenu';
import imgURL from '../../images/didoo.png';

const Item = ({ label, children }) => (
    <IconSeparator label={label} iconBefore component="li" className="md-cell md-cell--12">
        {children}
    </IconSeparator>
);
class SearchResultHeader extends React.Component {

    constructor(props) {//构造函数，传入的数据
        super(props);
        this.state = {
            searchValue: []
        };
    }

    render() {
        return (
            <Toolbar
                colored
                title={<Item label="DiDoo.com">
                    <Button onClick={() => this.props.history.push('/')}><Avatar src={imgURL} role="presentation" suffix="green-300" /></Button>
                </Item>}
                titleMenu={this.props.userRole !== 'admin' && <Item>
                    <Autocomplete style={{left: "-100px", width: "200px", height: "30px", background: "white", color: 'black'}}
                                  data={['abc','bcd']}
                                  filter={Autocomplete.caseInsensitiveFilter}
                                  onChange={(value) => this.setState({ searchValue: value }) }
                    ></Autocomplete>
                    <Button style={{left: "-110px"}} onClick={() => this.props.history.push(`/searchresult?query=${this.state.searchValue}`)} flat iconBefore={true} iconChildren={"search"}></Button>

                </Item>}
                actions={
                    [
                        <Button
                            style={{color: 'white'}}
                            icon
                            onClick={() => console.log('onCart')}>shopping_cart</Button>,
                        <KebabMenu id="toolbar-colored-kebab-menu" />
                    ]
                }>

            </Toolbar>

        );
    }
};

export default withRouter(SearchResultHeader);