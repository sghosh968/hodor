import { StackNavigator } from 'react-navigation';
import LaunchScreen from '../Containers/LaunchScreen';
import Login from '../Containers/Login';
import EmailLogin from '../Containers/EmailLogin';
import DashboardComponent from '../Containers/Dashboard';
import Signup from '../Containers/Signup';
import styles from './Styles/NavigationStyles';

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  MainLoginScreen: { screen: Login },
  EmailLoginScreen: { screen: EmailLogin },
  DashboardScreen: { screen: DashboardComponent },
  SignupScreen: { screen: Signup }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'DashboardScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
