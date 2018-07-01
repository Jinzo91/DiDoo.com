"use strict";

import React from 'react';
import Background from '../../images/Homepage.png';
import '../../css/bg.css';
import SearchBarComponent from "../../components/Search/SearchBarComponent";
import SearchHeader from '../../components/Search/SearchHeader';

export class SearchPageView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }

    }

    render() {
        return (
            <section>
                <SearchHeader title={this.state.title}/>
                <img src={Background} className="bg"/>
                <div style={{marginTop: '25%', position: 'relative'}}>
                    <SearchBarComponent
                    /></div>
            </section>

        )

    }

}
