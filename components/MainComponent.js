import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import { View } from 'react-native';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish : null
        };
    }
    onDishSelect = (dishId) => {
        if(this.state.selectedDish === dishId) {
            this.setState({selectedDish : null})
        }
        else {
            this.setState({selectedDish : dishId })
        }
    }
    render() { 
        return ( 
            <View>
            <Menu dishes = {this.state.dishes} onDishSelect = { this.onDishSelect }/>
            <Dishdetail dish = {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </View>
        );
    }
}

export default Main;