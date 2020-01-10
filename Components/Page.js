import React from 'react';
import {Text, Button, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import ToClick from './ToClick';
import ArrowClick from './ArrowClick';

class Page extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ToClick/>
                <ArrowClick/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    button: {
        paddingVertical: 7,
        paddingHorizontal: 15,
        backgroundColor: 'transparent',
        borderRadius: 35,
        borderColor: '#fff',
        borderWidth: 2,
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    arrow: {
        width: 50,
        height: 50,
        backgroundColor: '#40407A',
        borderRadius: 35,
        borderWidth: 2,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Page