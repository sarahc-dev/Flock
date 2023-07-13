import RNPickerSelect from "react-native-picker-select";
import { View } from "react-native";

const DropdownMenu = ({ setSelectedName, dropdownOptions }) => {
    return (
        <View style={{ backgroundColor: 'white', borderRadius: 5, padding: 8 }}>
            <RNPickerSelect placeholder={{ label: "Select your name...", value: null }} items={dropdownOptions} onValueChange={value => setSelectedName(value)} style={{fontSize: 20}} />
        </View>
    );
};

export default DropdownMenu;
