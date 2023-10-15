import { View } from 'react-native';
import styles from '../components/styles';
import OverviewCard from '../components/overviewCard';
import RevenueCard from '../components/revenueCard';

const Dashboard = () => {
    return (
        <View style={styles.dashboardContainer}>
            <OverviewCard />
        </View>
    );
};

export default Dashboard;
