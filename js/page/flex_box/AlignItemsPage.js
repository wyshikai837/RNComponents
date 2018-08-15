import React, {Component} from 'react'
import {ScrollView, StyleSheet, Text, View} from 'react-native'
import {pTd} from "../../Utils/SizeUtil";


const styles = StyleSheet.create({
    container: {
        padding: pTd(10),
        flex: 1,
        width: pTd(300)
    },
    title: {
        fontSize: 20
    },
    item1: {
        width: pTd(150),
        height:pTd(150),
        backgroundColor: 'powderblue'
    },
    item2: {
        width: pTd(150),
        height:pTd(150),
        backgroundColor: 'skyblue'
    },
    item3: {
        width: pTd(150),
        height:pTd(150),
        backgroundColor: 'steelblue'
    }
});

export default class AlignItemsPage extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'AlignItems'
    });

    render() {
        return (
            <ScrollView horizontal={true}>
                <View style={styles.container}>
                    <Text style={styles.title}>{'flex-start'}</Text>
                    <View style={{flex: 1, flexDirection: 'column', alignItems: 'flex-start'}}>
                        <View style={styles.item1}/>
                        <View style={styles.item2}/>
                        <View style={styles.item3}/>
                    </View>
                </View>

                <View style={styles.container}>
                    <Text style={styles.title}>{'center'}</Text>
                    <View style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                        <View style={styles.item1}/>
                        <View style={styles.item2}/>
                        <View style={styles.item3}/>
                    </View>
                </View>

                <View style={styles.container}>
                    <Text style={styles.title}>{'flex-end'}</Text>
                    <View style={{flex: 1, flexDirection: 'column', alignItems: 'flex-end'}}>
                        <View style={styles.item1}/>
                        <View style={styles.item2}/>
                        <View style={styles.item3}/>
                    </View>
                </View>

                <View style={styles.container}>
                    <Text style={styles.title}>{'stretch'}</Text>
                    <View style={{flex: 1, flexDirection: 'column', alignItems: 'stretch'}}>
                        <View style={{width: pTd(150), height:pTd(150), backgroundColor: 'powderblue'}}/>
                        <View style={{height:pTd(150), backgroundColor: 'skyblue'}}/>
                        <View style={{height:pTd(150), backgroundColor: 'steelblue'}}/>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
