import React from "react";
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {w, h} from '../../../constants'
import CatalogItem from "../CatalogItem";
import { connect } from "react-redux";


class CatalogScreen extends React.Component {
    render() {

        let productsList = this.props.products.map (p => <CatalogItem id={p.id} itemName={p.name} cost={p.cost} imagePath={p.image} key={p.id}/>);

        return (
            <ScrollView >
                <View style={styles.container}>
                    {productsList}
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

function mapStateToProps(state){
    return {
        products: state.catalogScreenReducer.catalogScreen.products
    }
}

export default connect(mapStateToProps)(CatalogScreen);
