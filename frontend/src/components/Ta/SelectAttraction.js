import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SVGIcon, SelectField} from 'react-md';
import SearchResultCard from '../../components/Search/SearchResultCard';
import {Checkbox, Button, Divider, Slider} from 'react-md';
import { DatePicker } from 'react-md';
import moment from 'moment';

import arrowDropDown from '../../images/arrow_drop_down.png';

const icon = <SVGIcon use={arrowDropDown.url}/>;


export class SelectAttraction extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fromdate:moment(),
            todate:moment(),
            attractionTitle1:[],
            attractionTitle2:[],
            attractionTitle3:[],
            attractionTitle4:[],
            attractionTitle5:[],
            attractionTitle6:[],
            item: [],
        };
        this.handleChangeFromDate = this.handleChangeFromDate.bind(this);
        this.handleChangeToDate = this.handleChangeToDate.bind(this);

        this.handleChangeAttraction1 = this.handleChangeAttraction1.bind(this);
        this.handleChangeAttraction2 = this.handleChangeAttraction2.bind(this);
        this.handleChangeAttraction3 = this.handleChangeAttraction3.bind(this);
        this.handleChangeAttraction4 = this.handleChangeAttraction4.bind(this);
        this.handleChangeAttraction5 = this.handleChangeAttraction5.bind(this);
        this.handleChangeAttraction6 = this.handleChangeAttraction6.bind(this);
    }

    componentWillReceiveProps(props) {
        props.data.map((data, i) => this.state.item.push(data.title));

    }

    handleChangeFromDate(value) {
        this.setState({
            fromdate: new Date(value)
        });
    }

    handleChangeToDate(value) {
        this.setState({
            todate: new Date(value)
        });
    }

    handleChangeAttraction1(value) {
        this.setState({
            attractionTitle1:value,
        });
    }

    handleChangeAttraction2(value) {
        this.setState({
            attractionTitle2:value,
        });
    }

    handleChangeAttraction3(value) {
        this.setState({
            attractionTitle3:value,
        });
    }

    handleChangeAttraction4(value) {
        this.setState({
            attractionTitle4:value,
        });
    }

    handleChangeAttraction5(value) {
        this.setState({
            attractionTitle5:value,
        });
    }

    handleChangeAttraction6(value) {
        this.setState({
            attractionTitle6:value,
        });
    }

    handleClick() {
        this.props.onClick(this.state.fromdate,
                             this.state.todate,
                             this.state.attractionTitle1,
                             this.state.attractionTitle2,
                             this.state.attractionTitle3,
                             this.state.attractionTitle4,
                             this.state.attractionTitle5,
                             this.state.attractionTitle6
            );
    }

    render() {
        const {fromdate,todate,attractionTitle1,attractionTitle2,attractionTitle3,attractionTitle4,attractionTitle5,attractionTitle6} = this.state;
        return (
            <div>
                <div className="md-grid">
                    <h4 className="md-cell md-cell--12"
                        style={{fontSize:'20px',
                            fontFamily: "Franklin Gothic Medium",
                            color:'#39963D',
                            fontWeight:'bold'}}>Select Date</h4>
                    <DatePicker
                        id="fromDate"
                        label="From Date"
                        className="md-cell"
                        onChange={this.handleChangeFromDate}
                    />
                    <DatePicker
                        id="toDate"
                        label="To Date"
                        className="md-cell"
                        displayMode="portrait"
                        onChange={this.handleChangeToDate}
                    />
                </div>
                <div className="md-grid">
                    <h4 className="md-cell md-cell--12"
                        style={{fontSize:'20px',
                            fontFamily: "Franklin Gothic Medium",
                            color:'#39963D',
                            fontWeight:'bold'}}>Select Attractions</h4>
                    <SelectField
                        id="select-field-2"
                        label="Attraction1"
                        placeholder="Placeholder"
                        className="md-cell"
                        menuItems={this.state.item}
                        onChange={this.handleChangeAttraction1}
                    />
                    <SelectField
                        id="select-field-2"
                        label="Attraction2"
                        placeholder="Placeholder"
                        className="md-cell"
                        menuItems={this.state.item}
                        onChange={this.handleChangeAttraction2}
                    />
                    <SelectField
                        id="select-field-2"
                        label="Attraction3"
                        placeholder="Placeholder"
                        className="md-cell"
                        menuItems={this.state.item}
                        onChange={this.handleChangeAttraction3}
                    />
                    <SelectField
                        id="select-field-2"
                        label="Attraction4"
                        placeholder="Placeholder"
                        className="md-cell"
                        menuItems={this.state.item}
                        onChange={this.handleChangeAttraction4}
                    />
                    <SelectField
                        id="select-field-2"
                        label="Attraction5"
                        placeholder="Placeholder"
                        className="md-cell"
                        menuItems={this.state.item}
                        onChange={this.handleChangeAttraction5}
                    />
                    <SelectField
                        id="select-field-2"
                        label="Attraction6"
                        placeholder="Placeholder"
                        className="md-cell"
                        menuItems={this.state.item}
                        onChange={this.handleChangeAttraction6}
                    />
                    <Button style={{
                        background: '#4CAF50',
                        color: 'white',
                        fontSize: '20px',
                        marginLeft:'90%'
                    }}
                            onClick={() => this.props.onClick(fromdate,todate,attractionTitle1,attractionTitle2,attractionTitle3,attractionTitle4,attractionTitle5,attractionTitle6)} icon>check_box</Button>
                </div>
            </div>
        )
    }
}

