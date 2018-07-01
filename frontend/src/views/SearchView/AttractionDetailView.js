import React from 'react';
import AttractionService from "../../services/AttractionService";
import CommentService from "../../services/CommentService";
import {Footer} from '../../components/Footer';
import NavigationMenu from '../../components/NavigationMenu';
import AttractionDetail from '../../components/Search/AttractionDetail';
import CommentDetailPage from '../../components/Search/CommentDetailPage';

const districts = {
    District: ['Dongcheng', 'Xicheng', 'Haidian', 'Fengtai', 'Shunyi', 'Tongzhou'],
}
const types = {
    Type: ['Architectural Buildings', 'History Museums', 'Ancient Ruins', 'Bodies of Water', 'Sight&Landmarks', 'Specialy Museums'],
}

const prices = {
    Price: ['¥ 0 - 25', '¥ 25 - 50', '¥ 50 - 75', '¥ 75 - 100']
}

export class AttractionDetailView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            attraction: [],
            comment: [],
        };
    }

    componentWillMount() {
        this.setState({
            loading: true
        });
        let id = this.props.match.params.id;
        AttractionService.getAttractionDetail(id).then((data) => {
            this.setState({
                attraction: data,
                loading: false
            });
        }).catch((e) => {
            console.error(e);
        });
        CommentService.getCommentsbyAttration(id).then((data) => {
            this.setState({
                comment: [...data],
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
                <AttractionDetail
                    loading={this.state.loading}
                    attraction={this.state.attraction}/>
                <h1 style={{
                    color: 'black',
                    marginLeft: '15%',
                    marginTop: '50px',
                    marginBottom: '20px'
                }}>COMMENT:</h1>
                <CommentDetailPage
                    loading={this.state.loading}
                    comment={this.state.comment}/>
                <Footer/>
            </div>
        );
    }
}