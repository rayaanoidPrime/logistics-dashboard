import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { Linking, View, TouchableOpacity, Text } from 'react-native';
import Dashboard from '../../screens/dashboard';
import DeliveriesScreen from '../../screens/deliveriesScreen';
import DriversScreen from '../../screens/driversScreen';
import NotificationsScreen from '../../screens/notificationScreen';
import BranchesScreen from '../../screens/branchesScreen';
import colours from '../colours';
import { ShypLabel } from '../shypLabel';
import { CustomDrawerIcon } from '../customDrawerIcon';
import MyHeader from '../myHeader';
import DriverItem from '../driverItem';

const Drawer = createDrawerNavigator();

const CustomFooter = () => {
    return (
        <View style={{ borderTopWidth: 1, borderTopColor: colours.french_gray['400'], padding: 20, height: 100 }}>
            <DriverItem
                name={'Obalota John'}
                msg={'Manager'}
                imgPath={require('../../assets/driv.jpg')}
                iconPath={require('../../assets/log.png')}
                iconStyle={[{ width: 40, tintColor: colours.auburn['500'] }]}
            />
        </View>
    );
};

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItem label={() => <ShypLabel />} onPress={() => Linking.openURL('https://www.shyp.co.in/')} />
            <DrawerItemList {...props} />
            <View
                style={{
                    padding: 20,
                    alignSelf: 'center',
                    minheight: 50,
                    minwidth: 70,
                    backgroundColor: colours.tropical_indigo['500'],
                    borderRadius: 10,
                    marginTop: 220,
                }}
            >
                <Text style={{ color: '#FFFFFF' }}>New Delivery</Text>
            </View>
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
                header: ({ navigation, route, options, layout }) => {
                    return <MyHeader style={options.headerStyle} />;
                },
            }}
            drawerContent={(props) => (
                <View style={{ flex: 1 }}>
                    <CustomDrawerContent {...props} />
                    <CustomFooter />
                </View>
            )}
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
