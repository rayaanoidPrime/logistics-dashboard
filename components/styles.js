import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import { StatusBar } from 'react-native';
import colours from './colours';

export const statusBarHeight = StatusBar.currentHeight;
export const ScreenWidth = Dimensions.get('window').width;
export const ScreenHeight = Dimensions.get('window').height;
const calculatedPaddingTop = statusBarHeight + 5;

const styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        paddingTop: calculatedPaddingTop,
        backgroundColor: colours.oxford_blue['200'],
    },
    text: {
        color: '#FFFFFF',
    },
    drawerScrollView: {
        backgroundColor: colours.french_gray['100'],
    },
    drawerListItem: {
        backgroundColor: colours.oxford_blue['500'],
        color: '#FFFFFF',
    },
    shypLabel: {
        color: colours.slate_blue['700'],
        fontSize: 30,
        paddingBottom: 30,
    },
    tinyLogo: {
        width: 120,
        height: 50,
    },
    icon: {
        width: 30,
        height: 32,
    },
    dashIcon: {
        width: 40,
        height: 40,
    },
    dashboardContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: colours.oxford_blue['200'],
        alignItems: 'center',
        height: ScreenHeight,
    },
    dashboardItemsContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: colours.oxford_blue['500'],
        borderRadius: 20,
        width: 350,
        marginVertical: 15,
    },
    OverviewContainer: {
        flex: 1,
        paddingVertical: 20,
        maxHeight: ScreenHeight,
    },
    overviewCard: {
        flex: 1,
        flexDirection: 'row',
        maxWidthwidth: 350,
        maxHeight: 100,
        backgroundColor: colours.oxford_blue['500'],
        padding: 15,
        borderRadius: 20,
        marginVertical: 15,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 25,
        marginBottom: 10,
    },
    col: {
        flex: 1,
        paddingHorizontal: 5,
    },
    cardTitle: {
        color: colours.french_gray['400'],
    },
    cardIcon: {
        justifyContent: 'center',
        marginRight: 20,
    },
    dashItemTitle: {
        fontSize: 20,
        color: '#FFFFFF',
    },
    dropdownButton: {
        backgroundColor: colours.slate_blue['200'],
        padding: 5,
        borderRadius: 10,
        alignItems: 'center', // Horizontal centering
        justifyContent: 'center', // Vertical centering
        minWidth: 105,
    },
    dropdownButtonText: {
        color: colours.slate_blue['700'],
    },
    dropdownItem: {
        backgroundColor: colours.slate_blue['200'],
        padding: 5,
        alignItems: 'center', // Horizontal centering
        justifyContent: 'center', // Vertical centering
    },
    dropDownItemText: {
        color: colours.slate_blue['700'],
    },
    dropDownContentContainer: {
        justifyContent: 'center',
        borderRadius: 10,
        overflow: 'hidden',
        zIndex: 10,
    },
    trendContainer: {
        flex: 1,
        marginTop: 32,
        flexDirection: 'row',
        marginBottom: 16,
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    trendIconContainer: {
        width: 30,
        height: 30,
    },
    trendIcon: {
        width: 30,
        height: 30,
    },
    trendTextContainer: {
        flex: 1,
        flexDirection: 'column',
        alignSelf: 'center',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    trendType: {
        fontSize: 16,
        color: colours.slate_blue['700'], // Replace with your text color
    },
    trendValue: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFFFFF', // Replace with your text color
    },
    trendDuration: {
        fontSize: 14,
        color: colours.french_gray['400'], // Replace with your text color
    },
    dashIconSmall: {
        width: 20,
        height: 15,
        tintColor: colours.slate_blue['700'],
        alignSelf: 'center',
        marginLeft: 15,
    },
    cellStyle: {
        width: 100,
        alignItems: 'center',
    },
    rowStyle: {
        height: 80,
        backgroundColor: colours.oxford_blue['500'],
        flexDirection: 'row',
    },
    text: {
        color: colours.french_gray['600'],
        fontSize: 16,
    },
});

export default styles;
