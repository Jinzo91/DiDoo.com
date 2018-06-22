import React, { Component } from 'react';
import SearchResultCard from '../../components/Search/SearchResultCard';
import SearchFilter from './SearchFilter';

const testCard = (key,title,image,type,rating,address,introduction,price) => <SearchResultCard
    key={key}
    image={image}
    type = {type}
    rating={rating}
    title={title}
    address={address}
    introduction= {introduction}
    price={price}
/>;

class SearchResultPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testCards: []
        }
    }
    componentWillReceiveProps(props){
        //console.log(props.data);
        const testCards = props.data.map((data, i)=>testCard(i, data.title, data.posters.original,data.type,data.rating,data.address,data.introduction,data.price));
        this.setState({testCards});
    }

    render() {
        return (
                <div >
                    <SearchFilter/>
                    <div style={{
                        position:'relative',
                    }}>
                        {this.state.testCards}
                    </div>
                </div>
        );
    }
}

export default SearchResultPage;