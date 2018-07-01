import React, { Component } from 'react';
import Page from '../Page';
import { ManageCard } from '../Admin/ManageCard';
import { Autocomplete } from "react-md/es/index";

const testCard = (key,data, onDelete) => <ManageCard
    {...data}
    onDelete={onDelete}
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
        const testCards = props.data.map( (data, i)=>testCard(i,data, props.onDelete));
        /*赋予上一个view的，用数据库的名字*/
        this.setState({testCards});
    }

    onSearch(value) {
        const newCards = this.props.data
            .filter(data => data.title.toLowerCase().includes(value.toLowerCase()))
            .map( (data, i)=>testCard(i,data, this.props.onDelete));
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
                    <Autocomplete style={{ maxWidth: '20%', marginLeft: '415px'}}
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
                        {/*{this.props.data.map((data, i) => <ManageCard key={i} {...data} onDelete={(id) => this.props.onDelete(id)} />)}*/}
                        {this.state.testCards}
                    </div>
                </div>
            </Page>
        );
    }
}
