import React from 'react';

import {ApproveList} from '../../components/Ta/ApproveList';
import Background from '../../images/frak-lopez-89003-unsplash.jpg';
import '../../css/bg.css';
import AttractionService from "../../services/AttractionService";

export class ApproveTAView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: []
        };
    }

    componentWillMount() {
        this.setState({
            loading: true
        });

        AttractionService.getPreAttractions().then((data) => {
            this.setState({
                data: [...data],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    approveAttractions(id) {
        this.setState({
            data: [...this.state.data],
            loading: true
        });
        AttractionService.approveAttractions(id).then((message) => {
            let attractionIndex = this.state.data.map(attraction => attraction['_id']).indexOf(id);
            let attractions = this.state.data;
            attractions.splice(attractionIndex, 1);
            this.setState({
                data: [...attractions],
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
                <ApproveList data={this.state.data} onApprove={(id) => this.approveAttractions(id)}/>
            </div>
        );
    }
}