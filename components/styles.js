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
        backgroundColor: colours.oxford_blue['500'],
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
        height: ScreenHeight,
        alignItems: 'center',
    },
    OverviewContainer: {
        flex: 1,
        padding: 20,
    },
    overviewCard: {
        flex: 1,
        flexDirection: 'row',
        width: 350,
        maxHeight: 100,
        backgroundColor: colours.oxford_blue['400'],
        padding: 15,
        borderRadius: 20,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 25,
        marginBottom: 10,
    },
    col: {
        flex: 1,
    },
    cardTitle: {
        color: colours.french_gray['400'],
    },
    cardIcon: {
        justifyContent: 'center',
        marginRight: 20,
    },
});

export default styles;
