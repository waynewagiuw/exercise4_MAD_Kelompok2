import React from "react";
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

interface InputProps extends TextInputProps {
    placeholder?: string;
}

const Input: React.FC<InputProps> = (props) => {
    return (
        <TextInput
            placeholder={props.placeholder}
            style={styles.input}
            keyboardType={props.keyboardType}
            {...props}
        />
    );
}

const styles = StyleSheet.create({
    input: {
        height: 45,
        marginBottom: -12,
        borderColor: "gray",
        borderWidth: 1,
        padding: 8,
        borderRadius: 15,
        width: '100%',
        fontSize: 14,
    }
})

export default Input;
