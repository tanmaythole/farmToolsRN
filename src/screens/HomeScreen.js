import { StyleSheet, View } from 'react-native'
import React from 'react'
import LocationBox from '../components/LocationBox';
import globalStyles from '../styles/GlobalStyles';
import Input from '../components/Input';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
    return (
        <View style={globalStyles.container}>
            <LinearGradient colors={['#fff', '#d0ffc4']}>
                <View style={styles.container}>
                    <LocationBox />
                    <View style={styles.searchBox}>
                        <Input 
                            leftIcon="search"
                            placeholder="Search..."
                            keyboardType="search"
                            returnKeyType='search'
                        />
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        margin: 16,
        minHeight: "100%"
    },
    searchBox: {
        marginVertical: 24
    }
})