import React, { Component } from 'react';
import Page from '../Page';
import { ApproveCard } from './ApproveCard';
import { Autocomplete } from "react-md/es/index";

const testCard = (key,data, onApprove) => <ApproveCard
    {...data}
    onApprove={onApprove}
/>;

export class ApproveList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testCards: []/*新建一个字符串*/
        }
        this.onSearch = this.onSearch.bind(this);
    }

    componentWillReceiveProps(props){
        console.log(this.props);
        const testCards = props.data.map( (data, i)=>testCard(i,data, props.onApprove));
        /*赋予上一个view的，用数据库的名字*/
        this.setState({testCards});
    }

    onSearch(value) {
        const newCards = this.props.data
            .filter(data => data.title.toLowerCase().includes(value.toLowerCase()))
            .map( (data, i)=>testCard(i,data, this.props.onApprove));
        this.setState({
            testCards: newCards
        })
    }

    render(props) {
        return (
            <Page>
                <div>
                    <Autocomplete style={{maxWidth: '20%', marginLeft: '420px', }}
                                  label="Search"
                                  data={['abc','bcd']}
                                  filter={Autocomplete.caseInsensitiveFilter}
                                  onChange={this.onSearch}
                    ></Autocomplete>
                </div>
                <div >
                    <div style={{
                        position:'relative', marginTop: '10px'
                    }}>
                        {this.state.testCards}
                    </div>
                </div>
            </Page>
        );
    }
}