import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {pTd} from '../../Utils/SizeUtil.js';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'column'
    },
    textItem: {
        width: pTd(150),
        height: pTd(50),
        margin: pTd(10),
        backgroundColor: 'powderblue',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    autoStyle: {
        alignSelf: 'auto'
    },
    flexStartStyle: {
        alignSelf: 'flex-start'
    },
    flexEndStyle: {
        alignSelf: 'flex-end'
    },
    centerStyle: {
        alignSelf: 'center'
    },
    stretchStyle: {
        height: pTd(50),
        margin: pTd(10),
        backgroundColor: 'powderblue',
        textAlign: 'center',
        textAlignVertical: 'center',
        alignSelf: 'stretch'
    },
    baseLineStyle: {
        alignSelf: 'baseline'
    }
});

export default class AlignSelfPage extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'AlignSelf'
    });

    render() {
        return (
            <View style={styles.container}>
                <Text style={[styles.textItem, styles.autoStyle]}>{'auto'}</Text>
                <Text style={[styles.textItem, styles.flexStartStyle]}>{'flex-start'}</Text>
                <Text style={[styles.textItem, styles.flexEndStyle]}>{'flex-end'}</Text>
                <Text style={[styles.textItem, styles.centerStyle]}>{'center'}</Text>
                <Text style={styles.stretchStyle}>{'stretch'}</Text>
                <Text style={[styles.textItem, styles.baseLineStyle]}>{'baseline'}</Text>
            </View>
        );
    }

}