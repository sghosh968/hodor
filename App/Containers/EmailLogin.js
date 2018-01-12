import React, { Component } from 'react';
import { ScrollView, Text, Image, View, Alert } from 'react-native';
import { Images, Colors } from '../Themes';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import CookieManager from 'react-native-cookies';
import ApplicationStyles from '../Themes/ApplicationStyles';
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
          </View>
          <View style={styles.div} >
            <FormLabel
              labelStyle={ApplicationStyles.formLabel}
            >
              Email
            </FormLabel>
            <FormInput
            onChangeText={(value) => this.mapFormInputToState(value, 'user.email')}
            inputStyle={{color: Colors.c4}}
            />
          </View>
          <View style={styles.div} >
            <FormLabel
              labelStyle={{color: Colors.c4, fontSize: 16, fontWeight: '400'}}
            >
              Password
            </FormLabel>
            <FormInput
            onChangeText={(value) => this.mapFormInputToState(value, 'user.password')}
            inputStyle={{color: Colors.c4}}
            />
          </View>
          <View style={styles.div} >
            <Button
            icon={{name: 'sign-in', type: 'font-awesome', color: Colors.c3}}
            textStyle={{color: Colors.c2}}
            borderRadius={10}
            onPress={ () => this.startLogin() }
            title='Login' />
          </View>
        </ScrollView>
      </View>
    )
  }
}
