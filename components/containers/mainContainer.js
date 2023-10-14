import { View } from 'react-native';
import styles from '../styles';

const MainContainer = (props) => {
    return (
        <View {...props} style={styles.MainContainer}>
            {props.children}
        </View>
    );
};

export default MainContainer;
