import { StatusBar } from 'expo-status-bar';
import MainScreen from './components/MainScreen';
import styles from './styles/styles';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.appContainer}>     
      <StatusBar/>
      <MainScreen/>
    </SafeAreaView>
  );
}
