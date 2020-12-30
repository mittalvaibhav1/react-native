import React from 'react';
import { View , FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

function Menu(props) {

    const renderMenuItem = ({ item }) => {
        return (
            <ListItem bottomDivider onPress = {() => props.onDishSelect(item.id)} >
                <Avatar source = { require('./images/uthappizza.png') }/>
                <ListItem.Content>
                    <ListItem.Title>{ item.name }</ListItem.Title>
                    <ListItem.Subtitle>{ item.description }</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>    
        );
    };
    return ( 
        <FlatList 
            data = {props.dishes}
            renderItem = {renderMenuItem}
            keyExtractor = {item => item.id.toString()}
        />
    );
}


export default Menu;