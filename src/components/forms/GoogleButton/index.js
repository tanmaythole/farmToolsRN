import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../Button'
import Google from '../../../assets/icons/google.svg';
import colors from '../../../constants/colors/colors';

const GoogleButton = () => {
    return (
        <Button 
            color={["#fff", "#fff"]}
            leftIcon={
                <Google />
            }
            label="Sign In With Google"
            labelColor={colors.primaryBlack}
        />
    )
}

export default GoogleButton

const styles = StyleSheet.create({})