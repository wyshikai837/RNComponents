import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class FlexWrapPage extends Component {

    static navigationOptions = ({navigation}) => ({
        title: 'FlexWrap'
    });

    render() {
        return (
            <View>
                <Text>nowrap</Text>
            </View>
        );
    }
}