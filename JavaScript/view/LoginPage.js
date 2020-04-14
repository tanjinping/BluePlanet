import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {generalStyle} from '../assets/style/generalStyle';

class LoginPage extends Component {
    render() {
        return (
            <SafeAreaView style={generalStyle.safeAreaView}>
                <Text>LoginPage</Text>
            </SafeAreaView>
        );
    }
}

export default LoginPage;
