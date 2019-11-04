import React from "react";
import {StyleSheet, View, Text, ScrollView, TextInput} from 'react-native';
import {w, h} from '../../../constants'
import CatalogItem from "../CatalogItem";
import { connect } from "react-redux";
import {addToCart} from '../../redux/cartScreen-reducer'

class CatalogScreen extends React.Component {

    onAddToCart = (e) => {
        console.log(e)
        this.props.addToCart(this.props.productsList)
    };


    renderList = () => {
        const { productsList,  addToCart} = this.props;
        return productsList.map (p =>
            <CatalogItem
                item={p}
                key={p.id}
                add={this.onAddToCart}
            />
        );
    };

    render() {
        console.log(this.props)
        return (
            <ScrollView >
                <View style={styles.container}>
                    {this.renderList()}
                </View>
            </ScrollView>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexShrink: 2,
        marginTop: 10,
    }
});

let mapStateToProps = (state) => {
    return {
        productsList: state.catalogScreenReducer.products
    }
};

let mapDispatchToProps = {
    addToCart,
}


export default connect(mapStateToProps,mapDispatchToProps)(CatalogScreen);
