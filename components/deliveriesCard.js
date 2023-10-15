import { ScrollView, Text, View } from 'react-native';
import styles from './styles';
import { CustomIcon } from './customDrawerIcon';
import { Table, Row, Cell, TableWrapper, TouchableOpacity } from 'react-native-reanimated-table';
import colours from './colours';
import StatusComponent from './statusComponent';

const DeliveriesCard = () => {
    const tableHead = ['Destination', 'Driver', 'Delivery ID', 'ETA', 'Status'];
    const tableData = [
        ['Abuja-Lagos', 'Ajalo O.', 'LD1321F', '10:05 AM', 'Ongoing'],
        ['Lagos-Oyo', 'Salillu K.', 'LD13HK9', '11:15 Am', 'Ongoing'],
        ['Oyo-Abuja', 'Tayo L.', 'LD245GH', '12:05 PM', 'Delayed'],
    ];

    return (
        <View style={styles.dashboardItemsContainer}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.dashItemTitle}>Deliveries</Text>
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
            >
                <ScrollView horizontal={true}>
                    <Table borderStyle={{ borderWidth: 0 }}>
                        <Row
                            data={tableHead}
                            textStyle={{ color: colours.french_gray['400'], alignSelf: 'center' }}
                            style={{
                                height: 60,
                                backgroundColor: colours.oxford_blue['500'],
                                borderBottomColor: colours.french_gray['200'],
                                borderBottomWidth: 1,
                            }}
                            widthArr={[100, 100, 100, 100, 100]}
                        />
                        {tableData.map((rowData, index) => {
                            return (
                                <TableWrapper key={index} style={styles.rowStyle}>
                                    {rowData.map((cellData, cellIndex) => {
                                        return (
                                            <Cell
                                                key={cellIndex}
                                                data={
                                                    cellIndex == 4 && (index == 0 || index == 1) ? (
                                                        <StatusComponent
                                                            btnColour={colours.bistre['500']}
                                                            textColour={colours.bistre['700']}
                                                            text={'Ongoing'}
                                                        />
                                                    ) : cellIndex == 4 && index == 2 ? (
                                                        <StatusComponent
                                                            btnColour={colours.rusty_red['100']}
                                                            textColour={colours.rusty_red['600']}
                                                            text={'Delayed'}
                                                        />
                                                    ) : (
                                                        cellData
                                                    )
                                                }
                                                textStyle={styles.text}
                                                style={styles.cellStyle}
                                            />
                                        );
                                    })}
                                </TableWrapper>
                            );
                        })}
                    </Table>
                </ScrollView>
            </View>
        </View>
    );
};

export default DeliveriesCard;
