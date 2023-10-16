import { View, TouchableOpacity } from 'react-native';
import colours from './colours';
import { Input, Icon } from 'react-native-elements';
import { useState, useRef } from 'react';
import CustomDropdown from './dropDownMenu';

const MyHeader = ({ style = [] }) => {
    const searchRef = useRef(null);
    const [searchText, setSearchText] = useState('');
    const [selectedArea, setSelectedArea] = useState('Lagos');
    const [selectedDept, setSelectedDept] = useState('Department 1');

    const handleSearchIconPress = () => {
        searchRef.current.clear();
        searchRef.current.blur();
    };
    const itemsArea = [
        { label: 'Lagos', value: 'Lagos' },
        { label: 'Kolkata', value: 'Kolkata' },
        { label: 'Delhi', value: 'Delhi' },
    ];
    const itemsDept = [
        { label: 'Department 1', value: 'Department 1', id: 0 },
        { label: 'Department 2', value: 'Department 2', id: 1 },
        { label: 'Department 3', value: 'Department 3', id: 2 },
    ];

    return (
        <View
            style={[
                { backgroundColor: colours.oxford_blue['200'], height: 50, paddingTop: 10, paddingHorizontal: 20 },
                ...style,
            ]}
        >
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <Input
                    ref={searchRef}
                    placeholder="search..."
                    value={searchText}
                    onChangeText={setSearchText}
                    inputContainerStyle={{
                        alignSelf: 'stretch',
                        height: 40,
                        backgroundColor: colours.oxford_blue['300'],
                        borderRadius: 18,
                        borderBottomWidth: 0,
                    }}
                    leftIcon={
                        <TouchableOpacity onPress={handleSearchIconPress}>
                            <Icon type="material" name="search" color="#FFFFFF" size={24} />
                        </TouchableOpacity>
                    }
                    rightIcon={
                        <View style={{ flex: 1, flexDirection: 'row', gap: 10 }}>
                            <CustomDropdown
                                items={itemsArea}
                                selectedValue={selectedArea}
                                onSelect={({ _, value, id }) => {
                                    setSelectedArea(value);
                                }}
                                btnStyle={[{ minWidth: 60, backgroundColor: colours.oxford_blue['500'] }]}
                                containerStyle={[
                                    {
                                        height: 100,
                                        width: 80,
                                        backgroundColor: colours.oxford_blue['500'],
                                        position: 'absolute',
                                    },
                                ]}
                                itemStyle={[{ backgroundColor: colours.oxford_blue['500'] }]}
                                itemTextStyle={[{ color: colours.slate_blue['600'] }]}
                                btntextStyle={[{ color: colours.slate_blue['600'] }]}
                                iconWidth={10}
                            />
                            <CustomDropdown
                                items={itemsDept}
                                selectedValue={selectedDept}
                                onSelect={({ _, value, id }) => {
                                    setSelectedDept(value);
                                }}
                                btnStyle={[{ minWidth: 60, backgroundColor: colours.oxford_blue['500'] }]}
                                containerStyle={[
                                    { minWidth: 80, backgroundColor: colours.oxford_blue['500'], position: 'absolute' },
                                ]}
                                itemStyle={[{ backgroundColor: colours.oxford_blue['500'] }]}
                                itemTextStyle={[{ color: colours.slate_blue['600'] }]}
                                btntextStyle={[{ color: colours.slate_blue['600'] }]}
                                iconWidth={10}
                            />
                        </View>
                    }
                    inputStyle={{ color: '#FFFFFF' }}
                />
            </View>
        </View>
    );
};

export default MyHeader;
