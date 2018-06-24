"use strict";

import React from 'react';
import { Toolbar, Button } from 'react-md';//从react-md里面要东西
import { withRouter } from 'react-router-dom'
import KebabMenu from '../KebabMenu';
import searchtoolbar from '../../css/searchtoolbar.css';
class SearchHeader extends React.Component {

    constructor(props) {//构造函数，传入的数据
        super(props);
    }

    render() {
        return (
            <Toolbar  className={searchtoolbar}

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

export default withRouter(SearchHeader);