import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import {w, h} from './constants';
import MainNavigation from "./src/components/MainNavigation";


class App extends React.Component {

    render() {
        return (
            <SafeAreaView style={{flex:1, backgroundColor: 'white'}}>
                <StatusBar backgroundColor={'#4299a1'} />
                <MainNavigation />
            </SafeAreaView>
        );
    };
}


export default App;
