import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../../constants/colors/colors';
import { useNavigation } from '@react-navigation/native';

const Header = (props) => {
    const { titleText, rightWidget, children } = props;
    let navigation = useNavigation();

    const handleBack = () => {
        navigation.goBack()
    }

    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity
                onPress={handleBack}
            >
                <Icon 
                    name='arrow-back-ios'
                    size={20}
                    color={colors.primaryBlack}
                />
            </TouchableOpacity>
            {titleText&&(
                <Text 
                    style={styles.titleText}
                >
                    {titleText}
                </Text>
            )}
            {children}
            {rightWidget&&(
                <View style={styles.rightWidget}>
                    {rightWidget}
                </View>
            )}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        height: 56,
        lineHeight: 48,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%"
    },
    titleText: {
        color: colors.primaryBlack,
        fontSize: 20,
        fontWeight: '600',
        paddingHorizontal: 16
    },
    rightWidget: {
        right: 16,
        position: 'absolute'
    }
})