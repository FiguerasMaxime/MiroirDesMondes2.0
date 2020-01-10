import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';

class ArrowClick extends React.Component {
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.arrow}>
                    <Image source={require("../assets/arrow.png")} />
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({

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

export default ArrowClick