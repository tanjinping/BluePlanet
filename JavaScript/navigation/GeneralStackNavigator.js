/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import TaskCategoryPage from '../view/TaskCategoryPage';
import BottomTabNavigator from './BottomTabNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import {connect} from 'react-redux';

const Stack = createStackNavigator();

const GeneralStackNavigator: () => React$Node = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator}/>
                <Stack.Screen name="AuthStackNavigator" component={AuthStackNavigator}/>
                <Stack.Screen name="TaskCategoryPage" component={TaskCategoryPage}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default connect()(GeneralStackNavigator);
