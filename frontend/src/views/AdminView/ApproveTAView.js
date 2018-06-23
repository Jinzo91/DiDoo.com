import React from 'react';

import { ApproveList } from '../../components/Admin/ApproveList';
import Background from '../../images/AdminBG.png';
import '../../css/bg.css';
import AttractionService from "../../services/AttractionService";
import MovieService from "../../services/MovieService";

export class ApproveTAView extends React.Component {

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

        AttractionService.getPreAttractions().then((data) => {
            this.setState({
                data: [...data],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });/*获得数据，从后端*/
    }

    render() {

        return (
            <div>
                <img src={Background} className="bg" />
                <ApproveList data={this.state.data}/>
            </div>
        );
    }
}