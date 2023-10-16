import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import styles from './styles';
import { CustomIcon } from './customDrawerIcon';
const CustomDropdown = ({
    items,
    selectedValue,
    onSelect,
    itemStyle = [],
    containerStyle = [],
    btnStyle = [],
    btntextStyle = [],
    itemTextStyle = [],
    iconWidth,
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <View style={{ alignSelf: 'center' }}>
            <TouchableOpacity style={[styles.dropdownButton, ...btnStyle]} onPress={toggleDropdown}>
                <View style={{}}>
                    <Text style={[styles.dropdownButtonText, ...btntextStyle]}>
                        {selectedValue}
                        <CustomIcon
                            style={[{ width: iconWidth, height: 16, tintColor: colours.slate_blue['600'] }]}
                            imagePath={require('../assets/drop.png')}
                        />
                    </Text>
                </View>
            </TouchableOpacity>
            {isDropdownOpen && (
                <View style={[styles.dropDownContentContainer, ...containerStyle]}>
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={[styles.dropdownItem, ...itemStyle]}
                                onPress={() => {
                                    onSelect(item);
                                    toggleDropdown();
                                }}
                            >
                                <Text style={[styles.dropDownItemText, ...itemTextStyle]}>{item.label}</Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}
        </View>
    );
};

export default CustomDropdown;
