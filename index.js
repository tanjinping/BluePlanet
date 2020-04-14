/**
 * @format
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import GeneralStackNavigator from './javaScript/navigation/GeneralStackNavigator';
import {createStore} from 'redux';
import reducer from './JavaScript/redux/reducers';
import middleware from './JavaScript/redux/middleware';
import {Provider} from 'react-redux';

export const store = createStore(reducer, middleware);

class AppContainer extends Component {
    render() {
        return (
            <Provider store={store}>
                <GeneralStackNavigator/>
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => AppContainer);
