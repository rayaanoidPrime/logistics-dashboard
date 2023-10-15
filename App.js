import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import Dashboard from './screens/dashboard';
import MainContainer from './components/containers/mainContainer';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './components/routes/drawer';

export default function App() {
    return (
        <NavigationContainer>
            <MainContainer>
                <StatusBar style="light" />
                <DrawerNavigator />
            </MainContainer>
        </NavigationContainer>
    );
}
