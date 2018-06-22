import React, { Component } from 'react';
import Page from '../Page';
import { ManageCard } from '../Admin/ManageCard';
import { Autocomplete } from "react-md/es/index";
import {  Button } from 'react-md';

const testCard = (key,title,type,image,introduction) => <ManageCard
    key={key}
    title={title}
    type={type}
    image={image}
    introduction={introduction}
/>;

export class ManageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            testCards: []/*新建一个字符串*/
        }
        this.onSearch = this.onSearch.bind(this);
    }

    componentWillReceiveProps(props){
        console.log(this.props);
        const testCards = props.data.map( (data, i)=>testCard(i, data.title, data.type, data.posters.original,data.introduction));
        /*赋予上一个view的，用数据库的名字*/
        this.setState({testCards});
    }

    onSearch(value) {
        const newCards = this.props.data
            .filter(data => data.title.toLowerCase().includes(value.toLowerCase()))
            .map( (data, i)=>testCard(i, data.title, data.type, data.posters.original,data.introduction));
        this.setState({
            testCards: newCards
        })
    }

    render(props) {
        return (
            <Page>
                <div style={{
                    /*display: 'flex',
                    flexDirection: 'row-reverse'*/
                }}>
                    {/*<Button onClick={() => this.props.history.push('/')} icon>search</Button>*/}
                    <Autocomplete style={{ maxWidth: '20%', marginLeft: '120px'}}
                                  label="Search"
                                  data={['abc','bcd']}
                                  filter={Autocomplete.caseInsensitiveFilter}
                                  onChange={this.onSearch}
                    ></Autocomplete>
                </div>
                <div >
                    <div style={{
                        position:'relative',
                    }}>
                        {/*{props.data.map((data, i) => <ManageCard key={i} data={data} onDelete={(id) => props.onDelete(id)} />)}*/}
                        {this.state.testCards}
                    </div>
                </div>
            </Page>
        );
    }
}
