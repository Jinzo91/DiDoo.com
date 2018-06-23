import React, { Component } from 'react';
import Page from '../Page';
import { ManageCard } from '../Admin/ManageCard';

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
    }

    componentWillReceiveProps(props){
        console.log(this.props);
        const testCards = props.data.map( (data, i)=>testCard(i, data.title, data.type, data.posters.original,data.introduction));
        /*赋予上一个view的，用数据库的名字*/
        this.setState({testCards});
    }

    render() {
        return (
            <Page>
                <div >
                    <div style={{
                        position:'relative',
                    }}>
                        {this.state.testCards}
                    </div>
                </div>
            </Page>
        );
    }
}
