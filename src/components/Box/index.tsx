import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import BoxSub from "../BoxSub";
const Box: React.FC = () => {
    return (
        <View>
            <View style={styles.box}>
                <BoxSub />
            </View>
            <View style={styles.box}>
                <Text style={styles.text}>Box 2</Text>
            </View>
            <View style={styles.box}>
                <Text style={styles.text}>Box 3</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    box: {
        minHeight: 150, // Mengubah height menjadi minHeight
        marginBottom: 20,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 15,
        marginTop: 30,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default Box;
