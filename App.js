import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import {w, h} from './constants';
import MainNavigation from "./src/components/MainNavigation";

import store from './src/store';

import {Provider} from "react-redux";



const App = () => {
        return (
            <Provider store={store}>
                <SafeAreaView style={{flex:1, backgroundColor: 'white'}}>
                    <StatusBar backgroundColor={'#4299a1'} />
                    <MainNavigation />
                </SafeAreaView>
            </Provider>

        );
    };


export default App;
