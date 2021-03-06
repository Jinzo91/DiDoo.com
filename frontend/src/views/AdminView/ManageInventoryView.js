"use strict";

import React from 'react';

import {InventoryList} from '../../components/Admin/InventoryList';

import AttractionService from '../../services/AttractionService';

import Background from '../../images/AdminBG.png';
import '../../css/bg.css';

export class ManageInventoryView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            data: [],
        };
    }

    componentWillMount() {
        this.setState({
            loading: true
        });

        AttractionService.getAttractions().then((data) => {
            this.setState({
                data: data,
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    render() {

        return (
            <div>
                <img src={Background} className="bg"/>
                {
                    !this.state.loading &&
                    <InventoryList data={this.state.data}/>
                }
            </div>
        );
    }
}
