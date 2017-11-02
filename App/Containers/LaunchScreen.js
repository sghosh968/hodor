import React, { Component } from 'react';
import { ScrollView, Text, Image, View } from 'react-native';
import { Images } from '../Themes';
import { Button } from 'react-native-elements';

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render () {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.mainContainer}>
        <ScrollView style={styles.container}>
          <View style={styles.section} >
            <Text style={styles.sectionText}>
              Hodor App
            </Text>
            <Button
              onPress={() => navigate('MainLoginScreen')}
              title="Login"
            />

          </View>

        </ScrollView>
      </View>
    )
  }
}
