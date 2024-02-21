import React from "react";
import { View, Text, StyleSheet } from 'react-native';

interface SubTitleProps {
    title: string;
}

const SubTitle: React.FC<SubTitleProps> = (props) => {
    return (
        <View>
            <Text style={styles.subtext}>{props.title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    subtext: {
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 5,
        marginTop: 35,
        color: '#000000',
    },
});

export default SubTitle;
