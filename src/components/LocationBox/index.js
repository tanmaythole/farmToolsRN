import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../constants/colors/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import globalStyles from '../../styles/GlobalStyles';

const LocationBox = () => {
    return (
        <View>
            <Text style={globalStyles.tagline}>Find your equipments in</Text>
            <View style={styles.locationBox}>
                <Icon 
                    name='location-on' 
                    size={20} 
                    color={colors.primary} 
                    style={styles.locationIcon}
                />
                <Text 
                    style={[globalStyles.heading, styles.location]}
                >
                    Current Location
                    <Icon 
                        name='keyboard-arrow-down'
                        size={16}
                    />
                </Text>
            </View>
        </View>
    )
}

export default LocationBox;

const styles = StyleSheet.create({
    locationBox: {
        paddingTop: 6,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        lineHeight: 26
    },
    locationIcon: {
        marginVertical: 3
    },
    location: {
        paddingHorizontal: 8,
    }
});