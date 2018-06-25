import React, { Component } from 'react';
import CommentCard from './CommentCard'

const commentCard = (key,author,content) => <CommentCard
    key={key}
    author= {author}
    content={content}
/>;

class CommentDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commentcards:[],
        };
    }

    componentWillReceiveProps(props){
        console.log(props.comment);
        const commentcards = props.comment.map((data, i)=>commentCard(i, data.user.username,data.context));
        this.setState({commentcards});
    }

    render() {
        return !this.props.loading ?  (
                <div style={{
                    position:'relative',
                    width:'70%',
                    marginLeft:'15%'

                }}>
                    {this.state.commentcards}
            </div>
        ) : <div></div>;
    }
}

export default CommentDetailPage;