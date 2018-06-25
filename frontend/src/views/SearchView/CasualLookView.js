import React from 'react';
import CasualLookPage from '../../components/Search/CasualLookPage';
import Background from '../../images/searchresultbg.png';
import '../../css/bg.css';
import AttractionService from "../../services/AttractionService";
import { Footer } from '../../components/Footer';
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
            });
        }
    render() {

        return (
            <div>
                <NavigationMenu userRole={this.state.userRole = this.state.user.status}/>
                <img src={Background} className="bg" />
                <CasualLookPage data={this.state.data}/>
                <Footer />
            </div>
        );
    }
}