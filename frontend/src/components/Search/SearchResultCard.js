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
                    width: '50%',
                    flex:'0.8'
                }}>
                    <Media >
                        <img src={this.props.image} alt="presentation" style={{
                            objectFit: 'cover'
                        }}/>
                    </Media>
                </div>
                <div style={{
                    width: '40%',
                }}>
                    <h1 style={{
                        fontWeight:'bolder',
                        fontFamily:'Lucida Bright'
                    }}>{this.props.title}</h1>
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
                    <div>{this.props.introduction.slice(0,200)+'...'}
                </div>
                </div>
                <div style={{width:'20%'}}>
                    <div  style={{
                        color:'green',
                        marginTop:'75px',
                        marginRight:'50px',
                        fontSize:'40px',
                    }}>¥{this.props.price}</div>
                    <Button  primary style={{
                        background:'green',
                        borderRadius:'10px',
                        color:'white',
                        marginTop:'35px',
                        paddingLeft:'15px',
                        paddingRight:'15px',
                        paddingTop:'7px',
                        paddingBottom:'7px',
                        marginRight:'50px',
                        fontSize:'40px'
                    }}  onClick={() => this.props.history.push(`/attraction/${this.props.id}`)}>Select</Button>
                </div>
            </div>
        );
    }
}

export default withRouter (SearchResultCard);
