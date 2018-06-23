import React from 'react';
import SearchResultHeader from '../../components/Search/SearchResultHeader';
import CausualLookPage from '../../components/Search/CausualLookPage';
import Background from '../../images/searchresultbg.png';
import '../../css/bg.css';
import AttractionService from "../../services/AttractionService";
import { Footer } from '../../components/Footer';
import NavigationMenu from '../../components/NavigationMenu';

export class CausualLookView extends React.Component {

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
            });
        }
    render() {

        return (
            <div>
                <NavigationMenu/>
                <img src={Background} className="bg" />
                <CausualLookPage data={this.state.data}/>
                <Footer />
            </div>
        );
    }
}