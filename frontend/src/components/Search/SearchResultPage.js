import React, { Component } from 'react';
import SearchResultCard from '../../components/Search/SearchResultCard';
import {Checkbox, Button, Divider, Slider} from 'react-md';

const districts = {
    District: ['Dongcheng', 'Xicheng', 'Haidian', 'Fengtai', 'Shunyi', 'Tongzhou'],
}
const types = {
    Type: ['Architectural Buildings', 'History Museums', 'Ancient Ruins', 'Bodies of Water', 'Sight&Landmarks', 'Specialy Museums'],
}

const prices = {
    Price: ['¥ 0 - 25', '¥ 25 - 50', '¥ 50 - 75', '¥ 75 - 100']
}
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
            testCards: [],
            district: [],
            type: [],
            price: []
        }
    }
    componentWillReceiveProps(props){
        //console.log(props.data);
        const testCards = props.data.map((data, i)=>testCard(i, data._id,data.title, data.posters.original,data.type,data.rating,data.address,data.introduction,data.price));
        this.setState({testCards});
    }

    handledistrictscheckbox(isChecked, value) {
        if (isChecked) {
            this.state.district.push(value);
        } else {
            this.state.district.splice(this.state.district.indexOf(value),1)
        }
    }

    handletypescheckbox(isChecked, value) {
        if (isChecked) {
            this.state.type.push(value);
        } else {
            this.state.type.splice(this.state.type.indexOf(value),1)
        }
    }

    handlepricescheckbox(isChecked, value) {
        let price = '';
        if (value === '¥ 0 - 25') {
            price = '0'
        } else if (value === '¥ 25 - 50') {
            price = '25'
        } else if (value === '¥ 50 - 75') {
            price = '50'
        } else if (value === '¥ 75 - 100') {
            price = '75'
        }
        if (isChecked) {
            this.state.price.push(price);
        } else {
            this.state.price.splice(this.state.price.indexOf(price),1)
        }
    }

    handlefilter() {
        this.props.onFilter(this.state.district, this.state.type, this.state.price);
    }

    districtsCheckboxs = (districts) => {
        const rendered = [];
        let key = 0;
        rendered.push(<h2>District:</h2>);
        for (let district of districts.District) {
            rendered.push(<Checkbox
                className='filter-checkbox'
                key={key++}
                id={'checkbox-' + district}
                name={district}
                label={district}
                value={district}
                onChange={value => {
                    this.handledistrictscheckbox(value, district)
                }}
            />)
        }
        rendered.push(<Divider key={key++}/>)
        return rendered;

    };

    typesCheckboxs = (types) => {
        const rendered = [];
        let key = 0;
        rendered.push(<h2>Type:</h2>);
        for (let type of types.Type) {
            rendered.push(<Checkbox
                className='filter-checkbox'
                key={key++}
                id={'checkbox-' + type}
                name={type}
                label={type}
                value={type}
                onChange={value => {
                    this.handletypescheckbox(value, type);
                }}
            />)
        }
        rendered.push(<Divider key={key++}/>)
        return rendered;
    };

    pricesCheckboxs = (prices) => {
        const rendered = [];
        let key = 0;

        rendered.push(<h2>Price:</h2>);
        for (let price of prices.Price) {
            rendered.push(<Checkbox
                className='filter-checkbox'
                key={key++}
                id={'checkbox-' + price}
                name={price}
                label={price}
                value={price}
                onChange={value => {
                    this.handlepricescheckbox(value, price);
                }}
            />)
        }
        rendered.push(<Divider key={key++}/>)

        return rendered;
    };

    render() {
        return (
            <div style={{marginBottom: "40px"}}>
                <div style={{
                    marginTop: '20px',
                    borderStyle: 'solid',
                    width: '90%',
                    marginLeft: '5%',
                    height: '200px',
                    background: 'white',
                    borderColor: 'green',
                    padding: '10px'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        {this.districtsCheckboxs(districts)}
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        margin: '0 auto'
                    }}>
                        {this.typesCheckboxs(types)}
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        margin: '0 auto'
                    }}>
                        {this.pricesCheckboxs(prices)}
                    </div>
                    <Button style={{
                        background: 'green',
                        color: 'white',
                        fontSize:'20px'
                    }}
                            onClick={() => this.handlefilter()}>Filter</Button>
                </div>
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