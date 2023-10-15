import { Text, View } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import CustomDropdown from './dropDownMenu';
import colours from './colours';
import { LineChart } from 'react-native-gifted-charts';
import TrendComponent from './trendcomponent';

const RevenueCard = () => {
    const [selectedValue, setSelectedValue] = useState('Today');
    const [dataKey, setDataKey] = useState(0);

    const items = [
        { label: 'Today', value: 'Today', id: 0 },
        { label: 'This Month', value: 'This Month', id: 1 },
        { label: 'This Year', value: 'This Year', id: 2 },
    ];
    const data = [
        [{ value: 15 }, { value: 30 }, { value: 26 }, { value: 40 }],
        [{ value: 10 }, { value: 5 }, { value: 50 }, { value: 40 }],
        [{ value: 1 }, { value: 5 }, { value: 20 }, { value: 35 }],
    ];
    return (
        <View style={styles.dashboardItemsContainer}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.dashItemTitle}>Revenue</Text>
                <CustomDropdown
                    items={items}
                    selectedValue={selectedValue}
                    onSelect={({ _, value, id }) => {
                        setSelectedValue(value);
                        setDataKey(id);
                    }}
                />
            </View>
            <View
                style={{
                    flex: 1,
                    alignSelf: 'center',
                }}
            >
                <LineChart
                    areaChart
                    curved={true}
                    hideDataPoints
                    data={data[dataKey]}
                    startFillColor={colours.oxford_blue['700']}
                    endFillColor={colours.oxford_blue['500']}
                    yAxisThickness={0}
                    noOfSections={2}
                    xAxisThickness={0}
                    spacing={60}
                    rulesColor={colours.french_gray['400']}
                    rulesType="solid"
                    yAxisTextStyle={{ color: colours.french_gray['400'], fontSize: 16 }}
                    isAnimated
                    animationDuration={600}
                    color={colours.french_gray['600']}
                />
            </View>
            <View
                style={{ flex: 1, flexDirection: 'row', alignSelf: 'center', justifyContent: 'center', marginTop: 10 }}
            >
                <TrendComponent type={'Up'} value={'$1,250'} duration={'Today'} />
                <TrendComponent type={'Down'} value={'$60,000'} duration={'This Month'} />
                <TrendComponent type={'Up'} value={'$540,000'} duration={'This Year'} />
            </View>
        </View>
    );
};

export default RevenueCard;
