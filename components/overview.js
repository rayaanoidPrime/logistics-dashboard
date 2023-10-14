import { Text, View } from 'react-native';
import styles from './styles';
import colours from './colours';
import { CustomDashboardIcon } from '../components/customDrawerIcon';

const OverviewCard = () => {
    return (
        <View style={styles.OverviewContainer}>
            <Text style={styles.title}>Overview</Text>
            <View style={styles.overviewCard}>
                <View style={styles.col}>
                    <Text style={styles.cardTitle}>New packages</Text>
                    <Text style={{ fontSize: 20, marginTop: 10, color: colours.french_gray['700'] }}>40</Text>
                </View>
                <View style={styles.cardIcon}>
                    <View
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 60,
                            width: 60,
                            borderRadius: 30,
                            backgroundColor: colours.bondi_blue['300'],
                            borderColor: colours.bondi_blue['400'],
                            borderWidth: 1,
                            opacity: 0.7,
                        }}
                    >
                        <CustomDashboardIcon imagePath={require('../assets/box.png')} />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default OverviewCard;
