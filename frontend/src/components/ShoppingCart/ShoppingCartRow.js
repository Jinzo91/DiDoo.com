"use strict";
import React from 'react';
import { TableRow, TableColumn, FontIcon, Button,Media } from 'react-md';
import { Link } from 'react-router-dom';
import { SimpleLink } from '../SimpleLink';
import UserService from '../../services/UserService';

export class ShoppingCartRow extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div  style={{
                marginTop:'10px',
                marginLeft:'15%',
                width: '80%',
                maxHeight: '250px',
                display: 'flex',
                paddingTop:'1%',
                paddingBottom:'1%',
                paddingLeft:'1%',
                background:'white',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                {/* <TableRow key={this.props.key}>*/}

                <div style={{
                    width: '30%',
                    height: '20%'
                }}>
                    <Media aspectRatio='1-1'>
                        <img src={this.props.image} alt="presentation" style={{
                            objectFit: 'cover', maxHeight: "50%", maxWidth: "50%"
                        }}/>
                    </Media>
                </div>


                <div style={{
                    width: '70%',
                    marginLeft:'3%'
                }}>
                    <h1>{this.props.title}</h1>

                    <div>

                        {this.props.comment}

                    </div>
                </div>

                <div>
                    <Button style={{
                        background:'green',
                        color:'white',
                        fontSize:'20px'

                    }}  onClick={() => this.props.history.push('/')}>edit</Button>
                    <Button style={{
                        background:'green',
                        color:'white',
                        fontSize:'20px'

                    }}  onClick={() => this.props.history.push('/')}>delete</Button>
                </div>


            </div>
        );
    }
}
