import { TouchableOpacity, View, Text } from 'react-native';

const StatusComponent = ({ btnColour, textColour, text }) => {
    return (
        <TouchableOpacity>
            <View style={{ borderRadius: 5, padding: 10, backgroundColor: btnColour, alignSelf: 'center', width: 80 }}>
                <Text style={{ color: textColour, textAlign: 'center', marginBottom: 1 }}>{text}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default StatusComponent;
