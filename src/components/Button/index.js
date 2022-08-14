import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../constants/colors/colors';

const Button = (props) => {
    const { label, onPress } = props;
    
    return (
        <TouchableOpacity onPress={onPress}>
            <LinearGradient 
                start={{x: 0, y: 0}} 
                end={{x: 1, y: 0}} 
                colors={[colors.primary, colors.secondary]}
                style={styles.button}
            >
                <Text
                    style={styles.text}
                >
                    {label}
                </Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    button: {
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        height: 50
    },
    text: {
        fontSize: 16,
        lineHeight: 24,
        color: '#fff'
    }
});