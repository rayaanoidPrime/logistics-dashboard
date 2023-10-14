import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const CustomDrawerIcon = ({ imagePath }) => <Image source={imagePath} style={styles.icon} />;

export default CustomDrawerIcon;
