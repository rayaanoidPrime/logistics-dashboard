import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles'; // Import your styles

const TrendComponent = ({ type, value, duration }) => {
    // Define icons for 'Up' and 'Down'
    const icons = {
        Up: require('../assets/up.png'),
        Down: require('../assets/down.png'),
    };

    return (
        <View style={styles.trendContainer}>
            <View style={styles.trendTextContainer}>
                <View style={styles.trendIconContainer}>
                    <Image source={icons[type]} style={styles.trendIcon} />
                </View>
                <Text style={styles.trendValue}>{value}</Text>
                <Text style={styles.trendDuration}>{duration}</Text>
            </View>
        </View>
    );
};

export default TrendComponent;
