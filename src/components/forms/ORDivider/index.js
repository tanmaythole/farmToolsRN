import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../../constants/colors/colors'

const ORDivider = () => {
    return (
        <View style={styles.divider}>
            <View style={styles.hairline} />
            <Text style={styles.orText}>OR</Text>
            <View style={styles.hairline} />
        </View>
    )
}

export default ORDivider

const styles = StyleSheet.create({
    divider: {
        display: 'flex',
        flexDirection: 'row',
        paddingVertical: 42,
        alignItems: 'center'
    },
    hairline: {
        backgroundColor: colors.borderColor,
        height: 1,
        width: "45%"
    },
    orText: {
        width: "10%",
        backgroundColor: '#F3FFF0',
        borderRadius: 24,
        color: colors.primary,
        textAlign: 'center',
        paddingVertical: 4,
        fontSize: 12,
        lineHeight: 14
    }
})