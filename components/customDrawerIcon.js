import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

export const CustomDrawerIcon = ({ imagePath }) => <Image source={imagePath} style={styles.icon} />;
export const CustomDashboardIcon = ({ imagePath, styl = [] }) => (
    <Image source={imagePath} style={[styles.dashIcon, ...styl]} />
);
export const CustomIcon = ({ imagePath, style = [] }) => (
    <Image source={imagePath} style={[styles.dashIconSmall, ...style]} />
);
