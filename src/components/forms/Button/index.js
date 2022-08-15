import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../constants/colors/colors';

const Button = (props) => {
    const { 
        label, 
        onPress,
        style,
        disabled,
        color,
        leftIcon,
        labelColor
    } = props;
    
    return (
        <TouchableOpacity onPress={onPress} style={style} disabled={disabled}>
            <LinearGradient 
                start={{x: 0, y: 0}} 
                end={{x: 1, y: 0}} 
                colors={color?color:[colors.primary, colors.secondary]}
                style={[styles.button, disabled&&styles.btnDisabled]}
            >
                {leftIcon&&(
                    <View style={styles.leftIcon}>
                        {leftIcon}
                    </View>
                )}
                <Text
                    style={[styles.text, {color: labelColor}]}
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
    },
    btnDisabled: {
        opacity: 0.6
    },
    leftIcon: {
        left: 16,
        position: 'absolute',

    }
});