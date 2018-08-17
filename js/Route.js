import {createStackNavigator} from 'react-navigation';
import MainPage from './page/MainPage.js';
import BaseComponentPage from './page/BaseComponentPage';
import FlexBoxPage from './page/flex_box/FlexBoxPage.js';
import JustifyContentPage from './page/flex_box/JustifyContentPage';
import AlignItemsPage from './page/flex_box/AlignItemsPage.js';
import FlexWrapPage from './page/flex_box/FlexWrapPage.js';
import AlignContentPage from './page/flex_box/AlignContentPage';
import AlignSelfPage from './page/flex_box/AlignSelfPage.js';
import ListViewPage from './page/list_view/ListViewPage.js';
import FlatListPage from './page/list_view/FlatListPage.js';
import SectionListPage from './page/list_view/SectionListPage.js';

const RouteStack = createStackNavigator(
    {
        MainPage: {
            screen: MainPage
        },
        BaseComponent: {
            screen: BaseComponentPage
        },
        FlexBox: {
            screen: FlexBoxPage
        },
        JustifyContent: {
            screen: JustifyContentPage
        },
        AlignItems: {
            screen: AlignItemsPage
        },
        FlexWrap: {
            screen: FlexWrapPage
        },
        AlignContent: {
            screen: AlignContentPage
        },
        AlignSelf: {
            screen: AlignSelfPage
        },
        ListView: {
            screen: ListViewPage
        },
        FlatList: {
            screen: FlatListPage
        },
        SectionList: {
            screen: SectionListPage
        }
    },
    {
        initialRouteName: 'BaseComponent'
    });

export default RouteStack;