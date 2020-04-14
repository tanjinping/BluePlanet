import React, {Component} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {generalStyle} from '../assets/style/generalStyle';

class TaskCategoryPage extends Component {
    render() {
        return (
            <SafeAreaView style={generalStyle.safeAreaView}>
                <Text>TaskCategoryPage</Text>
            </SafeAreaView>
        );
    }
}

export default TaskCategoryPage;
