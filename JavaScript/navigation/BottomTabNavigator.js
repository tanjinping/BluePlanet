import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React, {Component} from 'react';
import HomePage from '../view/HomePage';
import UserPage from '../view/UserPage';
import Route from '../utils/Route';
import {connect} from 'react-redux';

const Tab = createMaterialBottomTabNavigator();

class BottomTabNavigator extends Component {
    render() {
        console.log(this.props);
        Route.navigation = this.props.navigation;
        return (
            <Tab.Navigator>
                <Tab.Screen name="HomePage" component={connect((state) => ({state}))(HomePage)}/>
                <Tab.Screen name="UserPage" component={connect((state) => ({state}))(UserPage)}/>
            </Tab.Navigator>
        );
    }
}

export default BottomTabNavigator;
