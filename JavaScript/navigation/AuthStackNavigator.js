import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import RegisterPage from '../view/RegisterPage';
import LoginPage from '../view/LoginPage';

const Stack = createStackNavigator();

class AuthStackNavigator extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="RegisterPage" component={RegisterPage}/>
                <Stack.Screen name="LoginPage" component={LoginPage}/>
            </Stack.Navigator>
        );
    }
}

export default AuthStackNavigator;
