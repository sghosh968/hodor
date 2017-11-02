import React, { Component } from 'react';
import { ScrollView, Text, Image, View, Alert } from 'react-native';
import { Images } from '../Themes';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import CookieManager from 'react-native-cookies';
var _ = require('lodash');


// Styles
import styles from './Styles/LaunchScreenStyles'

export default class EmailLogin extends Component {


  constructor() {
    super();
    this.state = {
      user: {
        email: null,
        password: null
        // email: "sghosh968@gmail.com",
        // password: "00000000"
      }
    };
  }

  mapFormInputToState(value, stateVariablePath) {
    _.set(this.state, stateVariablePath, value);
  }

  startLogin() {
    return fetch('https://hodor.dev/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          email:    this.state.user.email,
          password: this.state.user.password
        }
      })
    })
    .then((response) => {
      const { navigate } = this.props.navigation;
      if (response.status === 200) {
        navigate('DashboardScreen');
      } else {
        var errorResponse = JSON.parse(response._bodyInit);
        Alert.alert(
          'Error Logging in!',
          errorResponse.message,
          [
            {text: 'OK'},
          ],
          { cancelable: true }
        );
      }
    })
    .catch((error) => {
      console.error(error);
    });
  }

  render () {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text style={styles.sectionText}>
              Login with Email
            </Text>
            <FormLabel>Email</FormLabel>
            <FormInput onChangeText={(value) => this.mapFormInputToState(value, 'user.email')} />
            <FormLabel>Password</FormLabel>
            <FormInput onChangeText={(value) => this.mapFormInputToState(value, 'user.password')} />
            <Button
            raised
            icon={{name: 'keyboard-arrow-right'}}
            onPress={ () => this.startLogin() }
            title='Login' />
          </View>
        </ScrollView>
      </View>
    )
  }
}
