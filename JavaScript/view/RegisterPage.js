import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {generalStyle} from '../assets/style/generalStyle';

class RegisterPage extends Component {
    render() {
        return (
            <SafeAreaView style={generalStyle.safeAreaView}>
                <Text>RegisterPage</Text>
            </SafeAreaView>
        );
    }
}

export default RegisterPage;
