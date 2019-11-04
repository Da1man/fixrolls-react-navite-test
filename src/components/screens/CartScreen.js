import React from "react";
import {StyleSheet, View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {w, h} from '../../../constants'
import { connect } from "react-redux";
import CartItem from "../CartItem";
import {deleteFromCart} from "../../redux/cartScreen-reducer";








class CartScreen extends React.Component {


    render() {

        const { container } = styles

        let cartItemsList = this.props.cartItems.map (p => <CartItem id={p.id} itemName={p.name} cost={p.cost} imagePath={p.image} key={p.id}/>);

        return (
            <ScrollView>
                <View style={container}>
                    {cartItemsList}
                </View>
            </ScrollView>
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


let mapStateToProps = (state) => {
    return {
        cartItems: state.cartScreenReducer.cartItems
    }
};

let mapDispatchToProps = () => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);