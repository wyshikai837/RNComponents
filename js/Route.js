import {createStackNavigator} from 'react-navigation';
import MainPage from './page/MainPage.js';
import BaseComponentPage from './page/BaseComponentPage';
import FlexBoxPage from './page/flex_box/FlexBoxPage.js';
import JustifyContentPage from './page/flex_box/JustifyContentPage';
import AlignItemsPage from './page/flex_box/AlignItemsPage.js';
import FlexWrapPage from './page/flex_box/FlexWrapPage.js';

const RouteStack = createStackNavigator(
    {
        MainPage: {
            screen: MainPage
        },
        BaseComponent: {
            screen: BaseComponentPage
        },
        FlexBoxPage: {
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
        }
    },
    {
        initialRouteName: 'BaseComponent'
    });

export default RouteStack;