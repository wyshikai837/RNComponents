import React, {Component} from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import {pTd} from "../../Utils/SizeUtil";

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

var dataArr = [
    {key: 'FlatList'},
    {key: 'SectionList'},
    {key: 'VirtualizedList'}
];

export default class ListViewPage extends Component {

    static navigationOptions = {
        title: 'ListView'
    };

    _onItemPressed(index) {
        this.props.navigation.navigate(dataArr[index].key);
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    data={dataArr}
                    renderItem={
                        ({item, index}) =>
                            <Text style={styles.item} onPress={this._onItemPressed.bind(this, index)}>{item.key}</Text>
                    }
                />
            </View>
        );
    }
}