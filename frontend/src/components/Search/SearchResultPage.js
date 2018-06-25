import React, { Component } from 'react';
import SearchResultCard from '../../components/Search/SearchResultCard';
import SearchFilter from './SearchFilter';

const testCard = (key,id,title,image,type,rating,address,introduction,price) => <SearchResultCard
    key={key}
    id={id}
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
        const testCards = props.data.map((data, i)=>testCard(i, data._id,data.title, data.posters.original,data.type,data.rating,data.address,data.introduction,data.price));
        this.setState({testCards});
    }

    render() {
        return (
                <div style={{marginBottom: "40px"}}>
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