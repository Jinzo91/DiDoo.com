import React, { Component } from 'react';
import { Button, Media } from 'react-md';
import { withRouter } from 'react-router-dom'
import StarRatingComponent from 'react-star-rating-component';
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
                }}>
                    <Media >
                        <img src={this.props.image} alt="presentation" style={{
                            objectFit: 'cover'
                        }}/>
                    </Media>
                </div>
                <div style={{
                    width: '50%',
                }}>
                    <h1>{this.props.title}</h1>
                    <StarRatingComponent
                        name="rate2"
                        editing={false}
                        starCount={5}
                        value={this.props.rating}
                    />
                    <div style={{
                        marginTop:'10px',
                        color:'grey'
                    }}
                    >{this.props.address}</div>
                    <h3  style={{
                            width: '70%',
                            marginTop:'70px'
                        }}>Type:{this.props.type}</h3>
                    <div>{this.props.introduction}
                </div>
                </div>
                <div>
                    <div  style={{
                        color:'green',
                        marginTop:'100px',
                        marginRight:'50px',
                        fontSize:'40px'
                    }}>¥{this.props.price}</div>
                    <Button style={{
                        background:'green',
                        color:'white',
                        marginRight:'50px',
                        fontSize:'40px'
                    }}  onClick={() => this.props.history.push(`/attraction/${this.props.id}`)}>Select</Button>
                </div>
            </div>
        );
    }
}

export default withRouter (SearchResultCard);
