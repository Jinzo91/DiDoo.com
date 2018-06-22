import React, {Component} from 'react';
import {
    Avatar,
    Button,
    Card,
    CardActions,
    CardText,
    CardTitle,
} from 'react-md';

import imgURL from '../../images/didoo.png';
import {withRouter} from "react-router-dom";

const style = { maxWidth: 600 };

/*export const TACard = () => (*/
class TACard1 extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
        <Card style={style} className="md-block-centered">
            <CardTitle
                title={this.props.title}
                subtitle="12345"
                avatar={<Avatar src={imgURL} role="presentation"/>}
            />
            <CardActions expander>
                <Button flat>Edit</Button>
                <Button flat>Remove</Button>
            </CardActions>
            <CardText expandable>
                <p>
                    {this.props.text}
                </p>
                <p>
                    Morbi elementum libero ac turpis mollis, vitae commodo justo vehicula. In
                    convallis nulla lorem, in tristique lorem scelerisque vitae. Integer non rhoncus
                    nunc. Aenean mollis dolor et ex rhoncus imperdiet. Aenean elit nisl, rutrum quis
                    mi vel, pharetra tempus nibh. Pellentesque cursus magna sit amet euismod congue.
                    Vivamus lorem mi, viverra sed aliquet in, convallis non sapien.
                </p>
                <p>
                    Integer ante arcu, ultricies eleifend nisl vitae, dapibus pellentesque ex. Aenean
                    turpis lorem, accumsan et tincidunt id, facilisis vel ante. Morbi turpis lacus,
                    posuere ut odio et, sagittis tincidunt ante. Morbi laoreet fermentum dolor, ac
                    eleifend ligula egestas maximus. Aenean vel leo tellus. Duis semper rutrum arcu
                    at fringilla. Proin tincidunt vestibulum purus eu placerat. Mauris nec porta nunc.
                    Proin pulvinar, lorem nec pharetra fermentum, lorem nunc vulputate felis, eu malesuada
                    libero nulla sit amet lectus. Quisque nec ultrices lectus. Maecenas in commodo velit.
                </p>
                <p>
                    Aenean bibendum nulla at velit tincidunt, faucibus scelerisque mi consectetur. Morbi
                    convallis nibh ac lacus pharetra, sed semper augue sollicitudin. Sed purus dui,
                    tincidunt ac nunc ut, vehicula sollicitudin tellus. Pellentesque vestibulum est non ornare
                    ultrices. Donec vehicula neque a sem posuere, ac ultrices dolor venenatis. Duis pretium,
                    justo quis ultrices egestas, ligula libero dignissim nibh, rutrum congue magna diam id
                    leo. Quisque nec est tempus, tristique massa vitae, vehicula lorem.
                </p>
            </CardText>
        </Card>
    );
    }
}

export default withRouter(TACard1);