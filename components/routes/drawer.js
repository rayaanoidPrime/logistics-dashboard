import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Linking } from 'react-native';
import Dashboard from '../../screens/dashboard';
import DeliveriesScreen from '../../screens/deliveriesScreen';
import DriversScreen from '../../screens/driversScreen';
import NotificationsScreen from '../../screens/notificationScreen';
import BranchesScreen from '../../screens/branchesScreen';
import styles from '../styles';
import colours from '../colours';
import { ShypLabel } from '../shypLabel';
import CustomDrawerIcon from '../customDrawerIcon';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem label={() => <ShypLabel />} onPress={() => Linking.openURL('https://www.shyp.co.in/')} />
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    backgroundColor: colours.oxford_blue['500'],
                    width: 300,
                },
                drawerLabelStyle: {
                    color: colours.french_gray['600'],
                },
            }}
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            initialRouteName="Dashboard"
        >
            <Drawer.Screen
                options={{
                    drawerIcon: () => (
                        <CustomDrawerIcon imagePath={require('../../assets/dashboard-svgrepo-com.png')} />
                    ),
                }}
                name="Dashboard"
                component={Dashboard}
            />
            <Drawer.Screen
                options={{
                    drawerIcon: () => <CustomDrawerIcon imagePath={require('../../assets/notification.png')} />,
                }}
                name="Notifications"
                component={NotificationsScreen}
            />
            <Drawer.Screen
                options={{
                    drawerIcon: () => <CustomDrawerIcon imagePath={require('../../assets/scooter.png')} />,
                }}
                name="Deliveries"
                component={DeliveriesScreen}
            />
            <Drawer.Screen
                options={{
                    drawerIcon: () => <CustomDrawerIcon imagePath={require('../../assets/id-card.png')} />,
                }}
                name="Drivers"
                component={DriversScreen}
            />
            <Drawer.Screen
                options={{
                    drawerIcon: () => <CustomDrawerIcon imagePath={require('../../assets/buildings.png')} />,
                }}
                name="Branches"
                component={BranchesScreen}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
