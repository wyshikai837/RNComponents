import React, {Component} from 'react'
import {ScrollView, StyleSheet, Text, View} from 'react-native'
import {pTd} from "../../Utils/SizeUtil";


const styles = StyleSheet.create({
    container: {
        padding: pTd(10),
        height: pTd(300)
    },
    title: {
        fontSize: 20
    },
    flexStartStyle: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'darkgray',
        alignContent: 'flex-start'
    },
    centerStyle: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'darkgray',
        alignContent: 'center'
    },
    flexEndStyle: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'darkgray',
        alignContent: 'flex-end'
    },
    stretchStyle: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'darkgray',
        alignContent: 'stretch'
    },
    spaceBetweenStyle: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'darkgray',
        alignContent: 'space-between'
    },
    spaceAroundStyle: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: 'darkgray',
        alignContent: 'space-around'
    }
});

export default class AlignContentPage extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'AlignContent'
    });

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>{'flex-start'}</Text>
                    <View style={styles.flexStartStyle}>
                        <View style={{height: pTd(50), width: pTd(50), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                        <View style={{height: pTd(50), width: pTd(150), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                        <View style={{height: pTd(50), width: pTd(250), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                        <View style={{height: pTd(50), width: pTd(150), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                        <View style={{height: pTd(50), width: pTd(100), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                    </View>
                </View>

                <View style={styles.container}>
                    <Text style={styles.title}>{'center'}</Text>
                    <View style={styles.centerStyle}>
                        <View style={{height: pTd(50), width: pTd(50), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                        <View style={{height: pTd(50), width: pTd(150), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                        <View style={{height: pTd(50), width: pTd(250), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                        <View style={{height: pTd(50), width: pTd(150), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                        <View style={{height: pTd(50), width: pTd(100), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                    </View>
                </View>

                <View style={styles.container}>
                    <Text style={styles.title}>{'flex-end'}</Text>
                    <View style={styles.flexEndStyle}>
                        <View style={{height: pTd(50), width: pTd(50), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                        <View style={{height: pTd(50), width: pTd(150), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                        <View style={{height: pTd(50), width: pTd(250), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                        <View style={{height: pTd(50), width: pTd(150), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                        <View style={{height: pTd(50), width: pTd(100), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                    </View>
                </View>

                <View style={styles.container}>
                    <Text style={styles.title}>{'stretch'}</Text>
                    <View style={styles.stretchStyle}>
                        <View style={{height: pTd(50), width: pTd(50), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                        <View style={{height: pTd(50), width: pTd(150), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                        <View style={{width: pTd(250), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                        <View style={{width: pTd(150), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                        <View style={{width: pTd(100), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                    </View>
                </View>

                <View style={styles.container}>
                    <Text style={styles.title}>{'space-between'}</Text>
                    <View style={styles.spaceBetweenStyle}>
                        <View style={{height: pTd(50), width: pTd(50), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                        <View style={{height: pTd(50), width: pTd(150), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                        <View style={{height: pTd(50), width: pTd(250), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                        <View style={{height: pTd(50), width: pTd(150), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                        <View style={{height: pTd(50), width: pTd(100), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                    </View>
                </View>

                <View style={styles.container}>
                    <Text style={styles.title}>{'space-around'}</Text>
                    <View style={styles.spaceAroundStyle}>
                        <View style={{height: pTd(50), width: pTd(50), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                        <View style={{height: pTd(50), width: pTd(150), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                        <View style={{height: pTd(50), width: pTd(250), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                        <View style={{height: pTd(50), width: pTd(150), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                        <View style={{height: pTd(50), width: pTd(100), backgroundColor: 'powderblue', margin: pTd(10)}}/>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
