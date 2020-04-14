import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {generalStyle} from '../assets/style/generalStyle';

class UserPage extends Component {
    render() {
        const {token} = this.props.state;
        return (
            <SafeAreaView style={generalStyle.safeAreaView}>
                <Text>UserPage</Text>
                <Text>{token}</Text>
            </SafeAreaView>
        );
    }
}

export default UserPage;
