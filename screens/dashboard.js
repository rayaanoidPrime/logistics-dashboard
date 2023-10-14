import { View } from 'react-native';
import styles from '../components/styles';
import OverviewCard from '../components/overview';

const Dashboard = () => {
    return (
        <View style={styles.dashboardContainer}>
            <OverviewCard />
        </View>
    );
};

export default Dashboard;
