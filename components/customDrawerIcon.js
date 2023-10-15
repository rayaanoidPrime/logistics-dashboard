import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

export const CustomDrawerIcon = ({ imagePath }) => <Image source={imagePath} style={styles.icon} />;
export const CustomDashboardIcon = ({ imagePath }) => <Image source={imagePath} style={styles.dashIcon} />;
export const CustomIcon = ({ imagePath }) => <Image source={imagePath} style={styles.dashIconSmall} />;
