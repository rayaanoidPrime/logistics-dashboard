import { View, Text } from 'react-native';
import { CustomIcon } from './customDrawerIcon';
import styles from './styles';

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
                    alignSelf: 'center',
                    paddingVertical: 20,
                }}
            ></View>
        </View>
    );
};

export default DriverCard;
