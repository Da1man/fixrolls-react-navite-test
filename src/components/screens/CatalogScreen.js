import React from "react";
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {w, h} from '../../../constants'
import CatalogItem from "../CatalogItem";

class CatalogScreen extends React.Component {
    render() {
        return (
            <ScrollView >
                <View style={styles.container}>
                    <CatalogItem itemId={0} itemName={'Чикен Лава Ролл'} cost={125} imageSrc={'../assets/img/CHiken-Lava.jpg'}/>
                    <CatalogItem itemId={0} itemName={'Чикен Манго Ролл'} cost={150} imageSrc={'../assets/img/CHiken-Mango-Roll.jpg'}/>
                    <CatalogItem itemId={0} itemName={'Чикен Ролл'} cost={100} imageSrc={'../assets/img/CHiken-Roll.jpg'}/>
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

export default CatalogScreen;