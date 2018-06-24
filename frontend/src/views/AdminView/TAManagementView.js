import React from 'react';

import { ManageList } from '../../components/Admin/ManageList';
import Background from '../../images/AdminBG.png';
import '../../css/bg.css';
import AttractionService from "../../services/AttractionService";

export class TAManagementView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: []
        };
    }

    componentWillMount()
    {
        this.setState({
            loading: true
        });

        AttractionService.getAttractions().then((data) => {
            this.setState({
                data: [...data],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });/*获得数据，从后端*/
    }

    deleteAttractions(id) {
        this.setState({
            data: [...this.state.data],
            loading: true
        });
        AttractionService.deleteAttractions(id).then((message) => {

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
                <img src={Background} className="bg" />
                <ManageList data={this.state.data} onDelete={(id) => this.deleteAttractions(id)}/>
            </div>
        );
    }
}
