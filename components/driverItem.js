import { View, Text } from 'react-native';
import { CustomDashboardIcon, CustomIcon } from './customDrawerIcon';
import styles from './styles';

const DriverItem = ({ imgPath, name, msg, iconPath, iconStyle = [] }) => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', gap: 20, alignSelf: 'center' }}>
            <CustomDashboardIcon
                imagePath={imgPath}
                styl={[{ borderRadius: 25, alignSelf: 'center', height: 44, width: 44 }]}
            />
            <View style={{ alignSelf: 'center' }}>
                <Text style={styles.trendValue}>{name}</Text>
                <Text style={styles.trendDuration}>{msg}</Text>
            </View>
            <CustomIcon style={[{ marginLeft: 25, height: 25 }, ...iconStyle]} imagePath={iconPath} />
        </View>
    );
};
export default DriverItem;
