import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { View } from "react-native";

const DropdownMenu = ({ selectedName, setSelectedName, dropdownOptions }) => {
    console.log(selectedName);
    return (
        <View>
            <Picker selectedValue={selectedName} onValueChange={itemValue => setSelectedName(itemValue)}>
                <Picker.Item label="Select an option..." value={null} />
                {dropdownOptions.map(option => (
                    <Picker.Item key={option.value} label={option.label} value={option.value} />
                ))}
            </Picker>
        </View>
    );
};

export default DropdownMenu;
