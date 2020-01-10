import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity } from 'react-native';

class ToClick extends React.Component {
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>CHOISIR</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

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

});

export default ToClick