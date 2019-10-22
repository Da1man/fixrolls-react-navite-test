import React from "react";
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {w, h} from '../../../constants'
import { connect } from "react-redux";

class CartScreen extends React.Component {


    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity >
                    <Text style={{fontSize: 30}}>Increase</Text>
                </TouchableOpacity>
                <Text>{this.props.counter}</Text>
                <TouchableOpacity >
                    <Text style={{fontSize: 30}}>Decreace</Text>
                </TouchableOpacity>
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

function mapStateToProps(state){
    return {
        counter: state.cartScreenReducer.counter
    }
}
export default connect(mapStateToProps)(CartScreen);