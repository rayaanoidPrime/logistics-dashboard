import { View, Text } from 'react-native';
import { CustomIcon } from './customDrawerIcon';
import styles from './styles';
import DriverItem from './driverItem';

const DriverCard = () => {
    return (
        <View style={styles.dashboardItemsContainer}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.dashItemTitle}>Drivers</Text>
                <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                    <Text style={styles.dropdownButtonText}>Show all</Text>
                    <CustomIcon imagePath={require('../assets/arrow.png')} />
                </View>
            </View>
            <View
                style={{
                    flex: 1,
                    paddingTop: 20,
                    gap: 20,
                }}
            >
                <DriverItem
                    name={'Ajala O.'}
                    msg={'3 packages being delivered'}
                    imgPath={require('../assets/driv.jpg')}
                    iconPath={require('../assets/pin.png')}
                />
                <DriverItem
                    name={'Salilu K.'}
                    msg={'2 packages being delivered'}
                    imgPath={require('../assets/driv.jpg')}
                    iconPath={require('../assets/pin.png')}
                />
                <DriverItem
                    name={'Tayo L.'}
                    msg={'4 packages being delivered'}
                    imgPath={require('../assets/driv.jpg')}
                    iconPath={require('../assets/pin.png')}
                />
            </View>
        </View>
    );
};

export default DriverCard;
