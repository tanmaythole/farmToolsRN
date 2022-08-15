import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeStack from './HomeStack';
import colors from '../constants/colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View } from 'react-native';
import ChatStack from './ChatStack';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            activeTintColor: colors.primary,
            tabBarShowLabel: false,
            tabBarStyle: {
                height: 70,
                paddingLeft: 10,
                paddingRight: 10,
                elevation: 20,
                shadowColor: "#333"
            }
        }}
    >
        <Tab.Screen 
            name='HomeStack'
            component={HomeStack}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarIconSection}>
                        <Icon 
                            name={focused?'home':'home-outline'}
                            size={24}
                            style={focused?styles.active:styles.tabBarIcon}
                        />
                        <Text 
                            style={focused?styles.active:styles.tabBarIcon}
                        >
                            Home
                        </Text>
                    </View>
                )
            }}
        />
        <Tab.Screen 
            name='Search'
            component={HomeStack}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarIconSection}>
                        <Icon 
                            name='search'
                            size={24}
                            style={focused?styles.active:styles.tabBarIcon}
                        />
                        <Text 
                            style={focused?styles.active:styles.tabBarIcon}
                        >
                            Search
                        </Text>
                    </View>
                )
            }}
        />
        <Tab.Screen 
            name='Chat'
            component={ChatStack}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <View style={styles.tabBarIconSection}>
                        <Icon 
                            name={focused?'chatbox-ellipses':'chatbox-ellipses-outline'}
                            size={24}
                            style={focused?styles.active:styles.tabBarIcon}
                        />
                        <Text 
                            style={focused?styles.active:styles.tabBarIcon}
                        >
                            Chat
                        </Text>
                    </View>
                )
            }}
        />
        <Tab.Screen 
            name='Saved'
            component={ChatStack}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <View style={styles.tabBarIconSection}>
                        <Icon 
                            name={focused?'heart':'heart-outline'}
                            size={24}
                            style={focused?styles.active:styles.tabBarIcon}
                        />
                        <Text 
                            style={focused?styles.active:styles.tabBarIcon}
                        >
                            Saved
                        </Text>
                    </View>
                )
            }}
        />
        <Tab.Screen 
            name='Profile'
            component={ChatStack}
            options={{
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    <View style={styles.tabBarIconSection}>
                        <Icon 
                            name={focused?'person':'person-outline'}
                            size={24}
                            style={focused?styles.active:styles.tabBarIcon}
                        />
                        <Text 
                            style={focused?styles.active:styles.tabBarIcon}
                        >
                            Profile
                        </Text>
                    </View>
                )
            }}
        />
    </Tab.Navigator>
  )
}

export default Navigation;

const styles = StyleSheet.create({
    tabBarIconSection: {
        display: 'flex', 
        alignItems: 'center'
    },
    active: {
        color: colors.primary,
    },
    tabBarIcon: {
        color: colors.secondaryBlack
    }
})