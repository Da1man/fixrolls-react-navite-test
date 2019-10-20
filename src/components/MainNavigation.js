import React from "react";
import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import {w, h} from '../../constants'

import Icon from 'react-native-vector-icons/FontAwesome';

import CatalogScreen from "./screens/CatalogScreen";
import CartScreen from "./screens/CartScreen";



const TabNavigation = createMaterialTopTabNavigator (
    {
        CatalogScreen: {
            screen: CatalogScreen,
            navigationOptions: {
                tabBarLabel:'Каталог',
                tabBarIcon: ({tintColor}) => (<Icon name='th-large' size={25} color={tintColor}/>)
            }
        },
        CartScreen: {
            screen: CartScreen,
            navigationOptions: {
                tabBarLabel:'Корзина',
                tabBarIcon: ({tintColor}) => (<Icon name='shopping-cart' size={25} color={tintColor}/>)
            }
        },
    },
    {
        initialRouteName: 'CatalogScreen',
        tabBarPosition: "bottom",
        tabBarOptions: {
            showIcon: true,
            style: {
                backgroundColor: '#4299a1'
            },
            indicatorStyle: {
                height: 0,
            },
        }
    }
)


const MainNavigation = createAppContainer(TabNavigation);

export default MainNavigation;