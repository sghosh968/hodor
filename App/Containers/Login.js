import React, { Component } from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import { Images } from '../Themes';
import { Button } from 'react-native-elements';


// Styles
import styles from './Styles/LaunchScreenStyles'

export default class Login extends Component {
  render () {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text style={styles.sectionText}>
              Login
            </Text>
            <Button
              onPress={() => navigate('EmailLoginScreen')}
              title="Login with email"
            />
            <Button
              onPress={() => console.log('MainLoginScreen')}
              title="Login with Google"
            />
            <Button
              onPress={() => console.log('MainLoginScreen')}
              title="Login with Facebook"
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}
