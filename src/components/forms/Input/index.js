import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../../../constants/colors/colors';
import Icon from 'react-native-vector-icons/MaterialIcons'

const Input = (props) => {
    const {
        label,
        value,
        onChange,
        placeholder,
        style,
        leftIcon,
        rightWidget,
        onPressIn,
        keyboardType,
        returnKeyType,
        paddingBottom,
        secureTextEntry
    } = props;

    const [isFocused, setIsFocused] = useState(false);

    const toggleIsFocused = () => {
        setIsFocused(!isFocused);
    }

    return (
        <View style={{paddingBottom: paddingBottom}}>
            {label&&(
                <Text style={styles.label}>{label}</Text>
            )}
            <View style={
                [
                    styles.inputContainer, 
                    isFocused&&styles.activeInput
                ]
            }>
                <Icon 
                    name={leftIcon}
                    color={isFocused?colors.primary:colors.secondaryBlack}
                    size={22}
                />
                <TextInput 
                    placeholder={placeholder}
                    onPressIn={onPressIn}
                    placeholderTextColor={colors.secondaryBlack}
                    value={value}
                    onChangeText={onChange}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType?keyboardType:'default'}
                    returnKeyType={returnKeyType?returnKeyType:'default'}
                    onFocus={toggleIsFocused}
                    onBlur={toggleIsFocused}
                    style={
                        [
                            styles.input, 
                            rightWidget?{width: '84%'}: {width: '92%'}, 
                            style
                        ]
                    }
                />
                {rightWidget&&rightWidget}
            </View>
        </View>
    )
}

export default Input;

const styles = StyleSheet.create({
    label: {
        marginBottom: 8,
        color: colors.primaryBlack,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '400'
    },
    inputContainer: {
        width: "100%",
        height: 48,
        borderRadius: 24,
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        backgroundColor: colors.inputBg,
        borderColor: colors.borderColor
    },
    input: {
        fontSize: 16,
        width: '84%',
        color: colors.primaryBlack
    },
    activeInput: {
        borderColor: colors.primary,
        backgroundColor: colors.inputBgFocus
    }
});