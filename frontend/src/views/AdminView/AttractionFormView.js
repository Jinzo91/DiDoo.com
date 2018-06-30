"use strict";

import React from 'react';

import AttractionForm from '../../components/Admin/AttractionForm';
import Background from '../../images/frak-lopez-89003-unsplash.jpg';
import AttractionService from '../../services/AttractionService';


export class AttractionFormView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillMount(){
        if(this.props.history.location.pathname === '/add') {
            this.setState({
                loading: false,
                data: undefined,
                error: undefined
            });
        }
        else if(this.props.location.state !== undefined && this.props.location.state.data !== undefined) {
            this.setState({
                loading: false,
                data: this.props.location.state.data,
                error: undefined
            });
        }
        else {
            this.setState({
                loading: true,
                error: undefined
            });

            let id = this.props.match.params.attractionId;

            AttractionService.getAttraction(id).then((data) => {
                this.setState({
                    data,
                    loading: false
                });
            }).catch((e) => {
                console.error(e);
            });/*获得数据，从后端*/
        }
    }

    updateAttractions(attraction) {
        if(this.state.data === undefined) {
            AttractionService.createAttractions(attraction).then((data) => {
                console.log(data);
                this.props.history.push('/');
            }).catch((e) => {
                console.error(e + ' Error while creating attraction');
                this.setState(Object.assign({}, this.state, {error: 'Error while creating attraction'}));
            });
        } else {
            console.log(attraction);
            AttractionService.updateAttractions(attraction).then((data) => {
                this.props.history.goBack();
            }).catch((e) => {
                console.error(e + ' Error while updating attraction');
                this.setState(Object.assign({}, this.state, {error: 'Error while updating attraction'}));
            });
        }
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <div>
                <img src={Background} className="bg" />
                <AttractionForm data={this.state.data} onSubmit={(attraction) => this.updateAttractions(attraction)} error={this.state.error} />
            </div>
            );
    }
}