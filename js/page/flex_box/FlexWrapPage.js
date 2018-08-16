import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {pTd} from '../../Utils/SizeUtil.js';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        fontSize: 20,
        padding: pTd(10)
    },
    nowrapStyle: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        backgroundColor: 'darkgray'
    },
    wrapStyle: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'darkgray',
    }

});

export default class FlexWrapPage extends Component {

    static navigationOptions = ({navigation}) => ({
        title: 'FlexWrap'
    });

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>nowrap</Text>
                <View style={styles.nowrapStyle}>
                    <View style={{height: pTd(50), width: pTd(50), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                    <View style={{height: pTd(50), width: pTd(150), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                    <View style={{height: pTd(50), width: pTd(250), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                    <View style={{height: pTd(50), width: pTd(150), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                    <View style={{height: pTd(50), width: pTd(100), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                </View>

                <Text style={styles.title}>wrap</Text>
                <View style={styles.wrapStyle}>
                    <View style={{height: pTd(50), width: pTd(50), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                    <View style={{height: pTd(50), width: pTd(150), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                    <View style={{height: pTd(50), width: pTd(250), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                    <View style={{height: pTd(50), width: pTd(150), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                    <View style={{height: pTd(50), width: pTd(100), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                </View>
            </View>
        );
    }
}