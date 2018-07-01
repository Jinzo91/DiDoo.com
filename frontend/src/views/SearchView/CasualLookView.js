import React from 'react';
import CasualLookPage from '../../components/Search/CasualLookPage';
import Background from '../../images/searchresultbg.png';
import '../../css/bg.css';
import AttractionService from "../../services/AttractionService";
import {Footer} from '../../components/Footer';
import NavigationMenu from '../../components/NavigationMenu';
import UserService from "../../services/UserService";

export class CasualLookView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
            user: UserService.getCurrentUser(),
            userRole: '',
            error: undefined
        };
    }

    componentWillMount() {
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
        });

    }

    filterattraction(attractionIds, district, type, price) {
        AttractionService.filterattraction(attractionIds, district, type, price).then((data) => {
            this.setState({
                data: data,
                loading: false
            });
        }).catch((e) => {
            console.error(e + ' Error while updating movie');
            this.setState(Object.assign({}, this.state, {error: 'Error while updating movie'}));
        });
    }

    render() {

        return (
            <div>
                <NavigationMenu userRole={this.state.userRole = this.state.user.status}/>
                <img src={Background} className="bg"/>
                <CasualLookPage data={this.state.data}
                                onFilter={(attractionIds, district, type, price) => this.filterattraction(attractionIds, district, type, price)}
                                error={this.state.error}/>
                <Footer/>
            </div>
        );
    }
}