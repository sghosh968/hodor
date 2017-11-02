import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import {Header} from 'react-native-elements';
import ReduxNavigation from '../Navigation/ReduxNavigation';
import { connect } from 'react-redux';
import StartupActions from '../Redux/StartupRedux';
import ReduxPersist from '../Config/ReduxPersist';
import Colors from '../Themes/Colors';
// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  componentDidMount () {
    // if redux persist is not active fire startup action
    if (!ReduxPersist.active) {
      // this.props.startup()
    }
  }

  render () {
    return (
      <View style={styles.applicationView}>
        <StatusBar barStyle='light-content' />
        <ReduxNavigation />
        <Header
          statusBarProps={{ barStyle: 'dark-content' }}
          leftComponent={{ icon: 'menu', color: Colors.white }}
          centerComponent={{ text: 'Hodor', style: { color: Colors.white, fontSize: 20 } }}
          backgroundColor={Colors.c4}
        />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component
const mapDispatchToProps = (dispatch) => ({
  startup: () => dispatch(StartupActions.startup())
})

export default connect(null, mapDispatchToProps)(RootContainer)
