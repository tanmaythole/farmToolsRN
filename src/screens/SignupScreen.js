import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native'
import React, { useState } from 'react'
import globalStyles from '../styles/GlobalStyles'
import Header from '../components/Header'
import LinearGradient from 'react-native-linear-gradient'
import Input from '../components/forms/Input'
import Button from '../components/forms/Button'
import ORDivider from '../components/forms/ORDivider'
import GoogleButton from '../components/forms/GoogleButton'
import colors from '../constants/colors/colors'
import { useNavigation } from '@react-navigation/native'

const SignupScreen = () => {
  let navigation = useNavigation();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    phone_num: ""
  });

  const onChange = (name, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    // TO DO: submit the user signup form
  } 

  return (
    <LinearGradient colors={['#fff', '#d0ffc4']}>
      <View style={globalStyles.container}>
        <Header />
        <View style={styles.pageInfoText}>
          <Text style={globalStyles.heading}>
            Let's explore together!
          </Text>
          <Text style={globalStyles.tagline}>
            Create your Placoo account to explore your dream place to live across the whole world!
          </Text>
        </View>

        <View style={styles.form}>
          <Input 
            label="Username"
            leftIcon="person"
            paddingBottom={18}
            placeholder="Enter your email"
            keyboardType="email-address"
            returnKeyType="next"
            onChange={(val) => onChange('username', val)}
          />
          <Input 
            label="Password"
            leftIcon="lock"
            paddingBottom={18}
            placeholder="Insert your password here"
            secureTextEntry={true}
            onChange={(val) => onChange('password', val)}
            returnKeyType="next"
          />
          <Input 
            label="Phone Number"
            leftIcon="phone"
            placeholder="Enter your phone number"
            keyboardType="phone-pad"
            onChange={(val) => onChange('phone_num', val)}
            returnKeyType="go"
          />
          <Button 
            label="Create Account"
            style={styles.button}
            onPress={handleSubmit}
            disabled={formData.username.length===0 || formData.password.length===0 || formData.phone_num.length===0}
          />
        </View>

        <ORDivider />

        <GoogleButton />

        <View style={styles.bottomTextContainer}>
          <Text style={styles.bottomText}>
            Already have an account? {' '}
            <Text 
              style={styles.link}
              onPress={() => navigation.navigate('Login')}
            >
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </LinearGradient>
  )
}

export default SignupScreen

const styles = StyleSheet.create({
  pageInfoText: {
    paddingTop: 16
  },
  form: {
    marginTop: 40,
    justifyContent: 'space-between'
  },
  button: {
    paddingTop: 28
  },
  bottomTextContainer: {
    bottom: 25,
    position: 'absolute',
    width: '100%'
  },
  bottomText: {
    textAlign: 'center',
    color: colors.primaryBlack
  },
  link: {
    color: colors.primary, 
    textDecorationColor: colors.primary, 
    textDecorationLine: "underline",
    fontStyle: 'italic'
  }
});