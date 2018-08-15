import React, {Component} from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import {pTd} from '../Utils/SizeUtil.js'

var dataArr = [{key: 'BaseComponent'}, {key: 'CustomComponent'}];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: pTd(20)
    },
    item: {
        padding: pTd(10),
        fontSize: 20,
        height: pTd(80)
    }
});

export default class MainPage extends Component {

    static navigationOptions = {
        title: 'MainPage',
    };

    _onItemPressed(index) {
        // alert('pressed ' + index);
        this.props.navigation.navigate(dataArr[index].key);
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={dataArr}
                    renderItem={
                        ({item, index}) =>
                            // <Text style={styles.item} onPress={navigate('BaseComponentPage')}>{item.key}</Text>
                           <Text style={styles.item} onPress={this._onItemPressed.bind(this, index)}>{item.key}</Text>
                        // <Text style={styles.item} onPress={() => {this._onItemPressed(index)}}>{item.key}</Text>
                    }/>
            </View>
        );
    }
}