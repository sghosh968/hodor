import { StackNavigator } from 'react-navigation';
import LaunchScreen from '../Containers/LaunchScreen';
import Login from '../Containers/Login';
import EmailLogin from '../Containers/EmailLogin';
import Dashboard from '../Containers/Dashboard';
import Signup from '../Containers/Signup';
import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  MainLoginScreen: { screen: Login },
  EmailLoginScreen: { screen: EmailLogin },
  DashboardScreen: { screen: Dashboard },
  SignupScreen: { screen: Signup }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'SignupScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
