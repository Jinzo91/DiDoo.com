"use strict";

import React from 'react';
import { Card, CardTitle, CardText, Media, MediaOverlay, Grid, Cell, Button, FontIcon } from 'react-md';
import Page from '../Page'

const style = { maxWidth: 500 };

export class AttractionDetail extends React.Component {

    constructor(props) {
        super(props);
    }
    componentWillReceiveProps(props) {
        console.log(props.attraction);
    }
    render() {
        return !this.props.loading ?  (
            <Page>
                <Card className="md-block-centered">
                    <Grid className="grid-example" >
                        <Cell size={3}>
                            <Media aspectRatio="1-1">
                                <img src={this.props.attraction.posters.detailed} alt={this.props.attraction.title} />
                            </Media>
                        </Cell>
                        <Cell size={7}/>

                    </Grid>

                    <CardTitle title={this.props.attraction.title} subtitle={this.props.attraction.type} />

                    <CardText>
                        <p>
                            {this.props.attraction.rating}
                        </p>
                        <p>
                            {this.props.attraction.introduction}
                        </p>
                    </CardText>
                </Card>
            </Page>
        ) : <div></div>;
    }
}