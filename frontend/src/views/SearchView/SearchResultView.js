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
            data: []
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
    render() {

        return (
            <div>
                <NavigationMenu/>
                <img src={Background} className="bg" />
                <SearchResultPage data={this.state.data}/>
            </div>
        );
    }
}