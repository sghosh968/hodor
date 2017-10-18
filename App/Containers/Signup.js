import React, { Component } from 'react';
import { ScrollView, Text, Image, View, Alert, DatePickerIOS } from 'react-native';
import { Images } from '../Themes';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import CookieManager from 'react-native-cookies';
import {parameterizeObjectProperties} from '../Helpers';
var _ = require('lodash');

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class Signup extends Component {


  constructor() {
    super();
    this.state = {
      user: {
        email: null,
        firstName: null,
        lastName: null,
        // gender: null,
        // dob: new Date(),
        password: null
        // email: "Test1@test.com",
        // firstName: "Test",
        // lastName: "Lname",
        // password: "00000000"
      }
    };
  }

  mapFormInputToState(value, stateVariablePath) {
    _.set(this.state, stateVariablePath, value);
  }

  startSignup() {
    console.log("State data", parameterizeObjectProperties(this.state.user));
    return fetch('https://hodor.dev/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: parameterizeObjectProperties(this.state.user)
      })
    })
    .then((response) => {
      debugger;
      const { navigate } = this.props.navigation;
      if (response.status === 200) {
        CookieManager.getAll()
        .then((res) => {
          console.log('CookieManager.getAll =>', res);
        });
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
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Text style={styles.sectionText}>
              Create Account
            </Text>
            <FormLabel>Email</FormLabel>
            <FormInput onChangeText={(value) => this.mapFormInputToState(value, 'user.email')} />
            <FormLabel>Password</FormLabel>
            <FormInput
            secureTextEntry={true}
            onChangeText={(value) => this.mapFormInputToState(value, 'user.password')} />
            <FormLabel>First Name</FormLabel>
            <FormInput onChangeText={(value) => this.mapFormInputToState(value, 'user.firstName')} />
            <FormLabel>Last Name</FormLabel>
            <FormInput onChangeText={(value) => this.mapFormInputToState(value, 'user.lastName')} />
            {
              // TODO add DOB field later
              // <FormLabel>Date of Birth</FormLabel>
              // <DatePickerIOS
              // date={this.state.formData.user.dob}
              // mode="date"
              // onDateChange={(value) => this.mapFormInputToState(value, 'formData.user.dob')} />
            }

            {
              // TODO Add gender field later
              // <FormLabel>Gender</FormLabel>
              // <FlatList
              //   data={[{key: 'a'}, {key: 'b'}]}
              //   renderItem={({item}) => <Text>{item.key}</Text>}
              // />
            }
            <Button
            raised
            icon={{name: 'keyboard-arrow-right'}}
            onPress={ () => this.startSignup() }
            title='Signup' />
          </View>
        </ScrollView>
      </View>
    )
  }
}
