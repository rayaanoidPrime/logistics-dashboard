import { Text, View } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import { BarChart } from 'react-native-gifted-charts';
import { CustomIcon } from './customDrawerIcon';

const WeeklyCard = () => {
    const [selectedValue, setSelectedValue] = useState('This Month');
    const [dataKey, setDataKey] = useState(0);

    const barData = [
        { value: 250, label: 'M' },
        { value: 500, label: 'T' },
        { value: 745, label: 'W' },
        { value: 320, label: 'T' },
        { value: 600, label: 'F' },
        { value: 256, label: 'S' },
        { value: 300, label: 'S' },
    ];
    return (
        <View style={styles.dashboardItemsContainer}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.dashItemTitle}>Weekly Overview</Text>
                <View style={{ alignSelf: 'center', flexDirection: 'row' }}>
                    <Text style={styles.dropdownButtonText}>Expand</Text>
                    <CustomIcon imagePath={require('../assets/arrow.png')} />
                </View>
            </View>
            <View
                style={{
                    flex: 1,
                    alignSelf: 'center',
                    paddingVertical: 20,
                    marginRight: 30,
                }}
            >
                <BarChart
                    barWidth={20}
                    barBorderRadius={4}
                    noOfSections={3}
                    frontColor={colours.oxford_blue['700']}
                    data={barData}
                    yAxisThickness={0}
                    xAxisThickness={0}
                    rulesColor={colours.french_gray['400']}
                    rulesType="solid"
                    yAxisTextStyle={{ color: colours.french_gray['400'], fontSize: 16 }}
                    xAxisLabelTextStyle={{ color: colours.french_gray['400'], fontSize: 16 }}
                    spacing={10}
                />
            </View>
        </View>
    );
};

export default WeeklyCard;
