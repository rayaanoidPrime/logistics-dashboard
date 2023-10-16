import { View, Text, Image } from 'react-native';
import styles from './styles';

export const ShypLabel = () => {
    return (
        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', gap: 15 }}>
            <Image style={styles.tinyLogo} source={require('../assets/icon-2.png')} />
        </View>
    );
};
