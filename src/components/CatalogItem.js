import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import {w, h, mainColor} from '../../constants'

const CatalogItem = (props) => {
    const {container, itemWrapper, imageWrapper, productImage, textWrapper, itemName, buttonWrapper, costTextWrapper, costText, buttonBuy, buttonBuyText, line } = styles;
    const { id, name, cost, image } = props.item;

        return (
            <View style={container}>
                <View style={itemWrapper}>
                    <TouchableOpacity style={imageWrapper}>
                        <Image style={productImage} source={{uri: image}} />
                    </TouchableOpacity>
                    <View style={textWrapper}>
                        <View>
                            <Text style={itemName}>{name}</Text>
                        </View>
                        <View style={buttonWrapper}>
                            <View style={costTextWrapper}>
                                <Text style={costText}>{cost} руб.</Text>
                            </View>
                            <TouchableOpacity style={buttonBuy} onPress={props.add}>
                                <Text style={buttonBuyText}>ДОБАВИТЬ</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={line}>

                    </View>
                </View>
            </View>
        )
    };


const styles = StyleSheet.create({
    container: {
    },
    itemWrapper: {
        width: w - 10,
        height: 'auto',
    },
    imageWrapper: {

    },
    productImage: {
        width: '100%',
        height: w * 0.73,
        resizeMode: 'contain'
    },
    textWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemName: {
        fontSize: 26,
        marginBottom: 30,
    },
    buttonWrapper: {
        flex: 1,
        flexDirection: 'row',
        width: w,
        justifyContent: 'space-around',
        marginBottom: 30,
    },
    costTextWrapper: {
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    costText: {
        fontSize: 30,
        color: mainColor,
        fontWeight: 'bold',
    }
    ,
    buttonBuy: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 40,
        borderColor: mainColor,
        borderWidth: 1,
        padding: 5,
    },
    buttonBuyText: {
        fontSize: 20,
    },
    line: {
        alignSelf: 'center',
        width: w / 1.5,
        borderBottomColor: mainColor,
        borderBottomWidth: 1,
    }
});

export default CatalogItem;