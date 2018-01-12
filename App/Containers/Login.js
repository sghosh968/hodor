import React, { Component } from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import { Images, Colors } from '../Themes';
import { Button } from 'react-native-elements';


// Styles
import styles from './Styles/LaunchScreenStyles'

export default class Login extends Component {
  render () {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.section} >
            <Text style={styles.sectionText}>
              Login
            </Text>
          </View>
          <View style={styles.div} >
            <Button
              onPress={() => navigate('EmailLoginScreen')}
              title="Login with email"
              icon={{name: 'envelope', type: 'font-awesome', color: Colors.c3}}
              textStyle={{color: Colors.c2}}
              borderRadius={10}
            />
          </View>
          <View style={styles.div} >
            <Button
              onPress={() => console.log('MainLoginScreen')}
              title="Login with Google"
              icon={{name: 'google', type: 'font-awesome', color: Colors.c3}}
              textStyle={{color: Colors.c2}}
              borderRadius={10}
            />
          </View>
          <View style={styles.div} >
            <Button
              onPress={() => console.log('MainLoginScreen')}
              title="Login with Facebook"
              icon={{name: 'facebook-square', type: 'font-awesome', color: Colors.c3}}
              textStyle={{color: Colors.c2}}
              borderRadius={10}
            />
          </View>
        </ScrollView>
      </View>
    )
  }
}
