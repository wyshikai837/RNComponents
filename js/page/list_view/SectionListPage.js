import React, {Component} from 'react';
import {StyleSheet, SectionList, Text, View} from 'react-native';
import {pTd} from "../../Utils/SizeUtil";

const styles = StyleSheet.create({
    header: {
        fontSize: 20,
        height: pTd(80),
        backgroundColor: 'powderblue'
    },
    item: {
        fontSize: 20,
        height: pTd(80),
    },
    separator: {
        height: 1,
        backgroundColor: 'gray'
    }
});

var sections = [
    {key: 'A', data: [{key: '阿里巴巴'}, {key : '阿玛尼'}, {key: '阿迪达斯'}]},
    {key: 'B', data: [{key: '巴宝莉'}, {key : '百利'}, {key: '泊位年'}]},
    {key: 'C', data: [{key: 'CAT'}, {key : '卡罗拉'}, {key: '卡西欧'}]}
];

export default class SectionListPage extends Component {

    static navigationOptions = {
        title: 'SectionList'
    }

    _header = (a) => {
        return <Text style={styles.header}>{a.section.key}</Text>
    }

    _item= (b) => {
        return <Text style={styles.item}>{b.item.key}</Text>
    }

    render() {
        return (
            <SectionList
                renderSectionHeader={this._header}
                renderItem={this._item}
                ItemSeparatorComponent={() => <View style={styles.separator}></View>}
                sections={sections}
            />
        );
    }

}