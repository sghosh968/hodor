import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Button } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class Login extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text style={styles.sectionText}>
              Login
            </Text>
            <Button
              onPress={() => navigate('EmailLogin')}
              title="Login"
            />
            <Button
              onPress={() => navigate('MainLoginScreen')}
              title="Login with Google"
            />
            <Button
              onPress={() => navigate('MainLoginScreen')}
              title="Login with Facebook"
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}
