import React, {Component} from 'react'
import {StyleSheet, ScrollView, View, Text} from 'react-native'
import {pTd} from '../../Utils/SizeUtil.js'

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
        width: pTd(80),
        height: pTd(80),
        backgroundColor: 'powderblue'
    },
    item2: {
        width: pTd(80),
        height: pTd(80),
        backgroundColor: 'skyblue'
    },
    item3: {
        width: pTd(80),
        height: pTd(80),
        backgroundColor: 'steelblue'
    }
});

export default class JustifyContentPage extends Component {
    static navigationOptions = ({navigation}) => ({
        title: 'JustifyContent'
    });

    render() {
        return (
            <ScrollView horizontal={true}>
                <View style={styles.container}>
                    <Text style={styles.title}>{'flex-start'}</Text>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-start'}}>
                        <View style={styles.item1}/>
                        <View style={styles.item2}/>
                        <View style={styles.item3}/>
                    </View>
                </View>

                <View style={styles.container}>
                    <Text style={styles.title}>{'center'}</Text>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                        <View style={styles.item1}/>
                        <View style={styles.item2}/>
                        <View style={styles.item3}/>
                    </View>
                </View>

                <View style={styles.container}>
                    <Text style={styles.title}>{'flex-end'}</Text>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'flex-end'}}>
                        <View style={styles.item1}/>
                        <View style={styles.item2}/>
                        <View style={styles.item3}/>
                    </View>
                </View>

                <View style={styles.container}>
                    <Text style={styles.title}>{'space-around'}</Text>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around'}}>
                        <View style={styles.item1}/>
                        <View style={styles.item2}/>
                        <View style={styles.item3}/>
                    </View>
                </View>

                <View style={styles.container}>
                    <Text style={styles.title}>{'space-between'}</Text>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-between'}}>
                        <View style={styles.item1}/>
                        <View style={styles.item2}/>
                        <View style={styles.item3}/>
                    </View>
                </View>

                <View style={styles.container}>
                    <Text style={styles.title}>{'space-evenly'}</Text>
                    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-evenly'}}>
                        <View style={styles.item1}/>
                        <View style={styles.item2}/>
                        <View style={styles.item3}/>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
