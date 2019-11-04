import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import {w, h, mainColor} from '../../constants'

import Icon from 'react-native-vector-icons/FontAwesome';

const CartItem = (props) => {
    const {
        container, cartItemImage, cartItemDescriptionSection, cartItemName, cartItemLastSection, cartItemCostSection,
        cartItemCost, cartItemTrashSection,
    } = styles


        return (
            <View style={container}>
                <Image style={cartItemImage} source={{uri: props.imagePath}}/>
                <View style={cartItemDescriptionSection}>
                    <Text style={cartItemName}>{props.itemName}</Text>
                </View>
                <View style={cartItemLastSection}>
                    <View style={cartItemCostSection}>
                        <Text style={cartItemCost}>{props.cost} р.</Text>
                    </View>
                    <TouchableOpacity style={cartItemTrashSection}>
                        <Icon name='trash' size={25} color={'black'}/>
                    </TouchableOpacity>
                </View>
            </View>
        )
    };


const styles = StyleSheet.create({
    container: {
        width: w - 10,
        height: 130,
        marginBottom: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cartItemImage: {
        height: 120,
        width: 120,
    },
    cartItemDescriptionSection: {
        width: w - 10 - 120 - 100,
        height: '100%',
        justifyContent: 'center',
        paddingLeft: 10,
    },
    cartItemName: {
        fontSize: 26,
    },
    cartItemLastSection:{
        flex: 1,
        alignItems: 'flex-start',
    },
    cartItemCostSection: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartItemCost: {
        fontSize: 30,
        color: mainColor,
        fontWeight: 'bold',
    },
    cartItemTrashSection: {
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CartItem;