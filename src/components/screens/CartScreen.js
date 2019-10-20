import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import {w, h} from '../../../constants'

class CartScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>CartScreen</Text>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CartScreen;