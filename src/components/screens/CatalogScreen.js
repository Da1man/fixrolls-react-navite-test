import React from "react";
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {w, h} from '../../../constants'
import CatalogItem from "../CatalogItem";
import { connect } from "react-redux";

let store = {
    catalogScreen: {
        products: [
            {id: 0, name:'Ясай Чиз Ролл', cost: 125, image:'https://fixrolls.ru/wp-content/uploads/2019/03/YAsaj-CHiz-Roll.jpg' },
            {id: 1, name:'Чираши MIX Ролл', cost: 150, image:'https://fixrolls.ru/wp-content/uploads/2019/03/CHirashi-MIX.jpg' },
            {id: 2, name:'Чикен Ролл', cost: 100, image:'https://fixrolls.ru/wp-content/uploads/2019/03/CHiken-Roll.jpg' },
            {id: 3, name:'Чикен Манго Ролл', cost: 200, image:'https://fixrolls.ru/wp-content/uploads/2019/03/CHiken-Mango-Roll.jpg' },
            {id: 4, name:'Чиз Ролл', cost: 175, image:'https://fixrolls.ru/wp-content/uploads/2019/03/CHiz-Roll.jpg' },
            {id: 5, name:'Цезарь Темпура Ролл', cost: 195, image:'https://fixrolls.ru/wp-content/uploads/2019/03/TSezar-Tempura-Roll.jpg' },
        ]
    }
};

let productsList = store.catalogScreen.products.map (p => <CatalogItem id={p.id} itemName={p.name} cost={p.cost} imagePath={p.image} key={p.id}/>);

class CatalogScreen extends React.Component {

    render() {
        console.log(this.props);
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
        products: state.catalogScreen.products
    }
}

export default connect()(CatalogScreen);
