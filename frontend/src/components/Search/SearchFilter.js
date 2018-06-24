import React, {Component} from 'react';
import {Checkbox, Divider, Slider} from 'react-md';

const districts = {
    District: ['Dongcheng', 'Xicheng','Haidian', 'Fengtai','Shunyi', 'Tongzhou'],
}
const types = {
    Type: ['Architectural Buildings', 'History Museums', 'Ancient Ruins', 'Bodies of Water','Nature & Parks','Specialy Museums'],
}

const prices = {
    Price: ['¥ 200 -','¥ 200 -500', '¥ 500 -800', '¥ 800']
}
class SearchFilter extends Component {
    constructor(props) {
        super(props);
    }
    /*写一个functioon,再写一个循环三遍*/
    districtsCheckboxs = (districts) => {
        const rendered = [];
        let key = 0;
            rendered.push(<h2>District:</h2>);
            for (let district of districts.District){
                rendered.push(<Checkbox
                    className='filter-checkbox'
                    key={key++}
                    id={'checkbox-'+district}
                    name={district}
                    label={district}
                    value={district}
                />)
            }
            rendered.push(<Divider key={key++} />)
        return rendered;

    };

    typesCheckboxs = (types) => {
        const rendered = [];
        let key = 0;
            rendered.push(<h2 >Type:</h2>);
            for (let type of types.Type){
                rendered.push(<Checkbox
                    className='filter-checkbox'
                    key={key++}
                    id={'checkbox-'+type}
                    name={type}
                    label={type}
                    value={type}
                />)
            }
            rendered.push(<Divider key={key++} />)
        return rendered;
    };

    pricesCheckboxs = (prices) => {
        const rendered = [];
        let key = 0;

            rendered.push(<h2 >Price:</h2>);
            for (let price of prices.Price){
                rendered.push(<Checkbox
                    className='filter-checkbox'
                    key={key++}
                    id={'checkbox-'+price}
                    name={price}
                    label={price}
                    value={price}
                />)
            }
            rendered.push(<Divider key={key++} />)

        return rendered;
    };


    render() {
        return (
            <div style={{
                marginTop: '20px',
                borderStyle: 'solid',
                width: '90%',
                marginLeft: '5%',
                height: '140px',
                background: 'white',
                borderColor: 'green',
                padding:'10px'
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

            </div>
        );
    }
}

export default SearchFilter;

