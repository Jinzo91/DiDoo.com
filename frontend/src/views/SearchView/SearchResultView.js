import React from 'react';
import SearchResultPage from '../../components/Search/SearchResultPage';
import Background from '../../images/searchresultbg.png';
import '../../css/bg.css';
import AttractionService from "../../services/AttractionService";
import NavigationMenu from '../../components/NavigationMenu';
export class SearchResultView extends React.Component {//四人任务最开始的点

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: [],
            error: undefined
        };
    }
    componentWillMount(props){
       this.setState({
            loading: true
        });
        
        AttractionService.getAttractionbysearch(this.props.location.search.split('=')[1]).then((data) => {
            //console.log(data)
            this.setState({
                data: [...data],
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });

    }
    filterattraction(attractionIds,district, type, price) {
        AttractionService.filterattraction(attractionIds,district, type, price).then((data) => {
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
                <NavigationMenu/>
                <img src={Background} className="bg" />
                <SearchResultPage data={this.state.data} onFilter={(attractionIds,district, type, price) => this.filterattraction(attractionIds,district, type, price)} error={this.state.error}/>
            </div>
        );
    }
}