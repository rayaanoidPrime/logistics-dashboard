import React from 'react';
import { Text, View, FlatList } from 'react-native';
import styles, { ScreenWidth } from './styles';
import colours from './colours';
import { CustomDashboardIcon } from './customDrawerIcon';
import RevenueCard from './revenueCard';
import WeeklyOverviewCard from '../components/weeklyCard';
import DeliveriesCard from '../components/deliveriesCard';
import DriversCard from '../components/driversCard';

const dataForOverview = [
    {
        title: 'New Packages',
        value: '40',
        iconPath: require('../assets/box.png'),
        backgroundColor: colours.bondi_blue['200'],
        id: 1,
    },
    {
        title: 'In Transit',
        value: '40',
        iconPath: require('../assets/transit.png'),
        backgroundColor: colours.bistre['500'],
        id: 2,
    },
    {
        title: 'Delivered',
        value: '40',
        iconPath: require('../assets/delivered.png'),
        backgroundColor: colours.sgbus_green['100'],
        id: 3,
    },
];

const OverviewCard = () => {
    return (
        <FlatList
            data={dataForOverview}
            ListHeaderComponent={
                <View style={{ width: 350 }}>
                    <Text style={styles.title}>Overview</Text>
                </View>
            }
            renderItem={({ item }) => (
                <View style={styles.overviewCard}>
                    <View style={styles.col}>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text style={{ fontSize: 20, marginTop: 10, color: colours.french_gray['700'] }}>
                            {item.value}
                        </Text>
                    </View>
                    <View style={styles.cardIcon}>
                        <View
                            style={{
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: 60,
                                width: 60,
                                borderRadius: 30,
                                backgroundColor: item.backgroundColor,
                            }}
                        >
                            <CustomDashboardIcon imagePath={item.iconPath} />
                        </View>
                    </View>
                </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            ListFooterComponent={
                <View>
                    <RevenueCard />
                    <WeeklyOverviewCard />
                    <DeliveriesCard />
                    <DriversCard />
                </View>
            }
        />
    );
};

export default OverviewCard;
