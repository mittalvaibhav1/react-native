import React from 'react';
import { Image } from 'react-native';
import { View , Text } from 'react-native';
import { Card } from 'react-native-elements';

const RenderDish = (props) => {
    const dish = props.dish;
    if(dish != null) {
        return (  
            <Card>
                <Card.title>{ dish.title }</Card.title>
                <Card.Divider />
                <Image source = { require('./images/uthappizza.png') } />
                <Text style = {{margin: 10}}>
                    {dish.description}
                </Text>
            </Card>
        );
    }
    else {
        return (
            <View></View>
        )
    }
}

export default RenderDish;