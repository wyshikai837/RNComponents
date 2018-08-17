import React, {Component} from 'react';
import {StyleSheet, FlatList, Text, View} from 'react-native';
import {pTd} from '../../Utils/SizeUtil.js';

const styles = StyleSheet.create({
    headerAndFooterStyle: {
        fontSize: 20,
        padding: pTd(10),
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'lavenderblush'
    },
    emptyStyle: {
        height: pTd(500),
        fontSize: 20,
        padding: pTd(10),
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: 'lightsteelblue'
    },
    item1: {
        fontSize: 20,
        padding: pTd(10),
        height: pTd(80),
        color: 'springgreen'
    },
    item2: {
        fontSize: 20,
        padding: pTd(10),
        height: pTd(80),
        color: 'violet'
    }
});

export default class FlatListPage extends Component {
    static navigationOptions = {
        title: 'FlatList'
    }

    constructor(props) {
        super(props);

        this.state = {
            data: this._sourceData,
            refreshing: false
        };
    }

    _keyExtractor = (item, index) => index + '';

    _sourceData = [
        {name: 'name1'},
        {name: 'name2'},
        {name: 'name3'},
        {name: 'name4'},
        {name: 'name5'},
        {name: 'name6'},
        {name: 'name7'},
        {name: 'name8'},
        {name: 'name9'},
        {name: 'name10'}
    ];

    _newData = [
        {name: 'new1'},
        {name: 'new2'},
        {name: 'new3'}
    ]

    _header() {
        return <Text style={styles.headerAndFooterStyle}>I'm header...</Text>;
    }

    _footer() {
        return <Text style={styles.headerAndFooterStyle}>I'm footer...</Text>;
    }

    _divide() {
        return <View style={{height: 1, backgroundColor: 'skyblue'}}/>;
    }

    _emptyView() {
        return <Text style={styles.emptyStyle}>no data</Text>;
    }

    _itemClidked(index) {
        alert('点击了' + index);
    }

    _renderItem = ({item, index}) => {
        if (index % 2 == 0) {
            return (
                <Text style={styles.item1} onPress={this._itemClidked.bind(this, index)}>{item.name}</Text>
            );
        } else {
            return (
                <Text style={styles.item2} onPress={this._itemClidked.bind(this, index)}>{item.name}</Text>
            );
        }
    }

    render() {
        return (
            <FlatList
                data={this.state.data}
                renderItem={this._renderItem}

                keyExtractor={this._keyExtractor}
                ListHeaderComponent={this._header.bind(this)}
                ListFooterComponent={this._footer.bind(this)}
                ItemSeparatorComponent={this._divide.bind(this)}
                ListEmptyComponent={this._emptyView.bind(this)}

                // 下拉刷新
                refreshing={this.state.refreshing}
                onRefresh={() => {
                    this.setState({refreshing: true});
                    setTimeout(() => {
                        this.setState({
                            refreshing: false,
                            data: this._sourceData
                        });
                    }, 2000);
                }}

                // 上拉加载更多
                onEndReachedThreshold={0.3}
                onEndReached={({distanceFromEnd}) => (
                    setTimeout(() => {
                        this.setState({
                            data: this._sourceData.concat(this._newData)
                        })
                    }, 2000)
                )}

                //隐藏垂直状态条
                showsVerticalScrollIndicator={false}

                //如果设置为横向
                // horizontal={true}
                //隐藏水平状态条
                // showsHorizontalScrollIndicator={false}

                //使用 ref 可以获取到相应的组件
                ref={(flatList) => this._flatList = flatList}
            />
        );
    }

}