import React, { Component } from 'react';
import { Avatar, Button, Card, CardText,FontIcon, CardTitle, Media } from 'react-md';
class SearchResultCard extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div  style={{
                marginTop:'10px',
                marginLeft:'5%',
                width: '90%',
                display: 'flex',
                paddingTop:'1%',
                paddingBottom:'1%',
                paddingLeft:'1%',
                background:'white',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <div style={{
                    width: '30%',
                    height: '20%'
                }}>
                    <Media aspectRatio='1-1'>
                        <img src={this.props.img} alt="presentation" style={{
                            objectFit: 'cover'
                        }}/>
                    </Media>
                </div>

                <div style={{
                    width: '60%',
                    marginLeft:'3%'
                }}>
                    <h1>{this.props.title}</h1>
                    <StarRatingComponent
                        name="rate2"
                        editing={false}
                        starCount={5}
                        value={this.props.rating}
                    />
                    <div>{this.props.address}</div>
                    <div>{this.props.description}</div>
                </div>

                <div>
                    <div  style={{
                        color:'green',
                        marginTop:'200px',
                        marginRight:'20px',
                        fontSize:'20px'
                    }}>¥{this.props.price}</div>
                    <Button style={{
                        background:'green',
                        color:'white',
                        fontSize:'20px'

                    }}  onClick={() => this.props.history.push('/')}>Select</Button>
                </div>

            </div>
        );
    }
}

export default SearchResultCard;